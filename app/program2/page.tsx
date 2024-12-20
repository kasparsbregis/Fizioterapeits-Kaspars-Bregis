import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";

const Page2 = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="section-title">Tests</h1>
      <div className="flex h-[400px] w-full max-w-5xl shrink justify-between rounded-2xl bg-red-100">
        <div className="flex w-3/5 flex-col justify-center bg-yellow-200">
          <h1>Virsraksts</h1>
          <Button>Poga</Button>
        </div>
        <div className="flex flex-col justify-end bg-cyan-300">
          <Image
            src={"/kb.png"}
            alt="KB"
            width={180}
            height={180}
            className="bg-red-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Page2;
