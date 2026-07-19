import { z } from "zod";

export const ContactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name is too long"),

  email: z
    .email("Please enter a valid email address"),

  topic: z
    .string()
    .trim()
    .min(1, "Please select a topic"),

  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(2000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof ContactSchema>;