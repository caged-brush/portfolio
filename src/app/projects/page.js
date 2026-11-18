import ProjectFilter from "@/components/project-filter";
import { projects } from "@/data/portfolio";

export const metadata = {
  title: "Work",
  description: "Case studies in full-stack product development, BLE asset tracking, and client web development.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-intro">
        <h1>Selected work<span>.</span></h1>
        <p className="lede">A product I founded, a hardware capstone, and a client website rebuild. See what I built and how each project works.</p>
      </section>
      <section className="work-list" aria-labelledby="projects-title">
        <h2 className="sr-only" id="projects-title">Projects</h2>
        <ProjectFilter projects={projects} />
      </section>
    </>
  );
}
