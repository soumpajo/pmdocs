import { getProjects as getProjectsFromRepo, createProject as createProjectInRepo } from "@/utils/supabase/repo/projects";
import { createClient } from "@/utils/supabase/server";

export async function getProjects() {
    const supabase = await createClient()
    const projects = await getProjectsFromRepo(supabase, {page: 1, pageSize: 20})
    return projects
}

export async function createProject(name: string) {
    const supabase = await createClient()
    const project = await createProjectInRepo(supabase, name)
    return project
}