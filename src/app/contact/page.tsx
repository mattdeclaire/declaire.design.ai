import type { Metadata } from "next";
import { BioSection } from "@/components/about/BioSection";
import { ServicesSection } from "@/components/about/ServicesSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Meet Katie DeClaire and get in touch with DeClaire Design.",
};

export default function ContactPage() {
  return (
    <main>
      <div className="container-content">
        <BioSection />
        <hr className="border-border" />
        <ServicesSection />
        <hr className="border-border" />

        {/* Contact */}
        <section className="py-section">
          <p className="text-xs tracking-[0.25em] uppercase text-muted font-sans mb-4">
            Contact
          </p>
          <h2 className="font-serif text-headline text-heading leading-tight mb-6">
            Get in Touch
          </h2>
          <p className="text-body leading-relaxed text-base max-w-prose mb-8">
            DeClaire Design takes on a limited number of projects each year.
            If you&apos;d like to discuss yours, send an email.
          </p>
          <a
            href="mailto:katie@declaire.design"
            className="font-serif italic text-xl text-heading hover:text-accent transition-colors"
          >
            katie@declaire.design
          </a>
        </section>
      </div>
    </main>
  );
}
