export default function Journey() {
  const steps = [
    "Programming & AI Program",
    "Capstone Project",
    "Graduate",
    "Top Performers Invited",
    "CookieSensei Product Internship",
    "Build Production AI Features",
  ];

  return (
    <section
      id="journey"
      className="py-32 px-6 border-t border-slate-800"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Label */}

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold text-center mb-8">
          Journey
        </p>

        {/* Heading */}

        <h2 className="max-w-3xl mx-auto text-center font-bold leading-tight text-[clamp(2rem,4.5vw,3.5rem)]">
          The journey doesn't
          <br />
          end at graduation.
        </h2>

        {/* Intro */}

        <p className="max-w-3xl mx-auto mt-12 text-center text-lg md:text-xl text-slate-300 leading-relaxed">
          For a select group of graduates, completing the Programming and AI
          Program is the beginning of building software that becomes part of the
          CookieSensei ecosystem.
        </p>

        {/* Timeline */}

        <div className="mt-20 flex flex-col items-center">

          {steps.map((step, index) => (
            <div
              key={step}
              className="flex flex-col items-center"
            >
              <div className="rounded-2xl border border-slate-800 bg-slate-900/30 px-8 py-5 text-center max-w-md">
                <p className="font-medium">{step}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="my-6 text-3xl text-blue-400">
                  ↓
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}