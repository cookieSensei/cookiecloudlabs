import Link from "next/link";
import { phases } from "@/components/curriculum/roadmap/phases";

export default function LearningPhases() {
  const curriculumPhases = phases.filter(
    (phase) => phase.phase !== "Foundation"
  );

  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-blue-400 font-medium">
          Learning Through Phases
        </p>

        <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
          Learning isn't measured by weeks.
          <br />
          It's measured by understanding.
        </h2>

        <p className="mt-8 max-w-3xl text-xl text-slate-300 leading-relaxed">
          Every learner progresses through a structured series of learning
          phases. Each phase builds naturally on the previous one, helping you
          develop the skills and confidence to build real software.
        </p>

        <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-10 md:p-16">
          <div className="flex flex-col items-center">
            {curriculumPhases.map((phase, index) => (
              <div
                key={phase.id}
                className="w-full max-w-2xl text-center"
              >
                <p className="uppercase tracking-[0.2em] text-blue-400 text-sm">
                  {phase.phase}
                </p>

                <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
                  {phase.title}
                </h3>

                <p className="mt-3 text-slate-400 leading-relaxed">
                  {phase.promise}
                </p>

                {index < curriculumPhases.length - 1 && (
                  <div className="py-8 text-2xl text-slate-600">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-slate-800 pt-12">
            <p className="max-w-3xl mx-auto text-center text-lg text-slate-300 leading-relaxed">
              Every phase builds on the one before it, helping learners develop
              confidence through consistent progress rather than rushing toward
              completion.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/curriculum"
              className="inline-flex items-center rounded-xl border border-slate-700 px-8 py-4 font-semibold transition-all duration-300 hover:border-blue-500 hover:text-blue-400"
            >
              Explore Curriculum
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}