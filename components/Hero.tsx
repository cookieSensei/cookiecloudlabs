export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center contrast-105 brightness-90 scale-105"
        style={{ backgroundImage: "url('/coder-bg.png')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Gradient Tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-black/50" />

      {/* Hero Content */}
      <div className="relative z-10 px-6 max-w-5xl">

        {/* Headline with Glow */}
        <h1 className="relative text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">

          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            4-Week AI/ML Bootcamp
          </span>

        </h1>

        <p className="mt-8 text-xl md:text-2xl text-gray-200 font-medium max-w-3xl mx-auto">
        Learn Artificial Intelligence & Machine Learning from scratch and build a real AI project.

        Designed for college students from non-tech backgrounds.
        </p>

        {/* CTA Button */}
        <a
          href="/enroll"
          className="inline-block mt-12 bg-gradient-to-r from-blue-500 to-purple-600 px-12 py-5 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition"
          >
          Apply for the Bootcamp
          </a>

          <p className="mt-4 text-gray-300 text-sm">
          4 week cohort • Live classes • Cloud labs • Only 6 students
          </p>

      </div>
    </section>
  );
}