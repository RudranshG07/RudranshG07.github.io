import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { profile, socials } from "../data/portfolio";
import PhoneContact from "./PhoneContact";

export default function ContactFooter() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, { xPercent: -50, duration: 40, ease: "none", repeat: -1 });
    });
    return () => ctx.revert();
  }, []);

  const marqueeItems = Array.from({ length: 10 });

  return (
    <footer id="contact" className="relative bg-bg pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="overflow-hidden mb-16 md:mb-24">
          <div ref={marqueeRef} className="flex whitespace-nowrap w-max">
            {marqueeItems.map((_, i) => (
              <span key={i} className="text-5xl md:text-7xl lg:text-8xl font-display italic text-text-primary/90 pr-8">
                {profile.marquee} •
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 items-center gap-12 md:gap-8 mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Get in touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.05] mb-6">
              Let&apos;s build <br className="hidden md:block" />
              something <span className="font-display italic">onchain</span>.
            </h2>
            <p className="text-sm md:text-base text-muted max-w-md mx-auto md:mx-0 mb-8">
              got a backend, protocol, or technical problem worth solving? tap the phone or hit the button. let's build.
            </p>

            <a href={`mailto:${profile.email}`} className="group relative inline-flex rounded-full text-sm md:text-base">
              <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 border border-stroke bg-bg text-text-primary transition-colors duration-300 group-hover:border-transparent">
                {profile.email} <span aria-hidden>↗</span>
              </span>
            </a>

            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted mt-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>
              Available for projects
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <PhoneContact />
          </motion.div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-8 border-t border-stroke">
          <p className="text-xs text-muted">© {new Date().getFullYear()} {profile.name}</p>
          <div className="flex items-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-text-primary transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
