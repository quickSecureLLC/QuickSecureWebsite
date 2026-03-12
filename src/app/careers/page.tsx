import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Careers - QuickSecure",
  description:
    "Join QuickSecure and help build the future of K-12 school safety.",
  openGraph: {
    title: "Careers - QuickSecure",
    description:
      "Join QuickSecure and help build the future of K-12 school safety.",
    siteName: "QuickSecure",
  },
};

export default function CareersPage() {
  return (
    <section
      className="pb-16 sm:pb-20 md:pb-24"
      style={{ paddingTop: "var(--top-offset)" }}
    >
      <Container className="flex flex-col items-center justify-center pt-24 text-center">
        <h1 className="mb-4 text-[28px] leading-[0.9] tracking-[-0.035em] text-white sm:text-[36px] md:text-[48px]">
          Coming Soon
        </h1>
        <p className="mb-8 text-[14px] leading-[1.6] text-white/60">
          Careers page is on the way.
        </p>
        <a
          href="/"
          className="text-[14px] text-blue transition-opacity hover:opacity-70"
        >
          Back to home
        </a>
      </Container>
    </section>
  );
}
