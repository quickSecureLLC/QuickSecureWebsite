import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const securityFeatures = [
  {
    title: "FERPA Aligned",
    description:
      "Built to meet federal student privacy requirements for all K-12 data handling",
  },
  {
    title: "Role-Based Access",
    description:
      "Granular permissions enforced via auth for admin, IT, facilities, teachers, and custom roles",
  },
  {
    title: "Student Privacy Controls",
    description:
      "Tip line and SIS-linked data are isolated with strict privacy safeguards",
  },
  {
    title: "Audit Logs",
    description:
      "Full audit trail for all actions across the platform for accountability and compliance",
  },
];

export default function ComparisonFAQ() {
  return (
    <>
      {/* Enterprise Security Section */}
      <section id="security" className="py-[68px] sm:py-24 md:py-28">
        <Container>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-navy">
            <div className="flex flex-col md:flex-row">
              {/* Left column - bottom aligned */}
              <div className="flex flex-1 flex-col justify-end p-8 md:p-10">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <h2 className="text-[22px] leading-[0.9] tracking-[-0.54px] text-white sm:text-[24px] md:text-[27px]">
                      Security & Compliance
                    </h2>
                    <p className="max-w-[424px] text-[14px] leading-[21px] tracking-[0.07px] text-white/60">
                      QuickSecure keeps student and staff data safe with
                      privacy-first design and compliance built in
                    </p>
                  </div>
                </div>
              </div>

              {/* Right column - security items */}
              <div className="flex-1 px-8 pt-12 pb-9 md:px-10">
                <div className="divide-y divide-white/20">
                  {securityFeatures.map((feature) => (
                    <div key={feature.title} className="flex flex-col gap-2 py-8">
                      <h3 className="text-[18px] leading-[21px] tracking-[-0.42px] text-white md:text-[21px]">
                        {feature.title}
                      </h3>
                      <p className="text-[14px] leading-[21px] tracking-[0.07px] text-white/60">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section - "Explore QuickSecure" */}
      <section className="bg-surface pt-[68px] pb-28 sm:pt-24 sm:pb-40 md:pt-[116px] md:pb-48">
        <Container className="text-center">
          <div className="mx-auto flex max-w-[448px] flex-col items-center gap-5">
            <h2 className="whitespace-nowrap text-[28px] leading-[0.9] tracking-[-0.035em] text-white sm:text-[40px] md:text-[54px]">
              Try QuickSecure
            </h2>
            <Button href="/contact" size="md">
              Request demo
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

