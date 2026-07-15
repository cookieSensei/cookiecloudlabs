import GuidingPrinciples from "@/components/curriculum/GuidingPrinciples";
import Hero from "@/components/curriculum/Hero";
import LearningJourney from "@/components/curriculum/LearningJourney";
import Roadmap from "@/components/curriculum/roadmap/Roadmap";
import WhyCurriculum from "@/components/curriculum/WhyCurriculum";

export default function CurriculumPage() {
  return (
    <main className="bg-[#020617] text-white">
      <Hero />
      <WhyCurriculum />
      <GuidingPrinciples />
      <LearningJourney />
      <Roadmap />
    </main>
  );
}