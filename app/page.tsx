import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Home | California Quality Counseling Services",
  description:
    "Online therapy for California adults and couples facing trauma, anxiety, emotional overwhelm, and relationship stress.",
};

export default function Home() {
  return (
    <>
      <PageHero
        title="Online therapy for adults and couples across California."
        subtitle="California Quality Counseling Services offers warm, trauma-informed, relationship-focused care for anxiety, emotional overwhelm, unresolved trauma, and relationship stress."
        primaryCta={{ href: "/contact", label: "Schedule a Consultation" }}
        secondaryCta={{ href: "/fees-insurance", label: "View Fees" }}
      />
      <section className="section-shell grid gap-6 pb-12 md:grid-cols-3">
        {[
          ["Adults", "Support for anxiety, stress, trauma responses, grief, and major life transitions with practical tools you can use right away."],
          ["Couples", "Relationship-focused therapy to improve communication, repair conflict cycles, and strengthen emotional safety and trust."],
          ["Trauma-Informed Care", "Treatment is paced, collaborative, and attuned to your nervous system, with EMDR-informed integration when clinically appropriate."],
        ].map(([title, text]) => (
          <article key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
            <p className="mt-3 text-slate-700">{text}</p>
          </article>
        ))}
      </section>
      <section className="section-shell pb-16">
        <div className="rounded-2xl bg-sky-900 p-8 text-white sm:p-10">
          <h2 className="text-2xl font-semibold">Elizabeth Agusti, LMFT</h2>
          <p className="mt-3 max-w-3xl text-sky-100">
            Licensed Marriage and Family Therapist providing online psychotherapy throughout California. Telehealth sessions are available only to clients physically located in California at the time of service.
          </p>
          <Link href="/contact" className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-sky-900">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  );
}
