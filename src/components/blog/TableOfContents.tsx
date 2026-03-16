"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Heading {
  level: number;
  text: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function TableOfContents({
  headings,
}: {
  headings: Heading[];
}) {
  const [open, setOpen] = useState(true);

  // Only show H2 and H3 headings
  const filtered = headings.filter((h) => h.level === 2 || h.level === 3);
  if (filtered.length < 3) return null;

  return (
    <nav className="mb-10 rounded-xl border border-white/10 bg-surface-raised p-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-[14px] font-medium text-white"
      >
        Table of Contents
        <span
          className={cn(
            "text-white/40 transition-transform duration-200",
            open && "rotate-180"
          )}
        >
          &#9662;
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "mt-4 max-h-[2000px]" : "max-h-0"
        )}
      >
        <ul className="space-y-1.5">
          {filtered.map((h, i) => (
            <li key={i}>
              <a
                href={`#${slugify(h.text)}`}
                className={cn(
                  "block text-[13px] leading-[1.5] text-white/40 transition-colors hover:text-white/70",
                  h.level === 3 && "pl-4"
                )}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
