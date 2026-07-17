import Link from "next/link";

const journey = [
  "Idea",
  "Build",
  "Deploy",
  "Share",
];

export default function Workshop() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-blue-400 font-medium">
          Workshop
        </p>

        <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
          Not ready to join the full program?
        </h2>

        <p className="mt-8 max-w-3xl text-xl text-slate-300 leading-relaxed">
          Experience how CookieSensei teaches through a small instructor-led
          workshop where you'll build and deploy a real project directly from
          your browser.
        </p>

        <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-10 md:p-16">
          <div className="text-center">
            <p className="uppercase tracking-[0.3em] text-blue-400 font-medium">
              CookieSensei Workshop
            </p>

            <h3 className="mt-4 text-5xl font-bold text-white">
              ₹499
            </h3>
          </div>

          {/* Mini Journey */}

          <div className="mt-16 flex flex-col items-center space-y-4 text-center">
            {journey.map((step, index) => (
              <div key={step} className="w-full">
                <p
                  className={`text-2xl font-medium ${
                    index === journey.length - 1
                      ? "text-blue-400 font-semibold"
                      : "text-white"
                  }`}
                >
                  {step}
                </p>

                {index < journey.length - 1 && (
                  <div className="py-5 text-2xl text-slate-600">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-slate-800 pt-12">
            <p className="text-center text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              One workshop.
              <br />
              One complete project.
              <br />
              One practical introduction to the CookieSensei learning
              experience.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/workshops"
              className="inline-flex items-center rounded-xl border border-slate-700 px-8 py-4 font-semibold transition-all duration-300 hover:border-blue-500 hover:text-blue-400"
            >
              Explore Workshops
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}