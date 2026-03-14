export default function Hero() {
  return (
    <section className="relative py-28 md:py-36 text-white overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      ></div>

      {/* Balanced Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-transparent to-purple-900/50"></div>

      {/* Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[200px] opacity-20"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[200px] opacity-20"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Become an AI Engineer in 4 Weeks
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Learn Artificial Intelligence from scratch and build a real AI project.
          <br />
          Beginner friendly • Live cohort program • Personal cloud AI lab • Only 6 students per cohort
        </p>

        <a
          href="/enroll"
          className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-lg text-lg transition"
        >
          Apply for the Cohort
        </a>

        {/* Scroll Arrow */}
        <div className="mt-10 flex justify-center">
          <a href="#capstone" className="animate-bounce">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-white opacity-90 hover:opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>

          </a>
        </div>

      </div>

    </section>
  );
}