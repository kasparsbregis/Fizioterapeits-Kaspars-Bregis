"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import BlurFade from "./ui/blur-fade";
const LogoTicker = () => {
  return (
    <BlurFade
      inView
      delay={0.4}
      className="w-full items-center flex flex-col px-6 md:max-w-7xl mt-24 md:mt-40"
    >
      <h2 className="section-title">Sadarbības partneri</h2>
      <div className="mt-6 py-4 md:py-8 bg-white rounded-xl max-w-[380px] sm:max-w-[600px] md:max-w-7xl">
        <div className="container">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <motion.div
              className="flex gap-14 flex-none pr-14 "
              animate={{ translateX: "-50%" }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <Image
                src={"/GitHub.png"}
                alt="GitHub logo"
                className="logo-ticker-image"
                width={240}
                height={60}
              />
              <Image
                src={"/Google.png"}
                alt="Google logo"
                className="logo-ticker-image"
                width={240}
                height={60}
              />
              <Image
                src={"/Microsoft.png"}
                alt="Microsoft logo"
                className="logo-ticker-image"
                width={240}
                height={60}
              />
              <Image
                src={"/Notion.png"}
                alt="Notion logo"
                className="logo-ticker-image"
                width={240}
                height={60}
              />
              <Image
                src={"/Uber.png"}
                alt="Uber logo"
                className="logo-ticker-image"
                width={240}
                height={60}
              />
              <Image
                src={"/Xbox.png"}
                alt="Xbox logo"
                className="logo-ticker-image"
                width={240}
                height={60}
              />
              {/* DUPLICATE IMAGES FOR INFITE SCROLL*/}
              <Image
                src={"/GitHub.png"}
                alt="GitHub logo"
                className="logo-ticker-image"
                width={240}
                height={60}
              />
              <Image
                src={"/Google.png"}
                alt="Google logo"
                className="logo-ticker-image"
                width={240}
                height={60}
              />
              <Image
                src={"/Microsoft.png"}
                alt="Microsoft logo"
                className="logo-ticker-image"
                width={240}
                height={60}
              />
              <Image
                src={"/Notion.png"}
                alt="Notion logo"
                className="logo-ticker-image"
                width={240}
                height={60}
              />
              <Image
                src={"/Uber.png"}
                alt="Uber logo"
                className="logo-ticker-image"
                width={240}
                height={60}
              />
              <Image
                src={"/Xbox.png"}
                alt="Xbox logo"
                className="logo-ticker-image"
                width={240}
                height={60}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </BlurFade>
  );
};

export default LogoTicker;
