import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { TeiposanaPricing } from "@/components/TeiposanaPricing";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Breģis Kaspars - fizioterapeita prakse - Teipošana`,
  description: "Sertificēts fizioterapeits Siguldā. Piedāvāju fizioterapeita konsultāciju, ārstniecisko masāžu, ārstniecisko vingrošanu un kinezioloģisko teipošanu",
  keywords: ['Fizioterapeits', 'Fizioterapeits Sigulda', 'Masāža', 'Masāža Sigulda', 'Ārstnieciskā vingrošana', 'Ārstnieciskā vingrošana Sigulda', 'Teipošana', 'Teipošana Sigulda'],
  openGraph: {
    title: `Breģis Kaspars - fizioterapeita prakse`,
    description: "Sertificēts fizioterapeits Siguldā. Piedāvāju fizioterapeita konsultāciju, ārstniecisko masāžu, ārstniecisko vingrošanu un kinezioloģisko teipošanu",
    type: "website",
    images: [
      {
        url: "https://www.fiziokaspars.lv/logo-fiziokaspars.png",
        width: 1000,
        height: 1000,
        alt: "Fizioterapija Siguldā - Breģis Kaspars",
      },
    ],
  },
}

const Teiposana = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center text-[#292929]">
      <Navbar />
      <BlurFade inView delay={0.4} className="mt-24 items-center">
        <div className="section-heading max-w-7xl px-6">
          <h2 className="section-title tracking-tight md:text-[40px]">
            Kinezioloģiskā teipošana
          </h2>
          {/* <p className="section-description mt-5">Kā tas notiek?</p> */}
        </div>
      </BlurFade>
      <BlurFade
        inView
        delay={0.5}
        className="mt-6 flex max-w-7xl flex-col items-center px-6"
      >
        <Image
          src="/teiposana.png"
          alt="Kinezioloģiskā teipošana"
          width={800}
          height={60}
          className="rounded-xl"
        />
        <h1 className="mt-2 text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E]">
          Kādos gadījumos teipošana var noderēt?
        </h1>
        <div className="mt-8 flex max-w-3xl flex-col gap-3">
          <h1 className="text-[22px] leading-[30px] tracking-tight text-[#010D3E]">
            Muguras sāpes
          </h1>
          <p>
            Nav svarīgi, vai tā ir mugurkaula kakla, krūšu vai jostas daļa,
            teipošana var labi palīdzēt muskuļu tonusa regulēšanai, lai dotu
            atbalstu konkrētajam mugurkaula segmentam.
          </p>
        </div>
        <div className="mt-8 flex max-w-3xl flex-col gap-3">
          <h1 className="text-[22px] leading-[30px] tracking-tight text-[#010D3E]">
            Tūska
          </h1>
          <p>
            Savā pieredzē novērots, ka pret tūsku ļoti efektīvi strādā
            teipošana. Svarīga ir teipošanas tehnika, lai uzlabotu limfas
            atteci, tādā veidā arī novada iekaisīgos procesus uz limfmezgliem
            un pēc tam uz izvadkanāliem.
          </p>
        </div>
        <div className="mt-8 flex max-w-3xl flex-col gap-3">
          <h1 className="text-[22px] leading-[30px] tracking-tight text-[#010D3E]">
            Locītavu stabilizācija
          </h1>
          <p>
            Kinezioloģiskais teips kvalitatīvi stabilizē locītavas, lai mazinātu
            traumu risku, īpaši kontakta sporta veidos (futbols, basketbols,
            u.c.). Tas, protams, nav ilgtermiņa risinājums, muskuļiem ir jāspēj
            nodrošināt locītavas stabilitāte slodzē, kas organismam tiek
            piedāvāta. Teipošana locītavu stabilitātei ir vairāk kā atbalsts
            konkrētam treniņam vai sacensībām. No locītavu veselības viedokļa
            skatoties, nav ieteicams bieži teipot locītavas stabilitātes
            uzlabošanai, bet kā palīgs konkrētām sacensībām ir ļoti labs!
          </p>
        </div>
        <div className="mt-8 flex max-w-3xl gap-3">
          <TeiposanaPricing />
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

export default Teiposana;
