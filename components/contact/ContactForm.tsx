"use client";

import { ContactSchema } from "@/lib/validation/contact";
import { useState } from "react";
import { sendContactMessage } from "@/app/actions/contact";

interface ContactFormProps {
  onSuccess: () => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
}

export default function ContactForm({
  onSuccess,
}: ContactFormProps) {

const initialFormData = {
  name: "",
  email: "",
  topic: "",
  message: "",
};

const [isSubmitting, setIsSubmitting] = useState(false);
const [submitError, setSubmitError] = useState("");

const [formData, setFormData] = useState(initialFormData);

const [errors, setErrors] = useState<FormErrors>({});

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  // Clear the error as the user types
  setErrors((prev) => ({
    ...prev,
    [name]: "",
  }));
};



const validate = () => {
  const result = ContactSchema.safeParse(formData);

  if (result.success) {
    setErrors({});
    return true;
  }

  const fieldErrors: FormErrors = {};

  result.error.issues.forEach((issue) => {
    const field = issue.path[0] as keyof FormErrors;

    fieldErrors[field] = issue.message;
  });

  setErrors(fieldErrors);

  return false;
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validate()) return;

  setSubmitError("");

  setIsSubmitting(true);

  const result = await sendContactMessage(formData);

  setIsSubmitting(false);

if (!result.success) {
  setSubmitError(result.message);
  setIsSubmitting(false);
  return;
}

// Reset the form
setFormData({
  name: "",
  email: "",
  topic: "",
  message: "",
});

// Clear any validation errors
setErrors({
  name: "",
  email: "",
  topic: "",
  message: "",
});

setFormData(initialFormData);
setErrors({});
setSubmitError("");

onSuccess();
};




  return (
    <form
  onSubmit={handleSubmit}
  className="mt-10 space-y-6">

      {/* Name */}

      <div>
        <label className="mb-2 block font-medium">
          Your Name
        </label>

        <input
            name="name"
            value={formData.name}
            onChange={handleChange}
          type="text"
          placeholder="Ashish"
          className={`w-full rounded-xl border bg-slate-950 px-4 py-3 outline-none transition ${
            errors.name
              ? "border-red-500"
              : "border-slate-700 focus:border-blue-500"
          }`}/>

        {errors.name && (
          <p className="mt-2 text-sm text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}

      <div>
        <label className="mb-2 block font-medium">
          Email Address
        </label>

        <input
        name="email"
        value={formData.email}
        onChange={handleChange}
          type="email"
          placeholder="you@example.com"
          className={`w-full rounded-xl border bg-slate-950 px-4 py-3 outline-none transition ${
            errors.email
              ? "border-red-500"
              : "border-slate-700 focus:border-blue-500"
          }`}
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      {/* Topic */}

      <div>
        <label className="mb-2 block font-medium">
          What would you like to discuss?
        </label>

        <select
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          className={`w-full rounded-xl border bg-slate-950 px-4 py-3 outline-none transition ${
            errors.topic
              ? "border-red-500"
              : "border-slate-700 focus:border-blue-500"
          }`}
        >
          <option value="" disabled>
            Select a topic
          </option>

          <option value="Programming and AI Program">
            Programming and AI Program
          </option>

          <option value="Workshops">
            Workshops
          </option>

          <option value="General Enquiry">
            General Enquiry
          </option>

          <option value="Partnership / Collaboration">
            Partnership / Collaboration
          </option>
        </select>

        {/* 👇 THIS MUST EXIST */}

        {errors.topic && (
          <p className="mt-2 text-sm text-red-400">
            {errors.topic}
          </p>
        )}
      </div>

      {/* Message */}

      <div>
        <label className="mb-2 block font-medium">
          Your Message
        </label>

        <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder="Tell me a little about what you're looking for, or simply ask your question."
            className={`w-full rounded-xl border bg-slate-950 px-4 py-3 outline-none transition ${
              errors.message
                ? "border-red-500"
                : "border-slate-700 focus:border-blue-500"
            }`}
            />

            {errors.message && (
              <p className="mt-2 text-sm text-red-400">
                {errors.message}
              </p>
            )}
      </div>

      {/* Submit */}
      {submitError && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {submitError}
        </div>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full rounded-xl py-4 text-lg font-semibold text-white transition ${
          isSubmitting
            ? "cursor-not-allowed bg-blue-400"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

    </form>
  );
}