"use client";

import ScrollIndicator from "@/components/ScrollIndicator";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Section Label */}

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold mb-8">
          Contact
        </p>

        {/* Hero Title */}

        <h1 className="max-w-3xl mx-auto font-bold leading-tight text-[clamp(2.25rem,5vw,4rem)]">
          Let's Start
          <br />
          a Conversation
        </h1>

        {/* Hero Statement */}

        <p className="max-w-3xl mx-auto mt-12 text-lg md:text-xl text-slate-300 leading-relaxed">
          Whether you're curious about the Programming and AI Program,
          our Workshops, or simply wondering where to begin,
          I'd be happy to hear from you.
        </p>

        <ScrollIndicator
          text="Start the Conversation"
          targetId="getting-started"
        />

      </div>
    </section>
  );
}