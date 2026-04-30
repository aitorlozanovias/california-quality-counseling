import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "FAQs | California Quality Counseling Services",
  description: "Answers to common questions about trauma-informed online therapy for California adults and couples.",
};

const faqs = [
  ["What happens in the first session?", "The first session is focused on understanding what brought you in, what feels most urgent, and what goals you want therapy to support."],
  ["Do you offer EMDR therapy?", "Yes. EMDR-informed treatment is available when it is clinically appropriate and you feel ready for trauma processing."],
  ["How long does therapy usually last?", "Length depends on your goals and history. Some clients work short term for a focused concern, while others continue longer for deeper trauma and relationship healing."],
  ["Do you offer sessions in Spanish?", "Yes. Therapy is available in both English and Spanish."],
  ["Do you work with couples?", "Yes. Couples therapy focuses on communication, conflict cycles, and rebuilding emotional safety and trust."],
  ["Can couples sessions be done if partners are in different locations?", "Often yes, as long as both partners are physically in California at the time of session and telehealth logistics are clinically appropriate."],
  ["Do you accept insurance?", "This is primarily a private-pay practice. Out-of-network documentation may be available when appropriate."],
  ["How much is each session?", "$175 per 50-minute session, with limited sliding-scale spots at $150 when available."],
  ["Do you offer a consultation call?", "Yes. You can schedule a free 15-minute consultation to ask questions and discuss fit."],
  ["What if I am not sure therapy is right for me?", "That uncertainty is common. The consultation is a low-pressure way to explore your concerns and decide whether this is the right support."],
  ["Do you work with moms?", "Yes. Many clients are mothers coping with overload, identity shifts, relationship stress, and burnout."],
  ["Do you work with immigrant clients?", "Yes. Therapy can support acculturation stress, grief, identity tension, and relationship or family strain."],
  ["Is therapy online or in person?", "Services are online only through secure video telehealth."],
  ["Where can clients be located?", "Clients must be physically located in California during each telehealth session."],
];

export default function Page() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Get answers about first sessions, EMDR, couples logistics, pricing, and what to expect when beginning therapy."
        primaryCta={{ href: "/contact", label: "Schedule your free 15-minute consultation" }}
        secondaryCta={{ href: "/fees-insurance", label: "View fees" }}
      />
      <section className="section-shell grid gap-5 pb-16 md:grid-cols-2">
        {faqs.map(([question, answer]) => (
          <article key={question} className="card-elevated p-7">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">{question}</h2>
            <p className="mt-3 text-[var(--muted-foreground)]">{answer}</p>
          </article>
        ))}
      </section>
    </>
  );
}
