"use client"

import { ColumnDef } from "@tanstack/react-table";
import { Project } from "../types";

export const projectsDataTableColumns: ColumnDef<Project>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorKey: 'name',
        header: 'Project Name',
    },
    {
        accessorKey: 'created_at',
        header: 'Created At',
    },
    {
        accessorKey: 'user_id',
        header: 'User ID',
    }
]