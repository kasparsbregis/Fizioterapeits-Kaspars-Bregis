import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import BlurFade from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

import { posts } from "../data/data";

export const metadata: Metadata = {
  title: "Blogs || Fizioterapeits Kaspars Breģis",
  description: "Sertificēts fizioterapeits Siguldā",
};

export default function BlogIndexPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center text-black">
      <Navbar />
      <BlurFade inView delay={0.3} className="mt-24">
        <div className="section-heading">
          <h2 className="section-title">Blogs</h2>
          <p className="section-description mt-5">
            Viss par un ap fizioterapiju!
          </p>
        </div>
      </BlurFade>
      <div className="mt-16">
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <BlurFade inView delay={0.4}>
                <Link href={`/blog/${post.slug}`}>
                  <div className="mb-6 flex h-[250px] w-full max-w-4xl flex-col px-6 lg:h-[150px] lg:flex-row">
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
                          <h1 className="font-bold">{post.title}</h1>
                          <p className="flex break-words text-justify">
                            {post.content}
                          </p>
                          <p className="text-sm">{post.date}</p>
                        </div>
                      </div>
                    </MagicCard>
                  </div>
                </Link>
              </BlurFade>
            </li>
          ))}
        </ul>
      </div>
      {/* <div
        className={
          "flex h-[500px] w-full max-w-7xl flex-col gap-4 lg:h-[250px] lg:flex-row px-6"
        }
      >
        <MagicCard
          className="cursor-pointer flex items-center shadow-2xl px-2"
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
            <div className="flex flex-col px-4 items-center">
              <h1 className="font-bold">Vai vajag stiepties?</h1>
              <p className="break-words flex text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus in similique ea tenetur cupiditate sapiente impedit
                sunt ipsa veritatis non consectetur ex, asperiores explicabo
                pariatur expedita soluta sit eius doloribus.
              </p>
            </div>
          </div>
        </MagicCard>
      </div> */}
    </div>
  );
}
