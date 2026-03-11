import Link from "next/link";

export const metadata = {
  title: "Emergency Response - QuickSecure",
  description: "Structured workflows and direct-to-dispatch for any emergency.",
};

export default function EmergencyResponsePage() {
  return (
    <section className="flex min-h-[calc(100dvh-60px)] flex-col items-center justify-center px-5 pt-[60px] text-center">
      <h1 className="mb-4 text-[32px] leading-[0.9] tracking-[-0.72px] text-white">
        Emergency Response
      </h1>
      <p className="mb-8 max-w-[480px] text-[16px] leading-[1.5] text-white/50">
        Coming soon. Learn how QuickSecure streamlines emergency response.
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
