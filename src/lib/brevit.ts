const API_BASE = "https://brevit.us/api/public/blog";

export interface BrevitPostSummary {
  id: string;
  title: string;
  slug: string;
  metaDescription: string;
  focusKeyword: string;
  relatedKeywords: string | string[];
  searchIntent: string;
  wordCount: number;
  seoScore: number;
  contentScore: number;
  pillarId: string | null;
  audienceId: string | null;
  createdAt: string;
  publishedAt: string;
  coverImageUrl?: string;
}

/** Parse relatedKeywords which may come as a JSON string or array */
export function parseRelatedKeywords(raw: string | string[]): string[] {
  if (Array.isArray(raw)) return raw;
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export interface BrevitImage {
  originalUrl: string;
  altText: string;
  caption: string;
  width: number;
  height: number;
  position: number;
}

export interface BrevitPostDetail extends BrevitPostSummary {
  markdownContent: string;
  headingStructure: { level: number; text: string }[];
  sources: { title: string; url: string; snippet?: string }[];
  qualityNotes: string[];
  images: BrevitImage[];
}

/** Replace <!-- BLOG_IMAGE: index=N, ... --> placeholders with actual images */
export function injectImagesIntoMarkdown(
  markdown: string,
  images: BrevitImage[]
): string {
  if (!images || images.length === 0) {
    // Strip any leftover placeholders even if no images
    return markdown.replace(/<!--\s*BLOG_IMAGE:.*?-->\n*/g, "");
  }

  const byIndex = new Map(images.map((img) => [img.position, img]));

  return markdown.replace(
    /<!--\s*BLOG_IMAGE:\s*index=(\d+).*?-->\n*/g,
    (_, idx) => {
      const img = byIndex.get(Number(idx));
      if (!img) return "";
      return `\n![${img.altText}](${img.originalUrl})\n\n`;
    }
  );
}

export async function getBlogPosts(): Promise<BrevitPostSummary[]> {
  const key = process.env.BREVIT_API_KEY;
  if (!key) return [];

  const res = await fetch(`${API_BASE}/posts`, {
    headers: { "x-api-key": key },
    next: { revalidate: 60 },
  });

  if (!res.ok) return [];

  const data = await res.json();
  return Array.isArray(data) ? data : data.posts ?? [];
}

export async function getBlogPost(
  slug: string
): Promise<BrevitPostDetail | null> {
  const key = process.env.BREVIT_API_KEY;
  if (!key) return null;

  const res = await fetch(`${API_BASE}/posts/${encodeURIComponent(slug)}`, {
    headers: { "x-api-key": key },
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data.post ?? data;
}
