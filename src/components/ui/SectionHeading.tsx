interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${className}`}>
      {eyebrow && (
        <p className="text-xs tracking-[0.25em] uppercase text-muted font-sans mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-headline text-heading leading-tight">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-4 text-body max-w-prose leading-relaxed text-base">
          {subheading}
        </p>
      )}
    </div>
  );
}
