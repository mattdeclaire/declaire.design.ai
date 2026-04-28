import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col md:flex-row">
      {/* Text panel */}
      <div className="flex-1 flex items-center bg-canvas px-8 md:px-16 py-20 md:py-0 order-2 md:order-1">
        <div className="max-w-sm">
          <p className="text-xs tracking-[0.3em] uppercase text-muted font-sans mb-6">
            DeClaire Design
          </p>
          <h1 className="font-serif text-display text-heading leading-none mb-6">
            Spaces
            <br />
            <em>That Speak</em>
          </h1>
          <p className="text-body leading-relaxed mb-10 text-base max-w-xs">
            Considered interior design for clients who value restraint,
            materiality, and the long view.
          </p>
          <Button href="/work">View Work</Button>
        </div>
      </div>

      {/* Image panel */}
      <div className="relative w-full md:w-[58%] aspect-landscape md:aspect-auto order-1 md:order-2">
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80"
          alt="A refined interior designed by DeClaire Design"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 58vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
