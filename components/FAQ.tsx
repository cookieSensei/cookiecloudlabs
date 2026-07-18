"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need programming experience?",
    answer:
      "No. The Programming and AI Program is designed for beginners. We start with programming fundamentals before gradually introducing software development, data science, and Artificial Intelligence.",
  },
  {
    question: "Who is CookieSensei for?",
    answer:
      "CookieSensei is designed for curious learners, including students, professionals, career changers, and creators, who want to learn by building real software rather than simply watching tutorials.",
  },
  {
    question: "What if I'm not good at mathematics?",
    answer:
      "You don't need an advanced mathematics background to begin. We'll introduce the mathematical concepts required for programming and Artificial Intelligence gradually with practical examples.",
  },
  {
    question: "How is CookieSensei different from online courses?",
    answer:
      "CookieSensei combines live instructor-led sessions, browser-based Cloud Labs, structured learning phases, and practical projects. Instead of learning alone through videos, you'll learn by building with guidance along the way.",
  },
  {
    question: "What are Learning Phases?",
    answer:
      "The curriculum is organized into progressive learning phases. Each phase builds on the previous one, helping you gain confidence before moving to more advanced topics.",
  },
  {
    question: "What are Cloud Labs?",
    answer:
      "Cloud Labs provide a complete programming environment directly in your browser. There's nothing to install or configure, so you can begin writing code from your first session.",
  },
  {
    question: "Do I need a powerful laptop?",
    answer:
      "No. Since you'll use browser-based Cloud Labs for most of the program, a reasonably modern laptop with a stable internet connection is usually sufficient.",
  },
  {
    question: "Will sessions be recorded?",
    answer:
      "Yes. Live sessions will be recorded so you can revisit concepts, review demonstrations, and learn at your own pace.",
  },
  {
    question: "How much time should I expect to spend each week?",
    answer:
      "The exact amount depends on your pace and goals, but most learners should expect to spend several hours each week attending sessions, practicing, and building projects.",
  },
  {
    question: "What will I build?",
    answer:
      "You'll build progressively more challenging projects—from Python applications to intelligent software powered by Artificial Intelligence. Every phase includes practical work that reinforces what you've learned.",
  },
  {
    question: "Can I attend a Workshop before joining the program?",
    answer:
      "Absolutely. Workshops are the best way to experience how CookieSensei teaches before deciding whether the full program is right for you.",
  },
  {
    question: "How long does the Program take?",
    answer:
      "The Programming and AI Program is designed to be completed over approximately 6–8 months, with flexibility to learn at your own pace.",
  },
  {
    question: "Why is the founding cohort limited to 15 learners?",
    answer:
      "Keeping the cohort intentionally small allows for meaningful interaction, personal guidance, and individual attention throughout the learning journey.",
  },
  {
    question: "How do I join the Program?",
    answer:
      "Rather than instant enrollment, we begin with a conversation. Tell us about yourself, your goals, and what you'd like to build. We'll personally reach out to answer your questions and discuss whether CookieSensei is the right fit.",
  },
  {
    question: "Is there an interview before joining?",
    answer:
      "Yes. We like to get to know prospective learners before enrollment. This conversation helps us understand your goals and ensures the program is a good fit for both you and the cohort.",
  },
  {
    question: "Why is it called CookieSensei?",
    answer:
      "The name reflects our belief that learning should feel approachable, enjoyable, and guided. A Sensei mentors learners through experience rather than simply delivering information and that's the philosophy behind CookieSensei.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#0b1220] py-32 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-blue-400 font-medium">
            FAQ
          </p>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-8 text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Everything you'd like to know about CookieSensei,
            the Programming and AI Program, Workshops,
            and how we learn together.
          </p>
        </div>

        <div className="mt-20 divide-y divide-slate-800">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="py-6"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between text-left group"
                >
                  <h3 className="text-xl font-semibold transition-colors group-hover:text-blue-400">
                    {faq.question}
                  </h3>

                  <span
                    className={`text-3xl transition-transform duration-300 ${
                      isOpen
                        ? "rotate-45 text-blue-400"
                        : "text-slate-500"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen
                      ? "max-h-96 opacity-100 mt-5"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-slate-300 leading-relaxed text-lg max-w-3xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}