"use client";

import Image from "next-export-optimize-images/image";
import { useState, useEffect, useCallback } from "react";

interface ProjectImageGalleryProps {
  images: { src: string; alt: string }[];
  title: string;
}

export function ProjectImageGallery({ images, title }: ProjectImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  }, [images.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxIndex, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3">
        {images.map((image, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="relative aspect-square overflow-hidden bg-surface cursor-zoom-in group"
            aria-label={`Open fullscreen: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 33vw, 22vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              priority={i === 0}
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92"
          onClick={close}
        >
          {/* Image */}
          <div
            className="relative w-[90vw] h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Close */}
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 p-2 text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Prev / Next */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous image"
                className="absolute left-4 md:left-8 p-2 text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next image"
                className="absolute right-4 md:right-8 p-2 text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

              {/* Counter */}
              <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.2em] font-sans tabular-nums">
                {lightboxIndex + 1} / {images.length}
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
}
