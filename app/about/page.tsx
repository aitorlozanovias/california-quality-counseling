import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About | California Quality Counseling Services",
  description: "Meet Elizabeth Agusti, LMFT and learn about the trauma-informed, relationship-focused approach for adults and couples in California.",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Meet Elizabeth Agusti, LMFT"
        subtitle="I help adults and couples across California build steadier emotional lives and healthier relationships through warm, focused online therapy."
        primaryCta={{ href: "/contact", label: "Schedule a Consultation" }}
        secondaryCta={{ href: "/fees-insurance", label: "View Fees" }}
      />
      <section className="section-shell grid gap-5 pb-16 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-xl font-semibold text-slate-900">Clinical approach</h2>
          <p className="mt-3 text-slate-700">My work is trauma-informed and relationship-focused, integrating attachment-based insight with practical emotional regulation and communication tools.</p>
        </article>
        <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-xl font-semibold text-slate-900">California telehealth practice</h2>
          <p className="mt-3 text-slate-700">All sessions are online only. To receive care, clients must be physically located in California during each telehealth appointment.</p>
        </article>
      </section>
      <section className="section-shell pb-16">
        <div className="rounded-2xl bg-teal-50 p-8 ring-1 ring-teal-100">
          <h2 className="text-2xl font-semibold text-slate-900">Start with a consultation</h2>
          <p className="mt-2 text-slate-700">If you are looking for thoughtful, private-pay therapy support, reach out to discuss goals, fit, and next steps.</p>
          <Link href="/contact" className="mt-5 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  );
}
