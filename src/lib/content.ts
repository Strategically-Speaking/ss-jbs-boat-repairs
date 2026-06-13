// content.ts — single source of truth for all data access.
// No page or component imports JSON directly — everything goes through here.
// Designed for easy swap to Sanity GROQ queries when ready.

import rawData from "@/data/content.json";
import type {
  SiteContent,
  SiteSettings,
  SitePage,
  Service,
  TeamMember,
  Testimonial,
  Stat,
} from "./types";

const content = rawData as SiteContent;

// ── Site-wide ──────────────────────────────────────────────────────────────

export function getSiteSettings(): SiteSettings {
  return content.siteSettings;
}

// ── Pages ──────────────────────────────────────────────────────────────────

export function getPage(page: keyof SiteContent["pages"]): SitePage {
  return content.pages[page];
}

// ── Services ───────────────────────────────────────────────────────────────

export function getServices(): Service[] {
  return content.services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return content.services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return content.services.map((s) => s.slug);
}

export function getRelatedServices(currentSlug: string, count = 3): Service[] {
  return content.services.filter((s) => s.slug !== currentSlug).slice(0, count);
}

// ── Team ───────────────────────────────────────────────────────────────────

export function getTeam(): TeamMember[] {
  return content.team;
}

// ── Testimonials ───────────────────────────────────────────────────────────

export function getTestimonials(): Testimonial[] {
  return content.testimonials;
}

export function getFeaturedTestimonial(): Testimonial {
  return content.testimonials[0];
}

// ── Stats ──────────────────────────────────────────────────────────────────

export function getStats(): Stat[] {
  return content.stats;
}
