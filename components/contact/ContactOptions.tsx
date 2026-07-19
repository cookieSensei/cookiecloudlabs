export default function ContactOptions() {
  const options = [
    {
      title: "Programming and AI Program",
      description:
        "Ask about the curriculum, learning phases, Cloud Labs, enrollment, or whether the program is the right fit for your goals.",
    },
    {
      title: "Workshops",
      description:
        "Learn more about upcoming workshops, what you'll build, and which workshop is the best place to begin.",
    },
    {
      title: "General Enquiries",
      description:
        "Have a partnership idea, collaboration opportunity, or another question? We'd love to hear from you.",
    },
  ];

  return (
    <section className="py-32 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold text-center mb-8">
          How We Can Help
        </p>

        {/* Heading */}

        <h2 className="max-w-3xl mx-auto text-center font-bold leading-tight text-[clamp(2rem,4.5vw,3.5rem)]">
          Every conversation
          <br />
          starts somewhere.
        </h2>

        {/* Intro */}

        <p className="max-w-3xl mx-auto mt-12 text-center text-lg md:text-xl text-slate-300 leading-relaxed">
          Whether you're exploring programming, considering a workshop,
          or simply curious about CookieSensei,
          we're happy to answer your questions.
        </p>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {options.map((option) => (
            <div
              key={option.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/30 p-8 transition-all duration-300 hover:border-blue-500"
            >
              <h3 className="text-2xl font-semibold">
                {option.title}
              </h3>

              <p className="mt-6 text-slate-300 leading-relaxed">
                {option.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}