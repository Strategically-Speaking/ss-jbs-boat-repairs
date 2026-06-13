"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Anchor } from "lucide-react";
import { cn } from "@/lib/utils";
import WaveDecoration from "@/components/ui/WaveDecoration";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-primary shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded"
            aria-label="JB's Boatworks — home"
          >
            <Anchor
              className="text-secondary w-6 h-6 group-hover:rotate-12 transition-transform duration-200"
              aria-hidden="true"
            />
            <span className="font-heading font-bold text-white text-lg leading-tight">
              JB&apos;s <span className="text-secondary">Boatworks</span>
            </span>
            <WaveDecoration className="text-secondary/60 ml-1 hidden sm:inline-block" />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-1"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1 focus-visible:ring-offset-primary",
                    isActive
                      ? "text-secondary bg-white/10"
                      : "text-white/80 hover:text-white hover:bg-white/10",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-4 px-4 py-2 rounded bg-accent text-white text-sm font-semibold hover:bg-accent-dark transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Request a Repair
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1 focus-visible:ring-offset-primary"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="md:hidden bg-primary border-t border-white/10 px-4 pb-4"
        >
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
                    isActive
                      ? "text-secondary bg-white/10"
                      : "text-white/80 hover:text-white hover:bg-white/10",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-3 rounded bg-accent text-white text-sm font-semibold text-center hover:bg-accent-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Request a Repair
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
