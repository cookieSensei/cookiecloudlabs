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
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">

          Become an AI Engineer in 4 Weeks

          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">

          Learn Artificial Intelligence from scratch and build a real AI project.

          • Beginner friendly  
          • Live cohort program  
          • Personal cloud AI lab  
          • Only 6 students per cohort

          </p>

          <a
          href="/enroll"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-lg text-lg"
          >
          Apply for the Cohort
          </a>

      </div>
    </section>
  );
}