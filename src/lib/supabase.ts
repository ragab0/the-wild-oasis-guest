import { createClient } from "@supabase/supabase-js";

const { SUPABASE_URL = "", SUPABASE_KEY = "" } = process.env;

const sBase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default sBase;
