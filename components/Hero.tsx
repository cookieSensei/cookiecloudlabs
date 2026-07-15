"use client";

export default function Hero() {
  const scrollToPain = () => {
    document.getElementById("pain")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-transparent to-purple-900/50" />

      {/* Glow Effects */}
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-purple-600 opacity-20 blur-[200px]" />
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500 opacity-20 blur-[200px]" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-24 pb-28">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-8 text-5xl font-bold leading-tight md:text-7xl">
            Learn Programming & AI,
            <br />
            Even If You've Never Written Code
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-2xl">
            Programming and Artificial Intelligence are no longer skills
            reserved for software engineers. Learn to solve real-world
            problems through live classes and browser-based Cloud Labs,
            no setup, no expensive hardware, just your curiosity.
          </p>

          {/* Highlights */}

          <div className="mb-10 space-y-3 text-base text-gray-300 md:text-lg">
            <p>✔ No programming experience required</p>
            <p>✔ Learn through live, instructor-led sessions</p>
            <p>✔ Everything runs in your browser</p>
            <p>✔ Build practical AI projects from day one</p>
          </div>

          {/* CTA */}

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/enroll"
              className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-700"
            >
              Enroll Now
            </a>

            <a
              href="/curriculum"
              className="rounded-lg border border-gray-500 px-8 py-4 text-lg transition hover:border-white hover:bg-white/10"
            >
              Explore Curriculum
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
        <button
          onClick={scrollToPain}
          className="group flex flex-col items-center gap-1"
        >
          <span className="text-sm tracking-wide text-gray-400 transition group-hover:text-gray-200">
            Explore
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 animate-bounce text-blue-400 transition group-hover:text-blue-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}