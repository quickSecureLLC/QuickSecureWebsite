const API_BASE = "https://brevit.us/api/public/blog";

export interface BrevitPostSummary {
  id: string;
  title: string;
  slug: string;
  metaDescription: string;
  focusKeyword: string;
  relatedKeywords: string[];
  searchIntent: string;
  wordCount: number;
  seoScore: number;
  contentScore: number;
  pillarId: string;
  audienceId: string;
  createdAt: string;
  publishedAt: string;
  coverImage?: string;
}

export interface BrevitPostDetail extends BrevitPostSummary {
  markdownContent: string;
  headingStructure: { level: number; text: string }[];
  sources: { title: string; url: string; snippet?: string }[];
  qualityNotes: string[];
}

export async function getBlogPosts(): Promise<BrevitPostSummary[]> {
  const key = process.env.BREVIT_API_KEY;
  if (!key) return [];

  const res = await fetch(`${API_BASE}/posts`, {
    headers: { "x-api-key": key },
    next: { revalidate: 60 },
  });

  if (!res.ok) return [];

  return res.json();
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

  return res.json();
}
