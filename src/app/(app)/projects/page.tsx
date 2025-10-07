import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProjectsDataTable from "./components/projects-data-table";
import { projectsDataTableColumns } from "./components/projects-data-table-columns";
import { getProjects } from "./actions";
import { getTranslations } from "next-intl/server";
import LoadingSubmitButton from "@/components/loading-button";
import ProjectForm from "./components/project-form-add";

export default async function projects() {
    const translationsProjects = await getTranslations("projects");
    const translationsCommon = await getTranslations("common");
    const projects = await getProjects();

    return (
        <div>
                <ProjectForm>
                    <div className="flex w-full max-w-sm items-center gap-2">
                        <Input type="text" name="new-project-name" placeholder={translationsProjects("example_project")} />
                        <LoadingSubmitButton label={translationsCommon("add")} variant="outline" size="md" />
                    </div>
                </ProjectForm>
            <ProjectsDataTable columns={projectsDataTableColumns} data={projects}></ProjectsDataTable>
        </div>
    );
}