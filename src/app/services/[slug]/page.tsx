import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  getRelatedServices,
} from "@/lib/content";
import { placeholderImage } from "@/lib/utils";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/ServiceCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} — Alabama Boat Repair`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(slug, 3);

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section
        aria-label={service.name}
        style={{ background: "linear-gradient(135deg, #001F5B 0%, #002A7C 100%)" }}
        className="py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel className="text-secondary/80">Our Services</SectionLabel>
          <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl leading-tight mb-3 max-w-2xl">
            {service.name}
          </h1>
          <p className="text-secondary text-xl font-medium mb-4">{service.tagline}</p>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* ── Main content ────────────────────────────────────────────────── */}
      <section aria-label="Service details" className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Body content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Service image */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md">
                <Image
                  src={placeholderImage(`jb-${service.slug}`, 800, 450)}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              </div>

              {/* Full description */}
              <div>
                <SectionLabel>About This Service</SectionLabel>
                <h2 className="font-heading font-bold text-primary text-2xl sm:text-3xl mb-4">
                  What&apos;s Involved
                </h2>
                {service.fullDescription.split("\n\n").map((para, i) => (
                  <p key={i} className="text-muted leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>

              {/* Our approach */}
              <div className="bg-bg rounded-xl p-6 border border-border">
                <SectionLabel>Our Approach</SectionLabel>
                <h3 className="font-heading font-bold text-primary text-xl mb-3">
                  How We Work
                </h3>
                <p className="text-muted leading-relaxed">{service.approach}</p>
              </div>

              {/* Who it's for */}
              <div>
                <SectionLabel>Who It&apos;s For</SectionLabel>
                <h3 className="font-heading font-bold text-primary text-xl mb-3">
                  Is This Right for You?
                </h3>
                <p className="text-muted leading-relaxed">{service.whoItsFor}</p>
              </div>
            </div>

            {/* Sidebar */}
            <aside aria-label="Service summary">
              <div className="sticky top-24 bg-bg rounded-xl border border-border p-6 space-y-6">

                {/* Outcomes */}
                <div>
                  <h3 className="font-heading font-bold text-primary text-lg mb-4">
                    What You Can Expect
                  </h3>
                  <ul className="space-y-3">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <CheckCircle
                          className="w-5 h-5 text-secondary shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-muted text-sm leading-relaxed">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="border-border" />

                {/* CTA */}
                <div>
                  <p className="text-primary font-semibold text-sm mb-3">
                    Ready to get started?
                  </p>
                  <Button href="/contact" className="w-full justify-center">
                    {service.cta.label}
                  </Button>
                  <p className="text-muted text-xs text-center mt-3">
                    We respond within one business day
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Other services ──────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section
          aria-labelledby="related-heading"
          className="py-20 bg-bg border-t border-border"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <SectionLabel>Also Available</SectionLabel>
              <h2
                id="related-heading"
                className="font-heading font-bold text-primary text-3xl sm:text-4xl"
              >
                Other Services
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
