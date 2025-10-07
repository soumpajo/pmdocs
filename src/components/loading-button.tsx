"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";

type LoadingButtonProps = {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link"
    size?: "sm" | "md" | "lg"
    label: string
}

export default function LoadingSubmitButton({ variant = "primary", size = "md", label }: LoadingButtonProps) {
    const { pending } = useFormStatus();
    console.log(pending);
    return (
        <Button type="submit" variant="secondary" disabled={pending} size="sm">
            {pending && <Spinner />}
            {label}
        </Button>
    );
}