import Link from "next/link";

type PageHeroProps = {
  title: string;
  subtitle: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  trustBullets?: string[];
  showEditorialVisual?: boolean;
};

export function PageHero({ title, subtitle, primaryCta, secondaryCta, trustBullets = [], showEditorialVisual = false }: PageHeroProps) {
  return (
    <section className="section-shell section-spacing pt-10 sm:pt-14">
      <div className="card-elevated relative overflow-hidden p-8 sm:p-12 lg:p-16">
        <div className="pointer-events-none absolute -right-24 -top-10 h-72 w-72 rounded-full bg-[var(--brand)]/12 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-white/50 blur-3xl" aria-hidden />

        <div className={`relative ${showEditorialVisual ? "grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center" : ""}`}>
          <div>
            <p className="editorial-kicker mb-5">Elizabeth Agusti, LMFT #142541 · California-only telehealth</p>
            <h1 className="max-w-3xl text-[2.35rem] font-semibold leading-[1.06] tracking-[-0.02em] text-[var(--foreground)] sm:text-5xl lg:text-[3.7rem]">{title}</h1>
            <p className="mt-7 max-w-2xl text-[17px] text-[var(--muted-foreground)] sm:text-xl">{subtitle}</p>
            {trustBullets.length > 0 && (
              <ul className="mt-7 grid gap-2 text-sm text-[var(--muted-foreground)] sm:grid-cols-2">
                {trustBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-deep)]" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            {(primaryCta || secondaryCta) && (
              <div className="mt-9 flex flex-wrap gap-3">
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
            <div className="relative hidden h-full min-h-[320px] overflow-hidden rounded-3xl border border-[var(--border)]/80 bg-gradient-to-br from-[var(--surface)] via-[var(--background-soft)] to-[var(--brand)]/12 p-6 shadow-[0_30px_70px_-45px_rgba(35,49,59,0.9)] lg:block">
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[var(--brand)]/30" aria-hidden />
              <div className="absolute -left-10 bottom-10 h-28 w-28 rounded-full bg-[var(--brand)]/10" aria-hidden />
              <div className="relative flex h-full flex-col justify-between">
                <p className="w-fit rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">Hero image placeholder</p>
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-[var(--brand-deep)]">Online California Telehealth</p>
                  <p className="mt-3 max-w-xs text-sm text-[var(--muted-foreground)]">Calm, structured therapy that helps you feel steadier, more connected, and better supported day to day.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
