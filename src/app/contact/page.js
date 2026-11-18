import CopyEmail from "@/components/copy-email";
import { profile } from "@/data/portfolio";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Suleiman Jibril-Ahmed about software engineering roles and collaborations.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-intro">
        <h1>Let’s talk<span>.</span></h1>
        <p className="lede">I’m based in Kamloops, BC, and interested in full-stack software roles and project collaborations.</p>
      </section>
      <div className="contact-layout">
        <section className="contact-card" aria-labelledby="email-title">
          <h2 id="email-title">Email</h2>
          <a className="email-address" href={"mailto:" + profile.email}>{profile.email}</a>
          <div className="actions">
            <a className="button primary" href={"mailto:" + profile.email}>Write an email <span aria-hidden="true">→</span></a>
            <CopyEmail email={profile.email} />
          </div>
        </section>
        <section className="contact-card contact-profiles" aria-labelledby="profiles-title">
          <h2 id="profiles-title">Elsewhere</h2>
          <a href={profile.github}>GitHub <span aria-hidden="true">→</span></a>
          <a href={profile.linkedin}>LinkedIn <span aria-hidden="true">→</span></a>
          <a href="/resume.pdf">Résumé <span aria-hidden="true">→</span></a>
        </section>
      </div>
    </>
  );
}
