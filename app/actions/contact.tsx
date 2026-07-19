"use server";

import { Resend } from "resend";
import ContactEmail from "@/components/emails/ContactEmail";
import {
  ContactSchema,
  type ContactFormData,
  type ContactFormErrors,
} from "@/lib/validation/contact";


const resend = new Resend(process.env.RESEND_API_KEY);



type ContactResult =
  | {
      success: true;
    }
  | {
      success: false;
      message: string;
      errors?: ContactFormErrors;
    };

export async function sendContactMessage(
  formData: ContactFormData
): Promise<ContactResult> {
  try {

    const validationResult = ContactSchema.safeParse(formData);

    if (!validationResult.success) {
      const errors: ContactFormErrors = {};

      validationResult.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormErrors;
        errors[field] = issue.message;
      });

      return {
        success: false,
        message: "Please check the highlighted fields.",
        errors,
      };
    }

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ashishchaudhary62@gmail.com", // Replace with your email
      replyTo: formData.email,
      subject: `CookieSensei Contact - ${formData.topic}`,
      react: (
        <ContactEmail
            name={formData.name}
            email={formData.email}
            topic={formData.topic}
            message={formData.message}
        />
        ),
    });

    if (error) {
      return {
        success: false,
        message: error.message,
      };
    }

    return {
      success: true,
    };
  } catch (error) {
  console.error(error);

  return {
    success: false,
    message: "Something went wrong. Please try again.",
  };
}
}