export default function GettingStarted() {
  return (
    <section id="getting-started" className="py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Section Label */}

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold mb-8">
          Getting Started
        </p>

        {/* Heading */}

        <h2 className="max-w-3xl mx-auto font-bold leading-tight text-[clamp(2rem,4.5vw,3.5rem)]">
          You don't need
          <br />
          all the answers.
        </h2>

        {/* Supporting Text */}

        <p className="max-w-3xl mx-auto mt-12 text-lg md:text-xl text-slate-300 leading-relaxed">
          Many learners begin with questions rather than experience.
          Whether you're exploring programming for the first time,
          considering a career change, or simply curious about Artificial
          Intelligence, we'll start from where you are.
        </p>

        <p className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-slate-300 leading-relaxed">
          You don't need to know which programming language to learn,
          what projects to build, or whether you're "technical enough."
          Together, we'll figure out the next step.
        </p>

      </div>
    </section>
  );
}