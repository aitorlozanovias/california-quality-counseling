import Link from "next/link";
import { telehealthDisclosure, therapistName } from "./site-data";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-sky-100 bg-white">
      <div className="section-shell grid gap-6 py-10 text-sm text-slate-700 md:grid-cols-3">
        <div>
          <p className="font-semibold text-slate-900">{therapistName}</p>
          <p>California Licensed Marriage & Family Therapist</p>
          <p>California Quality Counseling Services</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Practice Model</p>
          <p>Online therapy only</p>
          <p>California-wide telehealth care</p>
          <p>Private-pay primary practice</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Quick Links</p>
          <Link href="/contact" className="block hover:text-sky-700">Schedule a Consultation</Link>
          <Link href="/fees-insurance" className="block hover:text-sky-700">Fees</Link>
          <Link href="/faqs" className="block hover:text-sky-700">FAQs</Link>
        </div>
      </div>
      <p className="section-shell pb-8 text-xs text-slate-600">{telehealthDisclosure}</p>
    </footer>
  );
}
