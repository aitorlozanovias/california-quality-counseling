import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About | Golden State Relationship & Trauma Therapy",
  description: "With 12+ years of clinical experience, I help clients heal from trauma, strengthen relationships, and reconnect with their values. My approach integrates EMDR, attachment-focused work, and practical strategies that fit everyday life.",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Meet Dr. Elena Martinez, LMFT"
        subtitle="With 12+ years of clinical experience, I help clients heal from trauma, strengthen relationships, and reconnect with their values. My approach integrates EMDR, attachment-focused work, and practical strategies that fit everyday life."
        primaryCta={{ href: "/contact", label: "Schedule a Consultation" }}
        secondaryCta={{ href: "/services", label: "View All Services" }}
      />
      <section className="section-shell grid gap-5 pb-16 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-xl font-semibold text-slate-900">How therapy works</h2>
          <p className="mt-3 text-slate-700">Sessions are 50 minutes and available online throughout California, with limited in-person availability in Pasadena. Treatment begins with a comprehensive intake, followed by clear goals and regular progress check-ins.</p>
        </article>
        <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-xl font-semibold text-slate-900">Who I work with</h2>
          <p className="mt-3 text-slate-700">I work with adults, couples, and families from diverse backgrounds, including first-generation professionals, caregivers, and clients healing from relational trauma, grief, and chronic stress.</p>
        </article>
      </section>
      <section className="section-shell pb-16">
        <div className="rounded-2xl bg-teal-50 p-8 ring-1 ring-teal-100">
          <h2 className="text-2xl font-semibold text-slate-900">Take the next step</h2>
          <p className="mt-2 text-slate-700">If you are ready to start, reach out for a free consultation and we can discuss your goals, timing, and best-fit treatment plan.</p>
          <Link href="/contact" className="mt-5 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Request Consultation</Link>
        </div>
      </section>
    </>
  );
}
