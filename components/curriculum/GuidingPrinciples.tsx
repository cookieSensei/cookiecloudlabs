export default function GuidingPrinciples() {
  const principles = [
    {
      title: "Curiosity Before Instruction",
      description:
        "Meaningful questions create meaningful learning. Students should understand why something matters before learning how it works.",
    },
    {
      title: "Build Before Theory",
      description:
        "We understand concepts more deeply after experiencing the problems they solve.",
    },
    {
      title: "Learn by Solving Problems",
      description:
        "Programming is a tool for solving meaningful challenges, not an exercise in memorization.",
    },
    {
      title: "Foundations Before Trends",
      description:
        "Technologies evolve. Strong fundamentals remain valuable regardless of which frameworks become popular.",
    },
    {
      title: "Learning Without Barriers",
      description:
        "Learning should begin with curiosity, not software installation. Infrastructure should support learning, not become the lesson.",
    },
    {
      title: "Continue Learning",
      description:
        "The curriculum ends. Curiosity, experimentation, and learning should continue throughout a learner's career.",
    },
  ];

  return (
    <section className="py-32 px-6 border-t border-slate-800">
      <div className="w-[min(92vw,1200px)] mx-auto">
        {/* Section Label */}
        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold text-center mb-6">
          Our Guiding Principles
        </p>

        {/* Section Title */}
        <h2
          className="
            w-[min(90vw,900px)]
            mx-auto
            text-center
            font-bold
            leading-tight
            text-[clamp(2rem,5vw,3.75rem)]
          "
        >
          Every decision we make about the curriculum
          <br />
          begins with these principles.
        </h2>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-20">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="
                bg-[#0b1220]
                border
                border-slate-800
                rounded-2xl
                p-8
                transition-all
                duration-300
                hover:border-blue-500/40
              "
            >
              <h3 className="text-2xl font-semibold mb-5">
                {principle.title}
              </h3>

              <p className="text-lg text-gray-400 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}