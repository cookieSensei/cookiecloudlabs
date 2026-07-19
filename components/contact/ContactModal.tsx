"use client";

import { useEffect, useState } from "react";

import ContactForm from "./ContactForm";
import SuccessMessage from "./SuccessMessage";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({
  open,
  onClose,
}: ContactModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  /**
   * Reset the modal before closing it.
   * This ensures that the next time the user opens it,
   * they see the contact form instead of the success screen.
   */
  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div className="flex min-h-full items-start justify-center p-4 sm:p-6 lg:p-8">
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative mt-8 mb-8 w-full max-w-xl xl:max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8 lg:p-12"
        >
          {/* Close Button */}

          <button
            onClick={handleClose}
            className="absolute right-6 top-6 text-2xl text-slate-400 transition hover:text-white"
            aria-label="Close"
          >
            ×
          </button>

          {/* Header */}

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight">
            {isSuccess ? "Thank You" : "Start a Conversation"}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            {isSuccess
              ? "Your message has been received."
              : "Whether you have a question about the Programming and AI Program, our Workshops, or simply aren't sure where to begin, I'd be happy to hear from you."}
          </p>

          {/* Body */}

          {isSuccess ? (
            <SuccessMessage onClose={handleClose} />
          ) : (
            <ContactForm
              onSuccess={() => setIsSuccess(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}