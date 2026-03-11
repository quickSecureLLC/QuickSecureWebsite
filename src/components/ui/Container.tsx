import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full px-5 sm:px-12 md:px-[120px]", className)}>
      {children}
    </div>
  );
}
