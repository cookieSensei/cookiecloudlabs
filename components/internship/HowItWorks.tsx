export default function HowItWorks() {
  const items = [
    {
      title: "Eligibility",
      description:
        "Open exclusively to graduates of the Programming and AI Program.",
    },
    {
      title: "Selection",
      description:
        "Top-performing graduates are invited based on their curiosity, consistency, capstone project, and overall performance throughout the program.",
    },
    {
      title: "Experience",
      description:
        "A 2-month remote internship with flexible working hours, direct mentorship from the founder and a performance based stipend while contributing to production AI features.",
    },
  ];

  return (
    <section className="py-32 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold text-center mb-8">
          How It Works
        </p>

        {/* Heading */}

        <h2 className="max-w-3xl mx-auto text-center font-bold leading-tight text-[clamp(2rem,4.5vw,3.5rem)]">
          A selective internship
          
          built around learning.
        </h2>

        {/* Intro */}

        <p className="max-w-3xl mx-auto mt-12 text-center text-lg md:text-xl text-slate-300 leading-relaxed">
          The CookieSensei Product Internship is designed to help graduates
          continue learning while contributing to real software development.
        </p>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/30 p-8"
            >
              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-6 text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}