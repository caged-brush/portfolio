import { Tags } from "@/components/project-card";
import { experience, skills } from "@/data/portfolio";

export const metadata = {
  title: "Experience",
  description: "Software development and e-learning support experience, technical skills, and Computing Science education.",
};

export default function ExperiencePage() {
  return (
    <>
      <section className="page-intro">
        <h1>Experience<span>.</span></h1>
        <p className="lede">I’ve shipped features on a remote software team, supported university web platforms, and built projects spanning mobile, APIs, and hardware.</p>
        <div className="actions"><a href="/resume.pdf" download="Suleiman-Jibril-Ahmed-Resume.pdf" className="button primary">Download résumé <span aria-hidden="true">↓</span></a></div>
      </section>
      <div className="experience-content">
        <section className="experience-section" aria-labelledby="professional-title">
          <h2 id="professional-title">Professional experience</h2>
          {experience.map((job) => (
            <article className="timeline-entry" key={job.role}>
              <div className="timeline-meta"><p className="eyebrow">{job.period}</p><p>{job.location}</p></div>
              <div><h3>{job.role}</h3><p className="organization">{job.organization}</p><p>{job.description}</p></div>
            </article>
          ))}
        </section>
        <section className="experience-section" aria-labelledby="education-title">
          <h2 id="education-title">Education</h2>
          <article className="timeline-entry">
            <div className="timeline-meta"><p className="eyebrow">Expected Dec 2026</p><p>Kamloops, BC</p></div>
            <div><h3>Bachelor of Computing Science</h3><p className="organization">Thompson Rivers University</p><p>Coursework in cloud and serverless computing, databases, software engineering, and web application development.</p></div>
          </article>
        </section>
        <section className="experience-section" aria-labelledby="skills-title">
          <h2 id="skills-title">Technical skills</h2>
          <div className="skills-grid">{skills.map(([group, items]) => <div key={group}><h3>{group}</h3><Tags items={items} /></div>)}</div>
        </section>
      </div>
    </>
  );
}
