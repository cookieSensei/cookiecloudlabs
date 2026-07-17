import Hero from "@/components/workshops/Hero";
import WhyWorkshop from "@/components/workshops/WhyWorkshop";
import WorkshopExperience from "@/components/workshops/WorkshopExperience";
import CloudLabs from "@/components/workshops/CloudLabs";
import Journey from "@/components/workshops/Journey";
import WorkshopDetails from "@/components/workshops/WorkshopDetails";
import FAQ from "@/components/workshops/FAQ";
import CTA from "@/components/workshops/CTA";

export default function WorkshopsPage() {
  return (
    <main className="bg-slate-950 text-white">

      <Hero />

      <WhyWorkshop />

      <WorkshopExperience />

      <CloudLabs />

      <Journey />

      <WorkshopDetails />

      <FAQ />

      <CTA />

    </main>
  );
}