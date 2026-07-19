"use server";

import { Resend } from "resend";
import ContactEmail from "@/components/emails/ContactEmail";
import {
  ContactSchema,
  type ContactFormData,
} from "@/lib/validation/contact";


const resend = new Resend(process.env.RESEND_API_KEY);



type ContactResult =
  | {
      success: true;
    }
  | {
      success: false;
      message: string;
    };

export async function sendContactMessage(
  formData: ContactFormData
): Promise<ContactResult> {
  try {

    const validationResult = ContactSchema.safeParse(formData);

    if (!validationResult.success) {
      return {
        success: false,
        message: "Please check the form and try again.",
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