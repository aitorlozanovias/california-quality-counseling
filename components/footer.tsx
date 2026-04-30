import Link from "next/link";
import { therapistName } from "./site-data";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-[var(--background-soft)]">
      <div className="section-shell grid gap-10 py-12 text-sm text-[var(--muted-foreground)] md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-base font-semibold text-[var(--foreground)]">California Quality Counseling Services</p>
          <p className="mt-2 font-medium text-[var(--foreground)]">{therapistName} #142541</p>
          <p className="mt-3 max-w-md">Online therapy for adults and couples across California with trauma-informed, relationship-focused care.</p>
          <p className="mt-3 text-xs">Clients must be physically located in California at the time of each telehealth session.</p>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]">Practice</p>
          <ul className="mt-3 space-y-2">
            <li>Private-pay primary</li>
            <li>Secure video sessions only</li>
            <li>California-wide availability</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]">Quick Links</p>
          <div className="mt-3 space-y-2">
            <Link href="/contact" className="block transition hover:text-[var(--brand-deep)]">Schedule a Consultation</Link>
            <Link href="/fees-insurance" className="block transition hover:text-[var(--brand-deep)]">Fees &amp; Insurance</Link>
            <Link href="/about" className="block transition hover:text-[var(--brand-deep)]">About Elizabeth</Link>
            <Link href="/faqs" className="block transition hover:text-[var(--brand-deep)]">FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
