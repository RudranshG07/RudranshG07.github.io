import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { projects, type Project } from "../data/portfolio";

const SPANS = [
  "md:col-span-7 aspect-[16/11]",
  "md:col-span-5 aspect-[16/11]",
  "md:col-span-5 aspect-[16/11]",
  "md:col-span-7 aspect-[16/11]",
];

function Card({ project, span }: { project: Project; span: string }) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      className={`group relative overflow-hidden bg-surface border border-stroke rounded-3xl focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${span}`}
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div
        className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-black/70 to-transparent">
        <div className="flex flex-wrap gap-1.5 mb-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase tracking-wider text-text-primary/80 border border-white/20 rounded-full px-2 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="text-xs text-muted uppercase tracking-[0.2em]">{project.category}</p>
        <h3 className="text-2xl md:text-3xl font-display italic text-text-primary leading-tight">
          {project.title}
        </h3>
        <p className="mt-2 max-w-lg text-xs md:text-sm leading-relaxed text-text-primary/70 line-clamp-2">
          {project.description}
        </p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-bg/70 backdrop-blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="group/label relative rounded-full">
          <span className="absolute inset-[-2px] rounded-full gradient-border" />
          <span className="relative inline-flex items-center gap-2 rounded-full bg-white text-bg px-5 py-2.5 text-sm">
            peep <span className="font-display italic">{project.title}</span>
            <span aria-hidden>↗</span>
          </span>
        </span>
      </div>
    </motion.a>
  );
}

export default function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Selected Work"
          heading={<>Featured <span className="font-display italic">projects</span></>}
          subtext="protocols and products i took from backend logic to a working release."
          buttonLabel="View all work"
          buttonHref="https://github.com/RudranshG07"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((p, i) => (
            <Card key={p.title} project={p} span={SPANS[i % SPANS.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}
