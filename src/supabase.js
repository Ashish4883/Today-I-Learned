import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ibapioofyozbuzqqalyf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImliYXBpb29meW96YnV6cXFhbHlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1MjU3MjIsImV4cCI6MjA1OTEwMTcyMn0.jIUKbyxYBlR7tiacRobsR5wAzE8p0O8idBjUeZ4I0qQ";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
