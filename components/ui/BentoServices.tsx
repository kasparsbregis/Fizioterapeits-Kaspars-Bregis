import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Calendar, Icon, Share2Icon } from "lucide-react";

import { BentoGrid, BentoCard } from "./bento-grid";
import BlurFade from "./blur-fade";

const features = [
  {
    Icon: FileTextIcon,
    name: "Fizioterapeita konsultācija",
    description:
      "Anamnēzes ievākšana, muskuļu spēka testi, muskuļu garuma testi, fizioterapijas speciālie testi, rehabilitācijas plāna izstrāde",
    href: "/konsultacija",
    cta: "Uzzināt vairāk",
    className:
      "col-span-3 lg:col-span-1 bg-[url('/konsultacija.png')] bg-cover bg-center",
  },
  {
    Icon: BellIcon,
    name: "Ārstnieciskā vingrošana",
    description:
      "Fizioterapeita sastādīto vingrinājumu izpilde fizioterapeita klātbūtnē",
    href: "/vingrosana",
    cta: "Uzzināt vairāk",
    className:
      "col-span-3 lg:col-span-2 bg-[url('/vingrosana.png')] bg-cover bg-center",
  },
  {
    Icon: Share2Icon,
    name: "Ārstnieciskā masāža",
    description: "Muskuļu tonusu mazinoša, relaksējoša masāža",
    href: "/masaza",
    cta: "Uzzināt vairāk",
    className:
      "col-span-3 lg:col-span-2 bg-[url('/masaza.png')] bg-cover bg-center",
  },
  {
    Icon: CalendarIcon,
    name: "Teipošana",
    description: "Use the calendar to filter your files by date.",
    className:
      "col-span-3 lg:col-span-1 bg-[url('/teiposana.png')] bg-cover bg-center",
    href: "/teiposana",
    cta: "Uzzināt vairāk",
  },
];

export function BentoServices() {
  return (
    <BlurFade
      inView
      delay={0.35}
      className="w-full flex flex-col items-center tracking-wider mt-24 md:mt-40"
    >
      <h2 className="section-title ">Pakalpojumi</h2>
      <p className="section-description mt-5 pb-6 md:pb-12">
        Uzziniet vairāk, kādus pakalpojumus un metodes variet saņemt
      </p>
      <BentoGrid className="">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </BlurFade>
  );
}