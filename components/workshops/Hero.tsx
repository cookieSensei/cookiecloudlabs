import ScrollIndicator from "@/components/ScrollIndicator";


export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-8 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
          CookieSensei Workshop
        </p>

        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          From Idea
        </h1>

        <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
          to a Live Website.
        </h1>

        <p className="mx-auto mt-12 max-w-3xl text-xl leading-relaxed text-gray-400">
          Experience the journey of modern software development.
        </p>

        <div className="mt-12 space-y-3 text-xl text-gray-300">
          <p>No programming experience</p>

          <p>No software installation</p>

          <p className="font-semibold text-white">
            Just your browser and curiosity
          </p>
        </div>

        <div className="mt-20 animate-bounce text-gray-500 text-3xl">
          <ScrollIndicator
          text="Discover the Workshop"
          targetId="why-workshop"/>
        </div>

        


      </div>
    </section>
  );
}