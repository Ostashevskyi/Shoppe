import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://fsuwmkvddqygnogufzzr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdXdta3ZkZHF5Z25vZ3VmenpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM0MzA0OTcsImV4cCI6MjAxOTAwNjQ5N30.sy3mWCFkMkJujWrYX_0LEg4bTo-IlpQ-G0qPiiEJblI"
);
