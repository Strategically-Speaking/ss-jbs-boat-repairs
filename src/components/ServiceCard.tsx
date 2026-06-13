import Link from "next/link";
import { ArrowRight, Wrench, Zap, Layers, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/types";

// Map service slugs to icons
const iconMap: Record<string, React.ElementType> = {
  "motor-repair": Wrench,
  "electrical-systems": Zap,
  "fiberglass-hull-repair": Layers,
  "general-maintenance": Settings,
};

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export default function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = iconMap[service.slug] ?? Wrench;

  return (
    <article
      className={cn(
        "group bg-surface rounded-xl p-6 border border-border shadow-sm hover:shadow-lg hover:border-secondary transition-all duration-200 flex flex-col",
        className
      )}
    >
      {/* Icon */}
      <div className="w-11 h-11 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
        <Icon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" aria-hidden="true" />
      </div>

      {/* Content */}
      <h3 className="font-heading font-bold text-primary text-lg mb-1">
        {service.name}
      </h3>
      <p className="text-secondary text-sm font-medium mb-3">{service.tagline}</p>
      <p className="text-muted text-sm leading-relaxed flex-1">
        {service.shortDescription}
      </p>

      {/* CTA */}
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary group-hover:gap-2.5 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:rounded"
        aria-label={`Learn more about ${service.name}`}
      >
        Learn more
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
