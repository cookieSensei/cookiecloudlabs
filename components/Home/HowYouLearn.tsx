export default function HowYouLearn() {
  const learningPoints = [
    {
      icon: "💻",
      title: "Learn from Any Device",
      description:
        "Use the computer you already have. Whether it's Windows, macOS, or an older laptop, you'll access CookieSensei Cloud Labs directly from your browser. No complicated software installation required.",
    },
    {
      icon: "👨‍🏫",
      title: "Learn with Live Guidance",
      description:
        "Programming becomes much easier when someone can explain concepts, answer questions, and help when you're stuck. Learn in small interactive sessions where asking questions is encouraged.",
    },
    {
      icon: "🛠",
      title: "Learn by Building",
      description:
        "Instead of only watching videos, you'll write code, experiment with AI, and build practical projects that reinforce every concept you learn.",
    },
    {
      icon: "📈",
      title: "Build Confidence, Step by Step",
      description:
        "Programming and AI take time to learn. Our goal isn't to rush you. It's to help you build a strong foundation so you can continue learning and solving real-world problems long after the course ends.",
    },
  ];

  return (
    <section className="py-28 px-6 text-white">

      <div className="max-w-6xl mx-auto">

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold">
            How You'll Learn at CookieSensei
          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            Learning Programming and Artificial Intelligence isn't about
            memorizing syntax. It's about building confidence through practice.
            Every part of the learning experience is designed to help beginners
            focus on learning instead of worrying about technical setup.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {learningPoints.map((point) => (
            <div
              key={point.title}
              className="bg-[#111827] border border-gray-800 rounded-xl p-8 hover:border-blue-500 transition"
            >
              <div className="text-5xl mb-5">
                {point.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {point.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-20 max-w-4xl mx-auto text-center">

          <p className="text-2xl md:text-3xl font-semibold leading-relaxed">
            Learning AI isn't about finishing quickly.
          </p>

          <p className="mt-4 text-xl text-gray-300">
            It's about building the confidence to keep learning long after the course ends.
          </p>

        </div>

      </div>

    </section>
  );
}