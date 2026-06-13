import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export default function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <blockquote
      className={cn(
        "bg-surface rounded-xl p-6 border border-border shadow-sm flex flex-col gap-4",
        className
      )}
    >
      {/* Stars */}
      <div className="flex gap-1" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-accent text-accent"
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-primary text-base leading-relaxed italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Attribution */}
      <footer className="mt-auto">
        <p className="font-semibold text-primary text-sm">{testimonial.name}</p>
        <p className="text-muted text-xs">
          {testimonial.title}
          {testimonial.org && ` · ${testimonial.org}`}
        </p>
      </footer>
    </blockquote>
  );
}
