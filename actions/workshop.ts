"use server";

import { createClient } from "@/lib/supabase/server";
import type { RegistrationFormData } from "@/types/workshop";

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
        workshop: data.workshop,
        agreement: data.agreement,
      },
    ]);

  if (error) {
    throw new Error(error.message);
  }
}