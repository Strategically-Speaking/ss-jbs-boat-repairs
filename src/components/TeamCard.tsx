import Image from "next/image";
import { placeholderImage } from "@/lib/utils";
import type { TeamMember } from "@/lib/types";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="bg-surface rounded-xl overflow-hidden border border-border shadow-sm flex flex-col sm:flex-row gap-0">
      {/* Photo */}
      <div className="relative w-full sm:w-48 h-56 sm:h-auto shrink-0">
        <Image
          src={placeholderImage("jb-team", 400, 400)}
          alt={member.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 192px"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-center">
        <h3 className="font-heading font-bold text-primary text-xl">{member.name}</h3>
        <p className="text-secondary text-sm font-semibold mt-0.5 mb-1">{member.title}</p>
        <p className="text-xs text-muted mb-3">{member.credentials}</p>
        <p className="text-muted text-sm leading-relaxed">{member.bio}</p>
      </div>
    </article>
  );
}
