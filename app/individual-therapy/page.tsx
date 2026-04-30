import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Individual Therapy | California Quality Counseling Services",
  description: "Online individual therapy for California adults navigating anxiety, trauma, stress, and emotional overwhelm.",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Individual Therapy for Adults"
        subtitle="Build emotional clarity, reduce overwhelm, and address trauma patterns with thoughtful, practical support that fits your life."
        primaryCta={{ href: "/contact", label: "Schedule a Consultation" }}
        secondaryCta={{ href: "/fees-insurance", label: "View Fees" }}
      />
    </>
  );
}
