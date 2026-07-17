"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need programming experience?",
    answer:
      "No. The workshop is designed for complete beginners. We'll guide you through each step of the journey.",
  },
  {
    question: "Do I need to install any software?",
    answer:
      "No. Everything runs in your browser using CookieSensei Cloud Labs. Simply sign in and start building.",
  },
  {
    question: "What should I bring?",
    answer:
        "Just bring your laptop and its charger. We'll provide everything else you need during the workshop."
    },
  {
    question: "Will I build my own project?",
    answer:
      "You'll follow a guided project that introduces the complete software development workflow. Along the way, you'll have opportunities to personalize parts of what you build.",
  },
  {
    question: "What happens after the workshop?",
    answer:
      "You'll leave with a live website, a GitHub project, and a clear understanding of how modern software is developed, giving you a foundation to continue building on your own.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">

        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
          Frequently Asked Questions
        </p>

        <h2 className="mb-16 text-4xl font-bold leading-tight text-white md:text-5xl">
          Everything else you might be wondering.
        </h2>

        <div className="divide-y divide-slate-800 border-y border-slate-800">

          {faqs.map((faq, index) => (
            <div key={faq.question}>
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between py-6 text-left"
              >
                <span className="text-xl font-medium text-white">
                  {faq.question}
                </span>

                <span className="text-2xl text-blue-400">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <p className="pb-6 text-lg leading-relaxed text-gray-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}