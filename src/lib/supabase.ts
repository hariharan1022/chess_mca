import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tlesenrgwubyjdupijas.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsZXNlbnJnd3VieWpkdXBpamFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MDY4NjAsImV4cCI6MjA5MDA4Mjg2MH0.kCssSSNSES7C_E1L39Tlr0SGrbrPOHbBCM9dR2hutgc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
