export default function Journey() {
  const steps = [
    {
      title: "Idea",
      description: "Every project begins with an idea worth exploring.",
    },
    {
      title: "Python Notebook",
      description: "Experiment with Python and understand the fundamentals.",
    },
    {
      title: "Python Script",
      description: "Transform your experiments into a real program.",
    },
    {
      title: "Git & GitHub",
      description: "Save, manage, and share your work like developers do.",
    },
    {
      title: "Modern Website",
      description: "Turn your project into a modern interactive website.",
    },
    {
      title: "Live Deployment",
      description: "Publish your website and share it with the world.",
    },
  ];

  return (
    <section id="journey" className="py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
          Your Journey
        </p>

        <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
          Experience every step,
          <br />
          from idea to deployment.
        </h2>

        {/* Card */}

        <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/40 p-10 backdrop-blur-sm md:p-16">

          <div className="mx-auto flex max-w-2xl flex-col">

            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col items-center"
              >
                {/* Timeline Dot */}

                <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 ring-4 ring-blue-500/20">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>

                {/* Content */}

                <div className="mt-6 text-center">

                  <h3 className="text-2xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-lg leading-relaxed text-slate-400">
                    {step.description}
                  </p>

                </div>

                {/* Connecting Line */}

                {index !== steps.length - 1 && (
                  <div className="my-8 h-16 w-px bg-slate-700" />
                )}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}