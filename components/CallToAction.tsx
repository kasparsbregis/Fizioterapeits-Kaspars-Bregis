import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "./ui/button";

const CallToAction = () => {
  return (
    <div className="flex w-full flex-col items-center px-6">
      <div className="mt-24 flex max-w-[1000px] items-center justify-between rounded-3xl bg-gradient-to-r from-red-500 to-orange-500 px-6 shadow-xl">
        <div className="flex h-[300px]  flex-col items-center justify-center gap-6">
          <h1 className="section-title text-[36px] leading-tight md:px-24">
            Atbrīvojies no sāpēm. Šodien.
          </h1>
          <Link href={"/"}>
            <Button className="w-[240px]">Pieteikties</Button>
          </Link>
        </div>
        <div className="flex h-[300px] flex-col overflow-hidden pt-10">
          <Image
            src={"/kb.png"}
            alt="Kaspars Bregis"
            width={180}
            height={180}
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
