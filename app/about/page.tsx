import Hero from "@/components/about/Hero";
import WhyCookieSensei from "@/components/about/WhyCookieSensei";
import WhyWeExist from "@/components/about/WhyWeExist";
import RemovingBarriers from "@/components/about/RemovingBarriers";
import BuildingConfidence from "@/components/about/BuildingConfidence";
import LifelongLearning from "@/components/about/LifelongLearning";
import MeetInstructor from "@/components/about/MeetInstructor";
import Closing from "@/components/about/Closing";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">

      <Hero />

      <WhyCookieSensei />

      <WhyWeExist />

      <RemovingBarriers />

      <BuildingConfidence />

      <LifelongLearning />

      <MeetInstructor />

      <Closing />

    </main>
  );
}