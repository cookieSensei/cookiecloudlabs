import { CurriculumPhase } from "./phases";
import BuildCard from "./BuildCard";

interface PhaseDetailsProps {
  phase: CurriculumPhase;
  onNext: () => void;
}

export default function PhaseDetails({
  phase,
  onNext,
}: PhaseDetailsProps) {
  return (
    <div className="space-y-10">

      {/* Purpose */}

      <section>
        <h4 className="text-lg font-semibold text-white mb-4">
          Purpose
        </h4>

        <p className="text-gray-400 leading-relaxed">
          {phase.purpose}
        </p>
      </section>

      {/* What You'll Learn */}

      <section>
        <h4 className="text-lg font-semibold text-white mb-4">
          What You'll Learn
        </h4>

        <div className="flex flex-wrap gap-3">
          {phase.whatYouWillLearn.map((item) => (
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
      </section>

      {/* Technologies */}

      <section>
        <h4 className="text-lg font-semibold text-white mb-4">
          Technologies You'll Work With
        </h4>

        <div className="flex flex-wrap gap-3">
          {phase.technologiesYouWillWorkWith.map((tech) => (
            <span
              key={tech}
              className="
                px-4
                py-2
                rounded-full
                bg-blue-500/10
                border
                border-blue-500/30
                text-blue-300
                text-sm
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Learning Approach */}

      <section>
        <h4 className="text-lg font-semibold text-white mb-4">
          Learning Approach
        </h4>

        <p className="text-gray-400 leading-relaxed">
          {phase.learningApproach}
        </p>
      </section>

      {/* Final Section */}

      {phase.isFinalPhase ? (
        <BuildCard />
      ) : (
        <section>
          <button
            onClick={onNext}
            className="
              w-full
              rounded-2xl
              border
              border-slate-700
              bg-slate-900/40
              p-6
              text-left
              transition-all
              duration-300
              hover:border-blue-500/40
              hover:bg-blue-500/10
            "
          >
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-2">
              Ready For
            </p>

            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold text-blue-300">
                {phase.readyFor}
              </p>

              <span className="text-blue-400 text-2xl">
                →
              </span>
            </div>
          </button>
        </section>
      )}
    </div>
  );
}