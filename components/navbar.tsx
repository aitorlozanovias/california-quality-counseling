import Link from "next/link";
import { navLinks, siteName } from "./site-data";

const serviceLinks = [
  { href: "/individual-therapy", label: "Individual Therapy" },
  { href: "/couples-therapy", label: "Couples Therapy" },
  { href: "/emdr-therapy", label: "EMDR-Informed Therapy" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)]/80 bg-[var(--background-soft)]/95 backdrop-blur-md">
      <div className="section-shell py-4">
        <nav className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8" aria-label="Primary">
          <Link
            href="/"
            className="min-w-0 rounded-2xl border border-[var(--border)]/80 bg-[var(--surface)]/80 px-4 py-3 transition hover:border-[var(--brand)]/40 lg:max-w-[390px] lg:shrink-0"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--muted-foreground)]">California-Wide Online Therapy</p>
            <p className="mt-1 text-[17px] font-semibold leading-tight tracking-tight text-[var(--foreground)] lg:truncate">{siteName}</p>
          </Link>

          <div className="flex min-w-0 flex-wrap items-center gap-3 lg:flex-nowrap lg:justify-end lg:gap-6">
            <ul className="flex min-w-0 items-center justify-end gap-4 text-base font-medium text-[var(--muted-foreground)] lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block whitespace-nowrap rounded-full px-3 py-2 transition duration-200 hover:text-[var(--brand-deep)] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 transition duration-200 hover:text-[var(--brand-deep)] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
                  aria-haspopup="menu"
                >
                  <span>Services</span>
                  <span className="text-xs text-[var(--muted-foreground)] transition-transform duration-200 group-hover:translate-y-px">▾</span>
                </button>

                <div className="invisible absolute left-1/2 top-[calc(100%+10px)] z-50 w-64 -translate-x-1/2 rounded-2xl border border-[var(--border)]/70 bg-white/95 p-2 opacity-0 shadow-[0_18px_48px_-28px_rgba(15,23,42,0.45)] backdrop-blur-sm transition-all duration-200 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-1 group-focus-within:opacity-100">
                  <ul className="space-y-1" role="menu" aria-label="Services">
                    {serviceLinks.map((service) => (
                      <li key={service.href} role="none">
                        <Link
                          href={service.href}
                          role="menuitem"
                          className="block rounded-xl px-3 py-2.5 text-[15px] text-[var(--foreground)] transition duration-200 hover:bg-[var(--surface)] hover:text-[var(--brand-deep)]"
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
            <Link
              href="/contact"
              className="shrink-0 rounded-full border border-[var(--brand-deep)] bg-[var(--brand-deep)] px-6 py-3 text-base font-semibold text-white shadow-[0_10px_25px_-16px_rgba(35,49,59,0.9)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-deep)]"
            >
              Schedule Consultation
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
