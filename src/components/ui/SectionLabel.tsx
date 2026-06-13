import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-bold uppercase tracking-widest text-secondary mb-3",
        className
      )}
    >
      {children}
    </span>
  );
}
