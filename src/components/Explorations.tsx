import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillGroups, type SkillGroup } from "../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const ROTATIONS = [-4, 3, -2, 5, -3, 2];

export default function Explorations() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const colARef = useRef<HTMLDivElement>(null);
  const colBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

      gsap.fromTo(
        colARef.current,
        { yPercent: 8 },
        {
          yPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        colBRef.current,
        { yPercent: -12 },
        {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const colA = skillGroups.slice(0, 3);
  const colB = skillGroups.slice(3, 6);

  return (
    <section ref={sectionRef} id="explorations" className="relative min-h-[300vh] bg-bg">
      <div
        ref={contentRef}
        className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-6 pointer-events-none"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">Toolkit</span>
          <span className="w-8 h-px bg-stroke" />
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl text-text-primary tracking-tight mb-4">
          Stack &amp; <span className="font-display italic">specialties</span>
        </h2>
        <p className="text-sm md:text-base text-muted max-w-md mb-8">
          the languages, deployment stack, and protocol tools i use to ship reliable products.
        </p>
        <a
          href="https://github.com/RudranshG07"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-full text-sm pointer-events-auto"
        >
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-stroke bg-bg text-text-primary transition-colors duration-300 group-hover:border-transparent">
            See GitHub <span aria-hidden>↗</span>
          </span>
        </a>
      </div>

      <div className="absolute inset-0 z-20 flex justify-center pointer-events-none">
        <div className="w-full max-w-[1400px] px-6 grid grid-cols-2 gap-12 md:gap-40">
          <div ref={colARef} className="flex flex-col gap-12 md:gap-24 pt-[40vh]">
            {colA.map((g, i) => (
              <SkillCard key={g.title} group={g} index={i} rotate={ROTATIONS[i]} />
            ))}
          </div>
          <div ref={colBRef} className="flex flex-col gap-12 md:gap-24 pt-[70vh]">
            {colB.map((g, i) => (
              <SkillCard key={g.title} group={g} index={i + 3} rotate={ROTATIONS[i + 3]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ group, index, rotate }: { group: SkillGroup; index: number; rotate: number }) {
  return (
    <div
      style={{ rotate: `${rotate}deg` }}
      className="group pointer-events-auto relative aspect-square w-full max-w-[320px] mx-auto overflow-hidden rounded-2xl border border-stroke bg-surface transition-all duration-500 hover:!rotate-0 hover:scale-[1.03] hover:border-white/20"
    >
      <img
        src={group.image}
        alt=""
        loading="lazy"
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div
        className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/45 transition-colors duration-500 group-hover:via-bg/75" />

      <div className="relative z-10 h-full p-6 md:p-7 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="text-xs text-muted tabular-nums">{String(index + 1).padStart(2, "0")}</span>
          <span className="w-2 h-2 rounded-full accent-gradient opacity-80" />
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-display italic text-text-primary mb-4">{group.title}</h3>
          <div className="flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <span
                key={item.name}
                className={`inline-flex items-center gap-1.5 text-[11px] md:text-xs text-text-primary border border-white/15 bg-bg/40 backdrop-blur-sm rounded-full py-1 transition-colors duration-300 group-hover:border-white/25 ${
                  item.slug ? "pl-1 pr-2.5" : "px-2.5"
                }`}
              >
                {item.slug && (
                  <span className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-white">
                    <img
                      src={`https://cdn.simpleicons.org/${item.slug}`}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      className="w-3 h-3"
                    />
                  </span>
                )}
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
