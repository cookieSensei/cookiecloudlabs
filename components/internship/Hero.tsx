import ScrollIndicator from "@/components/ScrollIndicator";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-5xl mx-auto text-center">

        <p className="uppercase tracking-[0.35em] text-blue-400 font-semibold mb-8">
          Internship
        </p>

        <h1 className="max-w-4xl mx-auto font-bold leading-tight text-[clamp(2.25rem,5vw,4rem)]">
          Learning doesn't
          
          end at graduation.
        </h1>

        <p className="max-w-3xl mx-auto mt-12 text-xl text-slate-300 leading-relaxed">
          Top-performing graduates of the Programming and AI Program
          may be invited to continue their journey by building real AI
          products at CookieSensei.
        </p>

        <div className="mt-12 space-y-2 text-lg font-medium">
          <p>No classroom simulations.</p>
          <p>No hypothetical assignments.</p>
          <p className="text-blue-400">
            Real software for real learners.
          </p>
        </div>

        <div className="mt-20 animate-bounce text-gray-500 text-3xl">
          <ScrollIndicator
            text="Explore the Internship"
            targetId="journey"
          />
        </div>

      </div>

    </section>
  );
}