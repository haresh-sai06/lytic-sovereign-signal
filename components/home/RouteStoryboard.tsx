"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

type Mode = "live" | "offline" | "sync";
const Frame = ({ children, tone = "mint" }: { children: React.ReactNode; tone?: "mint" | "amber" }) => (
  <div className={`relative rounded-[20px] border bg-carbon p-5 font-mono text-[12px] leading-6 ${tone === "amber" ? "border-amber/40" : "border-white/10"}`}>{children}</div>
);
function ERPSlip() {
  return <Frame><div className="flex justify-between text-mist/40"><span>DISPATCH SLIP · ERP</span><span>SAMPLE</span></div>
    <div className="mt-4 grid grid-cols-2 gap-y-1 text-mist/80"><span className="text-mist/40">Material</span><span>Cement · 50 kg bag</span><span className="text-mist/40">Quantity</span><span>10.00 t</span><span className="text-mist/40">Recalculated</span><span className="text-mint">200 bags</span><span className="text-mist/40">Vehicle</span><span>TN-24 · ••••</span></div>
    <div className="mt-4 h-px bg-white/10" /><div className="mt-3 text-mist/40">PDF letterhead ▸ ready</div></Frame>;
}
function WhatsApp() {
  return <Frame><div className="text-mist/40">WHATSAPP · FORMATTED SLIP</div>
    <div className="mt-4 ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#0f2e25] p-4 text-mist/90 font-sans text-[13px] leading-6">*LYTIC Dispatch*<br />Material: Cement<br />Qty: 10 t (200 bags)<br />Vehicle: TN-24 ••••<br />Route: 4 stops<span className="block text-right mono text-[10px] text-mint/70">✓✓ delivered</span></div></Frame>;
}
function Phone({ mode, queue }: { mode: Mode; queue: number }) {
  const amber = mode === "offline";
  return (
    <div className={`mx-auto w-[240px] rounded-[34px] border p-3 transition-colors duration-500 ${amber ? "border-amber/50 bg-[#1a1405]" : "border-white/15 bg-graphite"}`}>
      <div className="rounded-[24px] bg-obsidian p-4 font-mono text-[11px] text-mist/80">
        <div className="flex items-center justify-between"><span>SHIFT · DRIVER</span>
          <span className={`flex items-center gap-1.5 ${amber ? "text-amber" : "text-mint"}`}><span className={`h-1.5 w-1.5 rounded-full ${amber ? "bg-amber" : "bg-mint pulse-dot"}`} />{amber ? "OFFLINE" : mode === "sync" ? "SYNCED" : "ONLINE"}</span></div>
        <div className="mt-5 space-y-3">{["Plant gate", "Stop 02", "Stop 03", "Site POD"].map((s, i) => (
          <div key={s} className="flex items-center gap-3"><span className={`h-3 w-3 rounded-full border ${i < 2 ? "border-mint bg-mint" : amber && i === 2 ? "border-amber" : "border-white/30"}`} /><span>{s}</span></div>))}
        </div>
        <div className={`mt-6 rounded-lg border p-3 ${amber ? "border-amber/40 text-amber" : "border-white/10 text-mist/50"}`}>
          SQLITE QUEUE <span className="float-right tabular-nums">{String(queue).padStart(2, "0")}</span></div>
      </div>
    </div>
  );
}
function POD() {
  return <Frame><div className="flex justify-between text-mist/40"><span>PROOF OF DELIVERY</span><span className="text-mint">● CAPTURED</span></div>
    <div className="pod-flash mt-4 aspect-[4/3] rounded-lg border border-white/10 bg-[repeating-linear-gradient(135deg,#1A1C1E_0_10px,#151719_10px_20px)] flex items-end p-3 text-mist/50">IMG · offload confirmed</div>
    <div className="mt-4 flex justify-between"><span className="text-mist/40">Fleet ledger</span><span className="text-mint">CLOSED ✓</span></div></Frame>;
}

const STOPS = [
  { n: "01", t: "Order enters the ERP", d: "Dispatch supervisors raise a cement or steel order. Shift recalculates tons to bags automatically and renders the slip on letterhead.", v: () => <ERPSlip /> },
  { n: "02", t: "Slip goes to WhatsApp", d: "The slip is formatted for WhatsApp with vehicle registration and tonnage — no retyping, no transcription errors.", v: () => <WhatsApp /> },
  { n: "03", t: "Driver starts the shift", d: "The .NET MAUI driver client on Android 10+ walks the route stop by stop.", v: (m: Mode, q: number) => <Phone mode={m} queue={q} /> },
  { n: "04", t: "The network drops", d: "Rural zones go dark. Shift keeps executing: every event queues to SQLite on the device, then syncs to the API on reconnection.", v: (m: Mode, q: number) => <Phone mode={m} queue={q} />, off: true },
  { n: "05", t: "Proof, then the ledger closes", d: "Camera POD confirms the offload. The fleet ledger and driver earnings update centrally.", v: () => <POD /> },
];

export default function RouteStoryboard() {
  const ref = useRef<HTMLElement>(null);
  const [mode, setMode] = useState<Mode>("live");
  const [queue, setQueue] = useState(0);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
      const track = ref.current!.querySelector<HTMLElement>(".track")!;
      const path = ref.current!.querySelector<SVGPathElement>(".route")!;
      const len = path.getTotalLength(); gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      const dist = () => track.scrollWidth - window.innerWidth;
      const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, pin: true, scrub: 0.8, start: "top top", end: () => "+=" + dist() * 1.2, invalidateOnRefresh: true,
        onUpdate: (s) => { const p = s.progress; const m: Mode = p > 0.56 && p < 0.76 ? "offline" : p >= 0.76 ? "sync" : "live"; setMode(m); setQueue(m === "offline" ? Math.round((p - 0.56) / 0.2 * 14) : m === "sync" ? 0 : 0);
          ref.current!.querySelector<HTMLElement>(".bar")!.style.transform = `scaleX(${p})`; } } });
      tl.to(track, { x: () => -dist(), ease: "none" }, 0).to(path, { strokeDashoffset: 0, ease: "none" }, 0);
    });
  }, { scope: ref });
  const off = mode === "offline";
  return (
    <section id="route" ref={ref} className={`relative overflow-hidden transition-colors duration-700 ${off ? "bg-[#0d0a03]" : "bg-obsidian"}`}>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 md:px-8 pt-24 mono">
        <span className="text-mist/40">§ 02 — Shift route storyboard</span>
        <span className={off ? "text-amber" : "text-mint"}>{off ? `▲ OFFLINE · ${queue} EVENTS QUEUED` : mode === "sync" ? "● SYNC COMPLETE" : "● LIVE ROUTE"}</span>
      </div>
      <div className="absolute inset-x-5 md:inset-x-8 bottom-10 z-10 h-px bg-white/10"><div className={`bar h-px origin-left scale-x-0 ${off ? "bg-amber" : "bg-mint"}`} /></div>
      <div className="track relative flex min-h-[100svh] w-max flex-col md:flex-row items-stretch">
        <svg className="pointer-events-none absolute left-0 top-[20%] hidden h-24 w-full md:block" viewBox="0 0 5000 100" preserveAspectRatio="none" aria-hidden>
          <path d="M0 50 H400 C 700 50 700 10 1000 10 S 1300 90 1600 90 H2400 C2700 90 2700 30 3000 30 H3800 C4100 30 4200 60 5000 60" stroke="rgba(255,255,255,.08)" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          <path className="route" d="M0 50 H400 C 700 50 700 10 1000 10 S 1300 90 1600 90 H2400 C2700 90 2700 30 3000 30 H3800 C4100 30 4200 60 5000 60" stroke={off ? "#FFB020" : "#10D9A0"} strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
        </svg>
        <div className="flex w-screen md:w-[60vw] shrink-0 flex-col justify-center px-5 md:px-16 pt-40 pb-16">
          <h2 className="serif text-[clamp(48px,7vw,112px)] leading-[0.9] text-paper">Watch one<br />dispatch <em className="text-mint">travel.</em></h2>
          <p className="mt-8 max-w-md text-mist/60">Five stops, one route line — from an ERP order to a closed ledger, including the moment the signal disappears.</p>
        </div>
        {STOPS.map((s) => (
          <article key={s.n} className="flex w-screen md:w-[78vw] lg:w-[64vw] shrink-0 items-center px-5 md:px-12 py-16 md:py-0">
            <div className="grid w-full items-center gap-10 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-4"><span className={`flex h-10 w-10 items-center justify-center rounded-full border mono ${s.off && off ? "border-amber text-amber" : "border-mint/50 text-mint"}`}>{s.n}</span><span className="h-px w-16 bg-white/15" /></div>
                <h3 className="serif mt-8 text-[clamp(36px,4vw,64px)] leading-[0.95] text-paper">{s.t}</h3>
                <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-mist/60">{s.d}</p>
              </div>
              <div className={s.off && mode === "sync" ? "animate-[burst_0.8s_ease-out]" : ""}>{s.v(s.off ? mode : "live", s.off ? queue : 0)}</div>
            </div>
          </article>
        ))}
      </div>
      <style>{`@keyframes burst{0%{filter:drop-shadow(0 0 0 #10D9A0)}40%{filter:drop-shadow(0 0 40px #10D9A0)}100%{filter:none}}`}</style>
    </section>
  );
}
