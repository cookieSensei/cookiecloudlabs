"use client";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Hero() {
  const scrollToStory = () => {
    document.getElementById("story")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Hero Content */}

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <p className="mb-6 uppercase tracking-[0.35em] text-blue-400 text-sm font-semibold">
            About CookieSensei
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight text-white">
            Why CookieSensei?
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-gray-300">
            Because learning technology should begin with curiosity,
            <br className="hidden md:block" />
            not unnecessary barriers.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <ScrollIndicator
          text="Discover the Story"
          targetId="story"
        />

      </div>
    </section>
  );
}