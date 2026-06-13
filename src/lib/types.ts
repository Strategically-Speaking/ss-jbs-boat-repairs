export interface NavItem {
  label: string;
  href: string;
}

export interface Logo {
  text: string;
  hasImage: boolean;
  imageAlt: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  hours: string;
}

export interface Social {
  linkedin: string;
  instagram: string;
  facebook: string;
  twitter: string;
}

export interface Brand {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  headingFont: string;
  bodyFont: string;
}

export interface SiteSettings {
  name: string;
  tagline: string;
  mission: string;
  logo: Logo;
  contact: ContactInfo;
  social: Social;
  nav: NavItem[];
  footer: {
    tagline: string;
    copyright: string;
  };
  brand: Brand;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface HeroSection {
  headline: string;
  subheadline: string;
  ctaPrimary?: CtaLink;
  ctaSecondary?: CtaLink;
  imageAlt?: string;
}

export interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
}

export interface ContactOption {
  type: string;
  label: string;
  description: string;
  action?: string;
  url?: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface PageSection {
  id: string;
  type: string;
  heading?: string;
  subheading?: string;
  body?: string;
  items?: string | ValueItem[];
  featured?: string;
  cta?: CtaLink;
  imageAlt?: string;
  options?: ContactOption[];
  fields?: FormField[];
  submitLabel?: string;
  successMessage?: string;
}

export interface PageSEO {
  title: string;
  description: string;
}

export interface SitePage {
  hero: HeroSection;
  sections: PageSection[];
  seo: PageSEO;
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  approach: string;
  whoItsFor: string;
  outcomes: string[];
  cta: CtaLink;
  imageAlt: string;
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  credentials: string;
  imageAlt: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  org: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SiteContent {
  siteSettings: SiteSettings;
  pages: {
    home: SitePage;
    about: SitePage;
    services: SitePage;
    contact: SitePage;
  };
  services: Service[];
  team: TeamMember[];
  testimonials: Testimonial[];
  stats: Stat[];
}
