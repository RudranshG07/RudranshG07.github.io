import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { achievements } from "../data/portfolio";

export default function Achievements() {
  return (
    <section id="milestones" className="bg-bg py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Track record"
          heading={<>Proof of <span className="font-display italic">work</span>.</>}
          subtext="real usage, live products, and a clean deployment record."
        />

        <div className="grid sm:grid-cols-2 gap-px bg-stroke rounded-3xl overflow-hidden border border-stroke">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-60px" }}
              className="group relative bg-bg p-8 md:p-12 transition-colors duration-300 hover:bg-surface/50"
            >
              <div className="accent-gradient bg-clip-text text-transparent font-display text-6xl md:text-7xl lg:text-8xl leading-none mb-5 tracking-tight">
                {a.metric}
              </div>
              <h3 className="text-lg md:text-xl text-text-primary mb-1.5">{a.title}</h3>
              <p className="text-sm md:text-base text-muted max-w-xs">{a.desc}</p>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 accent-gradient transition-all duration-500 ease-out group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
