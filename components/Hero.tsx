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
        <h1 className="relative text-6xl md:text-8xl font-extrabold tracking-tight leading-tight">

          {/* Glow Layer */}
          <span className="absolute inset-0 blur-3xl opacity-40 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Build AI Without Setup Headaches
          </span>

          {/* Main Text */}
          <span className="relative bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
            Build AI Without Setup Headaches
          </span>

        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-xl md:text-2xl text-gray-200 font-medium max-w-3xl mx-auto drop-shadow-lg">
          Stop fighting installations. Start building real AI systems in the cloud.
        </p>

        {/* CTA Button */}
        <a
          href="https://code.cookiesensei.com"
          className="inline-block mt-12 bg-gradient-to-r from-blue-500 to-purple-600 px-12 py-5 rounded-2xl font-bold text-lg shadow-[0_20px_50px_rgba(139,92,246,0.4)] hover:scale-105 hover:shadow-[0_25px_60px_rgba(139,92,246,0.6)] transition duration-300"
        >
          Enter CookieCloud Lab
        </a>

      </div>
    </section>
  );
}