import Image from "next-export-optimize-images/image";

export function BioSection() {
  return (
    <section className="py-section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Photo */}
        <div className="relative aspect-portrait overflow-hidden bg-surface">
          <Image
            src="/images/katie.jpg"
            alt="Katie DeClaire, interior designer"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Bio */}
        <div className="flex flex-col justify-center">
          <p className="text-xs tracking-[0.25em] uppercase text-muted font-sans mb-4">
            About
          </p>
          <h2 className="font-serif text-headline text-heading leading-tight mb-8">
            Katie DeClaire
          </h2>
          <div className="space-y-5 text-body leading-relaxed text-base">
            <p className="font-serif italic text-xl text-heading leading-snug">
              &ldquo;Good design is invisible. It creates a feeling before it
              announces itself.&rdquo;
            </p>
            <p>
              Katie DeClaire is a Benicia, California-based interior designer with over
              a decade of experience working with residential projects. Trained at the
              New York School of Interior Design and having spent formative years at studios in London and
              Copenhagen, she brings an international perspective to each
              commission.
            </p>
            <p>
              Her practice is intentionally small and selective. Each project
              receives Katie's direct attention from concept through
              installation — no handoffs, no diluted vision. Clients describe
              the process as collaborative and unhurried; the results as spaces
              that feel both distinctly designed and deeply personal.
            </p>
            <p>
              DeClaire Design works with clients throughout the Bay Area and
              beyond, and takes on select projects nationally and internationally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
