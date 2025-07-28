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
  const { id, title, timing, description, icon } = req.body;

  if (!title || !description || !icon) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  let result;
  if (id) {
    // UPDATE existing service
    const { data, error } = await supabase
      .from("services")
      .update({ title, timing, description, icon })
      .eq("id", id);

    if (error) return res.status(500).json({ error: error.message });
    result = data;
  } else {
    // INSERT new service
    const { data, error } = await supabase
      .from("services")
      .insert([{ title, timing, description, icon }]);

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
  res.status(error ? 500 : 200).json(error ? { error } : data);
});

app.post("/events", requireAuth, async (req, res) => {
  const { id, image_url, title, date, time, address, description } = req.body;
  if (id) {
    const { data, error } = await supabase
      .from("events")
      .update({ image_url, title, date, time, address, description })
      .eq("id", id);
    if (error) return res.status(500).json({ error: error.message });
  } else {
    const { data, error } = await supabase
      .from("events")
      .insert({ image_url, title, date, time, address, description });
    if (error) return res.status(500).json({ error: error.message });
  }
  res.json({ success: true });
});

app.delete("/events/:id", requireAuth, async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from("events").delete().eq("id", id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ success: true });
});

// Upload image endpoint
app.post("/upload", requireAuth, upload.single("file"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  const BUCKET = "events"; // EXACTLY your bucket name

  const filePath = `events/${Date.now()}_${req.file.originalname}`;
  const { data: uploadData, error: storageErr } = await supabase.storage
    .from(BUCKET) // Make sure "your-bucket" is the correct bucket name in Supabase Storage
    .upload(filePath, req.file.buffer, { contentType: req.file.mimetype });

  if (storageErr) return res.status(500).json({ error: storageErr.message });

  // Get the public URL of the uploaded image
  const { data: publicUrlData } = supabase.storage
    .from("your-bucket")
    .getPublicUrl(filePath);

  if (!publicUrlData || !publicUrlData.publicUrl) {
    return res
      .status(500)
      .json({ error: "Could not get public URL for the uploaded image." });
  }

  res.json({ imageUrl: publicUrlData.publicUrl }); // Return the public URL
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
