import Hero from "@/components/Hero";
import Pain from "@/components/Pain";
import CloudLabs from "@/components/CloudLabs";
import WhatYouBuild from "@/components/WhatYouBuild";
import WhoLearns from "@/components/WhoLearns";
import HowYouLearn from "@/components/HowYouLearn";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Pain />
      <CloudLabs />
      <WhatYouBuild />
      <WhoLearns />
      <HowYouLearn />
      <CTA />
    </>
  );
}