import Link from "next/link";
import React from "react";

import { PilnsCenradis } from "@/components/Cenradis";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";

const Cenradis = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center text-[#292929]">
      <Navbar />
      <BlurFade inView delay={0.4} className="mt-24 items-center">
        <div className="section-heading max-w-7xl px-6">
          <h2 className="section-title tracking-tight md:text-[40px]">
            Cenrādis
          </h2>
          <p className="section-description mt-5">
            Aktuālās cenas no 01.01.2025.
          </p>
        </div>
      </BlurFade>
      <BlurFade
        inView
        delay={0.5}
        className="mt-6 flex max-w-7xl flex-col items-center px-6"
      >
        <div className="mt-8 flex max-w-3xl gap-3">
          <PilnsCenradis />
        </div>
        <div className="mt-8 flex max-w-3xl gap-3">
          <BlurFade delay={0.43}>
            <Link href="/">
              <Button className="rounded-md bg-[#292929] px-3  text-xs hover:bg-black hover:text-white">
                Atpakaļ
              </Button>
            </Link>
          </BlurFade>
          <BlurFade delay={0.43}>
            <Link href="/pieteikties">
              <Button
                variant={"ghost"}
                className="rounded-md border bg-[#f5712c] px-3 text-xs text-white hover:bg-orange-600 hover:text-white"
              >
                Pieteikties
              </Button>
            </Link>
          </BlurFade>
        </div>
      </BlurFade>
      <Footer />
    </div>
  );
};

export default Cenradis;
