import type { Metadata } from "next";
import { getPage, getServices } from "@/lib/content";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/ServiceCard";

export async function generateMetadata(): Promise<Metadata> {
  const page = getPage("services");
  return {
    title: page.seo.title,
    description: page.seo.description,
  };
}

export default function ServicesPage() {
  const page = getPage("services");
  const services = getServices();
  const { hero } = page;

  return (
    <>
      {/* ── Page hero ───────────────────────────────────────────────────── */}
      <section
        aria-label="Services"
        style={{ background: "linear-gradient(135deg, #001F5B 0%, #002A7C 100%)" }}
        className="py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel className="text-secondary/80">What We Do</SectionLabel>
          <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl leading-tight mb-5 max-w-2xl">
            {hero.headline}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl">
            {hero.subheadline}
          </p>
        </div>
      </section>

      {/* ── Services grid ───────────────────────────────────────────────── */}
      <section aria-labelledby="services-grid-heading" className="py-20 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionLabel>Our Services</SectionLabel>
            <h2
              id="services-grid-heading"
              className="font-heading font-bold text-primary text-3xl sm:text-4xl mb-3"
            >
              Every Repair Starts with Honest Pricing
            </h2>
            <p className="text-muted text-lg max-w-xl">
              We diagnose first, quote before we touch anything, and get your boat back to
              you fast.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Promise strip ───────────────────────────────────────────────── */}
      <section
        aria-label="Our commitment"
        style={{ background: "linear-gradient(135deg, #001F5B 0%, #002A7C 100%)" }}
        className="py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { value: "Diagnose First", label: "We tell you what's wrong before we start" },
              { value: "Approve the Quote", label: "You approve cost and scope — no surprises" },
              { value: "Fast Turnaround", label: "Back on the water, not sitting in a shop" },
            ].map((item) => (
              <div key={item.value}>
                <dt className="font-heading font-bold text-secondary text-2xl mb-1">{item.value}</dt>
                <dd className="text-white/60 text-sm">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="services-cta-heading"
        className="py-20 bg-secondary/10 border-t border-secondary/20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="services-cta-heading"
            className="font-heading font-bold text-primary text-3xl sm:text-4xl mb-4"
          >
            Not Sure What Your Boat Needs?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            Send us a message and describe what&apos;s going on. We&apos;ll help you figure it out.
          </p>
          <Button href="/contact" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
