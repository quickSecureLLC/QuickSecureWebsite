import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Request Demo - QuickSecure",
  description: "Schedule a demo to see how QuickSecure keeps K-12 schools safe with emergency response, campus monitoring, and drill management.",
  openGraph: {
    title: "Request Demo - QuickSecure",
    description: "Schedule a demo to see how QuickSecure keeps K-12 schools safe with emergency response, campus monitoring, and drill management.",
    siteName: "QuickSecure",
  },
};

export default function ContactPage() {
  return (
    <>
      <style>{`footer { display: none; }`}</style>
      <section className="flex min-h-dvh items-center justify-center" style={{ paddingTop: "var(--top-offset)" }}>
        <div
          className="calendly-inline-widget w-full"
          data-url="https://calendly.com/rohankumar-quicksecurellc/demo?background_color=1A1F2E&text_color=ffffff&primary_color=D7D128"
          style={{ minWidth: "320px", height: "700px" }}
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </section>
    </>
  );
}
