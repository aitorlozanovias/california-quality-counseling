import Link from "next/link";
import { navLinks, siteName } from "./site-data";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)]/90 bg-[var(--background-soft)]/95 backdrop-blur-md">
      <div className="section-shell py-4">
        <nav className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between" aria-label="Primary">
          <Link href="/" className="group max-w-md">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted-foreground)]">California-Wide Online Therapy</p>
            <p className="text-lg font-semibold tracking-tight text-[var(--foreground)] transition group-hover:text-[var(--brand-deep)]">
              {siteName}
            </p>
          </Link>
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-medium text-[var(--muted-foreground)] lg:justify-end">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-2 transition hover:bg-[var(--surface)] hover:text-[var(--brand-deep)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="ml-1 inline-flex rounded-full bg-[var(--brand-deep)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-deep)]"
              >
                Consult Call
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
