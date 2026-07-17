import Hero from "@/components/homepage/Hero";
import AboutProgram from "@/components/homepage/WhatIsCookiesensei";
import Program from "@/components/homepage/Program";
import LearningPhases from "@/components/homepage/LearningPhases";
import Approach from "@/components/homepage/Approach";
import CloudLabs from "@/components/homepage/CloudLabs";
import WhoItsFor from "@/components/homepage/WhoItsFor";
import Workshop from "@/components/homepage/Workshop";
import CTA from "@/components/homepage/CTA";

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-white">

      <Hero />

      <AboutProgram />

      <Program />

      <LearningPhases />

      <Approach />

      <CloudLabs />

      <WhoItsFor />

      <Workshop />

      <CTA />

    </main>
  );
}