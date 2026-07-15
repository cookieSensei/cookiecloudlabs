export default function RemovingBarriers() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <p className="uppercase tracking-[0.35em] text-blue-400 text-sm font-semibold mb-6">
          The First Lesson
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-10">
          Learning should begin with curiosity,
          
          not configuration.
        </h2>

        <div className="space-y-8 text-xl leading-relaxed text-gray-300">
          <p>
            While teaching programming, data science, and artificial
            intelligence, I noticed something that repeated itself again and
            again.
          </p>

          <p>
            Many beginners didn't struggle because programming was too
            difficult.
          </p>

          <p>
            They struggled because learning often began with obstacles instead
            of curiosity.
          </p>

          <p>
            Before writing their first line of code, learners were expected to
            install software, configure development environments, and solve
            technical problems they couldn't yet understand.
          </p>

          <p>
            For many, the first lesson became frustration instead of discovery.
          </p>

          <p className="text-white font-medium">
            I wanted the first lesson to be about learning, not troubleshooting.
          </p>

          <p>
            That observation led to one of CookieSensei's core ideas,
            browser-based learning environments where students can begin
            experimenting immediately without spending hours preparing their
            computers.
          </p>

          <p>
            Removing unnecessary barriers allows learners to focus on what
            truly matters.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center">
            <p className="text-2xl font-semibold text-white">Learn</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center">
            <p className="text-2xl font-semibold text-white">Build</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center">
            <p className="text-2xl font-semibold text-white">Grow</p>
          </div>
        </div>
      </div>
    </section>
  );
}