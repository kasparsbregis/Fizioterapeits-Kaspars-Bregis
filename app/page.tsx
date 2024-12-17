import React from "react";

import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LocationWithMarker from "@/components/Location";
import Navbar from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { BentoServices } from "@/components/ui/BentoServices";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

const Home = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center text-black">
      <Navbar />
      {/* <Particles
        className="absolute inset-0 bg-transparent z-10"
        quantity={60}
        ease={50}
        color="#292929"
        refresh
      /> */}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(700px_circle_at_center,white,transparent)] xl:[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        )}
      />
      <Hero />
      {/* <TrustedBy /> */}
      {/* <Services /> */}
      <div className="max-w-7xl px-6">
        <BentoServices />
      </div>
      {/* <LogoTicker /> */}
      <Pricing />
      <LocationWithMarker />
      <FAQ />
      <Footer />
      {/* <BottomRainbow /> */}
    </div>
  );
};

export default Home;
