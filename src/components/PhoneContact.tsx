import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

const MESSAGES = ["Open to work", "Let's build", "Say hi ↗"];

export default function PhoneContact() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = MESSAGES[idx];

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIdx((i) => (i + 1) % MESSAGES.length);
      return;
    }
    const t = setTimeout(
      () => {
        setText((p) =>
          deleting ? current.slice(0, p.length - 1) : current.slice(0, p.length + 1)
        );
      },
      deleting ? 50 : 110
    );
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <a
      href={`mailto:${profile.email}`}
      aria-label="Email me"
      className="group relative block w-[230px] sm:w-[270px] mx-auto"
    >
      {/* soft glow behind the device */}
      <div className="absolute -inset-10 rounded-full bg-[#9bb87a]/10 blur-3xl pointer-events-none" />

      <img
        src="/phone.png"
        alt="Retro phone, tap to email"
        className="relative w-full h-auto transition-transform duration-500 group-hover:-translate-y-1.5"
      />

      {/* typed message on the green screen */}
      <div className="absolute left-[27%] top-[33%] w-[48%] text-left pointer-events-none">
        <p className="font-nokia text-[#2A3616] text-[11px] sm:text-[13px] leading-tight break-words min-h-[1.5em]">
          {text}
          <motion.span
            className="inline-block w-1 h-3 bg-[#2A3616] ml-0.5 align-middle"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          />
        </p>
      </div>
    </a>
  );
}
