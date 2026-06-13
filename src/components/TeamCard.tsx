import Image from "next/image";
import { placeholderImage } from "@/lib/utils";
import type { TeamMember } from "@/lib/types";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="bg-surface h-80 rounded-xl overflow-hidden border border-border shadow-sm flex flex-col sm:flex-row gap-0">
      {/* Photo */}
      <div className="relative w-full sm:w-64 h-80 sm:h-auto shrink-0">
        <Image
          src="/fisherman.jpg"
          alt={member.imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1280px) 100vw, 50vh"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-center">
        <h3 className="font-heading font-bold text-primary text-xl">
          {member.name}
        </h3>
        <p className="text-secondary text-sm font-semibold mt-0.5 mb-1">
          {member.title}
        </p>
        <p className="text-xs text-muted mb-3">{member.credentials}</p>
        <p className="text-muted text-sm leading-relaxed">{member.bio}</p>
      </div>
    </article>
  );
}
