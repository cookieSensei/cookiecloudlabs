export default function Philosophy() {
  return (
    <section className="py-32 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto">

        {/* Section Label */}

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold text-center mb-8">
          Philosophy
        </p>

        {/* Heading */}

        <h2 className="max-w-4xl mx-auto text-center font-bold leading-tight text-[clamp(2rem,4.5vw,3.5rem)]">
          We don't believe graduation
          
          should be the end.
        </h2>

        {/* Content */}

        <div className="max-w-3xl mx-auto mt-16 space-y-8 text-lg md:text-xl text-slate-300 leading-relaxed">

          <p>
            Learning doesn't stop when a program ends. In many ways,
            that's when the most meaningful learning begins.
          </p>

          <p>
            The CookieSensei Product Internship gives graduates the
            opportunity to apply what they've learned, contribute to
            meaningful software, and continue growing as AI builders.
          </p>

          <p className="font-medium text-white">
            Because education isn't just about completing a course.
            It's about building the confidence to solve real-world problems.
          </p>

        </div>

      </div>
    </section>
  );
}