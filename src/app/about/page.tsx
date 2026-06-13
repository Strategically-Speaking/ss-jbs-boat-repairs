import type { Metadata } from "next";
import { getPage, getTeam } from "@/lib/content";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import TeamCard from "@/components/TeamCard";
import type { ValueItem } from "@/lib/types";

export async function generateMetadata(): Promise<Metadata> {
  const page = getPage("about");
  return {
    title: page.seo.title,
    description: page.seo.description,
  };
}

export default function AboutPage() {
  const page = getPage("about");
  const team = getTeam();
  const { hero, sections } = page;

  const storySection = sections.find((s) => s.id === "story");
  const valuesSection = sections.find((s) => s.id === "values");

  return (
    <>
      {/* ── Page hero ───────────────────────────────────────────────────── */}
      <section
        aria-label="About JB's Boatworks"
        style={{
          background: "linear-gradient(135deg, #001F5B 0%, #002A7C 100%)",
        }}
        className="py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel className="text-secondary/80">Our Story</SectionLabel>
          <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl leading-tight mb-5 max-w-2xl">
            {hero.headline}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl">
            {hero.subheadline}
          </p>
        </div>
      </section>

      {/* ── Story ───────────────────────────────────────────────────────── */}
      {storySection && (
        <section aria-labelledby="story-heading" className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl">
              <SectionLabel>His Background</SectionLabel>
              <h2
                id="story-heading"
                className="font-heading font-bold text-primary text-3xl sm:text-4xl mb-6"
              >
                {storySection.heading}
              </h2>
              {storySection.body?.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-muted leading-relaxed mb-4 text-base"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Values ──────────────────────────────────────────────────────── */}
      {valuesSection && Array.isArray(valuesSection.items) && (
        <section
          aria-labelledby="values-heading"
          className="py-20 bg-bg border-t border-border"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <SectionLabel>Our Approach</SectionLabel>
              <h2
                id="values-heading"
                className="font-heading font-bold text-primary text-3xl sm:text-4xl"
              >
                {valuesSection.heading}
              </h2>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(valuesSection.items as ValueItem[]).map((item) => (
                <li
                  key={item.title}
                  className="bg-surface rounded-xl p-6 border border-border shadow-sm hover:border-secondary transition-colors"
                >
                  <div
                    className="w-2 h-8 rounded-full bg-secondary mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="font-heading font-bold text-primary text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Team ────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="team-heading"
        className="py-20 bg-surface border-t border-border"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionLabel>The Team</SectionLabel>
            <h2
              id="team-heading"
              className="font-heading font-bold text-primary text-3xl sm:text-4xl"
            >
              Meet JB
            </h2>
          </div>

          <div className="max-w-6xl">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="about-cta-heading"
        className="py-20 bg-secondary/10 border-t border-secondary/20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="about-cta-heading"
            className="font-heading font-bold text-primary text-3xl sm:text-4xl mb-4"
          >
            Let&apos;s Get Your Boat Back on the Water
          </h2>
          <p className="text-muted text-lg mb-8 max-w-lg mx-auto">
            We&apos;re quick to respond and easy to work with. Send us a message
            today.
          </p>
          <Button href="/contact" size="lg">
            Request a Repair
          </Button>
        </div>
      </section>
    </>
  );
}
