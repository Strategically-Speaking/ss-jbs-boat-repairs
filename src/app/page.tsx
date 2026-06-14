import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import {
  getPage,
  getServices,
  getStats,
  getFeaturedTestimonial,
} from "@/lib/content";
import { placeholderImage } from "@/lib/utils";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

export async function generateMetadata(): Promise<Metadata> {
  const page = getPage("home");
  return {
    title: page.seo.title,
    description: page.seo.description,
  };
}

export default function HomePage() {
  const page = getPage("home");
  const services = getServices();
  const stats = getStats();
  const testimonial = getFeaturedTestimonial();
  const { hero } = page;

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section
        aria-label="Hero"
        style={{
          background: "linear-gradient(135deg, #001F5B 0%, #002A7C 100%)",
        }}
        className="relative overflow-hidden"
      >
        {/* Decorative orb */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #00B7F1 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #00B7F1 0%, transparent 70%)",
            transform: "translate(-30%, 30%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-2xl">
            <SectionLabel className="text-secondary/80">
              Alabama&apos;s Trusted Boat Repair Shop
            </SectionLabel>
            <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
              {hero.headline}
            </h1>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
              {hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              {hero.ctaPrimary && (
                <Button href={hero.ctaPrimary.href} size="lg">
                  {hero.ctaPrimary.label}
                </Button>
              )}
              {hero.ctaSecondary && (
                <Button
                  href={hero.ctaSecondary.href}
                  variant="secondary"
                  size="lg"
                >
                  {hero.ctaSecondary.label}
                </Button>
              )}
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-5 mt-10">
              {["Fast turnarounds", "Honest pricing", "Old & new motors"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-white/60 text-sm"
                  >
                    <CheckCircle
                      className="w-4 h-4 text-secondary shrink-0"
                      aria-hidden="true"
                    />
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services preview ────────────────────────────────────────────── */}
      <section aria-labelledby="services-heading" className="py-20 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>What We Fix</SectionLabel>
            <h2
              id="services-heading"
              className="font-heading font-bold text-primary text-3xl sm:text-4xl mb-3"
            >
              Full-Service Boat Repair
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              From full motor rebuilds to routine maintenance, we handle it all.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:rounded"
            >
              View all services{" "}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── About strip ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="about-heading"
        className="py-20 bg-surface border-t border-border"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <h2
                id="about-heading"
                className="font-heading font-bold text-primary text-3xl sm:text-4xl mb-5"
              >
                Started by a Boat Lover
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                JB&apos;s Boatworks was founded in 2024 by Jonathan Bennett — a
                22-year-old who grew up fishing Alabama&apos;s lakes and rivers.
                When JB couldn&apos;t find a shop that actually cared about the
                work, he started his own.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                What began as a passion for older motors has grown into a
                full-service repair operation serving boat owners across
                Alabama. Fast turnarounds, honest pricing, no runaround.
              </p>
              <Button href="/about" variant="secondary">
                Our Story
              </Button>
            </div>

            {/* Image */}
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/boatlover.jpg"
                alt="JB's Boatworks workshop with boat engine being serviced"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Electric blue accent bar */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 h-1 bg-secondary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ─────────────────────────────────────────────────── */}
      <section
        aria-label="By the numbers"
        style={{
          background: "linear-gradient(135deg, #001F5B 0%, #002A7C 100%)",
        }}
        className="py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-white/60 text-sm font-medium mt-1 order-2">
                  {stat.label}
                </dt>
                <dd className="font-heading font-bold text-secondary text-4xl sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Testimonial ─────────────────────────────────────────────────── */}
      <section aria-labelledby="testimonial-heading" className="py-20 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionLabel>What Boat Owners Say</SectionLabel>
            <h2
              id="testimonial-heading"
              className="font-heading font-bold text-primary text-3xl sm:text-4xl"
            >
              Don&apos;t Take Our Word for It
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <TestimonialCard testimonial={testimonial} />
          </div>
        </div>
      </section>

      {/* ── CTA section ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="cta-heading"
        className="py-20 bg-secondary/10 border-t border-secondary/20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="font-heading font-bold text-primary text-3xl sm:text-4xl mb-4"
          >
            Ready to Get Your Boat Running?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            Drop us a message and we&apos;ll get back to you within one business
            day.
          </p>
          <Button href="/contact" size="lg">
            Request a Repair
          </Button>
        </div>
      </section>
    </>
  );
}
