import { useEffect, useState } from "react";
import {
  profile,
  tagline,
  tags,
  socials,
  summary,
  projects,
  experience,
  achievements,
  skills,
} from "../data/portfolio";

const nav = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16">
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-sm lowercase tracking-wide text-muted">{title}</h2>
        <span className="h-px flex-1 bg-stroke" />
      </div>
      {children}
    </section>
  );
}

function Chip({ label, href }: { label: string; href?: string }) {
  const cls =
    "mx-[0.15em] inline-flex items-center rounded-md border border-stroke bg-surface px-1.5 py-[0.05em] text-[0.9em] text-text-primary transition-colors hover:border-muted";
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>
      {label}
    </a>
  ) : (
    <span className={cls}>{label}</span>
  );
}

export default function Index() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <div className="mx-auto max-w-2xl px-6 py-14 sm:py-20">
      <header className="space-y-5">
        <img
          src={profile.photo}
          alt={profile.name}
          className="h-28 w-28 rounded-full border border-stroke object-cover"
        />

        <div className="space-y-1">
          <h1 className="text-3xl font-semibold tracking-tight">rudransh</h1>
          <p className="text-[15px] text-muted">{tagline}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-text-primary">
              {n.label}
            </a>
          ))}
          <button
            onClick={() => setLight((v) => !v)}
            className="ml-auto transition-colors hover:text-text-primary"
          >
            {light ? "dark mode" : "light mode"}
          </button>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-muted underline decoration-stroke underline-offset-4 transition-colors hover:text-text-primary"
            >
              {s.label}
            </a>
          ))}
        </div>
      </header>

      <main className="mt-14 space-y-12">
        <Section id="about" title="about">
          <p className="text-[15px] leading-relaxed">
            hey! i'm rudransh. i write go and rust, and i care about systems that have to stay correct
            when something fails halfway through — settlement paths, retry logic, and accounting that
            still has to balance afterward. most of that work is distributed systems and blockchain
            infrastructure.
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-stroke bg-surface px-2 py-0.5 text-xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </Section>

        <Section id="summary" title="summary">
          <ul className="space-y-3">
            {summary.map((s) => (
              <li key={s.text} className="flex gap-3 text-[15px] leading-relaxed">
                <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-muted" />
                <span>
                  {s.text}
                  {s.tags.length > 0 && " "}
                  {s.tags.map((t) => (
                    <Chip key={t.label} {...t} />
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="projects" title="projects">
          <ul className="space-y-4">
            {projects.map((p) => (
              <li key={p.name}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-lg border border-stroke bg-surface/40 p-4 transition-colors hover:border-muted"
                >
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-medium">{p.name}</span>
                    {p.note && <span className="text-xs text-muted">({p.note})</span>}
                    <span className="ml-auto text-xs text-muted transition-colors group-hover:text-text-primary">
                      ↗
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{p.description}</p>
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience" title="experience">
          <ul className="space-y-7">
            {experience.map((e) => (
              <li key={e.org}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <span className="text-[15px]">
                    <span className="font-medium">{e.role}</span>{" "}
                    <span className="text-muted">at</span>{" "}
                    <a
                      href={e.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-stroke underline-offset-4 transition-colors hover:decoration-muted"
                    >
                      {e.org}
                    </a>
                  </span>
                  <span className="text-xs text-muted">{e.period}</span>
                </div>
                <ul className="mt-2 space-y-2">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-stroke" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="achievements" title="achievements">
          <ul className="divide-y divide-stroke">
            {achievements.map((a) => (
              <li
                key={a.title}
                className="flex items-baseline justify-between gap-4 py-2.5 text-[15px]"
              >
                <span>{a.title}</span>
                <span className="shrink-0 text-sm text-muted">{a.prize}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="skills" title="skills">
          <dl className="space-y-2.5">
            {skills.map((s) => (
              <div key={s.group} className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
                <dt className="w-28 shrink-0 text-sm text-muted">{s.group.toLowerCase()}</dt>
                <dd className="text-sm">{s.items}</dd>
              </div>
            ))}
          </dl>
        </Section>
      </main>

      <footer className="mt-16 border-t border-stroke pt-6 text-sm text-muted">
        © 2026 rudransh garewal · {profile.location}
      </footer>
    </div>
  );
}
