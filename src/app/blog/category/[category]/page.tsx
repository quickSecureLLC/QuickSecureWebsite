import type { Metadata } from "next";
import { getBlogPosts, slugifyCategory } from "@/lib/brevit";
import BlogPageClient from "@/components/blog/BlogPageClient";
import { breadcrumbSchema } from "@/lib/schema";

export const revalidate = 600;

/** Find the original focusKeyword that matches a slugified category param */
function findCategory(
  posts: Awaited<ReturnType<typeof getBlogPosts>>,
  slugParam: string
): string | null {
  const keywords = [...new Set(posts.map((p) => p.focusKeyword).filter(Boolean))];
  return keywords.find((kw) => slugifyCategory(kw) === slugParam) ?? null;
}

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts();
    const categories = [
      ...new Set(posts.map((p) => p.focusKeyword).filter(Boolean)),
    ];
    return categories.map((category) => ({ category: slugifyCategory(category) }));
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

  let displayName = category;
  try {
    const posts = await getBlogPosts();
    displayName = findCategory(posts, category) ?? category;
  } catch {
    // API unavailable
  }

  return {
    title: `${displayName} Articles`,
    description: `Read the latest QuickSecure articles about ${displayName.toLowerCase()} for K-12 schools.`,
    alternates: { canonical: `/blog/category/${category}` },
    openGraph: {
      title: `${displayName} Articles | QuickSecure Blog`,
      description: `Read the latest QuickSecure articles about ${displayName.toLowerCase()} for K-12 schools.`,
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

  let posts: Awaited<ReturnType<typeof getBlogPosts>> = [];
  let displayName = category;
  try {
    const allPosts = await getBlogPosts();
    const originalKeyword = findCategory(allPosts, category);
    if (originalKeyword) {
      displayName = originalKeyword;
      posts = allPosts.filter((p) => p.focusKeyword === originalKeyword);
    }
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
              { name: displayName, path: `/blog/category/${category}` },
            ])
          ),
        }}
      />
      <BlogPageClient posts={posts} categoryTitle={displayName} />
    </>
  );
}
