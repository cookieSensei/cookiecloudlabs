import { createClient } from "@/lib/supabase/server";
import type { WorkshopRegistration } from "@/workshop-dashboard/types/workshop";

export async function getWorkshopRegistrations(): Promise<WorkshopRegistration[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("workshop_registrations")
    .select(`
      id,
      full_name,
      email,
      github_username,
      workshop,
      agreement,
      created_at
    `)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}