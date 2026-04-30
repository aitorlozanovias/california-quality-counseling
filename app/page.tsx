import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Home | California Quality Counseling Services",
  description:
    "Online therapy for California adults and couples facing trauma, anxiety, emotional overwhelm, and relationship stress.",
};

const serviceCards = [
  {
    title: "Adults",
    text: "Support for anxiety, stress, trauma responses, grief, and major life transitions with practical tools you can use right away.",
  },
  {
    title: "Couples",
    text: "Relationship-focused therapy to improve communication, repair conflict cycles, and strengthen emotional safety and trust.",
  },
  {
    title: "Trauma-Informed Care",
    text: "Treatment is paced, collaborative, and attuned to your nervous system, with EMDR-informed integration when clinically appropriate.",
  },
];

export default function Home() {
  return (
    <>
      <PageHero
        title="Online therapy for adults and couples across California."
        subtitle="California Quality Counseling Services offers warm, trauma-informed, relationship-focused care for anxiety, emotional overwhelm, unresolved trauma, and relationship stress."
        primaryCta={{ href: "/contact", label: "Schedule a Consultation" }}
        secondaryCta={{ href: "/fees-insurance", label: "View Fees" }}
        showEditorialVisual
      />

      <section className="section-shell pb-10" aria-label="Practice trust details">
        <div className="card-elevated grid gap-4 p-5 text-sm sm:grid-cols-3 sm:items-center sm:gap-6 sm:p-6">
          <p className="font-semibold text-[var(--foreground)]">Elizabeth Agusti, LMFT #142541</p>
          <p className="text-[var(--muted-foreground)]">Online therapy for clients physically located in California</p>
          <p className="text-[var(--muted-foreground)]">Private-pay practice</p>
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
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--brand)]/35 bg-[var(--brand)]/10 text-sm font-semibold text-[var(--brand-deep)]">
                {service.title.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">{service.title}</h3>
              <p className="mt-3 text-[var(--muted-foreground)]">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-16 pt-10 sm:pb-20">
        <div className="rounded-3xl border border-[var(--brand)]/30 bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--brand)]/15 p-8 shadow-[0_20px_60px_-38px_rgba(35,49,59,0.75)] sm:p-10 lg:p-12">
          <p className="editorial-kicker">Work with Elizabeth Agusti, LMFT #142541</p>
          <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">Begin care with a clear, supportive next step.</h2>
          <p className="mt-4 max-w-3xl text-[var(--muted-foreground)]">
            Licensed Marriage and Family Therapist providing online psychotherapy throughout California for adults and couples. Sessions are available only to clients physically located in California during service.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-[var(--brand-deep)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand)]">
              Schedule a Consultation
            </Link>
            <Link href="/about" className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--brand)] hover:text-[var(--brand-deep)]">
              Learn About Elizabeth
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
