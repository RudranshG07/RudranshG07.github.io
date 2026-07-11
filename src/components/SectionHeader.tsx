import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  heading: ReactNode;
  subtext: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export default function SectionHeader({
  eyebrow,
  heading,
  subtext,
  buttonLabel,
  buttonHref,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14"
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">
            {eyebrow}
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-3">
          {heading}
        </h2>
        <p className="text-sm md:text-base text-muted max-w-md">{subtext}</p>
      </div>

      {buttonLabel && buttonHref && (
        <a
          href={buttonHref}
          target={buttonHref.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="group relative hidden md:inline-flex rounded-full text-sm self-start md:self-end"
        >
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-stroke bg-bg text-text-primary transition-colors duration-300 group-hover:border-transparent">
            {buttonLabel} <span aria-hidden>→</span>
          </span>
        </a>
      )}
    </motion.div>
  );
}
