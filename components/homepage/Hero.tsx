"use client";
import ScrollIndicator from "@/components/ScrollIndicator";


export default function Hero() {
  const scrollToSection = () => {
    document
      .getElementById("what-is-cookiesensei")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-5xl mx-auto text-center">

        <p className="uppercase tracking-[0.35em] text-blue-400 font-medium">
          Learn to Build with
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
          Programming and AI
        </h1>

        <p className="mt-8 text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
          A guided learning program that helps curious learners
          turn ideas into real software through live instruction,
          Artificial Intelligence, and practical projects.
        </p>

        <div className="mt-12 space-y-3 text-lg text-slate-300">

          <p>✓ Beginner Friendly</p>

          <p>✓ Browser-Based Cloud Labs</p>

          <p>✓ Phase-Based Learning</p>

          <p>✓ Live Instructor Guidance</p>

        </div>

        <div className="mt-20 animate-bounce text-gray-500 text-3xl">
          <ScrollIndicator
          text="Explore the Program"
          targetId="what-is-cookiesensei"/>
        </div>

        


      </div>

    </section>
  );
}