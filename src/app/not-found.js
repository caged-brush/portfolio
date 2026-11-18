import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-intro missing-page">
      <h1>Page not found<span>.</span></h1>
      <div className="actions"><Link href="/projects" className="button primary">Explore my work <span aria-hidden="true">→</span></Link></div>
    </section>
  );
}
