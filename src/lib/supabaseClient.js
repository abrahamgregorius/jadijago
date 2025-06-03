// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tzgksqoufqglksijlxjv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6Z2tzcW91ZnFnbGtzaWpseGp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3MDk4NDUsImV4cCI6MjA2NDI4NTg0NX0.zOZDc2tqxZ4qjKwyguLf0hsVy21iK96shKLiek0Jo1I'; // public anon key

export const supabase = createClient(supabaseUrl, supabaseKey);
