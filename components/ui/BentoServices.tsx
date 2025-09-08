import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Calendar, Icon, Share2Icon } from "lucide-react";

import { BentoGrid, BentoCard } from "./bento-grid";
import LightBlurFade from "./light-blur-fade";

const features = [
  {
    Icon: FileTextIcon,
    name: "Fizioterapeita konsultācija",
    description:
      "Anamnēzes ievākšana, locītavu kustību apjoma noteikšana, muskuļu spēka testi, fizioterapijas speciālie testi, rehabilitācijas plāna izstrāde",
    href: "/konsultacija",
    cta: "Uzzināt vairāk",
    className:
      "col-span-3 lg:col-span-1 bg-[url('/konsultacija.jpg')] bg-cover bg-center",
  },
  {
    Icon: BellIcon,
    name: "Ārstnieciskā vingrošana",
    description:
      "Fizioterapeita sastādīto vingrinājumu izpilde fizioterapeita klātbūtnē",
    href: "/vingrosana",
    cta: "Uzzināt vairāk",
    className:
      "col-span-3 lg:col-span-2 bg-[url('/vingrosana.jpg')] bg-cover bg-center",
  },
  {
    Icon: Share2Icon,
    name: "Ārstnieciskā masāža",
    description: "Masāža, kas uzlabos muskuļu, locītavu un ķermeņa pašsajūtu",
    href: "/masaza",
    cta: "Uzzināt vairāk",
    className:
      "col-span-3 lg:col-span-2 bg-[url('/masaza.jpg')] bg-cover bg-center",
  },
  {
    Icon: CalendarIcon,
    name: "Teipošana",
    description:
      "Palīdzēs muskuļu tonusa regulēšanai, locītavu stabilizācijai un tūskas mazināšanai",
    className:
      "col-span-3 lg:col-span-1 bg-[url('/teiposana.jpg')] bg-cover bg-center",
    href: "/teiposana",
    cta: "Uzzināt vairāk",
  },
];

export function BentoServices() {
  return (
    <LightBlurFade
      inView
      delay={0.1}
      className="mt-24 flex w-full flex-col items-center tracking-wider md:mt-40"
    >
      <h2 className="section-title">Pakalpojumi</h2>
      <p className="section-description mt-5 pb-6 md:pb-12">
        Uzziniet vairāk, kādus pakalpojumus un metodes variet saņemt
      </p>
      <BentoGrid className="">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </LightBlurFade>
  );
}
