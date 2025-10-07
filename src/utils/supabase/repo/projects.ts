import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@/utils/supabase/types";
import { Project } from "@/app/(app)/projects/types";
import { mapProjectFromDB } from "@/app/(app)/projects/mappers";

type SB = SupabaseClient<Database>;

export async function getProjects(supabase: SB, {page = 1, pageSize = 20}: {page: number, pageSize: number}): Promise<Project[]> {
    const { data, error, count } = await supabase
        .from('projects')
        .select('*')
        .order('name', { ascending: true })
        .range((page - 1) * pageSize, page * pageSize - 1)
    if (error) {
        throw new Error(error.message);
    }
    return (data ?? []).map(mapProjectFromDB);
}

export async function createProject(supabase: SB, name: string): Promise<Project> {
    const { data, error } = await supabase
        .from('projects')
        .insert({ name })
        .select()
        .single();
    if (error) {
        throw new Error(error.message);
    }
    if (!data) {
        throw new Error('No data returned from Supabase');
    }
    return mapProjectFromDB(data);
}