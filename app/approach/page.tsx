import Hero from "@/components/approach/Hero";
import Philosophy from "@/components/approach/Philosophy";
import WhyExists from "@/components/approach/WhyExists";
import HowLearningHappens from "@/components/approach/HowLearningHappens";
import LearningWithoutBarriers from "@/components/approach/LearningWithoutBarriers";
import Mission from "@/components/approach/Mission";

export default function ApproachPage() {
  return (
    <main className="bg-[#020617] text-white">
      <Hero />
      <Philosophy />
      <WhyExists />
      <HowLearningHappens />
      <LearningWithoutBarriers />
      <Mission />
    </main>
  );
}