import type { Tables } from "@/lib/database.types";

export type Workshop = Tables<"workshops">;

export type RegistrationFormData = {
    fullName: string;
    email: string;
    githubUsername: string;

    workshopId: string;

    agreement: boolean;
}




type WorkshopRegistrationRow = Tables<"workshop_registrations">;

export type WorkshopRegistration = Omit<
  WorkshopRegistrationRow,
  "workshop_id"
> & {
  workshop: Workshop;
};