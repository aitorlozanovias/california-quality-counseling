import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { telehealthDisclosure } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Contact | California Quality Counseling Services",
  description: "To begin, request a consultation and share a brief summary of what you are looking for in therapy. You can expect a response within one business day.",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Schedule a Consultation"
        subtitle="To begin, request a consultation and share a brief summary of what you are looking for in therapy. You can expect a response within one business day."
        primaryCta={{ href: "/contact", label: "Schedule a Consultation" }}
        secondaryCta={{ href: "/fees-insurance", label: "View Fees" }}
      />
      <section className="section-shell grid gap-5 pb-12 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-xl font-semibold text-slate-900">Approach</h2>
          <p className="mt-3 text-slate-700">Sessions are online only and available to clients physically located in California.</p>
        </article>
        <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-xl font-semibold text-slate-900">Telehealth Scope</h2>
          <p className="mt-3 text-slate-700">{telehealthDisclosure}</p>
        </article>
      </section>
      <section className="section-shell pb-16">
        <div className="rounded-2xl bg-teal-50 p-8 ring-1 ring-teal-100">
          <h2 className="text-2xl font-semibold text-slate-900">Next step</h2>
          <p className="mt-2 text-slate-700">Schedule a consultation to discuss fit, goals, and availability.</p>
          <Link href="/contact" className="mt-5 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  );
}
