import Container from "@/components/ui/Container";
import LottieCard from "@/components/ui/LottieCard";

const topFeatures = [
  {
    title: "Mass Notifications",
    description: "Push, SMS, email, and Critical Alerts with role-based targeting",
    lottie: "/images/lottie/qs-mass-notifications.json",
  },
  {
    title: "SOP Management",
    description: "Centralized emergency procedures and operational protocols linked into workflows and drills",
    lottie: "/images/lottie/qs-sop.json",
  },
];

const bottomFeatures = [
  {
    title: "Asset Management",
    description: "Track devices, equipment, and doors district-wide",
    lottie: "/images/lottie/qs-asset-mgmt.json",
  },
  {
    title: "Ticketing",
    description: "IT, facilities, and safety issue tracking with AI triage",
    lottie: "/images/lottie/qs-ticketing.json",
  },
  {
    title: "Drill Compliance",
    description: "Auto-generate drill records and compliance reports",
    lottie: "/images/lottie/qs-drill-compliance.json",
  },
];

export default function ProductShowcase() {
  return (
    <section
      id="features"
      className="bg-page-bg py-[78px] sm:py-[94px] md:py-[110px]"
    >
      <Container>
        {/* Section header */}
        <div className="mb-8 flex flex-col gap-[6px] sm:mb-10 md:mb-12">
          <h2 className="text-[22px] leading-[0.9] tracking-[-0.54px] text-white sm:text-[24px] md:text-[27px]">
            Every module your school needs
          </h2>
          <p className="text-[22px] leading-[0.9] tracking-[-0.54px] text-white/50 sm:text-[24px] md:text-[27px]">
            Sold separately, works together
          </p>
        </div>

        {/* Top row: 2 cards with 41/59 split */}
        <div className="mb-4 grid grid-cols-1 gap-4 sm:gap-[15px] md:mb-[15px] md:grid-cols-[41fr_59fr]">
          <LottieCard
            {...topFeatures[0]}
            animationAspect="522/334"
          />
          <LottieCard
            {...topFeatures[1]}
            animationAspect="735/334"
          />
        </div>

        {/* Bottom row: 3 smaller cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-[15px] md:grid-cols-3">
          {bottomFeatures.map((feature, i) => (
            <LottieCard
              key={feature.title}
              {...feature}
              animationAspect="415/342"
              textClassName=""
              className={i === 2 ? "sm:col-span-2 md:col-span-1" : undefined}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
