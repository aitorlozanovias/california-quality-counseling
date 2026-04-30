import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { telehealthDisclosure } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Home | California Quality Counseling Services",
  description:
    "Online therapy in California for adults and couples facing trauma, anxiety, emotional overwhelm, and relationship stress.",
};

export default function Home() {
  return (
    <>
      <PageHero
        title="Online therapy for adults and couples ready for meaningful change."
        subtitle="California Quality Counseling Services provides warm, premium care for trauma recovery, anxiety, emotional overwhelm, and relationship stress. Therapy is practical, relational, and tailored to your pace."
        primaryCta={{ href: "/contact", label: "Schedule a Consultation" }}
        secondaryCta={{ href: "/fees-insurance", label: "View Fees" }}
      />
      <section className="section-shell grid gap-6 pb-12 md:grid-cols-3">
        <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"><h2 className="text-xl font-semibold text-slate-900">Trauma-Informed Care</h2><p className="mt-3 text-slate-700">Evidence-based support for nervous system regulation, emotional safety, and long-term healing.</p></article>
        <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"><h2 className="text-xl font-semibold text-slate-900">Relationship-Focused Work</h2><p className="mt-3 text-slate-700">Support for couples and individuals to improve communication, boundaries, and secure connection.</p></article>
        <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"><h2 className="text-xl font-semibold text-slate-900">California Telehealth Scope</h2><p className="mt-3 text-slate-700">Licensed LMFT care delivered online to clients physically located in California at each session.</p></article>
      </section>
      <section className="section-shell pb-16">
        <div className="rounded-2xl bg-sky-900 p-8 text-white sm:p-10">
          <h2 className="text-2xl font-semibold">Elizabeth Agusti, LMFT</h2>
          <p className="mt-3 max-w-3xl text-sky-100">{telehealthDisclosure}</p>
          <Link href="/contact" className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-sky-900">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  );
}
