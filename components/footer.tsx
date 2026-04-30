import Link from "next/link";
import { therapistName } from "./site-data";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border)]/90 bg-[var(--background-soft)]">
      <div className="section-shell py-14 text-sm text-[var(--muted-foreground)]">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-base font-semibold text-[var(--foreground)]">California Quality Counseling Services</p>
            <p className="mt-2 font-medium text-[var(--foreground)]">{therapistName} #142541</p>
            <p className="mt-4 max-w-md">Online therapy for adults and couples across California with trauma-informed, relationship-focused care.</p>
            <p className="mt-3 rounded-xl border border-[var(--border)]/80 bg-[var(--surface)]/80 px-3 py-2 text-xs">Clients must be physically located in California at the time of each telehealth session.</p>
          </div>

          <div>
            <p className="font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]">Practice</p>
            <ul className="mt-4 space-y-2.5">
              <li>Private-pay primary</li>
              <li>Secure video sessions only</li>
              <li>California-wide availability</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]">Quick Links</p>
            <div className="mt-4 space-y-2.5">
              <Link href="/contact" className="block transition hover:text-[var(--brand-deep)]">Schedule a Consultation</Link>
              <Link href="/fees-insurance" className="block transition hover:text-[var(--brand-deep)]">Fees &amp; Insurance</Link>
              <Link href="/about" className="block transition hover:text-[var(--brand-deep)]">About Elizabeth</Link>
              <Link href="/faqs" className="block transition hover:text-[var(--brand-deep)]">FAQs</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--border)]/80 pt-5 text-xs">
          <p>Telehealth psychotherapy for California residents. Adult and couples services only.</p>
        </div>
      </div>
    </footer>
  );
}
