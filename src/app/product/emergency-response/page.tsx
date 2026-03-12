import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency Response - QuickSecure",
  description: "Structured workflows and direct-to-dispatch for any emergency.",
  openGraph: {
    title: "Emergency Response - QuickSecure",
    description: "Structured workflows and direct-to-dispatch for any emergency.",
    siteName: "QuickSecure",
  },
};

export default function EmergencyResponsePage() {
  return (
    <section className="flex flex-col items-center justify-center px-5 text-center" style={{ minHeight: "calc(100dvh - var(--top-offset))", paddingTop: "var(--top-offset)" }}>
      <h1 className="mb-4 text-[32px] leading-[0.9] tracking-[-0.72px] text-white">
        Emergency Response
      </h1>
      <p className="mb-8 max-w-[480px] text-[16px] leading-[1.5] text-white/50">
        Coming soon. Learn how QuickSecure streamlines emergency response.
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
