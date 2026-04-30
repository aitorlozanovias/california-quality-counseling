import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { telehealthDisclosure } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Fees | California Quality Counseling Services",
  description: "California Quality Counseling Services is a private-pay primary practice. Limited sliding-scale spots may be offered when space allows.",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Fees & Insurance"
        subtitle="California Quality Counseling Services is a private-pay primary practice. Limited sliding-scale spots may be offered when space allows."
        primaryCta={{ href: "/contact", label: "Schedule a Consultation" }}
        secondaryCta={{ href: "/fees-insurance", label: "View Fees" }}
      />
      <section className="section-shell grid gap-5 pb-12 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-xl font-semibold text-slate-900">Approach</h2>
          <p className="mt-3 text-slate-700">If your plan includes out-of-network benefits, documentation can be provided for possible reimbursement. Insurance participation is not guaranteed.</p>
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
