import Link from "next/link";

export const metadata = {
  title: "Drill Management - QuickSecure",
  description: "Plan, run, and document drills using the same workflows as real emergencies.",
};

export default function DrillManagementPage() {
  return (
    <section className="flex min-h-[calc(100dvh-60px)] flex-col items-center justify-center px-5 pt-[60px] text-center">
      <h1 className="mb-4 text-[32px] leading-[0.9] tracking-[-0.72px] text-white">
        Drill Management
      </h1>
      <p className="mb-8 max-w-[480px] text-[16px] leading-[1.5] text-white/50">
        Coming soon. See how QuickSecure simplifies drill management.
      </p>
      <Link
        href="/"
        className="text-[14px] text-accent-blue underline underline-offset-2 hover:opacity-70"
      >
        Back to home
      </Link>
    </section>
  );
}
