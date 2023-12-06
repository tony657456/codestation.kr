import { SECRET_SUPABASE_API_KEY, SECRET_SUPABASE_URL } from '$env/static/private';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	SECRET_SUPABASE_URL as string,
	SECRET_SUPABASE_API_KEY as string,
);
