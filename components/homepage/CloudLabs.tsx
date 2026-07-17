import Link from "next/link";

const steps = [
  "Open your browser",
  "Join the live session",
  "Write code instantly",
  "Build projects",
  "Continue learning anywhere",
];

export default function CloudLabs() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-blue-400 font-medium">
          Cloud Labs
        </p>

        <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
          Learning should begin with curiosity,

          not installation.
        </h2>

        <p className="mt-8 max-w-3xl text-xl text-slate-300 leading-relaxed">
          Every learner starts with the same ready-to-use development
          environment, making it easy to focus on learning instead of setting up
          software.
        </p>

        <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-10 md:p-16">
          <div className="flex flex-col items-center">
            {steps.map((step, index) => (
              <div key={step} className="w-full text-center">
                <p className="text-2xl font-medium text-white">
                  {step}
                </p>

                {index < steps.length - 1 && (
                  <div className="py-6 text-2xl text-slate-500">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-slate-800 pt-12">
            <p className="max-w-3xl mx-auto text-center text-lg text-slate-300 leading-relaxed">
              Cloud Labs provides a consistent, browser-based development
              environment for every learner, eliminating installation problems
              and allowing everyone to learn together from day one.
            </p>

            <div className="mt-8 text-center space-y-2">
              <p className="font-medium text-white">
                No installations.
              </p>
              <p className="font-medium text-white">
                No compatibility issues.
              </p>
              <p className="text-xl font-semibold text-blue-400">
                Just learning.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/cloud-labs"
              className="inline-flex items-center rounded-xl border border-slate-700 px-8 py-4 font-semibold transition-all duration-300 hover:border-blue-500 hover:text-blue-400"
            >
              Learn About Cloud Labs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}