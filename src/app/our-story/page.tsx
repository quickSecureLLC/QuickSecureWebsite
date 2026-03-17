import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "A letter from the founders of QuickSecure — why we built a unified school safety platform and what drives us every day.",
  alternates: { canonical: "/our-story" },
  openGraph: {
    title: "Our Story — QuickSecure",
    description:
      "A letter from the founders of QuickSecure — why we built a unified school safety platform and what drives us every day.",
    siteName: "QuickSecure",
  },
};

export default function OurStoryPage() {
  return (
    <main style={{ paddingTop: "var(--top-offset)" }}>
      <Container>
        {/* Founders Photo */}
        <div className="mx-auto max-w-[720px] pt-8 sm:pt-12">
          <Image
            src="/images/IMG_8081.jpg"
            alt="William Susskind and Rohan Bhatt, co-founders of QuickSecure"
            width={2400}
            height={1600}
            className="w-full object-cover"
            sizes="(min-width: 1024px) 720px, 100vw"
            priority
          />
        </div>

        {/* Letter */}
        <div className="mx-auto max-w-[720px] py-16 sm:py-20">
          <h1 className="mb-10 text-[32px] leading-[0.9] tracking-[-0.035em] text-white sm:mb-12 sm:text-[40px] md:text-[48px]">
            Our Story
          </h1>

          <div className="space-y-6 text-[16px] leading-[1.7] text-white/70 sm:text-[17px] md:text-[18px]">
            <p>
              We didn&apos;t start QuickSecure with a business plan. We started
              it because we watched a system that was supposed to protect people
              fall apart when it mattered most.
            </p>
            <p>
              That experience changed everything. Not because it was
              dramatic&nbsp;&mdash; but because it was avoidable. The
              communication broke down. The hardware didn&apos;t work the way it
              should have. The people who needed to act didn&apos;t have the
              information they needed. And we realized this wasn&apos;t a
              one-school problem. It was everywhere.
            </p>
            <p>
              So we built something different. A single platform where emergency
              response, daily operations, and physical security all live
              together. Where a teacher doesn&apos;t have to think about which
              app to open or which protocol to follow. Where the technology gets
              out of the way so people can act with confidence when seconds
              matter.
            </p>
            <p>
              We believe every school&nbsp;&mdash; not just the ones with the
              biggest budgets&nbsp;&mdash; deserves real safety infrastructure.
              Not compliance checkboxes. Not another vendor pitch. Tools that
              work the way people actually think under pressure.
            </p>
            <p>
              We&apos;ve talked to hundreds of administrators, teachers, and
              safety officers. We&apos;ve sat in schools and watched how things
              actually work&nbsp;&mdash; and where they break. Everything we
              build comes from those conversations.
            </p>
            <p>This isn&apos;t just a company to us. It&apos;s a responsibility.</p>
          </div>

          {/* Signatures */}
          <div className="mt-14 flex items-end gap-12 sm:mt-16 sm:gap-16">
            <div>
              <img
                src="/images/william-sig-white.svg"
                alt="William Susskind's signature"
                className="mb-3 h-auto w-[140px] sm:w-[170px]"
              />
              <p className="text-[15px] text-white">William Susskind</p>
              <p className="text-[13px] text-white/55">Co-Founder &amp; CTO</p>
            </div>
            <div>
              <img
                src="/images/rohan-sig-white.svg"
                alt="Rohan Bhatt's signature"
                className="mb-3 h-auto w-[140px] sm:w-[170px]"
              />
              <p className="text-[15px] text-white">Rohan Kumar</p>
              <p className="text-[13px] text-white/55">Co-Founder &amp; CEO</p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
