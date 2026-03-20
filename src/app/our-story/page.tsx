import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "A letter from the founders of QuickSecure. Why we built a unified school safety platform and what drives us every day.",
  alternates: { canonical: "/our-story" },
  openGraph: {
    title: "Our Story | QuickSecure",
    description:
      "A letter from the founders of QuickSecure. Why we built a unified school safety platform and what drives us every day.",
    siteName: "QuickSecure",
  },
};

function HandDrawnBorder() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top edge */}
      <path
        d="M 8 8 C 40 6, 80 10, 120 7 S 200 9, 280 6 S 350 10, 392 8"
        stroke="white"
        strokeOpacity="0.15"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Right edge */}
      <path
        d="M 392 8 C 394 50, 390 100, 393 170 S 391 280, 393 360 S 390 450, 392 492"
        stroke="white"
        strokeOpacity="0.15"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Bottom edge */}
      <path
        d="M 392 492 C 360 494, 310 490, 250 493 S 140 490, 80 493 S 30 490, 8 492"
        stroke="white"
        strokeOpacity="0.15"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Left edge */}
      <path
        d="M 8 492 C 6 440, 10 380, 7 300 S 10 180, 7 120 S 10 50, 8 8"
        stroke="white"
        strokeOpacity="0.15"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function OurStoryPage() {
  return (
    <main
      style={{ paddingTop: "var(--top-offset)" }}
      className="hide-footer flex min-h-screen items-center justify-center px-5 sm:px-12 md:px-30"
    >
      <article className="relative mx-auto max-w-[720px] px-8 py-10 sm:px-12 sm:py-14">
        <HandDrawnBorder />
        <h1 className="sr-only">A Letter from the Founders of QuickSecure</h1>

        <div className="space-y-5 text-[13px] leading-[1.8] tracking-[0.01em] text-white/80 sm:text-[14px] md:text-[15px]">
          <p>A note from us.</p>
          <p>
            We didn&apos;t start QuickSecure with a business plan. We started
            it because we watched a system that was supposed to protect people
            fall apart when it mattered most.
          </p>
          <p>
            That experience changed everything. Not because it was dramatic,
            but because it was avoidable. Communication broke down. The
            hardware didn&apos;t work. The people who needed to act
            didn&apos;t have the information they needed. And it wasn&apos;t a
            one-school problem. It was everywhere.
          </p>
          <p>
            So we built something different. A single platform where emergency
            response, daily operations, and physical security all live
            together. Where the technology gets out of the way so people can
            act with confidence when seconds matter.
          </p>
          <p>
            We believe every school deserves real safety infrastructure. Not
            compliance checkboxes. Not another vendor pitch. We&apos;ve talked
            to hundreds of administrators, teachers, and safety officers.
            Everything we build comes from those conversations.
          </p>
          <p>This isn&apos;t just a company to us. It&apos;s a responsibility.</p>
          <p>With gratitude,</p>
        </div>

        {/* Signatures */}
        <div className="mt-6 flex items-end gap-10 sm:gap-14">
          <img
            src="/images/william-sig-white.svg"
            alt="William Susskind's signature"
            className="h-auto w-[120px] sm:w-[150px]"
          />
          <img
            src="/images/rohan-sig-white.svg"
            alt="Rohan Kumar's signature"
            className="h-auto w-[120px] sm:w-[150px]"
          />
        </div>
      </article>
    </main>
  );
}
