"use client";

import { useState } from "react";

import { phases } from "./phases";
import RoadmapCard from "./RoadmapCard";

export default function Roadmap() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const togglePhase = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  const goToNextPhase = (currentIndex: number) => {
  const nextIndex = currentIndex + 1;

  if (nextIndex >= phases.length) return;

  const nextPhase = phases[nextIndex];

  // Expand next phase
  setExpandedId(null);

  // Wait for React to render, then scroll
  setTimeout(() => {
    document
      .getElementById(nextPhase.id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, 150);
};  

  return (
    <section className="py-32 px-6 border-t border-slate-800">
      <div className="w-[min(92vw,1200px)] mx-auto">

        {/* Section Label */}

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold text-center mb-6">
          Curriculum Roadmap
        </p>

        {/* Title */}

        <h2
          className="
            w-[min(90vw,900px)]
            mx-auto
            text-center
            font-bold
            leading-tight
            text-[clamp(2rem,5vw,3.75rem)]
          "
        >
          A journey of becoming
          <br />
          a capable builder.
        </h2>

        {/* Intro */}

        <p
          className="
            w-[min(90vw,760px)]
            mx-auto
            mt-10
            text-center
            text-lg
            md:text-xl
            text-gray-400
            leading-relaxed
          "
        >
          Every phase builds upon the one before it.
          Learners progress by developing new capabilities,
          not by racing through a fixed schedule.
        </p>

        {/* Roadmap */}

        <div className="mt-24 max-w-5xl mx-auto">
          {phases.map((phase, index) => (
            <RoadmapCard
              key={phase.id}
              phase={phase}
              expanded={expandedId === phase.id}
              onToggle={() => togglePhase(phase.id)}
              onNext={() => goToNextPhase(index)}
              isLast={index === phases.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}