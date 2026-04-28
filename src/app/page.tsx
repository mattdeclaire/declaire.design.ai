import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { getFeaturedProjects } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Interior Design Studio — Benicia, CA",
  description:
    "DeClaire Design creates considered, minimal interiors for residential and commercial clients throughout the Bay Area and beyond.",
};

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <main>
      <Hero />

      <section className="py-section">
        <div className="container-content">
          <SectionHeading
            eyebrow="Selected Work"
            heading="Recent Projects"
          />
          <FeaturedProjects projects={featured} />
          <div className="mt-16 text-center">
            <Button href="/work" variant="ghost">
              View All Work
            </Button>
          </div>
        </div>
      </section>

      {/* Tagline strip */}
      <div className="bg-heading text-canvas py-16">
        <div className="container-content text-center">
          <p className="font-serif italic text-2xl md:text-3xl max-w-2xl mx-auto leading-snug">
            &ldquo;The best rooms are the ones that feel inevitable — as though
            they could not have been any other way.&rdquo;
          </p>
          <p className="mt-4 text-xs tracking-[0.2em] uppercase text-canvas/50 font-sans">
            Katie DeClaire
          </p>
        </div>
      </div>
    </main>
  );
}
