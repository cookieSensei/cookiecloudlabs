export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="w-[min(92vw,1200px)] mx-auto text-center">

        {/* Section Label */}
        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold mb-8">
          Our Curriculum
        </p>

        {/* Hero Title */}
        <h1
          className="
            w-[min(90vw,900px)]
            mx-auto
            font-bold
            leading-tight
            text-[clamp(3rem,7vw,5.5rem)]
          "
        >
          More Than
          <br />
          a List of Topics
        </h1>

        {/* Hero Statement */}
        <p
          className="
            w-[min(90vw,760px)]
            mx-auto
            mt-12
            text-lg
            md:text-xl
            text-gray-400
            leading-relaxed
          "
        >
          Technology changes.
          <br />
          The ability to learn does not.
        </p>

        {/* Supporting Text */}
        <p
          className="
            w-[min(90vw,760px)]
            mx-auto
            mt-8
            text-lg
            md:text-xl
            text-gray-400
            leading-relaxed
          "
        >
          The CookieSensei curriculum is designed around the capabilities
          learners need to think clearly, build confidently, and continue
          learning throughout their careers.
        </p>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce text-gray-500 text-3xl">
          ↓
        </div>

      </div>

    </section>
  );
}