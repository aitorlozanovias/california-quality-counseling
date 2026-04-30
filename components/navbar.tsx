import Link from "next/link";
import { navLinks, siteName } from "./site-data";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)]/80 bg-[var(--background-soft)]/95 backdrop-blur-md">
      <div className="section-shell py-4">
        <nav className="grid items-center gap-4 xl:grid-cols-[minmax(280px,340px)_1fr]" aria-label="Primary">
          <Link
            href="/"
            className="rounded-2xl border border-[var(--border)]/80 bg-[var(--surface)]/80 px-4 py-3 transition hover:border-[var(--brand)]/40"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--muted-foreground)]">California-Wide Online Therapy</p>
            <p className="mt-1 text-[17px] font-semibold leading-tight tracking-tight text-[var(--foreground)]">{siteName}</p>
          </Link>

          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 xl:justify-end xl:pb-0">
            <ul className="flex shrink-0 items-center gap-1 whitespace-nowrap text-sm font-medium text-[var(--muted-foreground)]">
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
            </ul>
            <Link
              href="/contact"
              className="shrink-0 rounded-full border border-[var(--brand-deep)] bg-[var(--brand-deep)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_25px_-16px_rgba(35,49,59,0.9)] transition hover:-translate-y-0.5 hover:bg-[var(--brand)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-deep)]"
            >
              Schedule consult
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
