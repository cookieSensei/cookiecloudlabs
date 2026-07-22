"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function updateRegistrationStatus(
  id: number,
  status: string
) {
  // console.log("Server Action Called", { id, status });
  const supabase = await createClient();

  const { error } = await supabase
    .from("workshop_registrations")
    .update({ status })
    .eq("id", id);

// temporary code
//   const result = await supabase
//   .from("workshop_registrations")
//   .update({ status })
//   .eq("id", id)
//   .select();

// console.log(result);

// const { error } = result;

// if (error) {
//   console.error(error);
//   throw new Error(error.message);
// }


  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/workshops");
  revalidatePath(`/admin/workshops/${id}`);
}