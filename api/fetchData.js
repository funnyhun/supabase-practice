import { createClient } from '@supabase/supabase-js/dist/index.cjs';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const fetchData = async () => {
  const { data, error } = await supabase.from('Word').select('*');

  console.log(data, error);
};
