export default function WhatYouBuild() {
  const projects = [
    {
      emoji: "🤖",
      title: "AI Resume Analyzer",
      description:
        "Learn how AI understands resumes and job descriptions while building a practical tool used by modern recruiters.",
    },
    {
      emoji: "📊",
      title: "Business Data Dashboard",
      description:
        "Turn spreadsheets into meaningful insights using Python, AI, and interactive visualizations.",
    },
    {
      emoji: "💬",
      title: "AI Chatbot",
      description:
        "Build a chatbot that answers questions using your own documents and knowledge.",
    },
    {
      emoji: "📄",
      title: "Chat With PDF",
      description:
        "Upload PDFs and ask questions in plain English using modern AI models.",
    },
    {
      emoji: "📈",
      title: "Business Forecasting",
      description:
        "Use AI to identify trends and make predictions from real-world business data.",
    },
    {
      emoji: "🧠",
      title: "Your Own AI Assistant",
      description:
        "Create a personal AI assistant that helps automate everyday tasks and answer questions.",
    },
  ];

  return (
    <section className="py-28 px-6 text-white">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold">
          What You'll Build
        </h2>

        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          The best way to learn programming and Artificial Intelligence is by
          building useful projects that solve real-world problems.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">

        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-blue-500 transition"
          >
            <div className="text-4xl mb-5">{project.emoji}</div>

            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {project.description}
            </p>

          </div>
        ))}

      </div>

      <p className="text-center text-2xl font-semibold mt-20 max-w-4xl mx-auto">
        You won't just watch tutorials.
        <br />
        You'll build things you're proud to show.
      </p>

    </section>
  );
}