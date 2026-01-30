"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: "easeOut" },
  }),
};

const projects = [
  {
    title: "FightHub",
    subtitle: "Fighters ↔ Scouts discovery platform",
    impact: "Role-based onboarding • Realtime chat • Media uploads",
    stack: ["React Native", "Node/Express", "Postgres", "Supabase"],
    href: "#",
  },
  {
    title: "Sugar & Spice",
    subtitle: "Business website rebuild",
    impact: "Next.js App Router • Motion UI • Deployed on Vercel",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    href: "#",
  },
  {
    title: "Upload Pipeline",
    subtitle: "Large file upload system",
    impact: "Signed URLs • Validation • Retry strategy",
    stack: ["AWS S3", "Lambda", "Node"],
    href: "#",
  },
];

const chips = [
  "React Native",
  "Next.js",
  "Node/Express",
  "Postgres",
  "Supabase",
  "AWS",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-10">
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <motion.p
              className="text-sm text-zinc-400"
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={0}
            >
              Full-stack / Mobile Developer • Vancouver, Canada
            </motion.p>

            <motion.h1
              className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl"
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={1}
            >
              I build products that ship—fast.
            </motion.h1>

            <motion.p
              className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300"
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={2}
            >
              I’m Suleiman. I’m building{" "}
              <span className="text-zinc-100">FightHub</span> — a platform that
              helps fighters get discovered and helps scouts find talent without
              Instagram chaos.
            </motion.p>

            <motion.div
              className="mt-6 flex flex-wrap gap-2"
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={3}
            >
              {chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-200"
                >
                  {c}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={4}
            >
              <a
                className="rounded-xl bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-white"
                href="#projects"
              >
                View Projects
              </a>
              <a
                className="rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 hover:border-zinc-700 hover:bg-zinc-900"
                href="/resume.pdf"
              >
                Resume
              </a>
              <a
                className="rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 hover:border-zinc-700 hover:bg-zinc-900"
                href="#contact"
              >
                Contact
              </a>
            </motion.div>
          </div>

          {/* RIGHT CARD */}
          <div className="md:col-span-5">
            <motion.div
              className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-zinc-400">Now building</p>
                <span className="rounded-full border border-zinc-800 bg-zinc-950 px-2 py-1 text-xs text-zinc-300">
                  2026
                </span>
              </div>

              <h2 className="mt-2 text-xl font-semibold">FightHub</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                A discovery + messaging platform for fighters and scouts.
                Focused on search, verification, and getting matches booked.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <Stat label="Realtime chat" value="Socket.IO" />
                <Stat label="DB" value="Postgres" />
                <Stat label="Storage" value="Supabase" />
                <Stat label="Auth" value="JWT" />
              </div>

              <div className="mt-6">
                <Link
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-100 hover:text-white"
                  href="#"
                >
                  Read the case study <span aria-hidden>→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="my-14 h-px w-full bg-zinc-900" />

        {/* PROJECTS */}
        <section id="projects">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2
              className="text-2xl font-semibold"
              variants={fadeUp}
              custom={0}
            >
              Featured projects
            </motion.h2>
            <motion.p
              className="mt-2 max-w-2xl text-sm text-zinc-400"
              variants={fadeUp}
              custom={1}
            >
              Depth beats quantity. Each project should have a short case study:
              decisions, tradeoffs, and what you’d improve next.
            </motion.p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {projects.map((p, i) => (
                <ProjectCard key={p.title} p={p} i={i} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* NOW */}
        <section className="mt-16">
          <motion.div
            className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="text-sm text-zinc-400">This month</p>
            <h3 className="mt-2 text-xl font-semibold">
              Shipping fight posters + applications
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">
              Scouts create posters, fighters apply, and the system ranks
              applicants by fit (weight class, region, record, availability).
              Goal: reduce matchmaking time from hours → minutes.
            </p>
          </motion.div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-16">
          <motion.div
            className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Want to talk internships, contracts, or FightHub? Email me.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                className="rounded-xl bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-white"
                href="mailto:suleimanj515@gmail.com"
              >
                suleimanj515@gmail.com
              </a>
              <a
                className="rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 hover:border-zinc-700 hover:bg-zinc-900"
                href=" https://github.com/caged-brush "
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 hover:border-zinc-700 hover:bg-zinc-900"
                href=" https://www.linkedin.com/in/suleimanJibril "
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-zinc-900 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} Suleiman Jibril-Ahmed — Built with
          Next.js + Framer Motion
        </div>
      </footer>
    </div>
  );
}

function Header() {
  return (
    <div className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Suleiman<span className="text-zinc-400">.dev</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <a
            className="text-sm text-zinc-300 hover:text-white"
            href="#projects"
          >
            Projects
          </a>
          <a className="text-sm text-zinc-300 hover:text-white" href="#contact">
            Contact
          </a>
          <a
            className="rounded-xl border border-zinc-800 px-3 py-1.5 text-sm text-zinc-100 hover:border-zinc-700 hover:bg-zinc-900"
            href="/resume.pdf"
          >
            Resume
          </a>
        </nav>
      </div>
    </div>
  );
}

function ProjectCard({ p, i }) {
  return (
    <motion.div
      className="group rounded-3xl border border-zinc-800 bg-zinc-900/30 p-5"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 * i }}
      whileHover={{ y: -6 }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="mt-1 text-sm text-zinc-400">{p.subtitle}</p>
        </div>
        <span className="rounded-full border border-zinc-800 bg-zinc-950 px-2 py-1 text-xs text-zinc-300">
          Case study
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-zinc-300">{p.impact}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-xs text-zinc-300"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-5">
        <a
          className="text-sm font-medium text-zinc-100 hover:text-white"
          href={p.href}
        >
          Open <span aria-hidden>→</span>
        </a>
      </div>
    </motion.div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-3">
      <p className="text-xs text-zinc-500">{label}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}
