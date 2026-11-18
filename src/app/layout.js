import Link from "next/link";
import SiteNav from "@/components/site-nav";
import { profile } from "@/data/portfolio";
import "./globals.css";

export const metadata = {
  title: { default: "Suleiman Jibril-Ahmed · Software Engineer", template: "%s · Suleiman Jibril-Ahmed" },
  description: "Full-stack software engineer in Kamloops, BC. Explore Kavyx, a BLE tool-tracking capstone, client work, and software development experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <header className="site-header">
          <div className="shell header-layout">
            <Link className="brand" href="/" aria-label="Suleiman Jibril-Ahmed, home"><span aria-hidden="true">SJ<span>.</span></span></Link>
            <SiteNav />
            <a className="resume-link" href="/resume.pdf">Résumé <span aria-hidden="true">→</span></a>
          </div>
        </header>
        <main id="main-content" className="shell" tabIndex={-1}>{children}</main>
        <footer className="site-footer">
          <div className="shell footer-layout">
            <div><strong>{profile.name}</strong><span>Kamloops, British Columbia</span></div>
            <div className="footer-links">
              <a href={profile.github}>GitHub →</a>
              <a href={profile.linkedin}>LinkedIn →</a>
              <Link href="/contact">Contact →</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
