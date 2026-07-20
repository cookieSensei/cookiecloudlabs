export default function Mission() {
  return (
    <section className="py-36 px-6">

      <div className="max-w-5xl mx-auto text-center">

        {/* Section Label */}

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold mb-8">
          Our Mission
        </p>

        {/* Mission Statement */}

        <h2 className="max-w-3xl mx-auto font-bold leading-tight text-[clamp(2rem,4.5vw,3.5rem)] mb-12">
          Technology should empower people to solve meaningful real-world problems.
        </h2>

        {/* Supporting Text */}

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed mb-24">
          Everything we build at CookieSensei, from our curriculum to our
          learning environment, exists to help learners develop the confidence
          to think clearly, build confidently, and solve meaningfully.
        </p>

        {/* Closing Motto */}

        <div className="space-y-5">

          <p className="font-bold text-[clamp(2rem,5vw,3.75rem)]">
            Think Clearly
          </p>

          <p className="font-bold text-[clamp(2rem,5vw,3.75rem)]">
            Build Confidently
          </p>

          <p className="font-bold text-blue-400 text-[clamp(2rem,5vw,3.75rem)]">
            Solve Meaningfully
          </p>

        </div>

      </div>

    </section>
  );
}