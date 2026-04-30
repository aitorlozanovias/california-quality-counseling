import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Services | California Quality Counseling Services",
  description: "Online individual and couples therapy in California for trauma, anxiety, emotional overwhelm, and relationship stress.",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Services for Adults and Couples"
        subtitle="Care is personalized, trauma-informed, and designed to create meaningful progress in both emotional wellbeing and relationships."
        primaryCta={{ href: "/contact", label: "Schedule a Consultation" }}
        secondaryCta={{ href: "/fees-insurance", label: "View Fees" }}
      />
      <section className="section-shell grid gap-5 pb-16 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-xl font-semibold text-slate-900">Individual therapy</h2>
          <p className="mt-3 text-slate-700">For adults managing trauma patterns, anxiety, burnout, and emotional overwhelm while building grounded coping and self-trust.</p>
        </article>
        <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-xl font-semibold text-slate-900">Couples therapy</h2>
          <p className="mt-3 text-slate-700">For couples seeking better communication, conflict repair, and stronger connection through relationship-focused treatment.</p>
        </article>
      </section>
    </>
  );
}
