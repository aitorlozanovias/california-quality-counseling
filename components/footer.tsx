import Link from "next/link";
import { therapistName } from "./site-data";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-sky-100 bg-white">
      <div className="section-shell grid gap-6 py-10 text-sm text-slate-700 md:grid-cols-3">
        <div>
          <p className="font-semibold text-slate-900">{therapistName}</p>
          <p>California Licensed Marriage & Family Therapist #102345</p>
          <p>Serving adults, couples, and families statewide via telehealth.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Office Hours</p>
          <p>Mon-Thu: 9:00 AM - 7:00 PM</p>
          <p>Fri: 9:00 AM - 3:00 PM</p>
          <p>By appointment only</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Quick Links</p>
          <Link href="/contact" className="block hover:text-sky-700">Request a Consultation</Link>
          <Link href="/fees-insurance" className="block hover:text-sky-700">Fees & Insurance</Link>
          <Link href="/faqs" className="block hover:text-sky-700">Frequently Asked Questions</Link>
        </div>
      </div>
    </footer>
  );
}
