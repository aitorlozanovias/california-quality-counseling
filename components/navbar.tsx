"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navLinks, siteName } from "./site-data";

const serviceLinks = [
  { href: "/individual-therapy", label: "Individual Therapy" },
  { href: "/couples-therapy", label: "Couples Therapy" },
  { href: "/emdr-therapy", label: "EMDR-Informed Therapy" },
];

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)]/70 bg-[var(--background-soft)]/95 backdrop-blur-md">
      <div className="section-shell py-4 lg:py-5">
        <nav className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-10" aria-label="Primary">
          <Link
            href="/"
            className="min-w-0 rounded-2xl border border-[var(--border)]/70 bg-[var(--surface)]/85 px-4 py-3 transition hover:border-[var(--brand)]/40 lg:max-w-[390px] lg:shrink-0"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--muted-foreground)]">California-Wide Online Therapy</p>
            <p className="mt-1 text-[17px] font-semibold leading-tight tracking-tight text-[var(--foreground)] lg:truncate">{siteName}</p>
          </Link>

          <div className="flex min-w-0 flex-wrap items-center gap-3 lg:flex-nowrap lg:justify-end lg:gap-5">
            <ul className="flex min-w-0 items-center justify-end gap-1.5 text-base font-medium text-[var(--muted-foreground)] lg:gap-2">
              {navLinks.map((link) => {
                if (link.label === "Services") {
                  return (
                    <li
                      key={link.href}
                      ref={servicesRef}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button
                        type="button"
                        className="flex items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-2.5 transition duration-200 hover:bg-[var(--surface)] hover:text-[var(--brand-deep)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
                        onClick={() => setServicesOpen((open) => !open)}
                        aria-haspopup="menu"
                        aria-expanded={servicesOpen}
                      >
                        Services
                        <svg
                          className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : "rotate-0"}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M5.25 7.5a.75.75 0 0 1 .53.22L10 11.94l4.22-4.22a.75.75 0 0 1 1.06 1.06l-4.75 4.75a.75.75 0 0 1-1.06 0L4.72 8.78a.75.75 0 0 1 .53-1.28Z" />
                        </svg>
                      </button>

                      <div
                        className={`absolute left-0 top-full mt-2 w-60 origin-top rounded-2xl border border-[var(--border)]/70 bg-white/95 p-2 shadow-[0_18px_42px_-26px_rgba(35,49,59,0.55)] backdrop-blur-sm transition-all duration-200 ${
                          servicesOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
                        }`}
                        role="menu"
                        aria-label="Services submenu"
                      >
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block rounded-xl px-3 py-2.5 text-[15px] text-[var(--foreground)] transition duration-200 hover:bg-[var(--surface)] hover:text-[var(--brand-deep)]"
                            role="menuitem"
                            onClick={() => setServicesOpen(false)}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block whitespace-nowrap rounded-full px-3.5 py-2.5 transition duration-200 hover:bg-[var(--surface)] hover:text-[var(--brand-deep)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/contact"
              className="shrink-0 rounded-full border border-[var(--brand-deep)] bg-[var(--brand-deep)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_-18px_rgba(35,49,59,0.95)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-deep)]"
            >
              Schedule Consultation
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
