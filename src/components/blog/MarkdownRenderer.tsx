"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const components: Components = {
  h1: ({ children }) => (
    <h1 className="text-[28px] leading-[1.1] tracking-[-0.035em] text-white sm:text-[36px] md:text-[44px]">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-5 mt-12 text-[22px] leading-[1.1] tracking-[-0.02em] text-white sm:text-[26px]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-3 mt-8 text-[18px] leading-[1.2] text-white sm:text-[20px]">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-5 text-[15px] leading-[1.7] text-white/70">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mb-6 space-y-2 pl-5">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-6 space-y-2 pl-5">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="list-disc text-[15px] leading-[1.7] text-white/70">
      {children}
    </li>
  ),
  strong: ({ children }) => (
    <strong className="text-white/90">{children}</strong>
  ),
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        className="text-blue transition-opacity hover:opacity-70"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  },
  hr: () => <hr className="my-10 border-white/10" />,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-white/20 pl-5 italic text-white/50">
      {children}
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="mb-6 overflow-x-auto">
      <table className="w-full border-collapse text-[14px]">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="text-left text-white/90">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="border border-white/15 px-3 py-2 text-[13px] font-medium uppercase tracking-wider text-white/60">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-white/15 px-3 py-2 text-white/70">
      {children}
    </td>
  ),
  code: ({ className, children }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <code className="block overflow-x-auto rounded-lg bg-navy p-4 font-mono text-[13px] text-white/80">
          {children}
        </code>
      );
    }
    return (
      <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[13px]">
        {children}
      </code>
    );
  },
  pre: ({ children }) => <pre className="mb-6">{children}</pre>,
  img: ({ src, alt }) => (
    <figure className="mb-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt || ""} className="w-full rounded-lg" />
      {alt && (
        <figcaption className="mt-2 text-center text-[13px] text-white/40">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
};

export default function MarkdownRenderer({ content }: { content: string }) {
  // Strip leading h1 if present (Brevit includes the title in markdown)
  const cleaned = content.replace(/^#\s+.*\n+/, "");

  return (
    <Markdown remarkPlugins={[remarkGfm]} components={components}>
      {cleaned}
    </Markdown>
  );
}
