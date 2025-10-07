import { Tables } from "@/utils/supabase/types";
import { Project } from "./types";
import { formatIsoToLocale } from "@/lib/utils";

export function mapProjectFromDB(p: Tables<"projects">): Project {
    return {
        id: p.id,
        user_id: p.user_id,
        name: p.name,
        created_at: formatIsoToLocale(p.created_at),
    }
}