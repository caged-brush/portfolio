import Link from "next/link";
import ProjectCard, { ProjectArt } from "@/components/project-card";
import { projects } from "@/data/portfolio";

export default function Home() {
  const [featured, ...otherProjects] = projects;

  return (
    <>
      <section className="home-hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow location"><span aria-hidden="true" /> Kamloops, BC · Canada</p>
          <h1 id="hero-title">Suleiman<br />Jibril-Ahmed<span>.</span></h1>
          <p className="hero-role">Full-stack software engineer</p>
          <p className="lede">I build web and mobile products, from the interface people use to the APIs and data behind it.</p>
          <div className="actions">
            <Link className="button primary" href="/projects">Explore my work <span aria-hidden="true">→</span></Link>
            <Link className="button secondary" href="/contact">Get in touch</Link>
          </div>
        </div>
        <Link className="hero-feature" href="/projects/kavyx">
          <ProjectArt project={featured} priority />
          <div className="feature-caption">
            <div>
              <p className="eyebrow">Founder project · Web & mobile</p>
              <h2>Kavyx</h2>
              <p>Combat sports talent discovery</p>
            </div>
            <span className="round-arrow" aria-hidden="true">→</span>
          </div>
        </Link>
      </section>

      <section className="home-work" aria-labelledby="other-work-title">
        <div className="section-heading">
          <h2 id="other-work-title">More of my work</h2>
          <Link className="text-link" href="/projects">All projects <span aria-hidden="true">→</span></Link>
        </div>
        <div className="project-grid">
          {otherProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>

      <section className="experience-callout" aria-labelledby="experience-title">
        <div>
          <h2 id="experience-title">Experience & education</h2>
          <p>Software development at Rulerise and a Computing Science degree at Thompson Rivers University.</p>
        </div>
        <Link className="button secondary" href="/experience">View experience <span aria-hidden="true">→</span></Link>
      </section>
    </>
  );
}
