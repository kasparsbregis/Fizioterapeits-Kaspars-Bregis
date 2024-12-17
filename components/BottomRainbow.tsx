import React from "react";

import BlurFade from "./ui/blur-fade";

const BottomRainbow = () => {
  return (
    // <div className="w-full bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))] bottom-0 fixed z-50 h-14 flex items-center px-2">
    <BlurFade className="fixed bottom-[-6px] z-50 w-full" delay={1}>
      <div className="fixed bottom-0 z-50 flex h-8 w-full items-center justify-end bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]">
        <div className="flex w-full items-center justify-between px-10">
          <div></div>
          <div className="text-sm font-light tracking-tighter">
            Izmanto kodu &quot;<span className="font-bold">KASIS20</span>&quot;,
            lai iegūtu 20% atlaidi!
          </div>
          <div></div>
        </div>
      </div>
    </BlurFade>
  );
};

export default BottomRainbow;
