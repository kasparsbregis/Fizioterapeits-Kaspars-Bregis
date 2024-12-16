"use client";

import HeroButton from "./HeroButton";
import BlurFade from "./ui/blur-fade";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full relative flex flex-col items-center mx-auto">
      <section className="z-30 relative flex flex-col items-center text-[#292929]">
        <BlurFade delay={0.25}>
          <HeroButton />
        </BlurFade>
        <BlurFade delay={0.3}>
          <div className="flex flex-col text-center mt-10 px-4 items-center justify-end ">
            <div className=" absolute w-[350px] sm:w-[450px] lg:w-[500px] xl:w-[700px]">
              <BlurFade delay={0.5}>
                <h2 className="text-4xl font-bold tracking-tighter text-[#292929] sm:text-5xl xl:text-7xl/none drop-shadow-xl bg-white/50 rounded-xl py-2 px-2">
                  <span className="text-[#f5712c]">Breģis Kaspars </span>
                  fizioterapeita prakse
                </h2>
              </BlurFade>
            </div>
            <div className="sm:pb-4 xl:pb-16">
              <Image
                src={"/kb.png"}
                alt="Kaspars Bregis"
                width={180}
                height={400}
                className="w-auto"
              />
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={0.35}>
          <span className="flex text-lg lg:text-xl font-medium text-center pt-10 max-w-[350px] md:max-w-[650px]">
            Pieredze darbā slimnīcā, rehabilitācijas nodaļā (traumatoloģija,
            neiroloģija), kā arī sportā (futbols)
          </span>
        </BlurFade>
        <div className="flex gap-2 pt-16 sm:gap-5">
          <BlurFade delay={0.4}>
            <Button className="bg-[#292929] hover:bg-[#000000] h-8 rounded-md px-3 text-xs ">
              Pieteikties
            </Button>
          </BlurFade>
          <BlurFade delay={0.43}>
            <Button
              variant={"ghost"}
              className=" h-8 rounded-md px-3 text-xs border border-[#f5712c] hover:bg-[#f5712c] text-[#f5712c] hover:text-white"
            >
              Online
            </Button>
          </BlurFade>
          <BlurFade delay={0.46}>
            <Button className="bg-[#292929] hover:bg-[#000000] h-8 rounded-md px-3 text-xs ">
              CV
            </Button>
          </BlurFade>
        </div>
        {/* <div className="mt-16 lg:mt-24 mb-40">
          <BlurFade delay={0.55}>
            <ImageWithBorder />
          </BlurFade>
        </div> */}
      </section>
      {/* <HeroParticle /> */}
    </div>
  );
};

export default Hero;
