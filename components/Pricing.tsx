"use client";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { WatchIcon } from "lucide-react";
import BlurFade from "./ui/blur-fade";
import { cn } from "@/lib/utils";
const pricingTiers = [
  {
    title: "Konsultācija",
    monthlyPrice: "30",
    buttonText: "Pierakstīties",
    popular: false,
    inverse: false,
    features: ["Līdz 60min"],
  },
  {
    title: "Vingrošana",
    monthlyPrice: "15-20",
    buttonText: "Pierakstīties",
    popular: false,
    inverse: false,
    features: ["30min vai 50min"],
  },
  {
    title: "Masāža",
    monthlyPrice: "20-30",
    buttonText: "Pierakstīties",
    popular: true,
    inverse: true,
    features: ["30min, 40min vai 50min"],
  },
  {
    title: "Teipošana",
    monthlyPrice: "Līdz 20",
    buttonText: "Pierakstīties",
    popular: false,
    inverse: false,
    features: ["Līdz 30min"],
  },
];

export const Pricing = () => {
  return (
    <section className="pt-24 md:pt-40 w-full flex flex-col items-center">
      <div className="container max-w-7xl px-6">
        <BlurFade inView delay={0.3}>
          <div className="section-heading">
            <h2 className="section-title">Cenrādis</h2>
            <p className="section-description mt-5">
              Aktuālās cenas no 01.01.2025.
            </p>
          </div>
        </BlurFade>
        <BlurFade inView delay={0.4} className="">
          <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
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
                      <div className="inline-flex text-xs px-2 py-1.5 rounded-xl border border-white/20">
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
                          className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                        >
                          Populārs!
                        </motion.span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1 mt-[30px]">
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
                  <ul className="flex flex-col gap-5 mt-8">
                    {features.map((feature, i) => (
                      <li key={i} className="text-sm flex items-center gap-4">
                        <WatchIcon className="h-6 w-6" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </BlurFade>
      </div>
    </section>
  );
};
