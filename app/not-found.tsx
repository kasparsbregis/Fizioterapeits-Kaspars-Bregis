import Link from "next/link";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-between text-black">
      <Navbar />
      <div className="mt-56 flex flex-col items-center">
        <h1 className="text-[126px] font-bold leading-none md:text-[160px]">
          404
        </h1>
        <h1 className="text-[20px] font-medium md:text-[28px]">
          Atvainojiet, šāda lapa neeksistē!
        </h1>
        <Link href="/">
          <Button variant={"default"} className="mt-6">
            Atgriezties uz sākumu
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
