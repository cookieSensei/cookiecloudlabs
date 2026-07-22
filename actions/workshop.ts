"use server";

import { createClient } from "@/lib/supabase/server";
import type { RegistrationFormData } from "@/workshop-dashboard/types/workshop";

export async function registerWorkshop(
  data: RegistrationFormData
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("workshop_registrations")
    .insert([
      {
        full_name: data.fullName,
        email: data.email,
        github_username: data.githubUsername,
        workshop_id: Number(data.workshopId),
        agreement: data.agreement,
      },
    ]);

  if (error) {
    throw new Error(error.message);
  }
}