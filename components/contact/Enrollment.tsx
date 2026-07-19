export default function Enrollment() {
  return (
    <section className="py-32 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto text-center">

        {/* Section Label */}

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold mb-8">
          Enrollment
        </p>

        {/* Heading */}

        <h2 className="max-w-3xl mx-auto font-bold leading-tight text-[clamp(2rem,4.5vw,3.5rem)]">
          Every learner
          
          starts with
          
          a conversation.
        </h2>

        {/* Body */}

        <p className="max-w-3xl mx-auto mt-12 text-lg md:text-xl text-slate-300 leading-relaxed">
          We don't believe joining a learning program should begin with
          filling out forms or making a payment.
        </p>

        <p className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-slate-300 leading-relaxed">
          Instead, we'll begin by getting to know you, your background,
          your goals, and what you'd like to build.
        </p>

        <p className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-slate-300 leading-relaxed">
          If CookieSensei feels like the right fit, we'll guide you
          through the next steps together.
        </p>

        {/* Journey */}

        <div className="mt-20 rounded-3xl border border-slate-800 bg-slate-900/30 p-10 md:p-14">

          <div className="flex flex-col items-center">

            <p className="text-2xl font-semibold">
              Reach Out
            </p>

            <div className="py-5 text-slate-500 text-2xl">
              ↓
            </div>

            <p className="text-2xl font-semibold">
              Have a Conversation
            </p>

            <div className="py-5 text-slate-500 text-2xl">
              ↓
            </div>

            <p className="text-2xl font-semibold">
              Plan Your Journey
            </p>

            <div className="py-5 text-slate-500 text-2xl">
              ↓
            </div>

            <p className="text-2xl font-semibold text-blue-400">
              Start Learning
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}