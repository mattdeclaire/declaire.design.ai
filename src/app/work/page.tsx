import type { Metadata } from "next";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAllProjects } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A curated selection of interior design projects by DeClaire Design.",
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <main className="py-section">
      <div className="container-content">
        <SectionHeading heading="Work" />
        <ProjectGrid projects={projects} />
      </div>
    </main>
  );
}
