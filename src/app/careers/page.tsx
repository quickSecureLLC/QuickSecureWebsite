import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { breadcrumbSchema, jobPostingSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join QuickSecure and help build the platform every school deserves. Open roles in engineering, operations, and marketing in New York City.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers | QuickSecure",
    description:
      "Join QuickSecure and help build the platform every school deserves. Open roles in engineering, operations, and marketing in New York City.",
    siteName: "QuickSecure",
  },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */


const cultureItems = [
  {
    title: "Real ownership, real impact",
    description:
      "Every person here shapes the product. Your work ships to schools, not to a backlog.",
  },
  {
    title: "In-person in New York City",
    description:
      "We work together in person because the problems we solve require fast communication and tight collaboration.",
  },
  {
    title: "Founders in the room",
    description:
      "William and Rohan work alongside the team every day. Decisions happen fast. Bureaucracy doesn't exist here.",
  },
];

const roles = [
  { title: "Full Stack Developer", team: "Engineering", type: "Full-time", location: "NYC" },
  { title: "Full Stack Developer", team: "Engineering", type: "Full-time", location: "NYC" },
  { title: "Operations Associate", team: "Operations", type: "Full-time", location: "NYC" },
  { title: "Marketing Associate", team: "Marketing", type: "Full-time", location: "NYC" },
];


/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function CareersPage() {
  const jobSchemas = roles.map((role, i) =>
    jobPostingSchema({
      title: role.title,
      description: `${role.title} at QuickSecure, ${role.type} in ${role.location}. Join our team building the platform every school deserves.`,
      employmentType: "FULL_TIME",
      location: role.location,
      datePosted: "2025-03-01",
      identifier: `qs-${role.team.toLowerCase()}-${i + 1}`,
    })
  );

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Careers", path: "/careers" },
            ]),
            ...jobSchemas,
          ]),
        }}
      />

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen overflow-hidden"
        style={{ paddingTop: "var(--top-offset)" }}
      >
        {/* Photo — oversized, bleeds off right edge */}
        <div className="absolute right-[-20%] bottom-0 w-[85%] sm:right-[-15%] sm:w-[80%] md:right-[-10%] md:w-[75%]" style={{ top: "var(--top-offset)" }}>
          {/* Color bar hidden under nav to blend image top edge */}
          <div className="absolute top-0 right-0 left-0 h-[60px] -translate-y-full bg-[#2a3040]" />
          <Image
            src="/images/photos/founders.jpg"
            alt="QuickSecure founders William Susskind and Rohan Kumar"
            width={3000}
            height={2000}
            className="h-full w-full object-cover object-[center_85%]"
            sizes="70vw"
            quality={95}
            priority
          />
          {/* Gradient fades — all edges blend into page bg */}
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 via-20% to-transparent to-40%" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent to-30%" />
        </div>

        {/* Text — bottom left */}
        <div className="relative flex min-h-screen items-end px-5 pb-16 sm:px-12 sm:pb-20 md:px-30 md:pb-24">
          <div className="flex max-w-[480px] flex-col gap-4">
            <h1 className="text-[28px] leading-[0.9] tracking-[-0.72px] text-white sm:text-[32px] md:text-[36px]">
              Build what schools deserve
            </h1>
            <p className="text-[14px] leading-[1.5] tracking-[0.08px] text-white/70 sm:text-[15px] md:text-[16px]">
              We started QuickSecure because we watched safety systems fail the
              people they were built to protect. Now we&apos;re building the
              platform every school should have had years ago. If that mission
              means something to you, we want to talk.
            </p>
            <div className="pt-2">
              <Button href="#open-roles">View open roles</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Mission ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 md:py-28">
        <Container>
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
            {/* Text */}
            <div className="md:w-[55%]">
              <div className="mb-8 flex flex-col gap-1.5 sm:mb-10 md:mb-12">
                <h2 className="text-[22px] leading-[0.9] tracking-[-0.54px] text-white sm:text-[24px] md:text-[27px]">
                  What we&apos;re here to do
                </h2>
                <p className="text-[22px] leading-[0.9] tracking-[-0.54px] text-white/50 sm:text-[24px] md:text-[27px]">
                  And why it started with a friendship
                </p>
              </div>
              <div className="space-y-4 text-[14px] leading-[1.5] tracking-[0.08px] text-white/70 sm:text-[15px] md:text-[16px]">
                <p>
                  QuickSecure exists because school safety was built on
                  disconnected tools and outdated assumptions. When William and
                  Rohan met in high school, they didn&apos;t know they&apos;d end up
                  building a company together. But they shared something that
                  turned out to matter more than any business plan: the belief that
                  every student and teacher deserves to feel safe, and that the
                  technology protecting them should actually work.
                </p>
                <p>
                  That shared conviction became QuickSecure: a single platform
                  where emergency response, daily operations, and physical security
                  work together. Built for how people actually think under
                  pressure, not for how a vendor imagines they should.
                </p>
              </div>
            </div>

            {/* Photo */}
            <div className="md:w-[45%]">
              <Image
                src="/images/photos/careers-mission.png"
                alt="QuickSecure founders William and Rohan"
                width={1294}
                height={1573}
                className="w-full rounded-xl border border-white/10"
                sizes="(max-width: 1024px) 100vw, 45vw"
                quality={95}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. Culture ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 md:py-28">
        <Container>
          <div className="flex flex-col gap-10 md:flex-row md:gap-16">
            {/* Text + list */}
            <div className="flex-1">
              <div className="mb-8 flex flex-col gap-1.5 sm:mb-10 md:mb-12">
                <h2 className="text-[22px] leading-[0.9] tracking-[-0.54px] text-white sm:text-[24px] md:text-[27px]">
                  What it&apos;s like here
                </h2>
                <p className="text-[22px] leading-[0.9] tracking-[-0.54px] text-white/50 sm:text-[24px] md:text-[27px]">
                  No layers, no process theater
                </p>
              </div>

              <div className="divide-y divide-white/10">
                {cultureItems.map((item) => (
                  <div key={item.title} className="py-6">
                    <h3 className="mb-2 text-[17px] leading-[1.3] text-white">
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-[1.6] text-white/55">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="md:flex-1">
              <Image
                src="/images/photos/careers-hero.png"
                alt="QuickSecure team working together"
                width={2097}
                height={1573}
                className="w-full rounded-xl border border-white/10"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={95}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── 6. Open Roles ───────────────────────────────────────── */}
      <section id="open-roles" className="py-20 sm:py-24 md:py-28">
        <Container>
          <div className="mb-8 flex flex-col gap-1.5 sm:mb-10 md:mb-12">
            <h2 className="text-[22px] leading-[0.9] tracking-[-0.54px] text-white sm:text-[24px] md:text-[27px]">
              Open roles
            </h2>
            <p className="text-[22px] leading-[0.9] tracking-[-0.54px] text-white/50 sm:text-[24px] md:text-[27px]">
              All positions in New York City
            </p>
          </div>

          {/* Desktop rows */}
          <div className="hidden divide-y divide-white/10 border-t border-white/10 md:block">
            {roles.map((role, i) => (
              <a
                key={`${role.title}-${role.team}-${i}`}
                href={`mailto:careers@quicksecure.us?subject=Application: ${role.title} (${role.team})`}
                className="group grid grid-cols-[2fr_1fr_1fr_1fr_auto] items-center gap-4 py-5"
              >
                <span className="text-[15px] text-white">{role.title}</span>
                <span className="text-[14px] text-white/40 transition-colors duration-200 group-hover:text-white/60">{role.team}</span>
                <span className="text-[14px] text-white/40 transition-colors duration-200 group-hover:text-white/60">{role.type}</span>
                <span className="text-[14px] text-white/40 transition-colors duration-200 group-hover:text-white/60">{role.location}</span>
                <span className="flex items-center gap-1.5 text-[14px] text-white/40 transition-colors duration-200 group-hover:text-yellow">
                  Apply
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5">
                    <path d="M1 7h12M8 2l5 5-5 5" />
                  </svg>
                </span>
              </a>
            ))}
          </div>

          {/* Mobile rows */}
          <div className="divide-y divide-white/10 border-t border-white/10 md:hidden">
            {roles.map((role, i) => (
              <a
                key={`mobile-${role.title}-${role.team}-${i}`}
                href={`mailto:careers@quicksecure.us?subject=Application: ${role.title} (${role.team})`}
                className="group flex items-center justify-between py-5"
              >
                <div>
                  <h3 className="text-[16px] leading-[1.3] text-white">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-white/40">
                    {role.team} &middot; {role.type} &middot; {role.location}
                  </p>
                </div>
                <span className="flex items-center gap-1.5 text-[13px] text-white/40 transition-colors group-hover:text-yellow">
                  Apply
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M1 7h12M8 2l5 5-5 5" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

    </>
  );
}
