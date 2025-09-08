import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Footer from "@/components/Footer";
import { KonsultacijaPricing } from "@/components/KonsultacijaPricing";
import Navbar from "@/components/Navbar";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Konsultācija`,
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
    canonical: "https://www.fiziokaspars.lv/konsultacija",
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

const Konsultacija = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center text-[#292929]">
      <Navbar />
      <BlurFade inView delay={0.4} className="mt-24 items-center">
        <div className="section-heading max-w-7xl px-6">
          <h2 className="section-title tracking-tight md:text-[40px]">
            Fizioterapeita konsultācija
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
          src="/konsultacija.jpg"
          alt="Fizioterapeita konsultācija"
          width={800}
          height={60}
          className="rounded-xl"
        />
        <h1 className="mt-2 text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E]">
          Šis process iedalās 3 posmos:
        </h1>
        <div className="mt-8 flex max-w-3xl flex-col gap-3">
          <h1 className="text-[22px] leading-[30px] tracking-tight text-[#010D3E]">
            1. Anamnēzes ievākšana
          </h1>
          <p>
            Fizioterapeits Jums uzdos jautājumus saistībā ar problēmu. Kur sāp?
            Kad sāp? Kādās kustībās sāp? Vai ir kādas darbības, kas atvieglo
            sāpes? Cik sen jau sāp? Vai ir bijušas šādas epizodes jau iepriekš?
          </p>
        </div>
        <div className="mt-8 flex max-w-3xl flex-col gap-3">
          <h1 className="text-[22px] leading-[30px] tracking-tight text-[#010D3E]">
            2. Fizioterapijas testi
          </h1>
          <p>
            Pēc anamnēzes ievākšanas fizioterapeits var izvērtēt Jūsu stāju, lai
            izvērtētu, kādā stāvoklī ir Jūsu muskuļi. Ja ir ievērojamas stājas
            izmaiņas (piemēram, viens plecs augstāk par otru, iegurņa rotācija,
            utt.), tad fizioterapeits to sev piefiksē, ka šim cilvēkam ir
            muskuļu disbalanss un atzīmē, kuri muskuļi ir galvenie aizdomās
            turamie stājas izmaiņām.
          </p>
          <p>
            Kad stāja ir izvērtēta, fizioterapeits var palūgt Jūs apgulties uz
            kušetes (masāžas galda), lai sāktu testēt muskuļus izolētāk. Sāksim
            ar kustību amplitūdas izvērtēšanu locītavās, bet pēc tam - muskuļu
            spēka izvērtēšanu. Visbiežāk tiks testēti muskuļi, kas ir apkārt
            locītavām, kuras ir tuvāk problēmzonai. Fizioterapeits var veikt arī
            specifiskus fizioterapijas testus konkrētu diagnožu izslēgšanai.
            Piemēram, var veikt &quot;tukšas bundžas&quot; (empty can) testu,
            lai notestētu, vai pie pleca problēmas ir aktuāls muskuļa
            supraspinatus bojājums.
          </p>
        </div>
        <div className="mt-8 flex max-w-3xl flex-col gap-3">
          <h1 className="text-[22px] leading-[30px] tracking-tight text-[#010D3E]">
            3. Fizioterapijas plāna izstrāde
          </h1>
          <p>
            Brīdī, kad cilvēks ir izjautāts un fizioterapijas testi veikti,
            fizioterapeits ar Jums izrunās iespējamos problēmas cēloņus un
            piedāvās savu redzējumu tā ārstēšanai. Visbiežāk tas ir vingrošanas
            kurss vai masāžas kurss, vai vingrošanas+masāžas kurss.
          </p>
        </div>
        <div className="mt-8 flex max-w-3xl gap-3">
          <KonsultacijaPricing />
        </div>
        <div className="mt-8 flex max-w-3xl gap-3">
          <BlurFade delay={0.43}>
            <Link href="/">
              <Button className="rounded-md bg-[#292929] px-3 text-xs hover:bg-black hover:text-white">
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

export default Konsultacija;
