import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mxhnswymqijymrwvsybm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14aG5zd3ltcWlqeW1yd3ZzeWJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4MzE4NjQsImV4cCI6MjA2ODQwNzg2NH0.f-jbmYdyOknXGcUucZeycOWiuxwA3-2F74kTH7OKaJ4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});