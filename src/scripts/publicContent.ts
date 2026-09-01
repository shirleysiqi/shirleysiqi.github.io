import { supabase } from '../lib/supabaseClient';

export async function loadSiteContent<T>(fallback: T): Promise<T> {
  if (!supabase) return fallback;
  const { data, error } = await supabase
    .from('site_content')
    .select('payload')
    .eq('key', 'main')
    .maybeSingle();
  if (error || !data?.payload) return fallback;
  return data.payload as T;
}

export async function loadPublishedCases() {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('cases')
    .select('*')
    .eq('published', true)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });
  if (error) {
    console.error(error);
    return [];
  }
  return data || [];
}
