import Image from "next/image";
import Container from "@/components/ui/Container";

type UseCase = {
  title: string;
  description: string;
  image: string;
};

const useCases: UseCase[] = [
  {
    title: "Emergency Response",
    description: "Structured workflows and direct-to-dispatch for any emergency",
    image: "/images/usecase-emergency.png",
  },
  {
    title: "Campus Monitoring",
    description: "Live lock status, camera feeds, and access control unified in one dashboard",
    image: "/images/usecase-campus.png",
  },
  {
    title: "Anonymous Tip Line",
    description: "AI-triaged reporting with multilingual support and tiered escalation",
    image: "/images/usecase-tipline.png",
  },
  {
    title: "Drill Management",
    description: "Plan, run, and document drills using the same workflows as real emergencies",
    image: "/images/usecase-drills.png",
  },
];

function UseCaseCard({ useCase }: { useCase: UseCase }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h3 className="text-[20px] leading-[28.8px] tracking-[-0.4px] text-white md:text-[24px]">
          {useCase.title}
        </h3>
        <p className="text-[15px] leading-[24px] tracking-[0.07px] text-white/50">
          {useCase.description}
        </p>
      </div>

      <div className="overflow-hidden rounded-xl">
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
    <section id="use-cases" className="py-20 sm:py-24 md:py-28">
      <Container>
        <div className="flex flex-col">
          {/* Section header */}
          <div className="mb-8 flex flex-col gap-1.5 sm:mb-10 md:mb-12">
            <h2 className="text-[22px] leading-[0.9] tracking-[-0.54px] text-white sm:text-[24px] md:text-[27px]">
              QuickSecure in Action
            </h2>
            <p className="text-[22px] leading-[0.9] tracking-[-0.54px] text-white/50 sm:text-[24px] md:text-[27px]">
              See how schools use it
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
