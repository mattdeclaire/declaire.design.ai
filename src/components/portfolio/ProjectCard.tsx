import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <article>
        <div className="relative aspect-portrait overflow-hidden bg-surface">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="mt-4">
          <h3 className="font-serif text-title text-heading mt-1 leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-muted mt-0.5">{project.location}</p>
        </div>
      </article>
    </Link>
  );
}
