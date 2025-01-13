import Image from "next/image";
import Link from "next/link";
import React from "react";

import Footer from "@/components/Footer";
import { MasazaPricing } from "@/components/MasazaPricing";
import Navbar from "@/components/Navbar";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";

const Masaza = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center text-[#292929]">
      <Navbar />
      <BlurFade inView delay={0.4} className="mt-24 items-center">
        <div className="section-heading max-w-7xl px-6">
          <h2 className="section-title tracking-tight md:text-[40px]">
            Ārstnieciskā masāža
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
          src="/masaza.png"
          alt="Ārstnieciskā masāža"
          width={800}
          height={60}
          className="rounded-xl"
        />
        {/* <h1 className="mt-2 text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E]">
          Ārstnieciskās masāžas elementi
        </h1> */}
        <div className="mt-8 flex max-w-3xl flex-col gap-3">
          <h1 className="text-[22px] leading-[30px] tracking-tight text-[#010D3E]">
            Kāda ir ārstnieciskās masāžas iedarbība?
          </h1>
          <p>
            Ārstnieciskā masāža ir viena no senākajām ārstniecības tehnikām. Tā
            var mazināt muskuļu tonusu (spriedzi), uzlabo apasiņošanu muskuļiem
            un ādai, tas, savukārt, uzlabo vielmaiņas procesus muskuļos un ādā,
            uzlabojot muskuļu funkcionalitāti (izturību un elastību) un ādas
            kvalitāti. Ārstnieciskai masāžai piemīt arī pretiekaisuma un
            prettūskas efekts, tas, savukārt, var mazināt sāpes. Tāpat arī
            uzlabojas psihoemocionālais fons, masāža var mazināt stresu,
            galvassāpes, reiboņus.
          </p>
        </div>
        <div className="mt-8 flex max-w-3xl flex-col gap-3">
          <h1 className="text-[22px] leading-[30px] tracking-tight text-[#010D3E]">
            Ko labāk izvēlēties - masāžu vai vingrošanu?
          </h1>
          <p>
            Visiem taču labāk patīk masāža kā vingrošana, vai ne? Tas saistīts
            ar to, ka cilvēks pēc dabas ir slinks. No tā izriet tas, ka
            organisms izvēlēsies maksimāli energoefektīvāko (process, kas
            pieprasa vismazāko enerģijas patēriņu) ceļu problēmas risināšanai.
            Tāpēc visbiežāk fizioterapeits izvēlēsies piedāvāt vingrošana+masāža
            kursu problēmas risināšanai. Ar vingrošanu iedarboties uz muskuļu
            disbalansu - palielināt spēku muskuļos, kur pietrūkst spēks un
            uzlabot muskuļa elasticitāti tajos muskuļos, kuros spriedze ir par
            lielu. Un pēc vingrošanas vēl izspaidīt &quot;savilktos&quot;
            muskuļus, lai ir spēcīgāks efekts no fizioterapijas nodarbības.
          </p>
        </div>
        <Image
          src="/bankas.png"
          alt="Ārstnieciskā masāža"
          width={800}
          height={60}
          className="mt-20 rounded-xl"
        />
        <div className="mt-8 flex max-w-3xl flex-col gap-3">
          <h1 className="text-[22px] leading-[30px] tracking-tight text-[#010D3E]">
            Banku terapija - kas tas tāds?
          </h1>
          <p>
            Arvien populārāka mūsdienās paliek banku terapija. Daudzi noteikti
            atceras, ka kādreiz viņiem ir liktas bankas uz muguras. Visbiežāk to
            darīja gadījumos, kad bija augšējo elpceļu saslimšanas. Tā bija
            klasiskā banku terapija - stikla banku no iekšpuses iezieda ar
            spirtu, aizdedzināja un tad lika uz muguras. Uguns, lai turpinātos,
            izvelk visu skābekli starp ādu un banku, tādā veidā izveidojot
            vakuumu.
          </p>
          <p>
            Kas īsti notiek? Banku terapija uzlabo muskuļaudu vielmaiņas
            procesus, tādā veidā kvalitatīvāk apgādā muskuļus ar skābekli,
            samazina muskuļu tonusu. Īpaši labi banku terapija strādā cilvēkiem
            ar palielinātu jostas daļas lordozi (fizioloģisku mugurkaula
            izliekumu). Tas saistīts ar to, ka muguras atliecējmuskuļi var
            burtiski &quot;pielipt&quot; pie mugurkaula. Bankai piesūcoties šie
            muskuļi un to fascija (muskuļa ārējais apvalks) tiek pavilkti nost
            no mugurkaula, tas palielina telpu muskulim, tādā veidā muskulis
            kļūst elastīgāks, mazinās muskuļu tonuss. Šo tehniku izmantoju kā
            papildus metodi masāžai.
          </p>
        </div>
        <div className="mt-8 flex max-w-3xl gap-3">
          <MasazaPricing />
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

export default Masaza;
