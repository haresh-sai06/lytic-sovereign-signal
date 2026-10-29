"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
const L = [["/shift", "Shift"], ["/#architecture", "Architecture"], ["/company", "Company"], ["/contact", "Contact"]];
export default function Nav() {
  const p = usePathname(); const [s, setS] = useState(false); const [t, setT] = useState("");
  useEffect(() => { const f = () => setS(window.scrollY > 40); f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  useEffect(() => { const f = () => setT(new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit" })); f(); const i = setInterval(f, 15000); return () => clearInterval(i); }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out-expo ${s ? "py-3" : "py-5"}`}>
      <div className={`mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-8`}>
        <Link href="/" className={`rounded-full px-4 py-2 text-mist transition-colors ${s ? "bg-carbon/80 backdrop-blur-md border border-white/10" : ""}`}><Logo /></Link>
        <nav className={`hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-carbon/70 px-2 py-1.5 backdrop-blur-md`}>
          {L.map(([h, l]) => (
            <Link key={h} href={h} className={`rounded-full px-4 py-1.5 text-[13px] transition-colors ${p === h ? "bg-white/10 text-white" : "text-mist/70 hover:text-white"}`}>{l}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <span className="mono hidden lg:inline text-mist/50">KRISHNAGIRI · {t} IST</span>
          <Link href="/contact" className="rounded-full bg-paper px-4 py-2 text-[13px] font-semibold text-obsidian hover:bg-mint transition-colors">Schedule Briefing</Link>
        </div>
      </div>
    </header>
  );
}
