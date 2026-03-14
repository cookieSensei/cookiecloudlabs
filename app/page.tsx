import Hero from "@/components/Hero";
import About from "@/components/About";
import Internship from "@/components/Internship";
import Footer from "@/components/Footer";
import Founder from "@/components/Founder";
import BootcampTimeline from "@/components/BootcampTimeline";
import CloudLabs from "@/components/CloudLabs";
import Capstone from "@/components/Capstone"
import Audience from "@/components/Audience"
import CTA from "@/components/CTA"
import Comparison from "@/components/Comparison"
import FAQ from "@/components/FAQ"


export default function Home() {
  return (
    <>
    <Hero />
    <Capstone />
    <Comparison />
    <Internship />
    <Audience />
    <Founder />
    
    <FAQ />
    <CTA />
    </>
  );
}