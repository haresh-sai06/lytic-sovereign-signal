"use client";
import { motion, useMotionValue, useSpring } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
export default function Magnetic({ href, children, variant = "solid" }: { href: string; children: React.ReactNode; variant?: "solid" | "ghost" | "dark" }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 });
  const cls = { solid: "bg-mint text-obsidian", ghost: "border border-white/15 text-mist hover:border-mint/60", dark: "bg-obsidian text-paper" }[variant];
  return (
    <motion.span style={{ x, y }} className="inline-block"
      onMouseMove={(e) => { const r = ref.current!.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * 0.3); y.set((e.clientY - r.top - r.height / 2) * 0.4); }}
      onMouseLeave={() => { x.set(0); y.set(0); }}>
      <Link ref={ref} href={href} className={`group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${cls}`}>
        {children}<span className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1">→</span>
      </Link>
    </motion.span>
  );
}
