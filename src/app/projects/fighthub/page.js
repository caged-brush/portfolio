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

const Section = ({ kicker, title, children }) => (
  <section className="mt-12">
    <div className="flex flex-col gap-2">
      {kicker ? (
        <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
          {kicker}
        </p>
      ) : null}
      <h2 className="text-xl font-semibold text-zinc-100">{title}</h2>
    </div>
    <div className="mt-4 text-sm leading-relaxed text-zinc-300">{children}</div>
  </section>
);

const Pill = ({ children }) => (
  <span className="rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-xs text-zinc-300">
    {children}
  </span>
);

const Card = ({ children }) => (
  <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-5">
    {children}
  </div>
);

export default function FightHubPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />

      <main className="mx-auto max-w-4xl px-6 pb-24 pt-10">
        {/* HERO */}
        <section className="grid gap-8">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
          >
            <p className="text-sm text-zinc-400">
              Case study • Mobile + Backend • 2026
            </p>
          </motion.div>

          <motion.h1
            className="text-3xl font-semibold tracking-tight md:text-4xl"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={1}
          >
            FightHub — fighters get discovered, scouts book matches faster
          </motion.h1>

          <motion.p
            className="max-w-2xl text-sm leading-relaxed text-zinc-300"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2}
          >
            Matchmaking today is messy: fighters rely on coach connections and
            random Instagram reach, while scouts waste time hunting incomplete
            profiles. FightHub makes discovery and outreach structured: verified
            profiles, filtering, and direct messaging.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={3}
          >
            <Pill>React Native</Pill>
            <Pill>Node/Express</Pill>
            <Pill>Postgres</Pill>
            <Pill>Supabase</Pill>
            <Pill>JWT Auth</Pill>
            <Pill>Socket.IO</Pill>
            <Pill>Media Uploads</Pill>
          </motion.div>

          <motion.div
            className="mt-2 flex flex-wrap gap-3"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={4}
          >
            {/* Replace these with real links when ready */}
            <a
              className="rounded-xl bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-white"
              href="#screens"
            >
              See screens
            </a>
            <a
              className="rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 hover:border-zinc-700 hover:bg-zinc-900"
              href="#architecture"
            >
              Architecture
            </a>
            <a
              className="rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 hover:border-zinc-700 hover:bg-zinc-900"
              href="#next"
            >
              What’s next
            </a>
          </motion.div>
        </section>

        <div className="my-12 h-px w-full bg-zinc-900" />

        {/* PROBLEM / GOALS */}
        <Section kicker="Problem" title="The system is broken">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Fighters get fights through coach connections or luck on social
              media — no connection means no opportunities.
            </li>
            <li>
              Scouts/promoters waste hours searching through clips with missing
              info (weight class, record, location, availability).
            </li>
            <li>
              Messaging happens in DMs with zero structure: no audit trail, no
              fit scoring, no “apply to poster” workflow.
            </li>
          </ul>
        </Section>

        <Section kicker="Goal" title="Reduce matchmaking from hours → minutes">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <p className="text-xs text-zinc-500">For fighters</p>
              <p className="mt-2 text-sm text-zinc-300">
                Create a complete profile and get discovered without relying on
                reach.
              </p>
            </Card>
            <Card>
              <p className="text-xs text-zinc-500">For scouts</p>
              <p className="mt-2 text-sm text-zinc-300">
                Filter talent by requirements and message immediately.
              </p>
            </Card>
            <Card>
              <p className="text-xs text-zinc-500">For events</p>
              <p className="mt-2 text-sm text-zinc-300">
                Post a fight card slot and let fighters apply — ranked by fit.
              </p>
            </Card>
          </div>
        </Section>

        {/* FEATURES */}
        <Section kicker="Solution" title="What I built">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <h3 className="text-sm font-semibold">Role-based onboarding</h3>
              <p className="mt-2 text-sm text-zinc-300">
                Fighters and scouts have different flows, permissions, and
                dashboards. Fighters can edit fighter-only fields; scouts can
                search + outreach.
              </p>
            </Card>

            <Card>
              <h3 className="text-sm font-semibold">Structured discovery</h3>
              <p className="mt-2 text-sm text-zinc-300">
                Profiles include the fields scouts actually need: weight class,
                record, region, style, media, and verification signals.
              </p>
            </Card>

            <Card>
              <h3 className="text-sm font-semibold">Realtime chat</h3>
              <p className="mt-2 text-sm text-zinc-300">
                Direct messaging with Socket.IO for fast coordination, with
                authentication and user identity tied to JWT.
              </p>
            </Card>

            <Card>
              <h3 className="text-sm font-semibold">Media uploads</h3>
              <p className="mt-2 text-sm text-zinc-300">
                Upload fight clips and profile media with validation and storage
                controls (size, type, and user permissions).
              </p>
            </Card>
          </div>
        </Section>

        {/* SCREENS */}
        <section id="screens" className="mt-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Proof
              </p>
              <h2 className="mt-2 text-xl font-semibold text-zinc-100">
                Screens / demo
              </h2>
              <p className="mt-2 text-sm text-zinc-400">
                Add real screenshots or a short demo clip. No screenshots = no
                trust.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              "Onboarding (role select)",
              "Fighter profile",
              "Scout search",
              "Poster + apply flow",
              "Chat",
              "Upload",
            ].map((label) => (
              <div
                key={label}
                className="aspect-[4/3] rounded-3xl border border-zinc-800 bg-zinc-900/30 p-5"
              >
                <p className="text-xs text-zinc-500">{label}</p>
                <div className="mt-3 h-full w-full rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/40" />
              </div>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section id="architecture" className="mt-12">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Architecture
          </p>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            How it’s put together
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Card>
              <h3 className="text-sm font-semibold">Client</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                <li>React Native app</li>
                <li>JWT stored securely (avoid localStorage-style mistakes)</li>
                <li>Socket.IO client for realtime messaging</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-sm font-semibold">Server</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                <li>Node/Express API</li>
                <li>JWT auth middleware + role gates</li>
                <li>Socket.IO server with auth on connect</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-sm font-semibold">Data</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                <li>Postgres schema (users, profiles, messages, media)</li>
                <li>
                  Indexes for search/filter queries (region, weight class, etc.)
                </li>
                <li>Row-level constraints to prevent cross-role edits</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-sm font-semibold">Storage</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                <li>Supabase Storage buckets</li>
                <li>Signed upload URLs (preferred)</li>
                <li>Server-side validation of MIME + size limits</li>
              </ul>
            </Card>
          </div>

          <div className="mt-4 rounded-3xl border border-zinc-800 bg-zinc-900/20 p-5">
            <p className="text-xs text-zinc-500">Diagram</p>
            <div className="mt-3 h-48 w-full rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/40" />
            <p className="mt-3 text-sm text-zinc-400">
              Add a simple architecture diagram image here (even a box diagram).
            </p>
          </div>
        </section>

        {/* HARD PARTS */}
        <Section kicker="Hard parts" title="What actually got tricky">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <p className="text-sm font-semibold">Realtime auth</p>
              <p className="mt-2 text-sm text-zinc-300">
                Socket connections must be authenticated and tied to the same
                identity as REST calls, otherwise you get “unauthorized” chaos
                and spoofing risk.
              </p>
            </Card>
            <Card>
              <p className="text-sm font-semibold">Uploads at scale</p>
              <p className="mt-2 text-sm text-zinc-300">
                Large uploads fail unless you handle size validation, retries,
                and timeouts properly. Signed URLs reduce server load and avoid
                proxying big files through your API.
              </p>
            </Card>
            <Card>
              <p className="text-sm font-semibold">Role permissions</p>
              <p className="mt-2 text-sm text-zinc-300">
                Fighters shouldn’t be able to edit scout-only fields and vice
                versa. Enforce on the server (not just UI).
              </p>
            </Card>
            <Card>
              <p className="text-sm font-semibold">Search quality</p>
              <p className="mt-2 text-sm text-zinc-300">
                Filtering is only useful if profiles are complete. The product
                needs nudges and validation so scouts aren’t back to guessing
                again.
              </p>
            </Card>
          </div>
        </Section>

        {/* NEXT */}
        <section id="next" className="mt-12">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Next
          </p>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            What I’m shipping next
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Card>
              <p className="text-sm font-semibold">
                Posters → applications → ranking
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                Scouts create posters, fighters apply, and applicants are ranked
                by fit (weight class, region, record, availability).
              </p>
            </Card>
            <Card>
              <p className="text-sm font-semibold">
                Verification + trust signals
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                Verified gyms/coaches, optional ID checks, and match history to
                reduce fake profiles and flakey outreach.
              </p>
            </Card>
            <Card>
              <p className="text-sm font-semibold">Better media pipeline</p>
              <p className="mt-2 text-sm text-zinc-300">
                Chunked uploads for bigger videos, background processing, and
                transcoding strategy so clips play instantly.
              </p>
            </Card>
            <Card>
              <p className="text-sm font-semibold">Analytics</p>
              <p className="mt-2 text-sm text-zinc-300">
                Track discovery funnel: profile views → messages → bookings. If
                you can’t measure it, you can’t improve it.
              </p>
            </Card>
          </div>
        </section>

        <div className="my-12 h-px w-full bg-zinc-900" />

        {/* CTA */}
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6">
          <h3 className="text-lg font-semibold">Want to talk?</h3>
          <p className="mt-2 text-sm text-zinc-400">
            If you’re hiring or you run events and want faster matchmaking,
            reach out.
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
              href="https://github.com/caged-brush"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900 py-10">
        <div className="mx-auto max-w-4xl px-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} Suleiman Jibril-Ahmed — FightHub case
          study
        </div>
      </footer>
    </div>
  );
}

function Header() {
  return (
    <div className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Suleiman<span className="text-zinc-400">.dev</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            className="text-sm text-zinc-300 hover:text-white"
            href="/#projects"
          >
            Projects
          </Link>
          <Link
            className="text-sm text-zinc-300 hover:text-white"
            href="/#contact"
          >
            Contact
          </Link>
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
