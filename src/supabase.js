import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mlfevegdoeeewdafeefx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sZmV2ZWdkb2VlZXdkYWZlZWZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyNjI5NjMsImV4cCI6MjAxNjgzODk2M30.6JPhipZTudXCBC9UnXxZ3GOQyjavIhnjTZnCOhChSQQ";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
