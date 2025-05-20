import { createClient } from '@supabase/supabase-js'
import { env } from '$env/dynamic/private'

const supabaseUrl = env.SUPABASE_URL
const supabaseKey = env.SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey);

async function getMods() {
    const { data, error } = await supabase
        .from('mods')
        .select('*')

    if (error) {
        console.error('Error fetching mods:', error);
        return [];
    }

    return data;
}

export const db = {
    mods: {
        getAll: getMods,
    },
}