import React from "react";

import Navbar from "@/components/Navbar";
import BlurFade from "@/components/ui/blur-fade";
import Vizitkarte from "@/components/Vizitkarte";

const ParMani = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center px-6 text-black">
      <Navbar />
      <BlurFade inView delay={0.4} className="mt-24 items-center">
        <div className="section-heading max-w-7xl px-6">
          <h2 className="section-title tracking-tight md:text-[40px]">
            Par mani
          </h2>
          {/* <p className="section-description mt-5">Kā tas notiek?</p> */}
        </div>
      </BlurFade>
      <Vizitkarte />
    </div>
  );
};

export default ParMani;
