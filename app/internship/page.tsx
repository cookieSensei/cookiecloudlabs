import Hero from "@/components/internship/Hero";
import Journey from "@/components/internship/Journey";
import Why from "@/components/internship/Why";
import FoundingCohort from "@/components/internship/FoundingCohort";
import HowItWorks from "@/components/internship/HowItWorks";
import Outcomes from "@/components/internship/Outcomes";
import Philosophy from "@/components/internship/Philosophy";
import Closing from "@/components/internship/Closing";

export default function InternshipPage() {
  return (
    <main>
      <Hero />
      <Journey />
      <Why />
      <FoundingCohort />
      <HowItWorks />
      <Outcomes />
      <Philosophy />
      <Closing />
    </main>
  );
}