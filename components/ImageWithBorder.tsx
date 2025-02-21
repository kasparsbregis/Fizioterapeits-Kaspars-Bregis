import React from "react";

import { BorderBeam } from "./ui/border-beam";

const ImageWithBorder = () => {
  return (
    <div className="w-full">
      <div className="relative  mx-auto flex h-[50px] w-full flex-col items-center rounded-sm bg-gradient-to-b from-red-400 to-cyan-500  bg-cover  sm:h-[173px]  md:h-[261px] lg:h-[410px] ">
        {/* <div className="absolute bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.4)),url('/hero.png')] from-blue-400 to-transparent sm:h-[323px] sm:w-[550px] md:h-[411px] md:w-[700px] lg:h-[558px] lg:w-[950px] bg-cover h-[205px] w-[350px] flex items-center justify-center overflow-hidden rounded-lg border-1 bg-no-repeat border-white/20 md:shadow-x ">
          <BorderBeam
            borderWidth={3}
            size={350}
            duration={12}
            delay={9}
            className=""
          />
        </div> */}
        <div
          className="absolute flex h-[205px] w-[350px] items-center justify-center overflow-hidden rounded-lg from-blue-400 to-transparent bg-cover bg-no-repeat sm:h-[323px] sm:w-[550px] md:h-[411px] md:w-[700px] md:shadow-xl lg:h-[558px] lg:w-[950px]  "
          style={{
            backgroundImage: `url('/hero.png')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2))",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
          }}
        >
          <BorderBeam borderWidth={3} size={150} duration={8} delay={9} />
        </div>
      </div>
    </div>
  );
};

export default ImageWithBorder;

// bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.4)),url('/hero.png')]
