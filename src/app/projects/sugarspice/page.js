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
    {kicker && (
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
        {kicker}
      </p>
    )}
    <h2 className="mt-2 text-xl font-semibold">{title}</h2>
    <div className="mt-4 text-sm leading-relaxed text-zinc-300">{children}</div>
  </section>
);

const Card = ({ children }) => (
  <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-5">
    {children}
  </div>
);

const Pill = ({ children }) => (
  <span className="rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-xs text-zinc-300">
    {children}
  </span>
);

export default function SugarSpicePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />

      <main className="mx-auto max-w-4xl px-6 pb-24 pt-10">
        {/* HERO */}
        <section className="grid gap-8">
          <motion.p
            className="text-sm text-zinc-400"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
          >
            Case study • Client project • Web
          </motion.p>

          <motion.h1
            className="text-3xl font-semibold tracking-tight md:text-4xl"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={1}
          >
            Sugar & Spice — rebuilding a real business website for performance
            and trust
          </motion.h1>

          <motion.p
            className="max-w-2xl text-sm leading-relaxed text-zinc-300"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2}
          >
            Sugar & Spice is a local beauty bar. Their old website was slow,
            visually dated, and hard to update. I rebuilt it with a modern stack
            focused on speed, clarity, and conversion — while coordinating
            directly with the business owner.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={3}
          >
            <Pill>Next.js</Pill>
            <Pill>App Router</Pill>
            <Pill>Tailwind</Pill>
            <Pill>Framer Motion</Pill>
            <Pill>Vercel</Pill>
            <Pill>SEO</Pill>
          </motion.div>
        </section>

        <div className="my-12 h-px w-full bg-zinc-900" />

        {/* PROBLEM */}
        <Section
          kicker="Problem"
          title="A real business with a weak web presence"
        >
          <ul className="list-disc space-y-2 pl-5">
            <li>Old site looked generic and didn’t reflect the brand.</li>
            <li>Slow load times and poor mobile experience.</li>
            <li>Hard for the owner to request changes or iterate.</li>
            <li>No clear structure for services, testimonials, or gallery.</li>
          </ul>
        </Section>

        {/* GOALS */}
        <Section kicker="Goals" title="What success looked like">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <p className="text-xs text-zinc-500">Performance</p>
              <p className="mt-2 text-sm">
                Fast loads, smooth animations, clean UX on mobile.
              </p>
            </Card>
            <Card>
              <p className="text-xs text-zinc-500">Brand</p>
              <p className="mt-2 text-sm">
                Match the in-store experience: clean, premium, modern.
              </p>
            </Card>
            <Card>
              <p className="text-xs text-zinc-500">Maintainability</p>
              <p className="mt-2 text-sm">
                Easy to extend with booking or e-commerce later.
              </p>
            </Card>
          </div>
        </Section>

        {/* SOLUTION */}
        <Section kicker="Solution" title="What I built">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <h3 className="text-sm font-semibold">Modern frontend</h3>
              <p className="mt-2 text-sm text-zinc-300">
                Built with Next.js App Router, Tailwind for consistency, and
                Framer Motion for subtle, performant animations.
              </p>
            </Card>

            <Card>
              <h3 className="text-sm font-semibold">Mobile-first layout</h3>
              <p className="mt-2 text-sm text-zinc-300">
                Designed around mobile usage first, then scaled up to desktop.
              </p>
            </Card>

            <Card>
              <h3 className="text-sm font-semibold">Clear content structure</h3>
              <p className="mt-2 text-sm text-zinc-300">
                Services, testimonials, and gallery sections are clearly
                separated to guide users toward booking.
              </p>
            </Card>

            <Card>
              <h3 className="text-sm font-semibold">Production deployment</h3>
              <p className="mt-2 text-sm text-zinc-300">
                Deployed on Vercel with optimized builds, caching, and clean
                URLs.
              </p>
            </Card>
          </div>
        </Section>

        {/* SCREENS */}
        <Section kicker="Proof" title="Screens / before & after">
          <p className="text-sm text-zinc-400">
            Add real screenshots here. Before/after is especially powerful for
            client work.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              "Old site",
              "New homepage",
              "Services",
              "Gallery",
              "Mobile view",
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
        </Section>

        {/* HARD PARTS */}
        <Section kicker="Challenges" title="What wasn’t trivial">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <p className="text-sm font-semibold">Client feedback loops</p>
              <p className="mt-2 text-sm text-zinc-300">
                Translating subjective feedback (“make it feel more premium”)
                into concrete UI changes.
              </p>
            </Card>
            <Card>
              <p className="text-sm font-semibold">Not overengineering</p>
              <p className="mt-2 text-sm text-zinc-300">
                This is a business site, not a startup. The stack had to stay
                simple and reliable.
              </p>
            </Card>
          </div>
        </Section>

        {/* NEXT */}
        <Section kicker="Next" title="Future improvements">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <p className="text-sm font-semibold">Online booking</p>
              <p className="mt-2 text-sm text-zinc-300">
                Integrate a booking system to convert visits into appointments.
              </p>
            </Card>
            <Card>
              <p className="text-sm font-semibold">E-commerce</p>
              <p className="mt-2 text-sm text-zinc-300">
                Sell products directly through the site.
              </p>
            </Card>
          </div>
        </Section>

        <div className="my-12 h-px w-full bg-zinc-900" />

        {/* CTA */}
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6">
          <h3 className="text-lg font-semibold">
            Need a site that actually ships?
          </h3>
          <p className="mt-2 text-sm text-zinc-400">
            I work with real businesses, not just mock projects.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              className="rounded-xl bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-white"
              href="mailto:suleimanj515@gmail.com"
            >
              Email me
            </a>
            <a
              className="rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 hover:border-zinc-700 hover:bg-zinc-900"
              href="/"
            >
              Back to portfolio
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900 py-10">
        <div className="mx-auto max-w-4xl px-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} Suleiman Jibril-Ahmed — Sugar & Spice
          case study
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
            href="/#projects"
            className="text-sm text-zinc-300 hover:text-white"
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            className="text-sm text-zinc-300 hover:text-white"
          >
            Contact
          </Link>
          <a
            href="/resume.pdf"
            className="rounded-xl border border-zinc-800 px-3 py-1.5 text-sm text-zinc-100 hover:border-zinc-700 hover:bg-zinc-900"
          >
            Resume
          </a>
        </nav>
      </div>
    </div>
  );
}
