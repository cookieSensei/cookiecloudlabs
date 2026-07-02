export default function Hero() {
  return (
    <section className="relative py-32 md:py-40 text-white overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-transparent to-purple-900/50"></div>

      {/* Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[200px] opacity-20"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[200px] opacity-20"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          Learn Programming & AI,<br />
          Even If You've Never Written Code
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Programming and Artificial Intelligence are no longer skills reserved
          for software engineers. Learn to solve real-world problems through
          live classes and browser-based Cloud Labs, no setup, no expensive
          hardware, just your curiosity.
        </p>

        {/* Highlights */}
        <div className="text-gray-300 text-base md:text-lg mb-10 space-y-3">

          <p>✔ No programming experience required</p>

          <p>✔ Learn through live, instructor-led sessions</p>

          <p>✔ Everything runs in your browser</p>

          <p>✔ Build practical AI projects from day one</p>

        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="/enroll"
            className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-lg font-semibold text-lg"
          >
            Enroll Now
          </a>

          <a
            href="/curriculum"
            className="border border-gray-500 hover:border-white hover:bg-white/10 transition px-8 py-4 rounded-lg text-lg"
          >
            Explore Curriculum
          </a>

        </div>

        {/* Scroll Arrow */}
        <div className="mt-14 flex justify-center">
          <a
            href="#comparison"
            className="animate-bounce cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white opacity-80 hover:opacity-100 transition"
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