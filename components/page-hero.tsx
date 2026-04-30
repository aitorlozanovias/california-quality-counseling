import Link from "next/link";

type PageHeroProps = {
  title: string;
  subtitle: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  showEditorialVisual?: boolean;
};

export function PageHero({ title, subtitle, primaryCta, secondaryCta, showEditorialVisual = false }: PageHeroProps) {
  return (
    <section className="section-shell section-spacing">
      <div className="card-elevated relative overflow-hidden p-8 sm:p-10 lg:p-12">
        <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[var(--brand)]/10 blur-3xl" aria-hidden />

        <div className={`relative ${showEditorialVisual ? "grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center" : ""}`}>
          <div>
            <p className="editorial-kicker mb-4">Trauma-Informed, Relationship-Focused Care</p>
            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-base text-[var(--muted-foreground)] sm:text-lg">{subtitle}</p>
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="rounded-full bg-[var(--brand-deep)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_-18px_rgba(35,49,59,0.9)] transition hover:-translate-y-0.5 hover:bg-[var(--brand)]"
                  >
                    {primaryCta.label}
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--brand)] hover:text-[var(--brand-deep)]"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </div>

          {showEditorialVisual && (
            <div className="relative hidden h-full min-h-[300px] overflow-hidden rounded-3xl border border-[var(--border)]/80 bg-gradient-to-br from-[var(--surface)] via-[var(--background-soft)] to-[var(--brand)]/10 p-6 lg:block">
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[var(--brand)]/30" aria-hidden />
              <div className="absolute -left-10 bottom-10 h-28 w-28 rounded-full bg-[var(--brand)]/10" aria-hidden />
              <div className="relative flex h-full flex-col justify-end">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-[var(--brand-deep)]">Online California Telehealth</p>
                <p className="mt-3 max-w-xs text-sm text-[var(--muted-foreground)]">
                  Calm, collaborative care for adults and couples seeking steady progress with clear clinical direction.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
