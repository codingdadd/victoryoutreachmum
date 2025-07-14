import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Upload endpoint
const storage = multer({ storage: multer.memoryStorage() });
const requireAuth = async (req, res, next) => {
  const token = req.headers.authorization?.split('Bearer ')[1];
  if (!token) return res.status(401).json({ error: 'Missing token' });

  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data?.user) return res.status(401).json({ error: 'Unauthorized' });

  req.user = data.user;
  next();
};

app.post('/upload', requireAuth, storage.single('file'), async (req, res) => {
  const file = req.file;

  const { data, error } = await supabase.storage
    .from('uploads')
    .upload(`images/${Date.now()}-${file.originalname}`, file.buffer, {
      contentType: file.mimetype,
    });

  if (error) return res.status(500).json({ error });
  res.json({ path: data.path });
});

app.post('/update', requireAuth, async (req, res) => {
  const { title, description, date } = req.body;
  const { data, error } = await supabase.from('events').insert([{ title, description, date }]);
  if (error) return res.status(500).json({ error });
  res.json({ data });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return res.status(401).json({ error: error.message });
  res.json({ session: data.session, user: data.user });
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
