import Link from "next/link";
import React from "react";

import { Button } from "./ui/button";
import BlurFade from "./ui/blur-fade";

const Navbar = () => {
  return (
    <BlurFade
      delay={0.25}
      inView
      className="fixed z-50 h-14 w-full items-center border-b border-black/20 bg-[#ceecea]/40 text-black backdrop-blur-lg"
    >
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-8">
        <Link href={"/"} className="flex items-center justify-center gap-2">
          {/* <Image src="/logo.png" height={50} width={50} alt="hello" /> */}
          <span className="tracking-tighter font-bold text-[#f5712c]">
            KB.LV
          </span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          {/* <Button variant={"ghost"}>Log in</Button> */}
          <Link href={"/"}>
            <Button className="bg-[#292929] hover:bg-[#000000] h-8 rounded-md px-3 text-xs ">
              Pieteikties
            </Button>
          </Link>
          <Link href={"/blog"}>
            <Button className="bg-[#292929] hover:bg-[#000000] h-8 rounded-md px-3 text-xs ">
              Blogs
            </Button>
          </Link>
          <Link href={"/"}>
            <Button
              variant={"ghost"}
              className="h-8 rounded-md px-3 text-xs border border-[#f5712c] hover:bg-[#f5712c] text-[#f5712c] hover:text-white"
            >
              Online
            </Button>
          </Link>
        </div>
      </div>
    </BlurFade>
  );
};

export default Navbar;
