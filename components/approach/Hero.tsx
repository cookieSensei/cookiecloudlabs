import ScrollIndicator from "@/components/ScrollIndicator";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-5xl mx-auto text-center">

        <p className="uppercase tracking-[0.35em] text-blue-400 font-semibold mb-8">
          Our Approach
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Think Clearly
        </h1>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-4">
          Build Confidently
        </h1>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-4">
          Solve Meaningfully
        </h1>

        <p className="max-w-3xl mx-auto mt-12 text-xl text-gray-400 leading-relaxed">
          Programming and Artificial Intelligence are tools.
          CookieSensei helps learners use them with confidence
          to solve meaningful real-world problems,
          regardless of their educational background.
        </p>

        <div className="mt-20 animate-bounce text-gray-500 text-3xl">
          
        </div>

        <div className="mt-20 animate-bounce text-gray-500 text-3xl">
          <ScrollIndicator
          text="Explore Our Principles"
          targetId="principles"/>
        </div>

          
       </div>

    </section>
  );
}