import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/brevit";
import BlogPageClient from "@/components/blog/BlogPageClient";
import { breadcrumbSchema } from "@/lib/schema";

export const revalidate = 600;

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts();
    const categories = [
      ...new Set(posts.map((p) => p.focusKeyword).filter(Boolean)),
    ];
    return categories.map((category) => ({ category: encodeURIComponent(category) }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const decoded = decodeURIComponent(category);

  return {
    title: `${decoded} Articles`,
    description: `Read the latest QuickSecure articles about ${decoded.toLowerCase()} for K-12 schools.`,
    alternates: { canonical: `/blog/category/${category}` },
    openGraph: {
      title: `${decoded} Articles | QuickSecure Blog`,
      description: `Read the latest QuickSecure articles about ${decoded.toLowerCase()} for K-12 schools.`,
      siteName: "QuickSecure",
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const decoded = decodeURIComponent(category);

  let posts: Awaited<ReturnType<typeof getBlogPosts>> = [];
  try {
    const allPosts = await getBlogPosts();
    posts = allPosts.filter((p) => p.focusKeyword === decoded);
  } catch {
    // API unavailable
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: decoded, path: `/blog/category/${category}` },
            ])
          ),
        }}
      />
      <BlogPageClient posts={posts} categoryTitle={decoded} />
    </>
  );
}
