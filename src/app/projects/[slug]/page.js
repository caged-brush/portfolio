import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectArt, Tags } from "@/components/project-card";
import SightingDemo from "@/components/sighting-demo";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return { title: project.name, description: project.description };
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <article className="case-study">
      <Link href="/projects" className="text-link back-link">← All projects</Link>
      <div className="case-hero">
        <div>
          <p className="eyebrow">{project.label}</p>
          <h1>{project.name}<span>.</span></h1>
          <p className="lede">{project.description}</p>
          {project.links && (
            <div className="actions">
              {project.links.map(({ href, label }, index) => (
                <a key={href} href={href} className={"button " + (index === 0 ? "primary" : "secondary")}>{label} <span aria-hidden="true">→</span></a>
              ))}
            </div>
          )}
        </div>
        <ProjectArt project={project} />
      </div>
      <div className="case-details">
        <aside className="case-facts" aria-label="Project details">
          <dl>
            <dt>My role</dt><dd>{project.role}</dd>
            {project.period && <><dt>Timeline</dt><dd>{project.period}</dd></>}
            <dt>Stack</dt><dd><Tags items={project.stack} /></dd>
          </dl>
        </aside>
        <div className="case-copy">
          {project.sections.map(([heading, copy]) => (
            <section key={heading}><h2>{heading}</h2><p>{copy}</p></section>
          ))}
          {slug === "tool-visibility" && <SightingDemo />}
        </div>
      </div>
      <Link className="next-project" href={"/projects/" + nextProject.slug}>
        <div><p className="eyebrow">Next case study</p><strong>{nextProject.name}</strong></div><span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
