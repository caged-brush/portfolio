import ProjectFilter from "@/components/project-filter";
import { projects } from "@/data/portfolio";

export const metadata = {
  title: "Work",
  description: "Case studies in full-stack development, native Android, BLE asset tracking, and freelance websites.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-intro">
        <h1>Selected work<span>.</span></h1>
        <p className="lede">Explore the product I founded, my Android class project and hardware capstone, and the websites I built for clients.</p>
      </section>
      <section className="work-list" aria-labelledby="projects-title">
        <h2 className="sr-only" id="projects-title">Projects</h2>
        <ProjectFilter projects={projects} />
      </section>
    </>
  );
}
