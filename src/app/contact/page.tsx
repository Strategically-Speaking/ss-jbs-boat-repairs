"use client";

import { useState } from "react";
import { Mail, Phone, Clock, MapPin, CheckCircle } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { getSiteSettings } from "@/lib/content";

const settings = getSiteSettings();

const contactItems = [
  {
    icon: Mail,
    label: "Email Us",
    value: settings.contact.email,
    href: `mailto:${settings.contact.email}`,
  },
  {
    icon: Phone,
    label: "Call Us",
    value: settings.contact.phone,
    href: `tel:${settings.contact.phone.replace(/\D/g, "")}`,
  },
  {
    icon: Clock,
    label: "Shop Hours",
    value: settings.contact.hours,
    href: undefined,
  },
  {
    icon: MapPin,
    label: "Location",
    value: settings.contact.address,
    href: undefined,
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formspreeId) {
      // Demo mode — simulate success
      await new Promise((r) => setTimeout(r, 800));
      setSubmitted(true);
      setSubmitting(false);
      return;
    }

    try {
      const data = new FormData(e.currentTarget);
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please email us directly.");
      }
    } catch {
      setError("Something went wrong. Please email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* ── Page hero ───────────────────────────────────────────────────── */}
      <section
        aria-label="Contact JB's Boatworks"
        style={{
          background: "linear-gradient(135deg, #001F5B 0%, #002A7C 100%)",
        }}
        className="py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel className="text-secondary/80">
            Get in Touch
          </SectionLabel>
          <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl leading-tight mb-5">
            Let&apos;s Get Your Boat Fixed
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl">
            Fill out the form below and we&apos;ll get back to you within one
            business day.
          </p>
        </div>
      </section>

      {/* ── Form + info ─────────────────────────────────────────────────── */}
      <section
        aria-label="Contact form and information"
        className="py-20 bg-bg"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-surface rounded-xl border border-border shadow-sm p-8">
                {submitted ? (
                  <div className="flex flex-col items-center text-center py-10">
                    <CheckCircle
                      className="w-14 h-14 text-secondary mb-4"
                      aria-hidden="true"
                    />
                    <h2 className="font-heading font-bold text-primary text-2xl mb-2">
                      Got it — we&apos;ll be in touch!
                    </h2>
                    <p className="text-muted">
                      Expect to hear from us within one business day.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Repair request form"
                  >
                    <SectionLabel>Send a Message</SectionLabel>
                    <h2 className="font-heading font-bold text-primary text-2xl mb-6">
                      Request a Repair
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-primary mb-1"
                        >
                          Your Name{" "}
                          <span aria-hidden="true" className="text-accent">
                            *
                          </span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-primary placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-secondary transition-colors"
                          placeholder="Jonathan Smith"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-primary mb-1"
                        >
                          Email Address{" "}
                          <span aria-hidden="true" className="text-accent">
                            *
                          </span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-primary placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-secondary transition-colors"
                          placeholder="jonathan@example.com"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-primary mb-1"
                        >
                          Phone Number{" "}
                          <span className="text-muted font-normal">
                            (optional)
                          </span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-primary placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-secondary transition-colors"
                          placeholder="(205) 555-0100"
                        />
                      </div>

                      {/* Boat */}
                      <div>
                        <label
                          htmlFor="boat"
                          className="block text-sm font-medium text-primary mb-1"
                        >
                          Boat Make, Model &amp; Year{" "}
                          <span className="text-muted font-normal">
                            (optional)
                          </span>
                        </label>
                        <input
                          id="boat"
                          name="boat"
                          type="text"
                          className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-primary placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-secondary transition-colors"
                          placeholder="e.g. 1998 Tracker Pro 17"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div className="mt-5">
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-primary mb-1"
                      >
                        Service Needed{" "}
                        <span aria-hidden="true" className="text-accent">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-secondary transition-colors"
                      >
                        <option value="" disabled>Select a service…</option>
                        <option value="general-maintenance">General Maintenance</option>
                        <option value="motor-repair">Motor Repair &amp; Rebuild</option>
                        <option value="electrical-systems">Electrical Systems</option>
                        <option value="fiberglass-hull-repair">Fiberglass &amp; Hull Repair</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Issue */}
                    <div className="mt-5">
                      <label
                        htmlFor="issue"
                        className="block text-sm font-medium text-primary mb-1"
                      >
                        What&apos;s going on with your boat?{" "}
                        <span aria-hidden="true" className="text-accent">
                          *
                        </span>
                      </label>
                      <textarea
                        id="issue"
                        name="issue"
                        required
                        rows={5}
                        className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-primary placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-secondary transition-colors resize-y"
                        placeholder="Describe the issue — what's happening, when it started, any sounds or symptoms…"
                      />
                    </div>

                    {error && (
                      <p role="alert" className="mt-3 text-sm text-red-600">
                        {error}
                      </p>
                    )}

                    <div className="mt-6">
                      <Button
                        type="submit"
                        disabled={submitting}
                        size="lg"
                        className="w-full sm:w-auto"
                      >
                        {submitting ? "Sending…" : "Send My Request"}
                      </Button>
                      <p className="text-muted text-xs mt-3">
                        <span aria-hidden="true" className="text-accent">
                          *
                        </span>{" "}
                        Required fields
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Contact info */}
            <aside aria-label="Contact information">
              <div className="space-y-4">
                <h2 className="font-heading font-bold text-primary text-xl mb-6">
                  Contact Info
                </h2>
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 bg-surface rounded-xl p-4 border border-border"
                  >
                    <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                      <Icon
                        className="w-4 h-4 text-secondary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-primary text-sm font-medium hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:rounded"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-primary text-sm font-medium">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
