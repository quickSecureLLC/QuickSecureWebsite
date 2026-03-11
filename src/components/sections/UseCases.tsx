import Image from "next/image";
import CTALink from "@/components/ui/CTALink";
import Container from "@/components/ui/Container";

type UseCase = {
  title: string;
  description: string;
  href: string;
  image: string;
};

const useCases: UseCase[] = [
  {
    title: "Emergency Response",
    description: "Structured workflows and direct-to-dispatch for any emergency",
    href: "/product/emergency-response",
    image: "/images/usecase-emergency.png",
  },
  {
    title: "Campus Monitoring",
    description: "Live lock status, camera feeds, and access control unified in one dashboard",
    href: "/product/campus-monitoring",
    image: "/images/usecase-campus.png",
  },
  {
    title: "Anonymous Tip Line",
    description: "AI-triaged reporting with multilingual support and tiered escalation",
    href: "/product/tip-line",
    image: "/images/usecase-tipline.png",
  },
  {
    title: "Drill Management",
    description: "Plan, run, and document drills using the same workflows as real emergencies",
    href: "/product/drill-management",
    image: "/images/usecase-drills.png",
  },
];

function UseCaseCard({ useCase }: { useCase: UseCase }) {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col gap-[8px]">
        <h3 className="text-[20px] leading-[28.8px] tracking-[-0.4px] text-white md:text-[24px]">
          {useCase.title}
        </h3>
        <p className="text-[15px] leading-[24px] tracking-[0.07px] text-white/50">
          {useCase.description}
        </p>
        <CTALink href={useCase.href} variant="muted" size="sm">
          Learn more
        </CTALink>
      </div>

      <div className="relative overflow-hidden rounded-xl border-[0.5px] border-white/10">
        <Image
          src={useCase.image}
          alt={useCase.title}
          width={1136}
          height={760}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="block w-full"
        />
      </div>
    </div>
  );
}

export default function UseCases() {
  return (
    <section id="use-cases" className="py-[78px] sm:py-[94px] md:py-[110px]">
      <Container>
        <div className="flex flex-col">
          {/* Section header */}
          <div className="mb-8 flex flex-col items-center gap-[16px] text-center sm:mb-10 md:mb-12">
            <h2 className="text-[26px] leading-[1] tracking-[-0.54px] text-white sm:text-[28px] md:text-[30px]">
              QuickSecure in Action
            </h2>
            <p className="max-w-[512px] text-[15px] leading-[24px] tracking-[0.07px] text-white/70 md:text-[16px]">
              Solutions for every scenario your school faces
            </p>
          </div>

          {/* Use case grid */}
          <div className="grid gap-16 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-20">
            {useCases.map((useCase) => (
              <UseCaseCard key={useCase.title} useCase={useCase} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
