import { posts } from "../../data/data";
import BlurFade from "@/components/ui/blur-fade";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Server-side function to generate metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params; // No need to await params

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The post you are looking for does not exist.",
    };
  }

  return {
    title: `${post.title} | FizioKaspars`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params; // No need to await params

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound(); // redirects to a 404 page
  }

  return (
    <div className="flex flex-col h-screen items-center w-full text-black">
      <Navbar />
      <BlurFade inView delay={0.3} className="mt-24">
        <div className="section-heading">
          <h2 className="section-title">Blogs</h2>
          <p className="section-description mt-5">
            Viss par un ap fizioterapiju!
          </p>
        </div>
      </BlurFade>
      <BlurFade inView delay={0.4}>
        <h1>{post.title}</h1>
        <p>
          <i>{post.date}</i>
        </p>
        <p>{post.content}</p>
      </BlurFade>
    </div>
  );
}
