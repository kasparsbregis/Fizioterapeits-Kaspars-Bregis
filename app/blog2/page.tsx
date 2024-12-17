// app/blog2/page.tsx
import Link from "next/link";
import { posts } from "./data";
import { MagicCard } from "@/components/ui/magic-card";
import Image from "next/image";

export default function BlogIndexPage() {
  return (
    <div className="flex flex-col h-screen items-center w-full text-black">
      <div className="section-heading mt-24">
        <h2 className="section-title">Blogs</h2>
        <p className="section-description mt-5">All about physiotherapy!</p>
      </div>

      <div className="mt-16">
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog2/${post.slug}`}>
                <MagicCard className="cursor-pointer flex items-center shadow-2xl px-2">
                  <div className="flex items-center">
                    <Image
                      src={"/kb.png"}
                      alt="kaspars bedris"
                      width={160}
                      height={60}
                      className="max-w-[80px]"
                    />
                    <div className="flex flex-col px-4 gap-2">
                      <h1 className="font-bold">{post.title}</h1>
                      <p className="text-sm">{post.excerpt}</p>
                      <p className="text-xs">{post.date}</p>
                    </div>
                  </div>
                </MagicCard>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
