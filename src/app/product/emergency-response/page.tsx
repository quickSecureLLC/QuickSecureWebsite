import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, softwareApplicationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Emergency Response",
  description: "Structured workflows and direct-to-dispatch for any emergency. QuickSecure Panic connects schools to 911 via RapidSOS in seconds.",
  alternates: { canonical: "/product/emergency-response" },
  openGraph: {
    title: "Emergency Response | QuickSecure",
    description: "Structured workflows and direct-to-dispatch for any emergency. QuickSecure Panic connects schools to 911 via RapidSOS in seconds.",
    siteName: "QuickSecure",
  },
};

export default function EmergencyResponsePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Emergency Response", path: "/product/emergency-response" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationSchema({
              name: "QuickSecure Panic",
              description: "Mobile panic button app with direct-to-dispatch via RapidSOS, structured emergency workflows, real-time GPS tracking, and two-way communication for K-12 schools.",
              url: "https://quicksecure.com/product/emergency-response",
              category: "SecurityApplication",
              operatingSystem: "iOS, Android",
            })
          ),
        }}
      />
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
    </>
  );
}
