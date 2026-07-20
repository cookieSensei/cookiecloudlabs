const audiences = [
  {
    title: "Students",
    description:
      "Build strong programming and Artificial Intelligence foundations before entering the industry.",
  },
  {
    title: "Professionals",
    description:
      "Develop modern software development and AI skills while continuing your career.",
  },
  {
    title: "Creators",
    description:
      "Turn ideas into real software, intelligent applications, and practical projects.",
  },
];

export default function WhoItsFor() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-blue-400 font-medium">
          Who It's For
        </p>

        <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
          Whether you're starting your journey,
          
          changing direction,
          
          or building new skills.
        </h2>

        <p className="mt-8 max-w-3xl text-xl text-slate-300 leading-relaxed">
          CookieSensei is designed for curious learners who want to understand
          technology by building with it-not just watching tutorials.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-10"
            >
              <p className="uppercase tracking-[0.2em] text-blue-400 text-sm">
                {audience.title}
              </p>

              <p className="mt-6 text-slate-300 leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-slate-300">
            Everyone starts somewhere.
          </p>

          <p className="mt-3 text-2xl font-semibold text-blue-400">
            The only requirement is curiosity.
          </p>
        </div>
      </div>
    </section>
  );
}