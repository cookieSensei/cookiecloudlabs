"use client";

import { CurriculumPhase } from "./phases";
import PhaseDetails from "./PhaseDetails";

interface RoadmapCardProps {
  phase: CurriculumPhase;
  expanded: boolean;
  onToggle: () => void;
  onNext: () => void;
  isLast: boolean;
}

export default function RoadmapCard({
  phase,
  expanded,
  onToggle,
  isLast,
  onNext
}: RoadmapCardProps) {
  return (
    <div
        id={phase.id}
        className="relative flex gap-8 pb-16 scroll-mt-32"
        >

      {/* Timeline */}

      <div className="flex flex-col items-center">

        <div
            className={`
                rounded-full
                bg-blue-500
                transition-all
                duration-300
                ${
                expanded
                    ? "w-6 h-6 ring-8 ring-blue-500/20"
                    : "w-5 h-5 ring-4 ring-blue-500/20"
                }
            `}
            />

        {!isLast && (
          <div className="w-[2px] flex-1 bg-slate-700 mt-2" />
        )}

      </div>

      {/* Card */}

      <div
            className={`
            flex-1
            rounded-2xl
            border
            p-8
            transition-all
            duration-300
            ${
                expanded
                ? "border-blue-500/50 bg-slate-900 shadow-[0_0_30px_rgba(59,130,246,0.08)]"
                : "border-slate-800 bg-[#0b1220] hover:border-blue-500/40"
            }
            `}
      >

        {/* Phase */}

        <p className="uppercase tracking-[0.3em] text-blue-400 text-sm font-semibold mb-3">
          {phase.phase}
        </p>

        {/* Title */}

        <h3 className="text-3xl font-bold mb-5">
          {phase.title}
        </h3>

        {/* Promise */}

        <p className="text-lg text-gray-300 leading-relaxed">
          {phase.promise}
        </p>


        {/* Key Experiences */}

        <div className="mt-8">

          <h4 className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-4">
            Key Experiences
          </h4>

          <div className="flex flex-wrap gap-3">
            {phase.keyExperiences.map((item) => (
              <span
                key={item}
                className="
                  px-4
                  py-2
                  rounded-full
                  border
                  border-slate-700
                  bg-slate-900/40
                  text-sm
                  text-gray-300
                "
              >
                {item}
              </span>
            ))}
          </div>

        </div>

        {/* Confidence */}

        <div className="mt-10 pt-6 border-t border-slate-700">

          <p className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-3">
            By the end of this phase, you'll have the confidence to say:
          </p>

          <p className="text-2xl italic text-white">
            "{phase.confidenceStatement}"
          </p>

        </div>

        {/* Expand Button */}

        {/* Accordion Toggle */}

            {/* Accordion Toggle */}

            <button
            onClick={onToggle}
            className="
                w-full
                mt-10
                pt-6
                border-t
                border-slate-700
                flex
                items-center
                justify-between
                text-left
                group
            "
            >
            <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-1">
                Curriculum
                </p>

                <p className="text-xl font-semibold text-white transition-colors group-hover:text-blue-300">
                {expanded ? "Hide Phase Details" : "Explore This Phase"}
                </p>
            </div>

            <div
                className={`
                flex
                items-center
                justify-center
                w-10
                h-10
                rounded-full
                border
                border-slate-700
                text-blue-400
                transition-all
                duration-300
                group-hover:border-blue-500/40
                group-hover:bg-blue-500/10
                ${expanded ? "rotate-180" : ""}
                `}
            >
                ▼
            </div>
            </button>


        {/* Expanded Details */}

        <div
        className={`
            overflow-hidden
            transition-all
            duration-500
            ease-in-out
            ${
            expanded
                ? "max-h-[4000px] opacity-100 mt-6"
                : "max-h-0 opacity-0 mt-0"
            }
        `}
        >
        {expanded && (
            <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/40 p-10">

        {/* Chapter Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">

        <p className="uppercase tracking-[0.3em] text-blue-400 text-sm font-semibold">
            {phase.phase}
        </p>

        <h3 className="mt-3 text-4xl font-bold text-white">
            {phase.title}
        </h3>

        <p className="mt-5 text-lg text-gray-400 leading-relaxed">
            A closer look at what you'll learn and how you'll grow during this phase.
        </p>

        </div>
            <PhaseDetails 
                phase={phase} 
                onNext={onNext} />

            </div>
        )}
        </div>

      </div>

    </div>
  );
}