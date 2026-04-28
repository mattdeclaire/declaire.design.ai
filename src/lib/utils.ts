import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Project {
  slug: string;
  title: string;
  location: string;
  year: number;
  description: string;
  coverImage: string;
  images: { src: string; alt: string }[];
  featured: boolean;
  services: string[];
}

const workDir = path.join(process.cwd(), "work");

function readProject(slug: string): Project {
  const raw = fs.readFileSync(path.join(workDir, slug, "project.md"), "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title,
    location: data.location,
    year: data.year,
    description: content.trim(),
    coverImage: data.coverImage,
    images: data.images ?? [],
    featured: data.featured ?? false,
    services: data.services ?? [],
  };
}

function getProjectSlugs(): string[] {
  return fs
    .readdirSync(workDir)
    .filter((f) => fs.existsSync(path.join(workDir, f, "project.md")));
}

export function getAllProjects(): Project[] {
  return getProjectSlugs().map(readProject);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  if (!fs.existsSync(path.join(workDir, slug, "project.md"))) return undefined;
  return readProject(slug);
}

export function getAllSlugs(): string[] {
  return getProjectSlugs();
}
