import Link from "next/link";

const principles = [
  "Live instructor-led sessions",
  "Browser-based Cloud Labs",
  "Learn concepts, not memorization",
  "Build real software throughout the program",
  "AI as a learning companion, not a shortcut",
];

export default function Approach() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-blue-400 font-medium">
          Our Approach
        </p>

        <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
          Learning happens by building,

          experimenting,

          and understanding.
        </h2>

        <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-10 md:p-16">
          <div className="space-y-6">
            {principles.map((principle) => (
              <div
                key={principle}
                className="flex items-start gap-4 text-lg"
              >
                <span className="text-blue-400 text-xl">✓</span>
                <span>{principle}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-slate-800 pt-12">
            <p className="max-w-3xl text-lg text-slate-300 leading-relaxed">
              We believe confidence grows through curiosity, experimentation,
              and consistent practice, not by memorizing syntax or following
              tutorials.
            </p>
          </div>

          <div className="mt-12">
            <Link
              href="/approach"
              className="inline-flex items-center rounded-xl border border-slate-700 px-8 py-4 font-semibold transition-all duration-300 hover:border-blue-500 hover:text-blue-400"
            >
              Explore Our Approach
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}