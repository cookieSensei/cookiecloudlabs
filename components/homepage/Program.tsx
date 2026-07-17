import Link from "next/link";

export default function Program() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-blue-400 font-medium">
          Programming and AI Program
        </p>

        <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
          A structured learning journey
          <br />
          designed for curious learners.
        </h2>

        <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-10 md:p-16">
          {/* Header */}
          <div className="text-center">
            <p className="uppercase tracking-[0.3em] text-blue-400 font-medium">
              Founding Cohort
            </p>

            <h3 className="mt-4 text-5xl font-bold text-white">
              ₹24,999
            </h3>
          </div>

          {/* Journey */}
          <div className="mt-16 flex flex-col items-center space-y-4 text-center">
            <p className="text-xl font-medium">Programming in Python</p>
            <span className="text-slate-500 text-2xl">↓</span>

            <p className="text-xl font-medium">Git &amp; GitHub</p>
            <span className="text-slate-500 text-2xl">↓</span>

            <p className="text-xl font-medium">Data Science</p>
            <span className="text-slate-500 text-2xl">↓</span>

            <p className="text-xl font-medium">Artificial Intelligence</p>
            <span className="text-slate-500 text-2xl">↓</span>

            <p className="text-xl font-medium">Real-World Projects</p>
            <span className="text-slate-500 text-2xl">↓</span>

            <p className="text-2xl font-semibold text-blue-400">
              From Idea to Software
            </p>
          </div>

          {/* Philosophy */}
          <div className="mt-16 border-t border-slate-800 pt-12 text-center space-y-6">
            <p className="text-xl text-slate-300">
              The Programming and AI Program is designed
                to be completed over approximately{" "}
              <span className="font-semibold text-white">6–8 months</span>
              
                , with flexibility to learn at your own pace.
            </p>

           
          </div>

          {/* Founding Cohort */}
          <div className="mt-16 border-t border-slate-800 pt-12">
            <p className="max-w-3xl mx-auto text-center text-lg text-slate-300 leading-relaxed">
              We're inviting a small group of{" "}
              <span className="font-semibold text-white">15 learners</span> to
              become the founding cohort of the CookieSensei Programming and AI
              Program.
            </p>

            <p className="mt-8 max-w-3xl mx-auto text-center text-lg text-slate-300 leading-relaxed">
              With only 15 learners, you'll receive personal guidance, live
              interaction, and individual attention throughout your journey.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
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