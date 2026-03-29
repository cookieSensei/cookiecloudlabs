import Hero from "@/components/Hero";
// import About from "@/components/About";
import Internship from "@/components/Internship";
// import Footer from "@/components/Footer";
// import Founder from "@/components/Founder";
// import BootcampTimeline from "@/components/BootcampTimeline";
// import CloudLabs from "@/components/CloudLabs";
import Capstone from "@/components/Projects"
import Audience from "@/components/Audience"
import CTA from "@/components/CTA"
import Comparison from "@/components/Comparison"
// import FAQ from "@/components/FAQ"
import WhyDifferent from "@/components/WhyDifferent";
import Projects from "@/components/Projects";
import ToolsGrid from "@/components/ToolsGrid";
import WhatYouBuild from "@/components/WhatYouBuild";
import GithubSection from "@/components/GithubSection";
import Pain from "@/components/Pain";
import Outcome from "@/components/Outcome";
import CloudLabs from "@/components/CloudLabs";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
    <Hero />
    <Pain />
    <CloudLabs />
    <Comparison />
    <HowItWorks />
    <WhyDifferent />
    
    <Projects />
    
    <GithubSection />
    
    <Outcome />
    <Audience />
    <Internship />


    <CTA />
    </>
  );
}