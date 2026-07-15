const phases = [
  {
    phase: "Foundation",
    title: "Learning to Learn",
    promise:
      "Build the confidence and habits needed to learn technology effectively.",
    experiences: [
      "Understanding how programmers think",
      "Learning without unnecessary technical barriers",
      "Building confidence through curiosity and experimentation",
    ],
    outcome: "I can learn this.",
  },
  {
    phase: "Phase 1",
    title: "Thinking Like a Programmer",
    promise:
      "Learn to solve problems by thinking like a programmer.",
    experiences: [
      "Writing Python programs in Cloud Labs",
      "Developing computational thinking",
      "Learning through interactive Jupyter notebooks",
    ],
    outcome: "I can write programs.",
  },
  {
    phase: "Phase 2",
    title: "Building Software",
    promise:
      "Turn ideas into working software using modern development tools and documentation.",
    experiences: [
      "Working with Git and GitHub",
      "Reading and understanding technical documentation",
      "Building applications using modern frameworks",
    ],
    outcome: "I can build useful software.",
  },
  {
    phase: "Phase 3",
    title: "Teaching Computers to Learn",
    promise:
      "Discover how computers learn from data and build machine learning models.",
    experiences: [
      "Training Machine Learning models",
      "Exploring Deep Learning through practical examples",
      "Evaluating intelligent systems using real datasets",
    ],
    outcome: "I can train computers to solve problems.",
  },
  {
    phase: "Phase 4",
    title: "Building Intelligent Systems",
    promise:
      "Transform trained models into real applications people can use.",
    experiences: [
      "Deploying Machine Learning and AI models",
      "Building interactive intelligent applications",
      "Connecting AI with real software systems",
    ],
    outcome: "I can build AI applications.",
  },
  {
    phase: "Phase 5",
    title: "Building for the Real World",
    promise:
      "Build software collaboratively using modern AI tools and professional engineering workflows.",
    experiences: [
      "Working alongside modern AI development tools",
      "Collaborating using professional engineering workflows",
      "Learning how modern software teams build products",
    ],
    outcome: "I can work like a modern AI engineer.",
  },
];

export default function Roadmap() {
  return (
    <section className="py-32 px-6 border-t border-slate-800">
      <div className="w-[min(92vw,1200px)] mx-auto">
        {/* Section Label */}

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold text-center mb-6">
          Curriculum Roadmap
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
          A journey of becoming
          <br />
          a capable builder.
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
          Every phase builds upon the one before it.
          Learners progress by developing new capabilities,
          not by racing through a fixed schedule.
        </p>

        {/* Roadmap */}

        <div className="mt-24 max-w-5xl mx-auto">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="relative flex gap-8 pb-16"
            >
              {/* Timeline */}

              <div className="flex flex-col items-center">

                <div className="w-5 h-5 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />

                {index !== phases.length - 1 && (
                  <div className="w-[2px] flex-1 bg-slate-700 mt-2" />
                )}

              </div>

              {/* Card */}

              <div
                className="
                  flex-1
                  bg-[#0b1220]
                  border
                  border-slate-800
                  rounded-2xl
                  p-8
                  hover:border-blue-500/40
                  transition-all
                  duration-300
                "
              >
                {/* Phase */}

                <p className="uppercase tracking-[0.3em] text-blue-400 text-sm font-semibold mb-3">
                  {phase.phase}
                </p>

                {/* Title */}

                <h3 className="text-3xl font-bold mb-4">
                  {phase.title}
                </h3>

                {/* Promise */}

                <p className="text-lg text-gray-300 leading-relaxed">
                  {phase.promise}
                </p>

                {/* Key Experiences */}

                <div className="mt-8">

                  <h4 className="uppercase tracking-wider text-sm text-gray-500 mb-4">
                    Key Experiences
                  </h4>

                  <ul className="space-y-3 text-gray-400">
                    {phase.experiences.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-blue-400 mt-[2px] text-lg">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Outcome */}

                <div className="mt-10 pt-6 border-t border-slate-700">

                  <p className="uppercase tracking-wider text-sm text-gray-500 mb-3">
                    By the end of this phase, you'll have the confidence to say:
                  </p>

                  <p className="text-2xl italic text-white leading-relaxed">
                    “{phase.outcome}”
                  </p>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}