"use client";

import Image from "next/image";
import Link from "next/link";

import HeroButton from "./HeroButton";
import BlurFade from "./ui/blur-fade";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative mx-auto flex w-full flex-col items-center">
      <section className="relative z-30 flex flex-col items-center text-[#292929]">
        <BlurFade delay={0.1}>
          <HeroButton />
        </BlurFade>
        <BlurFade delay={0.15}>
          <div className="mt-10 flex flex-col items-center justify-end px-4 text-center ">
            <div className=" absolute w-[350px] sm:w-[450px] lg:w-[500px] xl:w-[700px]">
              <BlurFade delay={0.25}>
                <h2 className="rounded-xl bg-white/50 p-2 text-4xl font-bold tracking-tighter text-[#292929] drop-shadow-xl sm:text-5xl xl:text-7xl/none">
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
        <BlurFade delay={0.2}>
          <span className="flex max-w-[350px] pt-10 text-center text-lg font-medium md:max-w-[650px] lg:text-xl">
            10 gadu pieredze fizioterapijā - darbā slimnīcā, rehabilitācijas nodaļā (traumatoloģija,
            neiroloģija), kā arī profesionālā sportā (futbols)
          </span>
        </BlurFade>
        <div className="flex gap-2 pt-16 sm:gap-5">
          <BlurFade delay={0.2}>
            <Link href={"/pieteikties"}>
              <Button className="rounded-md bg-[#f5712c] px-6 py-4 text-base hover:bg-orange-600 ">
                Pieteikties
              </Button>
            </Link>
          </BlurFade>
          {/* <BlurFade delay={0.2}>
            <Button
              variant={"ghost"}
              className=" h-8 rounded-md border border-[#f5712c] px-3 text-xs text-[#f5712c] hover:bg-[#f5712c] hover:text-white"
            >
              Online
            </Button>
          </BlurFade> */}
          <BlurFade delay={0.2}>
            <Link href={"/par-mani"}>
              <Button className="rounded-md bg-[#292929] px-6 py-4 text-base hover:bg-[#000000] ">
                Par mani
              </Button>
            </Link>
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
