import { ArrowRightIcon } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import AnimatedShinyText from "./ui/animated-shiny-text";

const HeroButton = () => {
  return (
    <div className="flex items-center justify-center mt-20 h-7 ">
      <div
        className={cn(
          "group rounded-full border text-xs text-white transition-all ease-in hover:cursor-pointer border-white/5 bg-[#f5712c] hover:bg-orange-600"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out  hover:text-white text-white/50 tracking-tight">
          <span>🏋️🏃‍♂️ Online fizioterapija jau te!</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  );
};

export default HeroButton;
