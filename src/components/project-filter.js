"use client";

import { useState } from "react";
import ProjectCard from "./project-card";

export default function ProjectFilter({ projects }) {
  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  const [category, setCategory] = useState("All");
  const visibleProjects = category === "All" ? projects : projects.filter((project) => project.category === category);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects">
        {categories.map((item) => <button className="filter" key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
      </div>
      <p className="sr-only" role="status">{visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"} shown</p>
      <div className="project-grid work-grid">
        {visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </>
  );
}
