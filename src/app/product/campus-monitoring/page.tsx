import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, softwareApplicationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Campus Monitoring",
  description: "Live lock status, camera feeds, and access control unified in one dashboard. QuickSecure Nexus gives schools real-time campus visibility.",
  alternates: { canonical: "/product/campus-monitoring" },
  openGraph: {
    title: "Campus Monitoring | QuickSecure",
    description: "Live lock status, camera feeds, and access control unified in one dashboard. QuickSecure Nexus gives schools real-time campus visibility.",
    siteName: "QuickSecure",
  },
};

export default function CampusMonitoringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Campus Monitoring", path: "/product/campus-monitoring" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationSchema({
              name: "QuickSecure Nexus",
              description: "Unified web dashboard for campus monitoring with live lock status, camera feeds, access control, and SIS integrations for K-12 schools.",
              url: "https://quicksecure.com/product/campus-monitoring",
              category: "SecurityApplication",
            })
          ),
        }}
      />
      <section className="flex flex-col items-center justify-center px-5 text-center" style={{ minHeight: "calc(100dvh - var(--top-offset))", paddingTop: "var(--top-offset)" }}>
        <h1 className="mb-4 text-[32px] leading-[0.9] tracking-[-0.72px] text-white">
          Campus Monitoring
        </h1>
        <p className="mb-8 max-w-[480px] text-[16px] leading-[1.5] text-white/50">
          Coming soon. See how QuickSecure unifies campus monitoring.
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
