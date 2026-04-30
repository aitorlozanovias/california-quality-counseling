import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Couples Therapy | California Quality Counseling Services",
  description: "Online couples therapy across California to reduce conflict, rebuild trust, and strengthen connection.",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Couples Therapy for Connection and Repair"
        subtitle="Work through communication breakdowns, recurring conflict, and emotional distance with a trauma-informed, relationship-focused approach."
        primaryCta={{ href: "/contact", label: "Schedule a Consultation" }}
        secondaryCta={{ href: "/fees-insurance", label: "View Fees" }}
      />
    </>
  );
}
