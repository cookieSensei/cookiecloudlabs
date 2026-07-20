export default function Why() {
  return (
    <section className="py-32 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto">

        {/* Section Label */}

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold text-center mb-8">
          Purpose
        </p>

        {/* Heading */}

        <h2 className="max-w-3xl mx-auto text-center font-bold leading-tight text-[clamp(2rem,4.5vw,3.5rem)]">
          Build.
          
          Learn.
          
          Contribute.
        </h2>

        {/* Content */}

        <div className="max-w-3xl mx-auto mt-16 space-y-8 text-lg md:text-xl text-slate-300 leading-relaxed">

          <p>
            Most internships assign work.
            CookieSensei was created with a different philosophy.
          </p>

          <p>
            The Product Internship exists to help graduates continue learning
            by building meaningful AI applications alongside the founder,
            solving real problems for real learners.
          </p>

          <p>
            Every feature, experiment, and improvement contributes to software
            that becomes part of the CookieSensei platform.
          </p>

          <p className="text-white font-medium">
            This isn't about completing tasks.
            It's about learning how meaningful products are built in production environment.
          </p>

        </div>

      </div>
    </section>
  );
}