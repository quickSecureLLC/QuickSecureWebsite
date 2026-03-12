import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anonymous Tip Line - QuickSecure",
  description: "AI-triaged reporting with multilingual support and tiered escalation.",
  openGraph: {
    title: "Anonymous Tip Line - QuickSecure",
    description: "AI-triaged reporting with multilingual support and tiered escalation.",
    siteName: "QuickSecure",
  },
};

export default function TipLinePage() {
  return (
    <section className="flex flex-col items-center justify-center px-5 text-center" style={{ minHeight: "calc(100dvh - var(--top-offset))", paddingTop: "var(--top-offset)" }}>
      <h1 className="mb-4 text-[32px] leading-[0.9] tracking-[-0.72px] text-white">
        Anonymous Tip Line
      </h1>
      <p className="mb-8 max-w-[480px] text-[16px] leading-[1.5] text-white/50">
        Coming soon. Discover QuickSecure&apos;s AI-triaged reporting system.
      </p>
      <Link
        href="/"
        className="text-[14px] text-blue underline underline-offset-2 hover:opacity-70"
      >
        Back to home
      </Link>
    </section>
  );
}
