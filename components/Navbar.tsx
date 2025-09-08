import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "./ui/button";
import LightBlurFade from "./ui/light-blur-fade";

const Navbar = () => {
  return (
    <LightBlurFade
      delay={0.15}
      inView
      className="fixed z-50 h-16 w-full items-center border-b border-black/20 bg-[#ceecea]/40 text-black backdrop-blur-lg"
    >
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-8">
        <Link href={"/"} className="flex items-center justify-center gap-2">
          {/* <Image src="/logo.png" height={50} width={50} alt="hello" /> */}
          {/* <span className="font-bold tracking-tighter text-[#f5712c]">
            KB.LV
          </span> */}
          <div className="flex flex-row items-center gap-1">
            <Image
              src={"/logo-fiziokaspars.png"}
              alt="Logo FizioKaspars"
              height={28}
              width={28}
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <span className="font-bold tracking-tight text-[#292929]">
              FIZIO<span className="text-[#f5712c]">KASPARS</span>
            </span>
          </div>
        </Link>
        <div className="my-auto ml-auto flex items-center gap-2">
          {/* <Button variant={"ghost"}>Log in</Button> */}
          <Link href={"/pieteikties"}>
            <Button className="h-8 rounded-md bg-[#292929] px-3 text-xs hover:bg-[#000000]">
              Pieteikties
            </Button>
          </Link>

          {/* <Link href={"/"}>
            <Button
              variant={"ghost"}
              className="h-8 rounded-md border border-[#f5712c] px-3 text-xs text-[#f5712c] hover:bg-[#f5712c] hover:text-white"
            >
              Online
            </Button>
          </Link> */}
        </div>
      </div>
    </LightBlurFade>
  );
};

export default Navbar;
