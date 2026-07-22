import { createClient } from "@/lib/supabase/server";
import type { WorkshopRegistration } from "@/workshop-dashboard/types/workshop";

const workshopSelect = `
  id,
  title,
  price,
  capacity,
  scheduled_at,
  duration_minutes
`;



//permanent code
export async function getWorkshopRegistrations(): Promise<WorkshopRegistration[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("workshop_registrations")
    .select(`
        id,
        full_name,
        email,
        github_username,
        agreement,
        status,
        created_at,

        workshop:workshops!workshop_registrations_workshop_id_fkey (
  ${workshopSelect}
)
      `)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }
  
  return (data ?? []) as WorkshopRegistration[];
}

export async function getWorkshopRegistrationById(
  id: number
): Promise<WorkshopRegistration> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("workshop_registrations")
    .select(`
      id,
      full_name,
      email,
      github_username,
      agreement,
      status,
      created_at,

      workshop:workshops!workshop_registrations_workshop_id_fkey (
  ${workshopSelect}
)
    `)
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as unknown as WorkshopRegistration;;
}

export async function getWorkshops() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("workshops")
    .select("*")
    .order("scheduled_at");

  if (error) throw new Error(error.message);

  return data;
}