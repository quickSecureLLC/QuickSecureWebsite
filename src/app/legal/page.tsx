import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Legal - QuickSecure",
  description:
    "QuickSecure legal policies including terms of service, privacy, data use, and security.",
  openGraph: {
    title: "Legal - QuickSecure",
    description:
      "QuickSecure legal policies including terms of service, privacy, data use, and security.",
    siteName: "QuickSecure",
  },
};

const sections = [
  { id: "terms-of-service", label: "Terms of Service" },
  { id: "privacy-policy", label: "Privacy Policy" },
  { id: "data-use-policy", label: "Data Use Policy" },
  { id: "data-processing-agreement", label: "Data Processing Agreement" },
  { id: "security", label: "Security" },
];

function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-[var(--top-offset)] border-t border-white/10 py-12 first:border-t-0 first:pt-0"
    >
      <h2 className="mb-6 text-[22px] leading-[0.9] tracking-[-0.54px] text-white sm:text-[24px] md:text-[27px]">
        {title}
      </h2>
      <div className="flex flex-col gap-4 text-[14px] leading-[1.6] text-white/60">
        {children}
      </div>
    </section>
  );
}

export default function LegalPage() {
  return (
    <div style={{ paddingTop: "var(--top-offset)" }}>
      {/* Header */}
      <section className="pb-12 sm:pb-16 md:pb-20">
        <Container>
          <div className="flex flex-col gap-3 pt-16 sm:pt-20 md:pt-24">
            <h1 className="text-[28px] leading-[0.9] tracking-[-0.035em] text-white sm:text-[36px] md:text-[48px]">
              Legal
            </h1>
            <p className="text-[14px] leading-[1.6] text-white/40">
              Last updated March 2026
            </p>
          </div>
        </Container>
      </section>

      {/* Sidebar + Content */}
      <Container>
        <div className="flex gap-16 pb-24 md:pb-32">
          {/* Sidebar nav — visible on md+ */}
          <nav className="hidden shrink-0 md:block md:w-[200px]">
            <div className="sticky top-[var(--top-offset)] flex flex-col gap-2 pt-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-[14px] leading-[1.6] text-white/50 transition-opacity hover:text-white hover:opacity-100"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <LegalSection id="terms-of-service" title="Terms of Service">
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your access to
                and use of QuickSecure&apos;s products and services, including
                QuickSecure Panic, QuickSecure Nexus, RLS hardware, and all
                associated software modules (collectively, the
                &quot;Platform&quot;). By accessing or using the Platform, you
                agree to be bound by these Terms.
              </p>
              <h3 className="mt-2 text-[16px] text-white/80">
                Eligibility and Accounts
              </h3>
              <p>
                The Platform is designed for use by K-12 educational
                institutions, their authorized staff, administrators, and
                designated personnel. Each user account is personal and
                non-transferable. Schools are responsible for managing user
                access and ensuring that only authorized individuals have
                Platform credentials. Role-based access controls are enforced
                across all products.
              </p>
              <h3 className="mt-2 text-[16px] text-white/80">
                Acceptable Use
              </h3>
              <p>
                You agree to use the Platform solely for its intended purpose:
                school safety, emergency response, and campus operations. You
                may not use the Platform to transmit false emergency alerts,
                harass individuals, or circumvent access controls. Misuse of
                emergency dispatch features — including false activation of
                direct-to-dispatch via RapidSOS — may result in immediate
                account termination and may carry legal consequences.
              </p>
              <h3 className="mt-2 text-[16px] text-white/80">
                Service Availability
              </h3>
              <p>
                QuickSecure strives to maintain high availability but does not
                guarantee uninterrupted access. Scheduled maintenance, system
                updates, and unforeseen outages may temporarily affect service.
                Emergency dispatch functionality is provided through third-party
                integration (RapidSOS) and is subject to their service terms and
                network availability.
              </p>
              <h3 className="mt-2 text-[16px] text-white/80">Termination</h3>
              <p>
                Either party may terminate the agreement with 30 days written
                notice. QuickSecure reserves the right to suspend or terminate
                access immediately in cases of Terms violations, security
                threats, or non-payment. Upon termination, your data will be
                handled in accordance with our Data Use Policy.
              </p>
            </LegalSection>

            <LegalSection id="privacy-policy" title="Privacy Policy">
              <p>
                QuickSecure is committed to protecting the privacy of students,
                staff, and school communities. This Privacy Policy explains how
                we collect, use, store, and share information through our
                Platform.
              </p>
              <h3 className="mt-2 text-[16px] text-white/80">
                Information We Collect
              </h3>
              <p>
                We collect information provided directly by schools during
                onboarding: staff names, roles, contact information, and school
                configuration data. Through SIS integration (PowerSchool, FACTS,
                Veracross), we sync basic rostering, teacher information, and
                class assignments. During platform use, we collect emergency
                alert data, incident reports, drill records, ticketing activity,
                and operational logs.
              </p>
              <h3 className="mt-2 text-[16px] text-white/80">
                Student Data
              </h3>
              <p>
                Student data accessed through SIS integrations is limited to
                what is necessary for safety operations — primarily roster
                information for emergency workflows such as fire evacuation
                checks. We do not sell, share, or use student data for
                advertising, profiling, or any purpose unrelated to school
                safety. Student data accessed through the Anonymous Tip Line is
                handled with additional privacy controls and is isolated from
                other platform data.
              </p>
              <h3 className="mt-2 text-[16px] text-white/80">
                Data Sharing
              </h3>
              <p>
                We do not sell personal information. Data may be shared with:
                emergency dispatch services (RapidSOS) during active
                emergencies; integrated systems (cameras, access control) as
                configured by the school; and service providers necessary for
                platform operation (cloud hosting, notification delivery). All
                third-party providers are bound by data protection agreements.
              </p>
            </LegalSection>

            <LegalSection id="data-use-policy" title="Data Use Policy">
              <p>
                This Data Use Policy describes how QuickSecure processes,
                stores, and protects data collected through the Platform,
                consistent with FERPA requirements and best practices for
                handling K-12 educational records.
              </p>
              <h3 className="mt-2 text-[16px] text-white/80">
                Data Storage
              </h3>
              <p>
                All platform data is stored in PostgreSQL databases with
                encryption at rest and in transit. Data includes: alert trigger
                information (user, school, type, time/date, optional GPS),
                workflow details (severity, categories, descriptions, photos),
                discussion messages, user accounts, role information, and
                emergency action/log history.
              </p>
              <h3 className="mt-2 text-[16px] text-white/80">
                Data Retention
              </h3>
              <p>
                API tokens expire after 30 days. Web sessions are cleaned
                hourly. Inactive push tokens are deleted after 30 days. Closed
                tickets are archived after 7+ days, with attachments moved to
                archive storage. Job queue records for completed or failed jobs
                are cleaned after 30 days. Dismissed alerts are archived, not
                hard deleted, to preserve audit trail integrity.
              </p>
              <h3 className="mt-2 text-[16px] text-white/80">
                FERPA Alignment
              </h3>
              <p>
                QuickSecure operates as a &quot;school official&quot; under
                FERPA, accessing student education records only to provide
                safety services as directed by the educational institution. We
                maintain strict access controls, audit logging, and data
                minimization practices consistent with FERPA&apos;s requirements
                for protecting personally identifiable information from
                education records.
              </p>
            </LegalSection>

            <LegalSection
              id="data-processing-agreement"
              title="Data Processing Agreement"
            >
              <p>
                This Data Processing Agreement (&quot;DPA&quot;) supplements the
                Terms of Service and governs QuickSecure&apos;s processing of
                personal data on behalf of educational institutions using the
                Platform.
              </p>
              <h3 className="mt-2 text-[16px] text-white/80">
                Roles and Responsibilities
              </h3>
              <p>
                The educational institution acts as the data controller,
                determining the purposes and means of processing personal data.
                QuickSecure acts as the data processor, processing personal data
                only on documented instructions from the institution. QuickSecure
                will not process personal data for any purpose other than
                providing the Platform services as described in the Terms.
              </p>
              <h3 className="mt-2 text-[16px] text-white/80">
                Sub-processors
              </h3>
              <p>
                QuickSecure uses sub-processors for infrastructure, notification
                delivery, and emergency dispatch. A current list of
                sub-processors is available upon request. QuickSecure will
                provide 30 days notice before adding new sub-processors. All
                sub-processors are bound by data protection terms no less
                protective than those in this DPA.
              </p>
              <h3 className="mt-2 text-[16px] text-white/80">
                Data Deletion
              </h3>
              <p>
                Upon termination of services, QuickSecure will delete or return
                all personal data within 90 days, as directed by the
                institution. Schools may request data export at any time during
                the term of service. Backup copies will be purged according to
                our standard retention schedule.
              </p>
            </LegalSection>

            <LegalSection id="security" title="Security">
              <p>
                QuickSecure implements technical and organizational security
                measures designed to protect the confidentiality, integrity, and
                availability of school data.
              </p>
              <h3 className="mt-2 text-[16px] text-white/80">
                Access Controls
              </h3>
              <p>
                Role-based access is enforced across all products via
                authentication and account permissions. Roles include Admin, IT,
                Facilities, Teacher, Janitor, and custom designations (e.g.,
                AED-certified staff). All access is logged for audit purposes.
                Biometric authentication is supported on mobile devices via Expo
                local auth.
              </p>
              <h3 className="mt-2 text-[16px] text-white/80">
                Infrastructure Security
              </h3>
              <p>
                The Platform uses encrypted connections (TLS) for all data in
                transit. Data at rest is encrypted in PostgreSQL. Session
                management uses secure tokens with automatic expiration. Rate
                limiting is enforced via Redis to protect against abuse.
                Security headers are applied using Helmet. AWS infrastructure
                provides the foundation for storage, video streaming, and
                monitoring.
              </p>
              <h3 className="mt-2 text-[16px] text-white/80">
                Incident Response
              </h3>
              <p>
                QuickSecure maintains an incident response process for security
                events. In the event of a data breach affecting student or staff
                information, QuickSecure will notify the affected institution
                within 72 hours and cooperate fully with investigation and
                remediation efforts. Audit logs are maintained for all platform
                actions to support forensic analysis.
              </p>
              <h3 className="mt-2 text-[16px] text-white/80">
                Compliance
              </h3>
              <p>
                QuickSecure maintains FERPA-aligned data handling practices,
                role-based access enforcement, student privacy controls for tip
                line and SIS-linked data, and comprehensive audit logging.
                General liability insurance is in place. Terms of Service,
                Privacy Policy, and Data Processing Agreement are maintained and
                available for review.
              </p>
            </LegalSection>
          </div>
        </div>
      </Container>
    </div>
  );
}
