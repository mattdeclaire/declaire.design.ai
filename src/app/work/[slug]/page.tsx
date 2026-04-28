import type { Metadata } from "next";
import Image from "next-export-optimize-images/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectImageGallery } from "@/components/portfolio/ProjectImageGallery";
import { getAllSlugs, getProjectBySlug } from "@/lib/utils";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description.slice(0, 155),
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main>
      {/* Cover image — full bleed */}
      <div className="relative aspect-landscape w-full overflow-hidden bg-surface">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="container-content pt-12 pb-section">
        {/* Back link */}
        <div className="mb-10">
          <Link
            href="/work"
            className="text-xs tracking-[0.2em] uppercase font-sans text-accent hover:text-heading transition-colors"
          >
            &larr; Back to Work
          </Link>
        </div>

        {/* Title */}
        <h1 className="font-serif text-headline text-heading leading-tight mb-6">
          {project.title}
        </h1>

        {/* Location */}
        <p className="text-sm text-body mb-10 pb-10 border-b border-border">{project.location}</p>

        {/* Description */}
        <div className="space-y-5 text-body leading-relaxed text-base max-w-prose">
          {project.description.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Gallery */}
        <ProjectImageGallery images={project.images} title={project.title} />

      </div>
    </main>
  );
}
