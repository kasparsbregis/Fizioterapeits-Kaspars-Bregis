import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "./ui/button";

const CallToAction = () => {
  return (
    <div className="flex w-full flex-col items-center px-6">
      <div className="mt-24 flex w-full max-w-4xl items-center justify-between rounded-3xl bg-gradient-to-r from-red-500 to-orange-500 px-6 shadow-xl">
        <div className="flex w-4/5 flex-col items-center justify-center gap-6">
          <h1 className="section-title text-[36px] leading-tight md:px-24">
            Atbrīvojies no sāpēm šodien!
          </h1>
          <Link href={"/"}>
            <Button className="w-[240px]">Pieteikties</Button>
          </Link>
        </div>
        <div className="flex flex-col justify-end overflow-hidden pt-10">
          <Image
            src={"/kb.png"}
            alt="Kaspars Bregis"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
