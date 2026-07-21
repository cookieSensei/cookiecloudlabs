import { z } from "zod";

export const workshopRegistrationSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.email("Please enter a valid email"),
  githubUsername: z.string().min(1, "GitHub Username is required"),
  workshop: z.string().min(1, "Please select a workshop"),
  agreement: z.literal(true, {
    error: "You must agree before continuing",
  }),
});