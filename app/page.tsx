import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Home | California Quality Counseling Services",
  description:
    "Trauma-informed therapy for California adults and couples with support for anxiety, trauma recovery, relationship stress, moms, and immigrants in English and Spanish.",
};

const serviceCards = [
  {
    title: "Therapy for Adults",
    text: "Feel more regulated, less reactive, and more confident navigating anxiety, trauma triggers, grief, and life transitions.",
  },
  {
    title: "Couples Therapy",
    text: "Move from repeating conflict to safer, clearer conversations so both partners feel heard, respected, and connected again.",
  },
  {
    title: "Trauma Recovery",
    text: "Integrative trauma care with EMDR, IFS-informed work, CBT, and solution-focused strategies to help your nervous system feel safer.",
  },
];

const painPoints = [
  "Emotionally overwhelmed, mentally exhausted, and unsure how to slow down.",
  "Caught in the same painful patterns with yourself or in your relationship.",
  "Feeling disconnected, misunderstood, or on edge more days than not.",
  "Carrying unresolved trauma while trying to keep up with daily responsibilities.",
  "Navigating motherhood, immigration stress, or identity changes without enough support.",
];

const fitGroups = ["Adults living with anxiety and trauma", "Couples stuck in recurring conflict", "Moms balancing care for everyone but themselves", "Immigrants navigating transition, stress, and belonging"];

export default function Home() {
  return (
    <>
      <PageHero
        title="Feel more grounded, connected, and understood"
        subtitle="Trauma-informed therapy for adults and couples facing emotional overwhelm, relationship stress, and unresolved trauma, with care available in English and Spanish."
        primaryCta={{ href: "/contact", label: "Schedule your free 15-minute consultation" }}
        secondaryCta={{ href: "/fees-insurance", label: "View fees" }}
        showEditorialVisual
      />

      <section className="section-shell pb-10" aria-label="Practice trust details">
        <div className="card-elevated grid gap-4 p-5 text-sm sm:grid-cols-3 sm:items-center sm:gap-6 sm:p-6">
          <p className="font-semibold text-[var(--foreground)]">7+ years of clinical experience</p>
          <p className="text-[var(--muted-foreground)]">EMDR-trained, trauma-informed care</p>
          <p className="text-[var(--muted-foreground)]">Sessions in English and Spanish</p>
        </div>
      </section>

      <section className="section-shell section-spacing pt-2">
        <p className="editorial-kicker">You might be feeling…</p>
        <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">If life feels heavy right now, you are not alone.</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {painPoints.map((item) => (
            <li key={item} className="card-elevated p-6 text-[var(--muted-foreground)]">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-shell section-spacing pt-4">
        <p className="editorial-kicker">How therapy works</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">A clear process for meaningful change.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {["Understand patterns", "Process trauma and emotions", "Build new responses"].map((step, index) => (
            <article key={step} className="card-elevated p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-deep)]">Step {index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)]">{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-spacing pt-4">
        <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="card-elevated flex min-h-[340px] items-end overflow-hidden rounded-3xl border border-[var(--border)]/85 bg-gradient-to-br from-[var(--surface)] to-[var(--brand)]/15 p-6">
            <p className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">Therapist image placeholder</p>
          </div>
          <article className="card-elevated p-8 sm:p-10">
            <p className="editorial-kicker">Meet Elizabeth Agusti, LMFT #142541</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--foreground)]">Warm, steady support for your healing process.</h2>
            <p className="mt-4 text-[var(--muted-foreground)]">
              I help adults and couples slow down the chaos, make sense of painful patterns, and build healthier ways of relating to themselves and each other. My style is warm, collaborative, and practical, so therapy feels both emotionally safe and truly useful.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-[var(--muted-foreground)] sm:grid-cols-2">
              <li>• 7 years of experience</li>
              <li>• EMDR-trained</li>
              <li>• IFS-informed, CBT, and solution-focused</li>
              <li>• Bilingual care in English &amp; Spanish</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section-shell section-spacing pt-4">
        <p className="editorial-kicker">Who I work best with</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {fitGroups.map((group) => (
            <article key={group} className="card-elevated p-7">
              <h3 className="text-xl font-semibold text-[var(--foreground)]">{group}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-spacing pt-2">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="editorial-kicker">Services</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">Focused support for the concerns you are carrying</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {serviceCards.map((service) => (
            <article key={service.title} className="card-elevated group h-full p-7 transition hover:-translate-y-0.5 hover:shadow-[0_24px_55px_-32px_rgba(35,49,59,0.7)]">
              <h3 className="text-xl font-semibold text-[var(--foreground)]">{service.title}</h3>
              <p className="mt-3 text-[var(--muted-foreground)]">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-16 pt-10 sm:pb-20">
        <div className="rounded-3xl border border-[var(--brand)]/30 bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--brand)]/15 p-8 shadow-[0_20px_60px_-38px_rgba(35,49,59,0.75)] sm:p-10 lg:p-12">
          <h2 className="mt-1 max-w-3xl text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">Schedule your free 15-minute consultation.</h2>
          <p className="mt-4 max-w-3xl text-[var(--muted-foreground)]">Private-pay, trauma-informed therapy for California adults and couples, with bilingual sessions in English and Spanish.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-[var(--brand-deep)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand)]">
              Schedule your free 15-minute consultation
            </Link>
            <Link href="/about" className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--brand)] hover:text-[var(--brand-deep)]">
              Learn about Elizabeth
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
