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

    try {
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
    } catch (err) {
      // Fallback: log so no emails are silently lost
      console.error("[subscribe] Sheets API error:", err);
      console.log("[subscribe] Fallback log — email:", email);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
