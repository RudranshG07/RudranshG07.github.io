import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { profile, HLS_SRC } from "../data/portfolio";
import { useHlsVideo } from "../hooks/useHlsVideo";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const videoRef = useHlsVideo(HLS_SRC);
  const rootRef = useRef<HTMLElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % profile.roles.length),
      2200
    );
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".name-reveal", { opacity: 0, y: 40, duration: 1.1, delay: 0.1 });
      tl.from(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 18, duration: 0.9, stagger: 0.12 },
        0.25
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={rootRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
      />
      <div className="absolute inset-0 bg-bg/35" />
      <div className="absolute inset-0 [background:radial-gradient(120%_120%_at_50%_45%,transparent_38%,hsl(var(--bg))_88%)]" />
      <div className="absolute top-0 left-0 right-0 h-2/5 bg-gradient-to-b from-bg/85 via-bg/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg to-transparent" />

      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 pt-24 pb-20 flex flex-col items-center text-center">
        <div className="blur-in flex items-center gap-2.5 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          <span className="text-xs text-text-primary/80 uppercase tracking-[0.3em] [text-shadow:0_1px_10px_rgba(0,0,0,0.85)]">
            open to work 🙏
          </span>
        </div>

        <h1 className="name-reveal font-display italic text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-text-primary mb-3 [text-shadow:0_2px_24px_rgba(0,0,0,0.6)]">
          {profile.name}
        </h1>

        <p className="blur-in text-base md:text-lg text-text-primary/90 mb-6">
          a{" "}
          <span
            key={roleIndex}
            className="font-display italic text-text-primary animate-role-fade-in inline-block"
          >
            {profile.roles[roleIndex]}
          </span>{" "}
          {profile.roleSuffix}.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: EASE }}
          className="relative mb-6"
        >
          <div className="relative w-[150px] sm:w-[168px] lg:w-[182px]">
            <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle_at_50%_42%,rgba(120,170,220,0.22),transparent_68%)] blur-2xl pointer-events-none" />
            <div className="absolute left-1/2 top-[34%] -translate-x-1/2 w-24 h-24 rounded-full bg-[#9bb87a]/25 blur-3xl pointer-events-none" />
            <motion.img
              src="/phone-cat.png"
              alt="Rudransh's Nokia showing a pixel-cat"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-auto drop-shadow-[0_18px_40px_rgba(0,0,0,0.7)]"
            />
          </div>
        </motion.div>

        <p className="blur-in text-sm md:text-base text-muted leading-relaxed max-w-lg mb-7">
          {profile.description}
        </p>

        <div className="blur-in inline-flex gap-4">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative rounded-full text-sm transition-transform duration-300 hover:scale-105"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient" />
            <span className="relative inline-flex items-center rounded-full bg-white text-bg px-6 py-3">
              peep the work
            </span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center rounded-full border border-stroke bg-bg/50 px-6 py-3 text-sm text-text-primary backdrop-blur-sm transition-colors duration-300 hover:border-white/30"
          >
            hit me up
          </a>
        </div>

        <div className="blur-in absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.35em] text-muted">scroll</span>
          <span className="relative h-8 w-px overflow-hidden bg-stroke">
            <span className="absolute inset-x-0 h-3 bg-text-primary animate-scroll-down" />
          </span>
        </div>
      </div>
    </section>
  );
}
