import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Internship from "@/components/Internship";
import Footer from "@/components/Footer";
import Founder from "@/components/Founder";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Internship />
      <Founder/>
      
      <Footer />
    </>
  );
}