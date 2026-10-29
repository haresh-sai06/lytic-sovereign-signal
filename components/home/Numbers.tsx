"use client";
import { useEffect, useRef, useState } from "react";
const CH = "0123456789<>/#%";
function Scramble({ v }: { v: string }) {
  const ref = useRef<HTMLSpanElement>(null); const [o, setO] = useState(v);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0; const io = new IntersectionObserver(([e]) => { if (!e.isIntersecting) return; io.disconnect(); const t0 = performance.now();
      const step = (t: number) => { const p = Math.min(1, (t - t0) / 1100); setO(v.split("").map((c, i) => (i / v.length < p || c === " " ? c : CH[(Math.random() * CH.length) | 0])).join("")); if (p < 1) raf = requestAnimationFrame(step); };
      raf = requestAnimationFrame(step); }, { threshold: 0.6 });
    io.observe(ref.current!); return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [v]);
  return <span ref={ref} className="tabular-nums">{o}</span>;
}
const N = [["<50", "ms", "API response target"], ["100", "%", "Shift execution offline"], [".NET 10", "", "Driver client runtime"], ["10–15", "", "Android versions"], ["2023", "", "Founded · 17 Feb"]];
export default function Numbers() {
  return (
    <section className="bg-obsidian">
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-8">
        <p className="mono mb-12 text-mist/40">§ 04 — Measured, not marketed</p>
        <div className="grid grid-cols-2 lg:grid-cols-5 border-t hair">
          {N.map(([a, u, l], i) => (
            <div key={l} className={`border-b hair py-10 pr-6 ${i < 4 ? "lg:border-r" : ""} lg:pl-6 first:lg:pl-0`}>
              <div className="serif text-[clamp(48px,5vw,84px)] leading-none text-paper"><Scramble v={a} /><span className="text-mint text-[0.45em] ml-1">{u}</span></div>
              <p className="mono mt-5 text-mist/50">{l}</p>
            </div>))}
        </div>
      </div>
    </section>
  );
}
