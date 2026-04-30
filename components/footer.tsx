import Link from "next/link";
import { therapistName } from "./site-data";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-sky-100 bg-white">
      <div className="section-shell grid gap-6 py-10 text-sm text-slate-700 md:grid-cols-3">
        <div>
          <p className="font-semibold text-slate-900">{therapistName}</p>
          <p>Licensed Marriage & Family Therapist (California)</p>
          <p>Online therapy for adults and couples, statewide.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Telehealth Scope</p>
          <p>Sessions are provided by secure video only.</p>
          <p>You must be physically located in California at the time of each session.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Quick Links</p>
          <Link href="/contact" className="block hover:text-sky-700">Schedule a Consultation</Link>
          <Link href="/fees-insurance" className="block hover:text-sky-700">View Fees</Link>
          <Link href="/faqs" className="block hover:text-sky-700">Frequently Asked Questions</Link>
        </div>
      </div>
    </footer>
  );
}
