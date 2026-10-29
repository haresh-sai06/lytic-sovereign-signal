"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);
const TEXT = "Enterprise software should keep its data where it belongs. We build logistics systems that run on clouds our clients own, keep working when the network drops, and are engineered in strict C# and .NET — so every dispatch, every tonne and every signature stays sovereign.";
const PILLARS = [["i", "Client-Owned Clouds", "Dedicated AWS servers provisioned under full client ownership, with export sovereignty."], ["ii", "Offline-First Mobile", "SQLite on the device. Routes continue through rural dead zones and sync on reconnection."], ["iii", "Strict C# & .NET 10", "One typed stack from the driver's phone to the ERP ledger."]];
export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(".mw", { opacity: 0.12 }, { opacity: 1, stagger: 0.05, ease: "none", scrollTrigger: { trigger: ".mtext", start: "top 80%", end: "bottom 45%", scrub: true } });
  }, { scope: ref });
  return (
    <section ref={ref} className="bg-paper text-obsidian">
      <div className="mx-auto max-w-[1400px] px-5 py-32 md:px-8 md:py-44">
        <div className="mb-16 flex items-center justify-between border-b hair-d pb-4 mono text-obsidian/50"><span>§ 01 — Manifesto</span><span>Ideas • Technology • Impact</span></div>
        <p className="mtext serif text-[clamp(34px,4.6vw,72px)] leading-[1.04]">
          {TEXT.split(" ").map((w, i) => <span key={i} className="mw">{w === "sovereign." ? <em>{w}</em> : w} </span>)}
        </p>
        <div className="mt-24 grid gap-0 md:grid-cols-3 border-t hair-d">
          {PILLARS.map(([n, t, d]) => (
            <div key={n} className="border-b md:border-b-0 md:border-r last:border-r-0 hair-d py-8 md:px-8 first:md:pl-0">
              <sup className="mono text-obsidian/40">[{n}]</sup>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{t}</h3>
              <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-obsidian/60">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
