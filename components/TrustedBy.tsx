import Image from "next/image";
import React from "react";
import BlurFade from "./ui/blur-fade";

const TrustedBy = () => {
  return (
    <BlurFade
      inView
      delay={0.35}
      className="w-full flex flex-col items-center mx-auto text-black mt-10 sm:mt-16 md:mt-24 lg:mt-28  pb-40 tracking-wider px-6 overflow-hidden drop-shadow-2xl z-30 max-w-7xl"
    >
      <h1 className="font-bold">TRUSTED BY TEAMS FROM AROUND THE WORLD</h1>
      <div className="mt-6 flex items-center justify-between bg-white px-6 md:px-8 py-4 rounded-lg  w-full ">
        <Image src="/Google.svg" width={60} height={60} alt="google" />
        <Image src="/Microsoft.svg" width={60} height={60} alt="microsoft" />
        <Image src="/GitHub.svg" width={60} height={60} alt="github" />
        <Image src="/Uber.svg" width={60} height={60} alt="uber" />
        <Image src="/Notion.svg" width={60} height={60} alt="notion" />
      </div>
    </BlurFade>
  );
};

export default TrustedBy;
