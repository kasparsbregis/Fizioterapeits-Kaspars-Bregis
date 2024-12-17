import { HandIcon } from "@radix-ui/react-icons";
import {
  CircleDotIcon,
  ClipboardPenIcon,
  DumbbellIcon,
  Scissors,
} from "lucide-react";
import React from "react";

import { BentoGrid, BentoCard } from "./ui/bento-grid";
import BlurFade from "./ui/blur-fade";

const features = [
  {
    Icon: ClipboardPenIcon,
    name: "Fizioterapeita konsultācija",
    description:
      "Anamnēzes ievākšana, fizioterapijas testu veikšana, plāna izstrāde un pirmās darbības sāpju mazināšanai jau pirmajā tikšanās reizē!",
    href: "/",
    cta: "Pierakstīties",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className:
      "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 bg-[url('/hero-dark.png')] bg-cover",
  },
  {
    Icon: HandIcon,
    name: "Ārstnieciskā masāža",
    description: "Mīksto audu tehnikas, mobilizācijas, manipulācijas",
    href: "/",
    cta: "Pierakstīties",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className:
      "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 bg-[url('/hero-dark.png')] bg-cover",
  },
  {
    Icon: Scissors,
    name: "Kinezioloģiskā teipošana",
    description: "Zils, melns un ādas krāsas",
    href: "/",
    cta: "Pierakstīties",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className:
      "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 bg-[url('/hero-dark.png')] bg-cover",
  },
  {
    Icon: CircleDotIcon,
    name: "Banku terapija",
    description: "Jums būs zilumi",
    href: "/",
    cta: "Pierakstīties",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className:
      "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2 bg-[url('/hero-dark.png')] bg-cover",
    style: "",
  },
  {
    Icon: DumbbellIcon,
    name: "Ārstnieciskā vingrošana",
    description:
      "Mājās neviens nevingro. Jums gribās vingrot kaut kur citur. Ir opcija to darīt pie fizioterapeita, pie tam, par to arī jāmaksā!",
    href: "/",
    cta: "Pierakstīties",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className:
      "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4 bg-[url('/hero-dark.png')] bg-cover",
  },
];

const Services = async () => {
  return (
    <BlurFade
      inView
      delay={0.35}
      className="mt-24 flex w-full flex-col items-center pb-40 tracking-wider"
    >
      <h2 className="section-title">Pakalpojumi</h2>
      <div className="mt-6 max-w-7xl px-6">
        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </BlurFade>
  );
};

export default Services;
