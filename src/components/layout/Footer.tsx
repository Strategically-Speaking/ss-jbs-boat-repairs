import Link from "next/link";
import { Anchor, Mail, Phone, Clock, Share2 } from "lucide-react";
import { getSiteSettings } from "@/lib/content";

export default function Footer() {
  const settings = getSiteSettings();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded"
              aria-label="JB's Boatworks — home"
            >
              <Anchor className="text-secondary w-5 h-5" aria-hidden="true" />
              <span className="font-heading font-bold text-white text-lg">
                JB&apos;s <span className="text-secondary">Boatworks</span>
              </span>
            </Link>
            <p className="mt-3 text-white/60 text-sm leading-relaxed">
              {settings.footer.tagline}
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-4">
              {settings.social.instagram && (
                <a
                  href={settings.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow JB's Boatworks on Instagram"
                  className="p-2 rounded-full bg-white/10 hover:bg-secondary/20 text-white/70 hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                >
                  <Share2 className="w-4 h-4" aria-hidden="true" />
                  <span className="sr-only">Instagram</span>
                </a>
              )}
              {settings.social.facebook && (
                <a
                  href={settings.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow JB's Boatworks on Facebook"
                  className="p-2 rounded-full bg-white/10 hover:bg-secondary/20 text-white/70 hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                >
                  <Share2 className="w-4 h-4" aria-hidden="true" />
                  <span className="sr-only">Facebook</span>
                </a>
              )}
            </div>
          </div>

          {/* Navigation column */}
          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {settings.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact column */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-4">
              Contact
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Mail
                  className="w-4 h-4 mt-0.5 text-secondary shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${settings.contact.email}`}
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:rounded"
                >
                  {settings.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Phone
                  className="w-4 h-4 mt-0.5 text-secondary shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${settings.contact.phone.replace(/\D/g, "")}`}
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:rounded"
                >
                  {settings.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Clock
                  className="w-4 h-4 mt-0.5 text-secondary shrink-0"
                  aria-hidden="true"
                />
                <span>{settings.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          {settings.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
