import { posts } from "../data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Ensure params are awaited in `generateMetadata`
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params; // Ensure params are awaited

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

// Page Component: Ensure params are awaited in the component as well
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params; // Await params here too
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound(); // redirects to a 404 page
  }

  return (
    <div className="flex flex-col h-screen items-center w-full text-black">
      <div className="section-heading mt-24">
        <h1 className="font-bold">{post.title}</h1>
        <p>{post.date}</p>
      </div>
      <div className="mt-6">
        <p>{post.content}</p>
      </div>
    </div>
  );
}
