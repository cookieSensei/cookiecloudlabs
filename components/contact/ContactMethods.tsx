export default function ContactMethods() {
  return (
    <section className="py-32 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold text-center mb-8">
          Contact
        </p>

        {/* Heading */}

        <h2 className="max-w-3xl mx-auto text-center font-bold leading-tight text-[clamp(2rem,4.5vw,3.5rem)]">
          Reach out
          
          anytime.
        </h2>

        {/* Intro */}

        <p className="max-w-3xl mx-auto mt-12 text-center text-lg md:text-xl text-slate-300 leading-relaxed">
          Whether you have a quick question or would like to discuss the
          Programming and AI Program, I'd be happy to hear from you.
        </p>

        {/* Contact Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {/* Email */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-10">

            <p className="uppercase tracking-[0.2em] text-blue-400 font-medium">
              Email
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              ashishchaudhary62@gmail.com
            </h3>

            <p className="mt-6 text-slate-300 leading-relaxed">
              Best for questions about the Program,
              Workshops, partnerships,
              or anything you'd like to discuss in detail.
            </p>

            <a
              href="mailto:ashishchaudhary62@gmail.com"
              className="inline-flex mt-8 rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
            >
              Send an Email
            </a>

          </div>

          {/* WhatsApp */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-10">

            <p className="uppercase tracking-[0.2em] text-blue-400 font-medium">
              WhatsApp
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              +91 95820 25965
            </h3>

            <p className="mt-6 text-slate-300 leading-relaxed">
              Ideal for quick questions,
              scheduling a conversation,
              or discussing upcoming workshops.
            </p>

            <a
              href="https://wa.me/919582025965"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
            >
              Message on WhatsApp
            </a>

          </div>

        </div>

        {/* Response Time */}

        <p className="mt-16 text-center text-slate-400">
          I typically respond within one business day.
        </p>

      </div>
    </section>
  );
}