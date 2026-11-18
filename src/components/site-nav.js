"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["/", "Home"],
  ["/projects", "Work"],
  ["/experience", "Experience"],
  ["/contact", "Contact"],
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      {links.map(([href, text]) => {
        const active = pathname === href || (href !== "/" && pathname.startsWith(href + "/"));
        return <Link key={href} href={href} aria-current={active ? "page" : undefined}>{text}</Link>;
      })}
    </nav>
  );
}
