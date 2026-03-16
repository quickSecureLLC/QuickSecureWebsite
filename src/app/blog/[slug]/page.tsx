import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import MarkdownRenderer from "@/components/blog/MarkdownRenderer";
import TableOfContents from "@/components/blog/TableOfContents";
import ShareButtons from "@/components/blog/ShareButtons";
import { getBlogPost, getBlogPosts, parseRelatedKeywords, injectImagesIntoMarkdown } from "@/lib/brevit";
import { blogPostingSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const revalidate = 3600;

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

  const keywords = [post.focusKeyword, ...parseRelatedKeywords(post.relatedKeywords)].filter(
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
      modifiedTime: post.publishedAt,
      authors: ["QuickSecure Safety Team"],
      section: post.focusKeyword || "School Safety",
      tags: keywords,
      ...(post.coverImageUrl && {
        images: [{ url: post.coverImageUrl, width: 1200, height: 630, alt: post.title }],
      }),
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
  const [post, allPosts] = await Promise.all([
    getBlogPost(slug),
    getBlogPosts(),
  ]);
  if (!post) notFound();

  // Related posts: same focusKeyword first, then recent posts, excluding current
  const related = allPosts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.focusKeyword === post.focusKeyword ? 1 : 0;
      const bMatch = b.focusKeyword === post.focusKeyword ? 1 : 0;
      if (bMatch !== aMatch) return bMatch - aMatch;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    })
    .slice(0, 3);

  // Chronological prev/next navigation
  const sorted = [...allPosts].sort(
    (a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
  );
  const currentIndex = sorted.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? sorted[currentIndex - 1] : null;
  const nextPost = currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null;

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
            blogPostingSchema({
              headline: post.title,
              description: post.metaDescription,
              url: `https://quicksecure.us/blog/${slug}`,
              datePublished: post.publishedAt,
              image: post.coverImageUrl,
              wordCount: post.wordCount,
              keywords: [post.focusKeyword, ...parseRelatedKeywords(post.relatedKeywords)].filter(
                Boolean
              ) as string[],
            })
          ),
        }}
      />
      {post.faqSchema && post.faqSchema.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema(post.faqSchema)),
          }}
        />
      )}
      <section
        className="pb-16 sm:pb-20 md:pb-24"
        style={{ paddingTop: "var(--top-offset)" }}
      >
        <Container>
          <article className="mx-auto max-w-[760px] pt-16 sm:pt-20 md:pt-24">
            {/* Breadcrumbs */}
            <nav className="mb-8 flex items-center gap-2 text-[13px] text-white/40" aria-label="Breadcrumb">
              <Link href="/" className="transition-colors hover:text-white/60">Home</Link>
              <span>/</span>
              <Link href="/blog" className="transition-colors hover:text-white/60">Blog</Link>
              <span>/</span>
              <span className="line-clamp-1 text-white/60">{post.title}</span>
            </nav>

            {/* Meta: date, reading time, author */}
            <div className="mb-3 flex flex-wrap items-center gap-3 text-[13px] text-white/40">
              <time>{publishedDate}</time>
              <span>&middot;</span>
              <span>{Math.ceil(post.wordCount / 250)} min read</span>
              <span>&middot;</span>
              <span>QuickSecure Safety Team</span>
            </div>

            {/* Title */}
            <h1 className="mb-8 text-[28px] leading-[1.1] tracking-[-0.035em] text-white sm:text-[36px] md:text-[44px]">
              {post.title}
            </h1>

            {/* Cover image */}
            {post.coverImageUrl && (
              <figure className="mb-10">
                <Image
                  src={post.coverImageUrl}
                  alt={post.title}
                  width={1200}
                  height={630}
                  className="w-full rounded-lg"
                  sizes="(max-width: 768px) 100vw, 760px"
                  priority
                />
              </figure>
            )}

            {/* Table of Contents (for long posts) */}
            {post.wordCount > 1500 && post.headingStructure?.length > 0 && (
              <TableOfContents headings={post.headingStructure} />
            )}

            {/* Content */}
            <MarkdownRenderer
              content={injectImagesIntoMarkdown(
                post.markdownContent,
                post.images ?? []
              )}
            />

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
            {/* Share */}
            <hr className="my-10 border-white/10" />
            <ShareButtons
              url={`https://quicksecure.us/blog/${slug}`}
              title={post.title}
            />
          </article>

          {/* CTA Block */}
          <div className="mx-auto mt-16 max-w-[760px] rounded-xl border border-white/10 bg-surface-raised p-8 text-center sm:p-10">
            <h2 className="mb-3 text-[22px] leading-[1.1] tracking-[-0.02em] text-white sm:text-[26px]">
              {post.focusKeyword
                ? `See how QuickSecure handles ${post.focusKeyword.toLowerCase()}`
                : "Ready to improve your school\u2019s safety?"}
            </h2>
            <p className="mb-6 text-[15px] leading-[1.6] text-white/50">
              Talk to our team and see the platform in action.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-yellow px-6 py-3 text-[15px] font-medium text-navy transition-opacity hover:opacity-90"
            >
              Schedule a Demo
            </Link>
          </div>

          {/* Related Posts */}
          {related.length > 0 && (
            <div className="mx-auto mt-16 max-w-[760px]">
              <h2 className="mb-8 text-[22px] leading-[1.1] tracking-[-0.02em] text-white sm:text-[26px]">
                Related Articles
              </h2>
              <div className="grid gap-6 sm:grid-cols-3">
                {related.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group overflow-hidden rounded-xl border border-white/10 transition-colors hover:border-white/20"
                  >
                    <div className="aspect-[3/2] overflow-hidden">
                      {rp.coverImageUrl ? (
                        <Image
                          src={rp.coverImageUrl}
                          alt={rp.title}
                          width={400}
                          height={267}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                          sizes="(max-width: 768px) 100vw, 240px"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gradient-to-br from-surface-raised to-navy">
                          <span className="text-[13px] text-white/20">No image</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      {rp.focusKeyword && (
                        <span className="mb-1.5 block text-[11px] uppercase tracking-wider text-white/40">
                          {rp.focusKeyword}
                        </span>
                      )}
                      <h3 className="line-clamp-2 text-[15px] leading-[1.3] text-white transition-opacity group-hover:opacity-70">
                        {rp.title}
                      </h3>
                      <p className="mt-2 text-[12px] text-white/30">
                        {Math.ceil(rp.wordCount / 250)} min read
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Prev / Next Navigation */}
          {(prevPost || nextPost) && (
            <nav className="mx-auto mt-16 flex max-w-[760px] border-t border-white/10 pt-8">
              <div className="flex-1">
                {prevPost && (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="group inline-flex flex-col gap-1"
                  >
                    <span className="text-[12px] uppercase tracking-wider text-white/40 transition-colors group-hover:text-white/60">
                      &larr; Previous Article
                    </span>
                    <span className="line-clamp-1 text-[15px] text-white transition-opacity group-hover:opacity-70">
                      {prevPost.title}
                    </span>
                  </Link>
                )}
              </div>
              <div className="flex-1 text-right">
                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group inline-flex flex-col items-end gap-1"
                  >
                    <span className="text-[12px] uppercase tracking-wider text-white/40 transition-colors group-hover:text-white/60">
                      Next Article &rarr;
                    </span>
                    <span className="line-clamp-1 text-[15px] text-white transition-opacity group-hover:opacity-70">
                      {nextPost.title}
                    </span>
                  </Link>
                )}
              </div>
            </nav>
          )}
        </Container>
      </section>
    </>
  );
}
