export default function FoundingCohort() {
  return (
    <section className="py-32 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto">

        {/* Section Label */}

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold text-center mb-8">
          Founding Cohort
        </p>

        {/* Heading */}

        <h2 className="max-w-4xl mx-auto text-center font-bold leading-tight text-[clamp(2rem,4.5vw,3.5rem)]">
          Building CookieSensei's
          
          First AI Knowledge Assistant
        </h2>

        {/* Mission */}

        <div className="max-w-3xl mx-auto mt-16 space-y-8 text-lg md:text-xl text-slate-300 leading-relaxed">

          <p>
            The first cohort will build CookieSensei's first AI Knowledge
            Assistant.
          </p>

          <p>
            Trained on our own website and educational resources, the assistant
            will help learners discover programs, answer questions, and explore
            CookieSensei through natural conversation.
          </p>

          <p>
            Unlike a classroom assignment, this is a real product that will
            become part of the CookieSensei platform.
          </p>

          <p className="font-medium text-white">
            Every intern will contribute to building, testing, and refining the
            system before its public launch.
          </p>

        </div>

      </div>
    </section>
  );
}