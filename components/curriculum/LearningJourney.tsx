export default function LearningJourney() {
  const journey = [
    {
      title: "Explore",
      description:
        "Every journey begins with curiosity. We start by asking meaningful questions before introducing technical concepts.",
    },
    {
      title: "Build",
      description:
        "Learning happens through creating. Every new concept is reinforced by building something practical.",
    },
    {
      title: "Reflect",
      description:
        "Students understand not only what works, but why it works. Reflection turns experience into understanding.",
    },
  ];

  const habits = [
    {
      title: "Practice Consistently",
      description:
        "Small, regular progress builds lasting confidence.",
    },
    {
      title: "Ask Questions",
      description:
        "Curiosity drives learning. Every question is an opportunity to understand more deeply.",
    },
    {
      title: "Continue Learning",
      description:
        "The goal is not to finish a curriculum, but to become someone who keeps learning.",
    },
  ];

  return (
    <section className="py-32 px-6">
      <div className="w-[min(92vw,1200px)] mx-auto">

        {/* Section Label */}

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold text-center mb-6">
          The Learning Journey
        </p>

        {/* Title */}

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
          Learning is a journey,
          <br />
          not a race.
        </h2>

        {/* Intro */}

        <p
          className="
            w-[min(90vw,760px)]
            mx-auto
            mt-10
            text-center
            text-lg
            md:text-xl
            text-gray-400
            leading-relaxed
          "
        >
          Every learner progresses at a different pace.
          Rather than measuring success by time,
          CookieSensei focuses on developing confidence,
          capability, and independent thinking.
        </p>

        {/* Main Journey */}

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {journey.map((step, index) => (
            <div
              key={index}
              className="
                bg-[#0b1220]
                border
                border-slate-800
                rounded-2xl
                p-8
              "
            >
              <div className="text-blue-400 text-sm uppercase tracking-widest mb-4">
                Step {index + 1}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-400 leading-relaxed text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting Habits */}

        <div className="mt-24">

          <h3 className="text-center text-3xl font-semibold mb-12">
            Along the way, learners develop habits that last a lifetime.
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            {habits.map((habit, index) => (
              <div
                key={index}
                className="
                  border
                  border-slate-800
                  rounded-2xl
                  p-8
                  text-center
                "
              >
                <h4 className="text-xl font-semibold mb-4">
                  {habit.title}
                </h4>

                <p className="text-gray-400 leading-relaxed">
                  {habit.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}