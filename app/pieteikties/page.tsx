import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { PilnsCenradis } from "@/components/Cenradis";
import { DarbaLaiks } from "@/components/DarbaLaiks";
import Footer from "@/components/Footer";
import LocationWithMarker from "@/components/Location";
import Navbar from "@/components/Navbar";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Pieteikties`,
  icons: {
    icon: "https://www.fiziokaspars.lv/favicon.ico",
  },
  description:
    "Sertificēts fizioterapeits Siguldā. Piedāvāju fizioterapeita konsultāciju, ārstniecisko masāžu, ārstniecisko vingrošanu un kinezioloģisko teipošanu",
  keywords: [
    "Fizioterapeits",
    "Fizioterapeits Sigulda",
    "Masāža",
    "Masāža Sigulda",
    "Ārstnieciskā vingrošana",
    "Ārstnieciskā vingrošana Sigulda",
    "Teipošana",
    "Teipošana Sigulda",
  ],
  alternates: {
    canonical: "https://www.fiziokaspars.lv/pieteikties",
  },
  openGraph: {
    title: `Breģis Kaspars - fizioterapeita prakse`,
    description:
      "Sertificēts fizioterapeits Siguldā. Piedāvāju fizioterapeita konsultāciju, ārstniecisko masāžu, ārstniecisko vingrošanu un kinezioloģisko teipošanu",
    type: "website",
    images: [
      {
        url: "https://www.fiziokaspars.lv/assets/og-logo-fiziokaspars.png",
        width: 1200,
        height: 630,
        alt: "Fizioterapeits Siguldā - Breģis Kaspars",
      },
    ],
  },
};

const Pieteikties = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center text-[#292929]">
      <Navbar />
      <div className="w-full max-w-7xl">
        <BlurFade inView delay={0.4} className="mt-24 items-center">
          <div className="section-heading max-w-7xl px-6">
            <h2 className="section-title tracking-tight md:text-[40px]">
              Pieteikties
            </h2>
            {/* <p className="section-description mt-5">Kā tas notiek?</p> */}
          </div>
        </BlurFade>
        <BlurFade
          inView
          delay={0.5}
          className="mt-6 flex max-w-7xl flex-col items-center px-6"
        >
          <div className="flex max-w-7xl flex-col items-center">
            <h1 className="text-center text-[24px] leading-[30px] tracking-tight text-[#010D3E]">
              Piesakieties, zvanot pa tālruni{" "}
            </h1>
            <a
              href="tel:+37126779084"
              className="text-[30px] font-bold leading-relaxed"
            >
              <span className="text-[24px]">+371</span> 26779084
            </a>
          </div>
          <Image
            src="/kabinets3.jpg"
            alt="Fizioterapeita kabinets"
            width={800}
            height={60}
            className="rounded-xl"
          />

          <div className="mt-16 flex w-full max-w-7xl flex-col items-start gap-16 md:flex-row md:gap-4">
            <div className="flex w-full flex-col items-center gap-3 md:gap-0">
              <h2 className="section-title text-[24px] tracking-tight">
                Cenrādis
              </h2>
              <PilnsCenradis />
            </div>
            <div className="flex w-full flex-col items-center gap-3 md:gap-0">
              <h2 className="section-title text-[24px] tracking-tight">
                Darba laiks
              </h2>
              <DarbaLaiks />
            </div>
          </div>
          <div className="w-full max-w-7xl">
            <LocationWithMarker />
          </div>

          <div className="mt-8 flex max-w-7xl gap-3">
            <Link href="/">
              <Button className="rounded-md bg-[#292929] px-3 text-xs hover:bg-black hover:text-white">
                Atpakaļ
              </Button>
            </Link>
          </div>
        </BlurFade>
      </div>

      <Footer />
    </div>
  );
};

export default Pieteikties;
