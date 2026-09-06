import { useEffect, useState } from "react";
import {
  profile,
  tagline,
  about,
  tags,
  socials,
  summary,
  projects,
  experience,
  achievements,
  skills,
} from "../data/portfolio";

const nav = [
  { label: "about", id: "about", n: "01" },
  { label: "experience", id: "experience", n: "02" },
  { label: "projects", id: "projects", n: "03" },
  { label: "wins", id: "wins", n: "04" },
];

const icons: Record<string, string> = {
  github:
    "M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z",
  x: "M18.9 2H22l-7 8 8.2 12h-6.4l-5-7.3L6 22H3l7.5-8.6L2.6 2H9l4.5 6.7L18.9 2zm-1.1 18h1.7L7.3 3.8H5.5L17.8 20z",
  linkedin:
    "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9z",
  email:
    "M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5zM4.7 5l7.3 5.6L19.3 5zM20 6.9l-7.4 5.7a1 1 0 0 1-1.2 0L4 6.9V19h16z",
};

function Icon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d={icons[name]} />
    </svg>
  );
}

function Section({
  id,
  n,
  title,
  children,
}: {
  id: string;
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-14">
      <div className="mb-6 flex items-baseline gap-3">
        <span className="font-mono text-[11px] text-accent">{n}</span>
        <h2 className="font-serif text-[30px] font-normal leading-none">{title}</h2>
        <span className="h-px flex-1 translate-y-[-4px] bg-stroke" />
      </div>
      {children}
    </section>
  );
}

export default function Index() {
  const [light, setLight] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (vis) setActive(vis.target.id);
      },
      { rootMargin: "-10% 0px -70% 0px" }
    );
    nav.forEach((x) => {
      const el = document.getElementById(x.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12 lg:flex-row lg:gap-16 lg:py-16">
      {/* sidebar */}
      <aside className="lg:sticky lg:top-16 lg:h-[calc(100vh-8rem)] lg:w-[196px] lg:shrink-0">
        <div className="flex h-full flex-col">
          <div>
            <div className="flex items-end gap-3 lg:block">
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-14 w-14 rounded-full object-cover ring-1 ring-stroke"
              />
              <div className="lg:mt-4">
                <h1 className="font-serif text-[27px] font-normal leading-none">
                  rudransh <span className="text-accent">garewal</span>
                </h1>
                <p className="mt-2 text-[13px] leading-snug text-muted">{tagline}</p>
              </div>
            </div>

            <p className="mt-3 font-mono text-[11px] text-muted">
              <span className="mr-1.5 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-accent" />
              {profile.location.toLowerCase()}
            </p>

            <nav className="mt-7 flex flex-row flex-wrap gap-x-5 gap-y-1 lg:flex-col lg:gap-x-0">
              {nav.map((x) => (
                <a
                  key={x.id}
                  href={`#${x.id}`}
                  className={`group flex items-center gap-2.5 py-1 text-sm transition-colors ${
                    active === x.id ? "text-text-primary" : "text-muted hover:text-text-primary"
                  }`}
                >
                  <span
                    className={`h-px transition-all ${
                      active === x.id ? "w-6 bg-accent" : "w-2.5 bg-stroke group-hover:w-4"
                    }`}
                  />
                  {x.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-9 lg:mt-auto">
            <div className="flex flex-wrap gap-2">
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-stroke px-3.5 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-accent hover:text-accent"
              >
                resume ↗
              </a>
              <button
                onClick={() => setLight((v) => !v)}
                className="rounded-full border border-stroke px-3.5 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-accent hover:text-accent"
              >
                {light ? "dark" : "light"}
              </button>
            </div>

            <div className="mt-4 flex gap-4 text-muted">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="transition-colors hover:text-accent"
                >
                  <Icon name={s.label} />
                </a>
              ))}
            </div>

            <p className="mt-4 font-mono text-[10px] text-muted">© 2026</p>
          </div>
        </div>
      </aside>

      {/* content */}
      <main className="min-w-0 flex-1 space-y-16">
        <Section id="about" n="01" title="about">
          <p className="font-serif text-[21px] leading-snug">
            hey! i'm rudransh — i write{" "}
            <span className="text-accent">go</span> and <span className="text-accent">rust</span>,
            and i'm drawn to systems that have to stay correct when something fails halfway through.
          </p>

          <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-muted">
            {about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ul className="mt-6 space-y-2.5">
            {summary.map((s) => (
              <li key={s.text} className="flex gap-3 text-[14.5px] leading-relaxed">
                <span className="mt-[0.55em] font-mono text-[10px] text-accent">▸</span>
                <span>
                  {s.text}
                  {s.tags.map((t) => (
                    <a
                      key={t.label}
                      href={t.href}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-1.5 rounded border border-stroke bg-surface px-1.5 py-[1px] font-mono text-[11px] text-accent transition-colors hover:border-accent"
                    >
                      {t.label}
                    </a>
                  ))}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-accent-soft px-2.5 py-[3px] font-mono text-[11px] text-accent"
              >
                {t}
              </span>
            ))}
          </div>
        </Section>

        <Section id="experience" n="02" title="experience">
          <ol className="ml-1 border-l border-stroke">
            {experience.map((e, i) => (
              <li key={e.org} className="relative pb-9 pl-7 last:pb-0">
                <span
                  className={`absolute -left-[4.5px] top-[7px] h-[9px] w-[9px] rounded-full ${
                    i === 0 ? "bg-accent" : "border border-muted bg-bg"
                  }`}
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <span className="text-[15px] font-medium">{e.role}</span>
                  <span className="font-mono text-[11px] text-muted">{e.period}</span>
                </div>
                <a
                  href={e.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-0.5 inline-block font-serif text-[16px] italic text-accent"
                >
                  {e.org}
                </a>
                <span className="ml-2 font-mono text-[11px] text-muted">{e.location}</span>
                <ul className="mt-2.5 space-y-1.5">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="select-none text-stroke">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" n="03" title="projects">
          <div className="grid gap-3 sm:grid-cols-2">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-stroke bg-surface/40 p-4 transition-colors hover:border-accent/60"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[15px] font-medium">{p.name}</span>
                  <span className="font-mono text-xs text-muted transition-colors group-hover:text-accent">
                    ↗
                  </span>
                </div>
                {p.note && (
                  <p className="mt-1 font-mono text-[11px] text-accent">{p.note}</p>
                )}
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{p.description}</p>
              </a>
            ))}
          </div>
        </Section>

        <Section id="wins" n="04" title="wins">
          <ul className="space-y-0">
            {achievements.map((a) => (
              <li
                key={a.title}
                className="flex items-baseline gap-3 border-b border-stroke py-3 text-[15px] last:border-0"
              >
                <span>{a.title}</span>
                <span className="h-px flex-1 translate-y-[-3px] bg-stroke" />
                <span className="shrink-0 font-mono text-[13px] text-accent">{a.prize}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 space-y-2.5">
            {skills.map((s) => (
              <div key={s.group} className="flex flex-col gap-0.5 sm:flex-row sm:gap-5">
                <span className="w-28 shrink-0 font-mono text-[11px] uppercase tracking-wide text-muted">
                  {s.group}
                </span>
                <span className="text-sm">{s.items}</span>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
