import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact | California Quality Counseling Services",
  description: "Request a consultation for online trauma-informed therapy with Elizabeth Agusti, LMFT.",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Contact California Quality Counseling Services"
        subtitle="Schedule a consultation to discuss goals, fit, and availability for online therapy."
        primaryCta={{ href: "/contact", label: "Schedule a Consultation" }}
        secondaryCta={{ href: "/fees-insurance", label: "View Fees" }}
      />
      <section className="section-shell pb-16">
        <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-xl font-semibold text-slate-900">Telehealth disclosure</h2>
          <p className="mt-3 text-slate-700">This is an online-only California practice. To receive services, you must be physically located in California at the time of your appointment.</p>
        </div>
      </section>
    </>
  );
}
