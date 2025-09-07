// Load env vars before anything else
import "dotenv/config";
import express from "express";
import cors from "cors";
import multer from "multer";
import { createClient } from "@supabase/supabase-js";

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Ensure Supabase credentials are set
const { SUPABASE_URL, SUPABASE_KEY } = process.env;
if (!SUPABASE_URL || !SUPABASE_KEY) {
  process.exit(1);
}

// Initialize Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Multer setup: use memory storage for file buffer
const memoryStorage = multer.memoryStorage();
const upload = multer({ storage: memoryStorage });

// Auth middleware
const requireAuth = async (req, res, next) => {
  const token = req.headers.authorization?.split("Bearer ")[1];
  if (!token) return res.status(401).json({ error: "Missing token" });

  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data?.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  req.user = data.user;
  next(); // ✅ This must be called after success
};

// Join Us section routes
app.get("/joinus", async (req, res) => {
  const { data, error } = await supabase
    .from("joinus") // or the correct table for join-us info
    .select("address, timing")
    .limit(1);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  // data[0] may be undefined, so return empty defaults
  res.json(data[0] || { address: "", timing: "" });
});

app.post("/joinus", requireAuth, async (req, res) => {
  const { address, timing } = req.body;
  // Assuming a single entry for joinus info, upsert with a fixed ID
  const { data, error } = await supabase
    .from("joinus")
    .upsert({ id: 1, address, timing }); //
  if (error) return res.status(500).json({ error: error.message });
  res.json({ success: true });
});

app.delete("/joinus/:id", requireAuth, async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from("joinus").delete().eq("id", id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ success: true });
});

//*****  Services routes******
// GET all services
app.get("/services", async (req, res) => {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .order("title");

  res.status(error ? 500 : 200).json(error ? { error } : data);
});
// POST: Create or Update a service
app.post("/services", requireAuth, async (req, res) => {
  console.log("Received POST body:", req.body);
  const { id, title, timing, description, icon, sdate } = req.body;

  if (!title || !description || !icon) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  let result;
  if (id) {
    // UPDATE existing service
    const { data, error } = await supabase
      .from("services")
      .update({ title, timing, description, icon, sdate })
      .eq("id", id);

    if (error) return res.status(500).json({ error: error.message });
    result = data;
  } else {
    // INSERT new service
    const { data, error } = await supabase
      .from("services")
      .insert([{ title, timing, description, icon, sdate }]);

    if (error) return res.status(500).json({ error: error.message });
    result = data;
  }

  res.json({ success: true, data: result });
});

// DELETE a service
app.delete("/services/:id", requireAuth, async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({ error: "Service ID is required." });

  const { error } = await supabase.from("services").delete().eq("id", id);

  if (error) return res.status(500).json({ error: error.message });

  res.json({ success: true });
});

// Events routes
app.get("/events", async (req, res) => {
  const { data, error } = await supabase.from("events").select();
  console.log("DATA:", data);
  console.log("ERROR:", error);
  res.status(error ? 500 : 200).json(error ? { error } : data);
});

app.post("/events", requireAuth, async (req, res) => {
  const { id, image_url, title, edate, time, address, description } = req.body;
  if (id) {
    const { data, error } = await supabase
      .from("events")
      .update({ image_url, title, edate, time, address, description })
      .eq("id", id);
    if (error) return res.status(500).json({ error: error.message });
  } else {
    const { data, error } = await supabase
      .from("events")
      .insert({ image_url, title, edate, time, address, description });
    if (error) return res.status(500).json({ error: error.message });
  }
  res.json({ success: true });
});
//delete events
app.delete("/events/:id", async (req, res) => {
  const { id } = req.params;

  console.log("Deleting ID:", id);

  const { data, error } = await supabase.from("events").delete().eq("id", id);

  if (error) {
    console.error("Delete error:", error);
    return res.status(401).json({ error: error.message });
  }

  res.json({ success: true, deleted: data });
});

// Upload image endpoint
app.post("/upload", requireAuth, upload.single("file"), async (req, res) => {
  try {
    // 1. Check if file is attached
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // 2. Define bucket name (ensure this matches exactly in Supabase dashboard)
    const BUCKET = "events"; // Correct: matches your Supabase bucket

    // 3. Construct a unique file path
    const timestamp = Date.now();
    const filePath = `${BUCKET}/${timestamp}_${req.file.originalname}`;

    // 4. Upload the file
    const { data: uploadData, error: storageErr } = await supabase.storage
      .from(BUCKET)
      .upload(filePath, req.file.buffer, {
        contentType: req.file.mimetype,
        upsert: true, // Optional: overwrites if file exists
      });

    if (storageErr) {
      console.error("Upload error:", storageErr.message);
      return res.status(500).json({ error: storageErr.message });
    }

    // 5. Get the public URL of the uploaded file
    const { data: publicUrlData, error: publicErr } = supabase.storage
      .from(BUCKET)
      .getPublicUrl(filePath);

    if (publicErr || !publicUrlData?.publicUrl) {
      return res.status(500).json({
        error: "Could not get public URL for the uploaded image.",
      });
    }

    // 6. Respond with the public URL
    res.status(200).json({ imageUrl: publicUrlData.publicUrl });
  } catch (err) {
    console.error("Unexpected error in /upload:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

// Login endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) return res.status(401).json({ error: error.message });
  res.json({ session: data.session, user: data.user });
});

// Start server
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
