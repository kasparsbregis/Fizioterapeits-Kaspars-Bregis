import { Metadata } from "next";
import React from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BlurFade from "@/components/ui/blur-fade";
import Vizitkarte from "@/components/Vizitkarte";

export const metadata: Metadata = {
  title: `Par mani`,
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

const ParMani = () => {
  return (
    <div className="flex w-full flex-col items-center text-black">
      <Navbar />
      <BlurFade inView delay={0.15} className="mt-24 flex items-center">
        <div className="section-heading max-w-7xl px-6">
          <h2 className="section-title mb-16 tracking-tight md:text-[40px]">
            Par mani
          </h2>
          {/* <p className="section-description mt-5">Kā tas notiek?</p> */}
        </div>
      </BlurFade>
      <Vizitkarte />
      <Footer />
    </div>
  );
};

export default ParMani;
