import Link from "next/link";

type PageHeroProps = {
  title: string;
  subtitle: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function PageHero({ title, subtitle, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="section-shell py-14 sm:py-20">
      <div className="rounded-3xl bg-gradient-to-br from-sky-50 via-white to-teal-50 p-8 shadow-sm ring-1 ring-sky-100 sm:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sky-700">Trauma-Informed Care in California</p>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">{subtitle}</p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryCta && (
              <Link href={primaryCta.href} className="rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-800">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="rounded-full border border-sky-200 bg-white px-6 py-3 text-sm font-semibold text-sky-900 transition hover:bg-sky-50">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
