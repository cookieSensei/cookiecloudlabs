export default function Outcomes() {
  const benefits = [
    "Experience building production AI features.",
    "Direct mentorship throughout the internship.",
    "A stronger AI portfolio with real project experience.",
    "Internship Completion Certificate.",
    "Letter of Experience.",
    "Performance-based stipend.",
  ];

  return (
    <section className="py-32 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto">

        {/* Section Label */}

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold text-center mb-8">
          Outcomes
        </p>

        {/* Heading */}

        <h2 className="max-w-3xl mx-auto text-center font-bold leading-tight text-[clamp(2rem,4.5vw,3.5rem)]">
          What you'll
          
          leave with.
        </h2>

        {/* Intro */}

        <p className="max-w-3xl mx-auto mt-12 text-center text-lg md:text-xl text-slate-300 leading-relaxed">
          The goal of the internship isn't simply to complete a project.
          It's to continue growing as an AI builder while contributing to
          meaningful software.
        </p>

        {/* Benefits */}

        <div className="mt-20 max-w-3xl mx-auto space-y-6">

          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-2xl border border-slate-800 bg-slate-900/30 px-8 py-6"
            >
              <p className="text-lg md:text-xl">
                {benefit}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}