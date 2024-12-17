import Image from "next/image";
import React from "react";

import BlurFade from "./ui/blur-fade";

const TrustedBy = () => {
  return (
    <BlurFade
      inView
      delay={0.35}
      className="z-30 mx-auto mt-10 flex w-full max-w-7xl flex-col items-center overflow-hidden px-6  pb-40 tracking-wider text-black drop-shadow-2xl sm:mt-16 md:mt-24 lg:mt-28"
    >
      <h1 className="font-bold">TRUSTED BY TEAMS FROM AROUND THE WORLD</h1>
      <div className="mt-6 flex w-full items-center justify-between rounded-lg bg-white px-6 py-4  md:px-8 ">
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
