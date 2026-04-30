import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Fees | California Quality Counseling Services",
  description: "Private-pay therapy fees for online California counseling with limited sliding-scale options and a free 15-minute consultation.",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Fees and Private-Pay Therapy"
        subtitle="This is a private-pay practice designed for personalized, high-quality trauma-informed care with fewer insurance limitations."
        primaryCta={{ href: "/contact", label: "Schedule your free 15-minute consultation" }}
        secondaryCta={{ href: "/services", label: "View services" }}
      />
      <section className="section-shell grid gap-5 pb-16 md:grid-cols-2">
        <article className="card-elevated p-7">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">Standard session fee</h2>
          <p className="mt-3 text-[var(--muted-foreground)]">$175 per 50-minute session.</p>
          <p className="mt-3 text-[var(--muted-foreground)]">Private-pay allows treatment to stay focused on your goals and clinical needs while protecting additional privacy.</p>
        </article>
        <article className="card-elevated p-7">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">Sliding scale and consultation</h2>
          <p className="mt-3 text-[var(--muted-foreground)]">Limited sliding-scale spots are available at $150 per session when openings are available.</p>
          <p className="mt-3 text-[var(--muted-foreground)]">A free 15-minute consultation is available to discuss fit, logistics, and next steps before scheduling.</p>
        </article>
      </section>
      <section className="section-shell pb-16">
        <div className="card-elevated bg-gradient-to-br from-[var(--surface)] to-[var(--brand)]/15 p-8">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">Ready to get started?</h2>
          <p className="mt-2 text-[var(--muted-foreground)]">If private-pay trauma-informed therapy feels aligned, the next step is a brief no-pressure consult call.</p>
          <Link href="/contact" className="mt-5 inline-block rounded-full bg-[var(--brand-deep)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand)]">
            Schedule your free 15-minute consultation
          </Link>
        </div>
      </section>
    </>
  );
}
