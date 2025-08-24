// src/supabase.js
import { createClient } from '@supabase/supabase-js';

// Read environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a single Supabase client instance
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// Optional helper for public bucket images
export const getPublicImageUrl = (fileName) =>
  `${supabaseUrl}/storage/v1/object/public/portfolio-assets/${fileName}`;
