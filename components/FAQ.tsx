import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { ArrowDownIcon } from "lucide-react";
import React from "react";

import BlurFade from "./ui/blur-fade";

const FAQ = () => {
  return (
    <div className="w-full max-w-7xl px-6 pt-24 md:pt-40">
      <BlurFade inView delay={0.35}>
        <h2 className="section-title ">Biežāk uzdotie jautājumi</h2>
        <p className="section-description mt-5 pb-6 md:pb-12">
          Ja nevariet atrast atbildi uz savu jautājumu, meklējiet atbildi
          googlē.
        </p>
      </BlurFade>
      <BlurFade inView delay={0.4}>
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col gap-6"
        >
          <AccordionItem value="item-1" className="border-b border-black">
            <AccordionTrigger className="w-full">
              <div className="flex items-center justify-between gap-6">
                <p className="text-left font-bold">
                  Vai es sadarbojos ar veselības apdrošināšanas polisēm?
                </p>
                <ArrowDownIcon size={16} />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Īsā atbilde - jā! Garā atbilde - process ar apdrošināšanas
              kompānijām noris šādi:
              <ol start={1}>
                <li>
                  1. Jūs nonākat pie manis, mēs veicam nepieciešamās darbības
                </li>
                <li>
                  2. Jūs saņemat kvīti par pakalpojumu (fizioterapeita
                  konsultācija / ārstnieciskā vingrošana / ārstnieciskā masāža /
                  teipošana)
                </li>
                <li>
                  3. Lai atgūtu naudu par pakalpojumu, Jums ir jānosūta šīs
                  kvīts bilde Jūsu apdrošinātājiem. Kvītī ir norādīts manas
                  ārstniecības iestādes kods, ko uzmeklējot, apdrošinātāji
                  atgriezīs Jums naudu
                </li>
              </ol>
              <span className="text-[#f5712c]">
                Svarīga nianse! Visbiežāk apdrošinātāji prasīs arī atsūtīt
                nosūtījumu pie fizioterapeita, tas nozīmē, ka dodoties pie
                manis, Jums ir jābūt nosūtījumam!
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b border-black">
            <AccordionTrigger className="w-full">
              <div className="flex items-center justify-between gap-6">
                <p className="text-left font-bold">
                  Vai es strādāju ar bērniem?
                </p>
                <ArrowDownIcon size={16} />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Strādāju ar bērniem sākot ar 14 gadu vecumu.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b border-black">
            <AccordionTrigger className="w-full">
              <div className="flex items-center justify-between gap-6">
                <p className="text-left font-bold">Kāds ir mans darba laiks?</p>
                <ArrowDownIcon size={16} />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col">
                <p>
                  <span className="font-semibold">Pirmdiena:</span> 08:00-20:00
                </p>
                <p>
                  <span className="font-semibold">Otrdiena:</span> 08:00-20:00
                </p>
                <p>
                  <span className="font-semibold">Trešdiena:</span> 08:00-20:00
                </p>
                <p>
                  <span className="font-semibold">Ceturtdiena:</span>{" "}
                  08:00-20:00
                </p>
                <p>
                  <span className="font-semibold">Piektdiena:</span> 08:00-20:00
                </p>
                <p>
                  <span className="font-semibold">Sestdiena:</span> 10:00-13:00
                </p>
                <p>
                  <span className="font-semibold">Svētdiena:</span> Brīvs
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-b border-black">
            <AccordionTrigger className="w-full">
              <div className="flex items-center justify-between gap-6">
                <p className="text-left font-bold">
                  Vai var norēķināties ar karti?
                </p>
                <ArrowDownIcon size={16} />
              </div>
            </AccordionTrigger>
            <AccordionContent>Apmaksa tikai skaidrā naudā.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </BlurFade>
    </div>
  );
};

export default FAQ;
