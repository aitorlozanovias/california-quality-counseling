import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Fees | California Quality Counseling Services",
  description: "Private-pay therapy fees for online California counseling, with limited sliding-scale options when availability allows.",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Fees and Payment"
        subtitle="California Quality Counseling Services is primarily a private-pay practice focused on personalized, high-quality care."
        primaryCta={{ href: "/contact", label: "Schedule a Consultation" }}
        secondaryCta={{ href: "/services", label: "View Services" }}
      />
      <section className="section-shell grid gap-5 pb-16 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-xl font-semibold text-slate-900">Private-pay model</h2>
          <p className="mt-3 text-slate-700">Sessions are paid directly by clients. This model supports privacy, flexibility, and treatment that is tailored to your goals rather than insurance constraints.</p>
        </article>
        <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-xl font-semibold text-slate-900">Sliding scale and insurance</h2>
          <p className="mt-3 text-slate-700">Limited sliding-scale spots may be available when space allows. Insurance participation is not guaranteed; out-of-network documentation may be provided when appropriate.</p>
        </article>
      </section>
      <section className="section-shell pb-16">
        <div className="rounded-2xl bg-teal-50 p-8 ring-1 ring-teal-100">
          <h2 className="text-2xl font-semibold text-slate-900">Questions about fit and fees?</h2>
          <p className="mt-2 text-slate-700">Reach out to discuss current rates, scheduling, and whether this practice is the right clinical fit for your needs.</p>
          <Link href="/contact" className="mt-5 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  );
}
