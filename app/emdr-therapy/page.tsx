import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "EMDR Integration | California Quality Counseling Services",
  description: "EMDR-informed techniques may be integrated into treatment planning when clinically appropriate.",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="EMDR-Informed Integration"
        subtitle="When appropriate, Elizabeth Agusti, LMFT may integrate EMDR-informed strategies within a broader trauma-informed treatment plan."
        primaryCta={{ href: "/contact", label: "Schedule a Consultation" }}
        secondaryCta={{ href: "/services", label: "View Services" }}
      />
    </>
  );
}
