export default function PersonalNote() {
  return (
    <section className="py-32 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto text-center">

        {/* Section Label */}

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold mb-8">
          Meet Your Instructor
        </p>

        {/* Heading */}

        <h2 className="max-w-3xl mx-auto font-bold leading-tight text-[clamp(2rem,4.5vw,3.5rem)]">
          Every message
          
          is personal.
        </h2>

        {/* Body */}

        <p className="max-w-3xl mx-auto mt-12 text-lg md:text-xl text-slate-300 leading-relaxed">
          CookieSensei is intentionally small.
          That means every learner matters,
          every question is welcomed,
          and every message is read personally.
        </p>

        <p className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-slate-300 leading-relaxed">
          When you reach out, you're not speaking to a support team.
          You're speaking directly with the person who designed the
          curriculum, built the platform, and teaches the Program
          and Workshops.
        </p>

        <div className="mt-16">

          <p className="text-2xl font-semibold">
            Ashish Chaudhary
          </p>

          <p className="mt-2 text-blue-400">
            Founder & Instructor
          </p>

        </div>

      </div>
    </section>
  );
}