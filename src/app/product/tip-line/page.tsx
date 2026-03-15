import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, softwareApplicationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Anonymous Tip Line",
  description: "AI-triaged reporting with multilingual support and tiered escalation. QuickSecure's anonymous tip line keeps schools safe through confidential reporting.",
  alternates: { canonical: "/product/tip-line" },
  openGraph: {
    title: "Anonymous Tip Line | QuickSecure",
    description: "AI-triaged reporting with multilingual support and tiered escalation. QuickSecure's anonymous tip line keeps schools safe through confidential reporting.",
    siteName: "QuickSecure",
  },
};

export default function TipLinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Anonymous Tip Line", path: "/product/tip-line" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationSchema({
              name: "QuickSecure Anonymous Tip Line",
              description: "AI-triaged anonymous reporting system with multilingual support and tiered escalation workflows for K-12 school safety.",
              url: "https://quicksecure.com/product/tip-line",
              category: "SecurityApplication",
            })
          ),
        }}
      />
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
    </>
  );
}
