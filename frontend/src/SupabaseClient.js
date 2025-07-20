import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Env vars missing:", {
    supabaseUrl,
    supabaseAnonKey,
  });
  throw new Error("Missing VITE_SUPABASE_* environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
