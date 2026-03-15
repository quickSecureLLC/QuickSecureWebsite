import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, softwareApplicationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Drill Management",
  description: "Plan, run, and document drills using the same workflows as real emergencies. QuickSecure simplifies drill management and compliance tracking.",
  alternates: { canonical: "/product/drill-management" },
  openGraph: {
    title: "Drill Management | QuickSecure",
    description: "Plan, run, and document drills using the same workflows as real emergencies. QuickSecure simplifies drill management and compliance tracking.",
    siteName: "QuickSecure",
  },
};

export default function DrillManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Drill Management", path: "/product/drill-management" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationSchema({
              name: "QuickSecure Drill Management",
              description: "Plan, execute, and document safety drills using the same workflows as real emergencies. Includes drill scheduling, compliance tracking, and reporting for K-12 schools.",
              url: "https://quicksecure.com/product/drill-management",
              category: "SecurityApplication",
            })
          ),
        }}
      />
      <section className="flex flex-col items-center justify-center px-5 text-center" style={{ minHeight: "calc(100dvh - var(--top-offset))", paddingTop: "var(--top-offset)" }}>
        <h1 className="mb-4 text-[32px] leading-[0.9] tracking-[-0.72px] text-white">
          Drill Management
        </h1>
        <p className="mb-8 max-w-[480px] text-[16px] leading-[1.5] text-white/50">
          Coming soon. See how QuickSecure simplifies drill management.
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
