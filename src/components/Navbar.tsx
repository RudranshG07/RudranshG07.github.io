import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";

const LINKS = [
  { label: "Home", target: "hero" },
  { label: "Work", target: "work" },
  { label: "Resume", target: "contact" },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = LINKS.map((l) => l.target);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <nav
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${
          scrolled ? "shadow-md shadow-black/10" : ""
        }`}
      >
        <button
          onClick={() => scrollToId("hero")}
          className="group relative w-9 h-9 rounded-full p-[1.5px] accent-gradient transition-transform duration-300 hover:scale-110"
          aria-label="Home"
        >
          <span className="flex items-center justify-center w-full h-full rounded-full bg-bg font-display italic text-[13px] text-text-primary transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
            {profile.initials}
          </span>
        </button>

        <span className="hidden sm:block w-px h-5 bg-stroke mx-1" />

        {LINKS.map((link) => (
          <button
            key={link.label}
            onClick={() => scrollToId(link.target)}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-200 ${
              active === link.target
                ? "text-text-primary bg-stroke/50"
                : "text-muted hover:text-text-primary hover:bg-stroke/50"
            }`}
          >
            {link.label}
          </button>
        ))}

        <span className="hidden sm:block w-px h-5 bg-stroke mx-1" />

        <a href={`mailto:${profile.email}`} className="group relative text-xs sm:text-sm rounded-full">
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative inline-flex items-center gap-1 rounded-full bg-surface backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary">
            Say hi <span aria-hidden>↗</span>
          </span>
        </a>
      </nav>
    </header>
  );
}
