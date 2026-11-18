import Image from "next/image";
import Link from "next/link";

export function ProjectArt({ project, priority = false }) {
  if (project.image === "kavyx") {
    return (
      <div className="project-art art-kavyx">
        <Image src="/images/kavyx-training.webp" alt="" fill preload={priority} unoptimized sizes="(max-width: 700px) 100vw, 550px" />
      </div>
    );
  }

  if (project.image === "receiver") {
    return (
      <div className="project-art art-receiver" aria-hidden="true">
        <div className="signal-display">
          <div className="signal-header"><span>BLE receiver</span><span><i /> scanning</span></div>
          <div className="signal-graph">{[19, 29, 22, 39, 31, 51, 70, 59, 73, 48, 62, 36, 44, 26, 34, 19, 12].map((height, index) => <i key={index} style={{ "--signal-height": height + "%" }} />)}</div>
          <div className="signal-reading"><span>Receiver 01</span><span>−62 dBm</span></div>
        </div>
      </div>
    );
  }

  if (project.image === "yahdina") {
    return (
      <div className="project-art art-yahdina" aria-hidden="true">
        <Image src="/images/yahdina-lagos.webp" alt="" fill unoptimized sizes="(max-width: 700px) 100vw, 590px" />
        <span>Yahdina Chambers</span>
      </div>
    );
  }

  if (project.image === "discuss") {
    return (
      <div className="project-art art-discuss" aria-hidden="true">
        <div>
          <Image src="/images/discuss-icon.webp" alt="" width={75} height={75} unoptimized />
          <span>Discuss</span>
        </div>
      </div>
    );
  }

  return (
    <div className="project-art art-sugar" aria-hidden="true">
      <div className="sugar-window"><span>Beauty bar</span><strong>Sugar <i>&amp;</i><br /> Spice</strong><span>Services &nbsp; · &nbsp; Gallery</span></div>
    </div>
  );
}

export function Tags({ items }) {
  return <ul className="tags" aria-label="Technologies">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link href={"/projects/" + project.slug} className="project-card-link">
        <ProjectArt project={project} />
        <div className="project-card-body">
          <p className="eyebrow">{project.label}</p>
          <h3>{project.name} <span aria-hidden="true">→</span></h3>
          <p>{project.headline}</p>
        </div>
      </Link>
      <Tags items={project.stack.slice(0, 4)} />
    </article>
  );
}
