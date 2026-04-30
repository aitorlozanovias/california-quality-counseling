import Link from "next/link";

type PageHeroProps = {
  title: string;
  subtitle: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function PageHero({ title, subtitle, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="section-shell section-spacing">
      <div className="card-elevated relative overflow-hidden p-8 sm:p-12">
        <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[var(--brand)]/10 blur-3xl" aria-hidden />
        <p className="editorial-kicker mb-4">Trauma-Informed, Relationship-Focused Care</p>
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base text-[var(--muted-foreground)] sm:text-lg">{subtitle}</p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryCta && (
              <Link href={primaryCta.href} className="rounded-full bg-[var(--brand-deep)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand)]">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--brand)] hover:text-[var(--brand-deep)]">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
