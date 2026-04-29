import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Home | Golden State Relationship & Trauma Therapy",
  description: "Warm, evidence-based therapy in California with specialization in EMDR and trauma-informed treatment for individuals, couples, and families.",
};

export default function Home() {
  return (
    <>
      <PageHero
        title="Therapy that helps you feel grounded, connected, and hopeful again."
        subtitle="I offer trauma-informed care for Californians navigating anxiety, relationship stress, and painful life experiences. Together we build practical tools, heal old patterns, and create meaningful change."
        primaryCta={{ href: "/contact", label: "Book a Consultation" }}
        secondaryCta={{ href: "/services", label: "Explore Services" }}
      />
      <section className="section-shell grid gap-6 pb-12 md:grid-cols-3">
        {[
          ["EMDR Therapy", "A structured, evidence-based approach for processing trauma and reducing emotional reactivity."],
          ["Couples Counseling", "Support for communication, conflict repair, and rebuilding trust with clarity and compassion."],
          ["Individual Therapy", "Personalized treatment for anxiety, grief, transitions, and relationship challenges."],
        ].map(([title, text]) => (
          <article key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
            <p className="mt-3 text-slate-700">{text}</p>
          </article>
        ))}
      </section>
      <section className="section-shell pb-16">
        <div className="rounded-2xl bg-sky-900 p-8 text-white sm:p-10">
          <h2 className="text-2xl font-semibold">Ready to start therapy in a safe, supportive space?</h2>
          <p className="mt-3 max-w-3xl text-sky-100">I provide telehealth sessions across California and in-person appointments in Pasadena. Reach out for a free 15-minute consultation.</p>
          <Link href="/contact" className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-sky-900">Get Started Today</Link>
        </div>
      </section>
    </>
  );
}
