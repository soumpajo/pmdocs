
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

export default function ProjectForm({ action, children }:
    {
        action: (fd: FormData) => Promise<{ ok: boolean; error?: string }>;
        children: React.ReactNode;
    }) {

    const router = useRouter();
    const [state, formAction] = useFormState(action, { ok: false });

    useEffect(() => {
        if (state?.ok) router.refresh(); // holt frische Server-Daten ohne Redirect
    }, [state, router]);

    return <form action={formAction}>{children}</form>;
}