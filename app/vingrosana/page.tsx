import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { VingrosanaPricing } from "@/components/VingrosanaPricing";

export const metadata: Metadata = {
  title: `Ārstnieciskā vingrošana`,
  icons: {
    icon: "https://www.fiziokaspars.lv/favicon.ico",
  },
  description: "Sertificēts fizioterapeits Siguldā. Piedāvāju fizioterapeita konsultāciju, ārstniecisko masāžu, ārstniecisko vingrošanu un kinezioloģisko teipošanu",
  keywords: ['Fizioterapeits', 'Fizioterapeits Sigulda', 'Masāža', 'Masāža Sigulda', 'Ārstnieciskā vingrošana', 'Ārstnieciskā vingrošana Sigulda', 'Teipošana', 'Teipošana Sigulda'],
  openGraph: {
    title: `Breģis Kaspars - fizioterapeita prakse`,
    description: "Sertificēts fizioterapeits Siguldā. Piedāvāju fizioterapeita konsultāciju, ārstniecisko masāžu, ārstniecisko vingrošanu un kinezioloģisko teipošanu",
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
}

const Vingrosana = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center text-[#292929]">
      <Navbar />
      <BlurFade inView delay={0.4} className="mt-24 items-center">
        <div className="section-heading max-w-7xl px-6">
          <h2 className="section-title tracking-tight md:text-[40px]">
            Ārstnieciskā vingrošana
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
          src="/vingrosana.png"
          alt="Ārstnieciskā vingrošana"
          width={800}
          height={60}
          className="rounded-xl"
        />
        <h1 className="mt-2 text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E]">
          Vingrošanas pamatprincipi
        </h1>
        <div className="mt-8 flex max-w-3xl flex-col gap-3">
          <h1 className="text-[22px] leading-[30px] tracking-tight text-[#010D3E]">
            Kāpēc vajag vingrot? Kāpēc nav izgudrota maģiska tablete, kas
            palīdzēs?
          </h1>
          <p>
            Ārstnieciskās vingrošanas pamatā ir muskuļu disbalansa mazināšana
            vai muskuļu spēka atgūšana pēc kādas konkrētas traumas vai
            operācijas. Sāksim ar to, ka <b>nav veselu cilvēku ar ideālu stāju</b>. Tas
            saistīts ar to, ka jebkuram cilvēkam viena ir dominējošā roka vai
            kāja viņa ikdienas aktivitātēs - nav svarīgi, vai tas ir profesionāls
            basketbolists, ofisa darbinieks vai pensionārs, kas izbauda sev
            sarūpēto atpūtu. Kaut vai tas, kā mēs sēžam - gribās atbalstīt vienu
            elkoni vairāk kā otru. Kaut vai tas, ka pulksteni nēsājam visbiežāk
            uz kreisās rokas. Kaut vai tas, ka telefonu nēsājam līdzi pārsvarā
            vienā un tai pašā kabatā. Jo vairāk šādu asimetrisku darbību, jo
            vairāk ir jādomā par ārstniecisko vingrošanu muskuļu balansa
            saglabāšanai.
          </p>
          <p>
            Iedomājamies situāciju - mēs sēžam pie auto stūres satiksmē. Labais
            elkonis balstās uz roku balsta, esam sasvērušies ar ķermeņa augšdaļu
            uz labo pusi. Liekas - kas tad tur tāds? Un tagad iedomāsimies to
            pašu scenāriju, tikai galvenajā lomā ir tālbraucējs ar 30 gadu stāžu
            - kas būs redzams viņa stājā? Kādā stāvoklī būs mugurkaula jostas
            daļa? Mugurkaula krūšu daļa? Plecu zona?
          </p>
          <p>
            Par tableti runājot... Tablete var mazināt iekaisumu, var mazināt
            tūsku, var mazināt sāpes. Bet tas iekaisums plecā, vai tūska pie
            L4-L5 starpskriemeļu diska, kas kairina nervu saknīti, vai sāpes
            mugurā <b>ir problēmas sekas</b>. Problēmas cēlonis (tālbraucēja gadījumā)
            ir muskuļu disbalanss. Tāpēc vajag vingrot, lai atgūtu vienādu
            muskuļu spēku starp labo un kreiso ķermeņa pusi, atgūtu pareizas
            spēku proporcijas apkārt locītavām. Jo cietās struktūras (kauli,
            locītavas) tiks vilktas spēcīgākā muskuļa virzienā. Muskuļu
            disbalanss ir iemesls, kāpēc rodas stājas izmaiņas.
          </p>
        </div>
        <div className="mt-8 flex max-w-3xl flex-col gap-3">
          <h1 className="text-[22px] leading-[30px] tracking-tight text-[#010D3E]">
            Ja man nekas nesāp, vai man ir jāvingro?
          </h1>
          <p>
            Kā jau pirms tam runājām, nav cilvēku ar ideālu stāju. Asimetrija ir
            visur ikdienā. Tas, ka šobrīd nav sāpes, ir labi, bet vai sāpes
            nebūs arī rītdien? Garantijas nav. Viegla 20-30min vingrošana būtu
            ieteicama ikvienam, lai saglabātu kustību apjomu locītavās un
            simetriski pastrādātu uz locītavām apkārt esošajiem muskuļiem.
          </p>
        </div>
        <div className="mt-8 flex max-w-3xl gap-3">
          <VingrosanaPricing />
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

export default Vingrosana;
