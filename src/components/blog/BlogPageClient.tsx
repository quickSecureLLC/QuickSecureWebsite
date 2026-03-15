"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import type { BrevitPostSummary } from "@/lib/brevit";

/* ─── Icons ─── */

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="7" cy="7" r="4.5" />
      <line x1="10.5" y1="10.5" x2="14" y2="14" />
    </svg>
  );
}

function FilterIcon({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="3" y1="4.5" x2="15" y2="4.5" />
      <line x1="5" y1="9" x2="13" y2="9" />
      <line x1="7" y1="13.5" x2="11" y2="13.5" />
    </svg>
  );
}

function DocIcon({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M10 4h8l6 6v16a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <polyline points="18 4 18 10 24 10" />
      <line x1="12" y1="16" x2="20" y2="16" />
      <line x1="12" y1="20" x2="20" y2="20" />
      <line x1="12" y1="24" x2="16" y2="24" />
    </svg>
  );
}

/* ─── Component ─── */

export default function BlogPageClient({
  posts,
}: {
  posts: BrevitPostSummary[];
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const topics = useMemo(
    () =>
      [...new Set(posts.map((p) => p.focusKeyword).filter(Boolean))].sort(),
    [posts]
  );

  const filteredPosts = useMemo(() => {
    let result = posts;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.metaDescription.toLowerCase().includes(q)
      );
    }
    if (selectedTopic) {
      result = result.filter((p) => p.focusKeyword === selectedTopic);
    }
    return result;
  }, [posts, searchQuery, selectedTopic]);

  return (
    <section
      className="pb-16 sm:pb-20 md:pb-24"
      style={{ paddingTop: "var(--top-offset)" }}
    >
      {/* ── Hero ── */}
      <div className="border-b border-white/10 px-5 pb-10 pt-16 sm:px-12 sm:pb-12 sm:pt-20 md:px-30 md:pb-14 md:pt-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h1 className="text-[28px] leading-[0.9] tracking-[-0.035em] text-white sm:text-[36px] md:text-[48px]">
            Blog
          </h1>
          <p className="text-[15px] leading-[1.6] text-white/50 md:max-w-[420px] md:text-right">
            Insights on K-12 school safety, emergency preparedness, and campus
            operations.
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <Container>
        {posts.length === 0 ? (
          <p className="pt-16 text-center text-[15px] text-white/40">
            No posts yet. Check back soon.
          </p>
        ) : (
          <div className="flex gap-12 pt-10 md:pt-12">
            {/* ── Desktop Sidebar ── */}
            <aside
              className="hidden w-[280px] shrink-0 md:block"
              style={{
                position: "sticky",
                top: "calc(var(--top-offset) + 24px)",
                alignSelf: "flex-start",
              }}
            >
              {/* Search */}
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-surface-raised py-2.5 pl-9 pr-3 text-[14px] text-white placeholder-white/30 outline-none transition-colors focus:border-white/20"
                />
              </div>

              {/* Topics */}
              {topics.length > 0 && (
                <div className="mt-8">
                  <span className="text-[12px] uppercase tracking-wider text-white/40">
                    Topic
                  </span>
                  <div className="mt-3 flex flex-col gap-1">
                    {topics.map((topic) => (
                      <button
                        key={topic}
                        onClick={() =>
                          setSelectedTopic(
                            selectedTopic === topic ? null : topic
                          )
                        }
                        className={cn(
                          "rounded-lg px-3 py-2 text-left text-[14px] transition-colors",
                          selectedTopic === topic
                            ? "bg-white/10 text-white"
                            : "text-white/50 hover:text-white/70"
                        )}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </aside>

            {/* ── Content Area ── */}
            <div className="min-w-0 flex-1">
              {/* Mobile filters */}
              <div className="mb-6 md:hidden">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-surface-raised py-2.5 pl-9 pr-3 text-[14px] text-white placeholder-white/30 outline-none transition-colors focus:border-white/20"
                    />
                  </div>
                  {topics.length > 0 && (
                    <button
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                      className={cn(
                        "flex shrink-0 items-center justify-center rounded-lg border border-white/10 px-3 transition-colors",
                        sidebarOpen
                          ? "bg-white/10 text-white"
                          : "text-white/50"
                      )}
                      aria-label="Toggle topic filters"
                      aria-expanded={sidebarOpen}
                    >
                      <FilterIcon />
                    </button>
                  )}
                </div>

                {/* Collapsible pill drawer */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    sidebarOpen ? "max-h-[200px] pt-3" : "max-h-0"
                  )}
                >
                  <div className="flex flex-wrap gap-2">
                    {topics.map((topic) => (
                      <button
                        key={topic}
                        onClick={() =>
                          setSelectedTopic(
                            selectedTopic === topic ? null : topic
                          )
                        }
                        className={cn(
                          "rounded-full px-3 py-1.5 text-[13px] transition-colors",
                          selectedTopic === topic
                            ? "bg-white/10 text-white"
                            : "border border-white/10 text-white/50 hover:text-white/70"
                        )}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card list */}
              {filteredPosts.length === 0 ? (
                <p className="pt-8 text-center text-[15px] text-white/40">
                  No articles match your search.
                </p>
              ) : (
                <div className="divide-y divide-white/10">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

/* ─── Blog Card ─── */

function BlogCard({ post }: { post: BrevitPostSummary }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-5 py-8 transition-colors sm:flex-row sm:gap-6"
    >
      {/* Text */}
      <div className="flex flex-1 flex-col justify-center">
        {post.focusKeyword && (
          <span className="mb-2.5 text-[12px] uppercase tracking-wider text-white/40">
            {post.focusKeyword}
          </span>
        )}
        <h2 className="mb-2 text-[18px] leading-[1.2] text-white transition-opacity group-hover:opacity-70 sm:text-[22px]">
          {post.title}
        </h2>
        <p className="mb-3 line-clamp-2 text-[14px] leading-[1.6] text-white/50 sm:text-[15px]">
          {post.metaDescription}
        </p>
        <div className="flex items-center gap-3 text-[12px] text-white/30">
          <time>
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          <span>&middot;</span>
          <span>{Math.ceil(post.wordCount / 250)} min read</span>
        </div>
      </div>

      {/* Image */}
      <div className="shrink-0 overflow-hidden rounded-xl sm:w-[240px] md:w-[280px]">
        {post.coverImageUrl ? (
          <Image
            src={post.coverImageUrl}
            alt={post.title}
            width={560}
            height={373}
            className="aspect-[3/2] h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 280px"
          />
        ) : (
          <div className="flex aspect-[3/2] items-center justify-center bg-gradient-to-br from-surface-raised to-navy">
            <DocIcon className="text-white/15" />
          </div>
        )}
      </div>
    </Link>
  );
}
