import Hero from "@/components/Hero";
import About from "@/components/About";
import Internship from "@/components/Internship";
import Footer from "@/components/Footer";
import Founder from "@/components/Founder";
import BootcampTimeline from "@/components/BootcampTimeline";
import CloudLabs from "@/components/CloudLabs";


export default function Home() {
  return (
    <>

      <Hero />
      <BootcampTimeline />
      <Internship/>
      <CloudLabs/>
      <Founder/>
      
      
    </>
  );
}