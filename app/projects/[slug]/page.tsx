import projectsData from "@/data/projectsData.json";
import { notFound } from "next/navigation";
import ProjectDetails from "./ProjectDetails";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projectsData.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
