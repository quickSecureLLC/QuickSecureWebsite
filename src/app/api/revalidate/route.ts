import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  const secret = process.env.REVALIDATION_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json().catch(() => ({}));
    const slug = typeof body.slug === "string" ? body.slug : null;

    revalidatePath("/blog");
    revalidatePath("/feed.xml");

    if (slug) {
      revalidatePath(`/blog/${slug}`);
    }

    console.log("[revalidate] Paths revalidated", slug ? `(slug: ${slug})` : "(all)");
    return NextResponse.json({ revalidated: true, slug });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
