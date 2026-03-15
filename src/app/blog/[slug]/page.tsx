import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import MarkdownRenderer from "@/components/blog/MarkdownRenderer";
import { getBlogPost, getBlogPosts } from "@/lib/brevit";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts();
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};

  const keywords = [post.focusKeyword, ...post.relatedKeywords].filter(
    Boolean
  );

  return {
    title: post.title,
    description: post.metaDescription,
    keywords,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      siteName: "QuickSecure",
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["QuickSecure"],
      section: post.focusKeyword || "School Safety",
      tags: keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const publishedDate = new Date(post.publishedAt).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: post.title, path: `/blog/${slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline: post.title,
              description: post.metaDescription,
              url: `https://quicksecure.com/blog/${slug}`,
              datePublished: post.publishedAt,
              keywords: [post.focusKeyword, ...post.relatedKeywords].filter(
                Boolean
              ),
            })
          ),
        }}
      />
      <section
        className="pb-16 sm:pb-20 md:pb-24"
        style={{ paddingTop: "var(--top-offset)" }}
      >
        <Container>
          <article className="mx-auto max-w-[760px] pt-16 sm:pt-20 md:pt-24">
            {/* Back link */}
            <Link
              href="/blog"
              className="mb-8 inline-block text-[13px] text-white/40 transition-colors hover:text-white/60"
            >
              &larr; Back to Blog
            </Link>

            {/* Date */}
            <p className="mb-3 text-[13px] text-white/40">{publishedDate}</p>

            {/* Title */}
            <h1 className="mb-8 text-[28px] leading-[1.1] tracking-[-0.035em] text-white sm:text-[36px] md:text-[44px]">
              {post.title}
            </h1>

            {/* Content */}
            <MarkdownRenderer content={post.markdownContent} />

            {/* Sources */}
            {post.sources && post.sources.length > 0 && (
              <>
                <hr className="my-10 border-white/10" />
                <h2 className="mb-5 text-[22px] leading-[1.1] tracking-[-0.02em] text-white sm:text-[26px]">
                  Sources
                </h2>
                <ul className="space-y-4">
                  {post.sources.map((source, i) => (
                    <li key={i}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] text-blue transition-opacity hover:opacity-70"
                      >
                        {source.title}
                      </a>
                      {source.snippet && (
                        <p className="mt-1 text-[13px] leading-[1.6] text-white/40">
                          {source.snippet}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </article>
        </Container>
      </section>
    </>
  );
}
