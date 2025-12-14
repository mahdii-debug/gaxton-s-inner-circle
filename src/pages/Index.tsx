import Header from "@/components/Header";
import ParallaxBackground from "@/components/ParallaxBackground";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Pillars from "@/components/Pillars";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParallaxBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Pillars />
        <Philosophy />
        <Pricing />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
