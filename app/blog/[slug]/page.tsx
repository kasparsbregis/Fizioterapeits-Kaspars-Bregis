import { ArrowLeftIcon } from "lucide-react";
// import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";

import { posts } from "../../data/data";

// Server-side function to generate metadata
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }): Promise<Metadata> {
//   const slug = (await params).slug; // No need to await params

//   const post = posts.find((p) => p.slug === slug);

//   if (!post) {
//     return {
//       title: "Post Not Found",
//       description: "The post you are looking for does not exist.",
//     };
//   }

//   return {
//     title: `${post.title} | FizioKaspars`,
//     description: post.excerpt,
//     openGraph: {
//       title: post.title,
//       description: post.excerpt,
//       type: "article",
//       publishedTime: post.date,
//     },
//   };
// }

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug; // No need to await params

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound(); // redirects to a 404 page
  }

  return (
    <div className="flex h-screen w-full flex-col items-center text-black">
      <Navbar />
      <BlurFade inView delay={0.3} className="mt-24">
        <div className="section-heading">
          <h2 className="section-title">{post.title}</h2>
          <p className="section-description flex flex-col items-end text-[14px]">
            {post.date}
          </p>
        </div>
      </BlurFade>
      <BlurFade inView delay={0.4}>
        <div className="mt-6 flex w-full max-w-4xl flex-col items-center px-6">
          <Image
            src={"/vingrosana.png"}
            alt="vingrosana"
            width={750}
            height={60}
            className="rounded-lg"
          />
          <p className="mt-5">{post.content}</p>
        </div>
      </BlurFade>
      <BlurFade inView delay={0.45} className="mt-5">
        <Link href={"/blog"}>
          <Button variant={"default"} className="flex justify-center">
            <ArrowLeftIcon className="ml-1 size-1" />
            <p>Atpakaļ uz blogu</p>
          </Button>
        </Link>
      </BlurFade>
      <Footer />
    </div>
  );
}
