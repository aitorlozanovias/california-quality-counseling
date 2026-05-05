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
  "You feel overwhelmed and don’t know where to start",
  "You keep repeating the same patterns in your relationships",
  "You feel disconnected, anxious, or constantly on edge",
  "You’re carrying unresolved experiences that still affect you",
  "You’re trying to hold everything together but feel exhausted",
];

const fitGroups = ["Adults living with anxiety and trauma", "Couples stuck in recurring conflict", "Moms balancing care for everyone but themselves", "Immigrants navigating transition, stress, and belonging"];

const therapySteps = [
  {
    title: "Understand what’s happening",
    text: "We slow down and make sense of patterns, emotions, and experiences.",
  },
  {
    title: "Process and work through it",
    text: "We gently work through trauma, stress, and relationship challenges.",
  },
  {
    title: "Build lasting change",
    text: "You develop tools, clarity, and new ways to respond and relate.",
  },
];

export default function Home() {
  return (
    <>
      <PageHero
        title="Feel more grounded, connected, and in control."
        subtitle="Online therapy for adults and couples across California. Get support for trauma, relationship challenges, and emotional overwhelm with a calm, structured approach."
        trustBullets={[
          "7+ years clinical experience",
          "EMDR-informed, trauma-focused care",
          "Sessions available in English and Spanish",
        ]}
        primaryCta={{ href: "/contact", label: "Schedule your free 15-minute consultation" }}
        secondaryCta={{ href: "/fees-insurance", label: "View fees" }}
        showEditorialVisual
      />

      <section className="section-shell section-spacing pt-2">
        <p className="editorial-kicker">You might be feeling…</p>
        <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">If life feels heavy right now, you are not alone.</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {painPoints.map((item) => (
            <li key={item} className="card-elevated p-5 text-[var(--muted-foreground)] sm:p-6">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-shell section-spacing pt-6">
        <p className="editorial-kicker">How therapy works</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">A clear process for meaningful change.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {therapySteps.map((step, index) => (
            <article key={step.title} className="card-elevated p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-deep)]">Step {index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)]">{step.title}</h3>
              <p className="mt-3 text-[var(--muted-foreground)]">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-spacing pt-6">
        <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="card-elevated flex min-h-[340px] items-end overflow-hidden rounded-3xl border border-[var(--border)]/85 bg-gradient-to-br from-[var(--surface)] to-[var(--brand)]/15 p-6">
            <p className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">Therapist image placeholder</p>
          </div>
          <article className="card-elevated p-8 sm:p-10">
            <p className="editorial-kicker">Meet Elizabeth Agusti, LMFT #142541</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--foreground)]">Warm, grounded support for your healing journey.</h2>
            <p className="mt-4 text-[var(--muted-foreground)]">
              Therapy with me is calm, practical, and centered on what matters most to you. We work together to understand what feels heavy, reduce emotional overwhelm, and create steady progress that feels realistic in daily life.
            </p>
            <p className="mt-4 text-[var(--muted-foreground)]">My goal is to create a space where you feel understood, supported, and able to move forward at your own pace.</p>
            <ul className="mt-6 grid gap-2 text-sm text-[var(--muted-foreground)] sm:grid-cols-2">
              <li>• 7+ years experience</li>
              <li>• EMDR-informed care</li>
              <li>• Bilingual sessions in English &amp; Spanish</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section-shell section-spacing pt-6">
        <p className="editorial-kicker">Who I work best with</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {fitGroups.map((group) => (
            <article key={group} className="card-elevated p-7">
              <h3 className="text-xl font-semibold text-[var(--foreground)]">{group}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-spacing pt-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="editorial-kicker">Services</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">Focused support for the concerns you are carrying</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {serviceCards.map((service) => (
            <article key={service.title} className="card-elevated group relative h-full overflow-hidden p-7 transition hover:-translate-y-0.5 hover:shadow-[0_24px_55px_-32px_rgba(35,49,59,0.7)]">
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--brand)]/55 via-[var(--brand-deep)]/40 to-transparent" />
              <h3 className="text-xl font-semibold text-[var(--foreground)]">{service.title}</h3>
              <p className="mt-3 text-[var(--muted-foreground)]">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-16 pt-12 sm:pb-24 sm:pt-16">
        <div className="rounded-3xl border border-[var(--brand)]/30 bg-[var(--background-soft)] p-8 shadow-[0_26px_64px_-42px_rgba(35,49,59,0.82)] sm:p-10 lg:p-14">
          <p className="editorial-kicker">Next step</p>
          <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">Start with a simple conversation.</h2>
          <p className="mt-4 max-w-3xl text-[var(--muted-foreground)]">Schedule a free 15-minute consultation to talk about your goals, ask questions, and see if this feels like the right fit.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-[var(--brand-deep)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand)]">
              Schedule your free consultation
            </Link>
            <Link href="/fees-insurance" className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--brand)] hover:text-[var(--brand-deep)]">
              Learn about fees
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
