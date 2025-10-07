"use server"

import { getProjects as getProjectsFromRepo, createProject as createProjectInRepo } from "@/utils/supabase/repo/projects";
import { createClient } from "@/utils/supabase/server";
import { getTranslations } from "next-intl/server";
import { revalidatePath } from "next/cache";

export async function getProjects() {
    const supabase = await createClient()
    const projects = await getProjectsFromRepo(supabase, {page: 1, pageSize: 20})
    return projects
}

type State = { ok: boolean; message?: string };

export async function createProject(prev: State, formData: FormData): Promise<State> {
    const translations = await getTranslations("projects")
    
    const v = formData.get("new-project-name");
    const projectName = typeof v === "string" ? v.trim() : "";

    if (projectName.length < 3) {
        // alert(translations("error_meesage_project_name_too_short"))
        return {ok: false, message: translations("error_meesage_project_name_too_short")}
    }

    const supabase = await createClient()
    await createProjectInRepo(supabase, projectName)

    revalidatePath("/project")

    return { ok: true, message: translations("project_created", {name: projectName}) }
}