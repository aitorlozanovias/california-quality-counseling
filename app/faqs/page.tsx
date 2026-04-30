import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "FAQs | California Quality Counseling Services",
  description: "Answers to common questions about online therapy for California adults and couples.",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Get quick answers about telehealth logistics, payment, and what to expect when beginning therapy."
        primaryCta={{ href: "/contact", label: "Schedule a Consultation" }}
        secondaryCta={{ href: "/fees-insurance", label: "View Fees" }}
      />
      <section className="section-shell grid gap-5 pb-16 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-xl font-semibold text-slate-900">Is therapy online or in person?</h2>
          <p className="mt-3 text-slate-700">Services are online only. Sessions are held through secure video telehealth.</p>
        </article>
        <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-xl font-semibold text-slate-900">Where can clients be located?</h2>
          <p className="mt-3 text-slate-700">Clients must be physically located in California during each telehealth session.</p>
        </article>
      </section>
    </>
  );
}
