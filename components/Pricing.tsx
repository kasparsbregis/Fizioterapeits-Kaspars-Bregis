"use client";
import { motion } from "framer-motion";
import { WatchIcon } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { cn } from "@/lib/utils";

import BlurFade from "./ui/blur-fade";
import { Button } from "./ui/button";

const pricingTiers = [
  {
    title: "Konsultācija",
    monthlyPrice: "30",
    buttonText: "Pieteikties",
    popular: false,
    inverse: false,
    features: ["Līdz 60min"],
  },
  {
    title: "Vingrošana",
    monthlyPrice: "15-20",
    buttonText: "Pieteikties",
    popular: false,
    inverse: false,
    features: ["30min vai 50min"],
  },
  {
    title: "Masāža",
    monthlyPrice: "20-30",
    buttonText: "Pieteikties",
    popular: true,
    inverse: true,
    features: ["30min, 40min vai 50min"],
  },
  {
    title: "Teipošana",
    monthlyPrice: "Līdz 20",
    buttonText: "Pieteikties",
    popular: false,
    inverse: false,
    features: ["Līdz 30min"],
  },
];

export const Pricing = () => {
  return (
    <section className="flex w-full flex-col items-center pt-24 md:pt-40">
      <div className="container max-w-7xl px-6">
        <BlurFade inView delay={0.1}>
          <div className="section-heading">
            <h2 className="section-title">Cenrādis</h2>
            <p className="section-description mt-5">
              Aktuālās cenas no 01.01.2025.
            </p>
          </div>
        </BlurFade>
        <BlurFade inView delay={0.15} className="">
          <div className="mt-10 flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-center">
            {pricingTiers.map(
              (
                { title, monthlyPrice, buttonText, popular, inverse, features },
                index
              ) => (
                <div
                  key={index}
                  className={twMerge(
                    "card",
                    inverse === true && "border-black bg-[#292929] text-white"
                  )}
                >
                  <div className="flex justify-between">
                    <h3
                      className={twMerge(
                        "text-lg font-bold text-[#292929]",
                        inverse === true && "text-white/60"
                      )}
                    >
                      {title}
                    </h3>
                    {popular === true && (
                      <div className="inline-flex rounded-xl border border-white/20 px-2 py-1.5 text-xs">
                        <motion.span
                          animate={{
                            backgroundPositionX: "100%",
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "mirror",
                          }}
                          className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] bg-clip-text font-medium text-transparent [background-size:200%]"
                        >
                          Populārs!
                        </motion.span>
                      </div>
                    )}
                  </div>
                  <div className="mt-[30px] flex items-baseline gap-1">
                    <span
                      className={cn(
                        "text-4xl font-bold tracking-tighter leading-none",
                        inverse === true ? "text-white" : "text-[#292929]"
                      )}
                    >
                      {monthlyPrice} €
                    </span>
                  </div>
                  <button
                    className={twMerge(
                      "btn btn-primary w-full mt-[30px] bg-transparent border-[#f5712c] border text-[#f5712c] hover:bg-[#f5712c] hover:text-white",
                      inverse === true &&
                        "text-white bg-[#f5712c] hover:bg-orange-600"
                    )}
                  >
                    {buttonText}
                  </button>
                  <ul className="mt-8 flex flex-col gap-5">
                    {features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-4 text-sm">
                        <WatchIcon className="size-6" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </BlurFade>
        <BlurFade
          inView
          delay={0.2}
          className="mt-20 flex w-full flex-col items-center"
        >
          <Link href={"/cenradis"}>
            <Button className="bg-[#292929] hover:bg-black">
              Aplūkot pilnu cenrādi
            </Button>
          </Link>
        </BlurFade>
      </div>
    </section>
  );
};
