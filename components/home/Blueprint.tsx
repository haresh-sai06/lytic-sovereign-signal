"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);
const NODES = [
  { id: "drv", x: 120, y: 200, t: "Driver Client", s: [".NET 10 MAUI", "Android 10+", "SQLite offline", "Camera POD"] },
  { id: "api", x: 500, y: 200, t: "Web API", s: ["ASP.NET Core 9", "AWS EC2 · Ubuntu 24.04", "systemd · NGINX SSL", "TLS 1.3"] },
  { id: "db", x: 880, y: 90, t: "Database", s: ["SQL Server / PostgreSQL", "Isolated AWS env", "Restricted security groups"] },
  { id: "erp", x: 880, y: 310, t: "Web ERP", s: ["Fleet ledger", "Ton ↔ bag slips", "WhatsApp + PDF letterhead"] },
];
const BEAMS = ["M190 200 H430", "M570 190 C 700 190 700 90 810 90", "M570 210 C 700 210 700 310 810 310"];
export default function Blueprint() {
  const ref = useRef<HTMLElement>(null); const [a, setA] = useState("api");
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.utils.toArray<SVGPathElement>(".beam").forEach((p, i) => { const l = p.getTotalLength(); gsap.fromTo(p, { strokeDasharray: l, strokeDashoffset: l }, { strokeDashoffset: 0, duration: 1.2, delay: i * 0.25, ease: "power3.out", scrollTrigger: { trigger: ".bp", start: "top 70%" } }); });
    gsap.from(".bnode", { opacity: 0, y: 16, stagger: 0.12, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".bp", start: "top 70%" } });
  }, { scope: ref });
  const node = NODES.find((n) => n.id === a)!;
  return (
    <section id="architecture" ref={ref} className="blueprint text-obsidian">
      <div className="mx-auto max-w-[1400px] px-5 py-32 md:px-8">
        <div className="mb-16 flex items-center justify-between border-b hair-d pb-4 mono text-obsidian/50"><span>§ 03 — Architecture</span><span>DWG · SHIFT-001 · REV 2026</span></div>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="serif text-[clamp(44px,5.5vw,88px)] leading-[0.92]">Your cloud.<br />Your data.<br /><em>Our engineering.</em></h2>
            <p className="mt-8 max-w-sm text-obsidian/60">Every enterprise deployment runs on dedicated infrastructure under full client ownership. Hover a node to read its specification.</p>
            <div className="mt-10 border hair-d bg-paper/80 p-6 font-mono text-[12px]">
              <div className="flex justify-between text-obsidian/40"><span>SPEC · {node.id.toUpperCase()}</span><span>●</span></div>
              <div className="mt-3 text-lg font-sans font-semibold">{node.t}</div>
              <ul className="mt-3 space-y-1">{node.s.map((s) => <li key={s} className="flex gap-3"><span className="text-mint">+</span>{s}</li>)}</ul>
            </div>
          </div>
          <div className="bp lg:col-span-8">
            <svg viewBox="0 0 1000 400" className="w-full overflow-visible">
              <defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10" fill="none" stroke="#050505" /></marker></defs>
              {BEAMS.map((d, i) => <g key={i}><path d={d} stroke="rgba(5,5,5,.15)" strokeDasharray="3 5" fill="none" />
                <path className="beam" d={d} stroke="#050505" strokeWidth="1.2" fill="none" markerEnd="url(#ar)" />
                <circle r="4" fill="#10D9A0"><animateMotion dur={`${2 + i * 0.4}s`} repeatCount="indefinite" path={d} /></circle></g>)}
              {NODES.map((n) => (
                <g key={n.id} className="bnode cursor-pointer" onMouseEnter={() => setA(n.id)} onFocus={() => setA(n.id)} tabIndex={0}>
                  <rect x={n.x - 70} y={n.y - 38} width="140" height="76" fill={a === n.id ? "#050505" : "#F3F1EC"} stroke="#050505" />
                  <text x={n.x} y={n.y - 4} textAnchor="middle" className="font-sans" fontSize="15" fontWeight="600" fill={a === n.id ? "#F3F1EC" : "#050505"}>{n.t}</text>
                  <text x={n.x} y={n.y + 18} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill={a === n.id ? "#10D9A0" : "rgba(5,5,5,.5)"}>{n.s[0]}</text>
                  <path d={`M${n.x - 78} ${n.y - 46} h10 M${n.x - 78} ${n.y - 46} v10 M${n.x + 78} ${n.y + 46} h-10 M${n.x + 78} ${n.y + 46} v-10`} stroke="#050505" />
                </g>))}
              <text x="310" y="188" fontFamily="var(--font-mono)" fontSize="10" fill="rgba(5,5,5,.5)">TLS 1.3 · SYNC</text>
              <text x="40" y="380" fontFamily="var(--font-mono)" fontSize="10" fill="rgba(5,5,5,.4)">SCALE 1:1 · ALL UNITS SOVEREIGN</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
