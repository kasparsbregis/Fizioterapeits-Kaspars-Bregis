import Image from "next/image";
import Link from "next/link";
import React from "react";

import BlurFade from "./ui/blur-fade";
import { Button } from "./ui/button";
import { MagicCard } from "./ui/magic-card";

const BlogPreview = () => {
  return (
    <div className="flex w-full max-w-7xl flex-col items-center px-6 pt-24 md:pt-40">
      <BlurFade inView delay={0.3}>
        <div className="section-heading">
          <h2 className="section-title">Blogs</h2>
          <p className="section-description mt-5">
            Viss par un ap fizioterapiju!
          </p>
        </div>
      </BlurFade>
      <BlurFade inView delay={0.3}>
        <div className="mt-16">
          <ul>
            <li>
              <div className="mb-6 flex h-[250px] w-full max-w-4xl flex-col px-6 lg:h-[150px] lg:flex-row">
                <Link href={"/blog/diagnoze-tendinopatija"}>
                  <MagicCard
                    className="flex cursor-pointer items-center px-2  shadow-2xl"
                    gradientColor={"#D9D9D955"}
                  >
                    <div className="flex items-center">
                      <Image
                        src={"/kb.png"}
                        alt="kaspars bedris"
                        width={160}
                        height={60}
                        className="max-w-[80px]"
                      />
                      <div className="flex flex-col gap-2 px-4">
                        <h1 className="font-bold">Diagnoze - tendinopātija</h1>
                        <p className="flex break-words text-justify">
                          Atklāšu fizioterapeitu taktiku cīņā ar tendinopātijām.
                          Runāsim par biežākajām cīpslām, kas izmaina savu
                          struktūru. Izstāsīšu atšķirības starp tendinopātiju un
                          tendinītu.
                        </p>
                        <p className="text-sm">2024.gada 16.decembris</p>
                      </div>
                    </div>
                  </MagicCard>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </BlurFade>
      <Link href={"/blog"}>
        <BlurFade inView delay={0.3}>
          <Button variant={"default"} className="mt-6">
            Aplūkot visus bloga ierakstus
          </Button>
        </BlurFade>
      </Link>
    </div>
  );
};

export default BlogPreview;
