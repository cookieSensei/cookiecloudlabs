"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  topic: string;
  message: string;
}

export async function sendContactMessage(formData: ContactFormData) {
  try {
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ashishchaudhary62@gmail.com", // Replace with your email
      replyTo: formData.email,
      subject: `CookieSensei Contact - ${formData.topic}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${formData.name}</p>

        <p><strong>Email:</strong> ${formData.email}</p>

        <p><strong>Topic:</strong> ${formData.topic}</p>

        <hr>

        <p>${formData.message.replace(/\n/g, "<br />")}</p>
      `,
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
  } catch {
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}