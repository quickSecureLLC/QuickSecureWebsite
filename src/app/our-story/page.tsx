import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import TiltImage from "@/components/ui/TiltImage";
import Accordion from "@/components/ui/Accordion";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about QuickSecure's mission to make K-12 schools safer through unified emergency response and campus operations.",
  alternates: { canonical: "/our-story" },
  openGraph: {
    title: "About QuickSecure",
    description:
      "Learn about QuickSecure's mission to make K-12 schools safer through unified emergency response and campus operations.",
    siteName: "QuickSecure",
  },
};

const faqs = [
  {
    question: "What is a school panic button system?",
    answer:
      "A school panic button system is a mobile or hardware-based alert tool that allows teachers and staff to instantly notify administrators, security teams, and emergency responders during a crisis. QuickSecure Panic is a mobile app that connects directly to 911 dispatch through RapidSOS, providing structured emergency workflows with real-time GPS tracking, role-based notifications, and two-way communication — all from a smartphone.",
  },
  {
    question: "How do schools comply with Alyssa's Law?",
    answer:
      "Alyssa's Law requires schools in participating states to install silent panic alarm systems that connect directly to law enforcement. QuickSecure helps schools comply by providing QuickSecure Panic, a mobile panic button with direct-to-dispatch capability via RapidSOS integration. The platform ensures emergency alerts reach 911 centers within seconds, and includes drill management and compliance documentation tools.",
  },
  {
    question: "What is the best anonymous tip line for schools?",
    answer:
      "An effective school anonymous tip line provides multilingual support, AI-powered triage to prioritize urgent reports, and tiered escalation workflows. QuickSecure's Anonymous Tip Line module enables students and community members to report safety concerns confidentially. Reports are automatically categorized and routed to appropriate administrators based on severity, ensuring no tip goes unaddressed.",
  },
  {
    question: "Is QuickSecure FERPA compliant?",
    answer:
      'Yes. QuickSecure is FERPA-aligned, operating as a "school official" under FERPA. The platform accesses student education records only to provide safety services as directed by educational institutions. Security measures include role-based access controls, encryption at rest and in transit, comprehensive audit logging, and data minimization practices to protect personally identifiable information.',
  },
  {
    question: "How does a school mass notification system work?",
    answer:
      "A school mass notification system sends urgent alerts to parents, staff, and stakeholders through multiple channels simultaneously — including push notifications, SMS, email, and in-app alerts. QuickSecure's Mass Notifications module integrates directly with emergency response workflows, triggering notifications automatically during incidents. It can also be used for non-emergency communications like weather closures, schedule changes, and general announcements.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "About", path: "/our-story" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqs)),
        }}
      />
      <section
        className="pb-20 sm:pb-28 md:pb-32"
        style={{ paddingTop: "var(--top-offset)" }}
      >
        {/* Intro + Founders — one continuous block */}
        <Container>
          <div className="pt-16 sm:pt-20 md:pt-24">
            <h1 className="mb-6 text-[28px] leading-[0.9] tracking-[-0.035em] text-white sm:text-[36px] md:text-[48px]">
              Our Story
            </h1>
            <p className="max-w-[640px] text-[15px] leading-[1.6] text-white/60">
              QuickSecure is a unified K-12 school safety platform that combines
              emergency response, daily operations, hardware, and integrations
              into one system. Our mission is to make schools safer by giving
              administrators, teachers, and first responders the tools they need
              — all in one place.
            </p>
          </div>

          {/* Founders */}
          <div className="mt-14 flex flex-col gap-10 sm:mt-20 md:flex-row md:items-center md:gap-16">
            <TiltImage
              src="/images/IMG_8081.jpg"
              alt="QuickSecure co-founders William Susskind and Rohan"
              width={800}
              height={800}
              className="md:w-1/2"
            />
            <div className="md:w-1/2">
              <h2 className="mb-4 text-[22px] leading-[0.9] tracking-[-0.035em] text-white sm:text-[28px] md:text-[36px]">
                Meet the Founders
              </h2>
              <p className="text-[15px] leading-[1.6] text-white/60">
                William and Rohan started QuickSecure with a simple belief: every
                school deserves enterprise-grade safety tools, not just the ones
                with the biggest budgets. Together, they&apos;re building the
                platform they wish existed — one that unifies emergency response,
                daily operations, and hardware into a single system that actually
                works.
              </p>
              <div className="mt-6 space-y-1 text-[14px] text-white/40">
                <p>
                  <span className="text-white/60">William Susskind</span> —
                  Co-Founder
                </p>
                <p>
                  <span className="text-white/60">Rohan</span> — Co-Founder
                </p>
              </div>
            </div>
          </div>
        </Container>

        {/* Divider */}
        <Container className="mt-16 sm:mt-24">
          <div className="border-t border-white/10" />
        </Container>

        {/* FAQ */}
        <Container className="mt-16 sm:mt-24">
          <h2 className="mb-6 text-[22px] leading-[0.9] tracking-[-0.035em] text-white sm:text-[28px] md:text-[36px]">
            Frequently Asked Questions
          </h2>
          <Accordion items={faqs} />
        </Container>
      </section>
    </>
  );
}
