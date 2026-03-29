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
          Build Real AI Systems in the Cloud — No Setup, Just Shipping
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
          Train like an engineer from day one using pre-configured cloud labs, real repos, and production workflows.
        </p>

        {/* Differentiation */}
        <div className="text-gray-400 text-sm md:text-base mb-8 space-y-2">
          <p>✔ Your own cloud dev environment (ready in minutes)</p>
          <p>✔ Small cohorts (max 6 people)</p>
          <p>✔ Live guidance + accountability</p>
          <p>✔ Work with Git, PRs, and team workflows</p>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/enroll"
            className="bg-blue-600 px-6 py-3 rounded-lg font-semibold"
          >
            Start Building in the Cloud
          </a>

          <a
            href="/curriculum"
            className="border border-gray-600 px-6 py-3 rounded-lg"
          >
            Explore Real Projects
          </a>
        </div>

      

        {/* Scroll Arrow */}
        <div className="mt-10 flex justify-center">
          <a
            href="#comparison"
            className="flex justify-center mt-10 animate-bounce cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white opacity-80 hover:opacity-100"
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