import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/brevit";
import BlogPageClient from "@/components/blog/BlogPageClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on K-12 school safety, emergency preparedness, and campus operations.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | QuickSecure",
    description:
      "Insights on K-12 school safety, emergency preparedness, and campus operations.",
    siteName: "QuickSecure",
  },
};

export default async function BlogPage() {
  let posts: Awaited<ReturnType<typeof getBlogPosts>> = [];
  try {
    posts = await getBlogPosts();
  } catch {
    // API unavailable — show empty state
  }

  return <BlogPageClient posts={posts} />;
}
