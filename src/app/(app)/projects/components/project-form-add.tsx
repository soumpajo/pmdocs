
"use client";


import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { useFormState } from "react-dom";
import { createProject } from "../actions";

const initial = { ok: false, message: "" };

export default function ProjectForm({ children }:
    {
        children: React.ReactNode;
    }) {

    const translations = useTranslations("projects")
    const router = useRouter()
    const [state, action] = useActionState(createProject, initial)

        useEffect(() => {
          if(state.ok) {
            router.refresh()
          }
        }, [state.ok, router])
        

    return <form action={action}>{children}</form>;
}