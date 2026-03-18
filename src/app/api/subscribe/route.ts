import { NextRequest, NextResponse } from "next/server";
import { getSubscriberSheet } from "@/lib/google-sheets";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    const sheet = await getSubscriberSheet();
    const rows = await sheet.getRows();
    const isDuplicate = rows.some(
      (r) => r.get("Email")?.toLowerCase() === email
    );

    if (!isDuplicate) {
      await sheet.addRow({
        Email: email,
        "Subscribed At": new Date().toISOString(),
        Source: "blog-sidebar",
      });
    }

    return NextResponse.json({ success: true, duplicate: isDuplicate });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[subscribe] Error:", message);
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
