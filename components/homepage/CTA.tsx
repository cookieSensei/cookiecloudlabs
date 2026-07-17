import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-blue-400 font-medium">
          Ready to Build?
        </p>

        <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
          We'd love to hear from you.
        </h2>

        <p className="mt-8 max-w-2xl mx-auto text-xl text-slate-300 leading-relaxed">
          Whether you're curious about the Programming and AI Program,
          want to attend a Workshop, or simply have questions,
          we're here to help.
        </p>

        <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-10 md:p-16">


          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold">
              Interested in the Programming and AI Program?
            </h3>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Tell us a little about yourself, what you'd like to learn,
              and what you're hoping to build.
            </p>

            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              We'll personally reach out to answer your questions and
              see if CookieSensei is the right fit for you.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center rounded-xl bg-blue-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-600"
            >
              Start the Conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}