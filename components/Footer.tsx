import Link from "next/link";
import Logo from "./Logo";
import Magnetic from "./Magnetic";
import { CONTACT, IDS } from "@/lib/content";
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-obsidian text-mist border-t hair">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 pt-28 pb-10">
        <p className="mono text-mint mb-8">● CHANNEL OPEN · 11 / 11</p>
        <h2 className="serif text-[clamp(56px,11vw,180px)] leading-[0.88] text-paper">Initiate an<br /><em className="text-mint">engagement.</em></h2>
        <div className="relative my-14 h-10">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden>
            <path d="M0 20 H940" stroke="#10D9A0" strokeWidth="1" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" />
          </svg>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 mono text-mint"><span className="h-2.5 w-2.5 rounded-full bg-mint pulse-dot" />KRISHNAGIRI</span>
        </div>
        <div className="grid gap-10 md:grid-cols-12 border-t hair pt-10">
          <div className="md:col-span-5 space-y-5">
            <Magnetic href="/contact">Schedule Executive Briefing</Magnetic>
            <div className="flex flex-col gap-1 pt-4 text-lg">
              <a className="hover:text-mint transition-colors" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              <a className="hover:text-mint transition-colors" href={CONTACT.wa}>{CONTACT.phone} <span className="mono text-mist/40">WhatsApp</span></a>
            </div>
          </div>
          <div className="md:col-span-3"><p className="mono text-mist/40 mb-3">Registered</p><p className="text-sm leading-relaxed">{CONTACT.address}<br />India</p></div>
          <div className="md:col-span-2"><p className="mono text-mist/40 mb-3">Index</p>
            <ul className="space-y-1.5 text-sm">{[["/shift","Shift"],["/company","Company"],["/contact","Contact"],["/privacy","Privacy"],["/terms","Terms"]].map(([h,l])=><li key={h}><Link className="hover:text-mint" href={h}>{l}</Link></li>)}</ul></div>
          <div className="md:col-span-2"><p className="mono text-mist/40 mb-3">Verified</p><p className="font-mono text-[11px] leading-6 text-mist/70">{IDS.udyam}<br />D-U-N-S {IDS.duns}</p></div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t hair pt-6 text-mist/40">
          <Logo /><span className="mono">Ideas • Technology • Impact</span><span className="mono">© {new Date().getFullYear()} LYTIC Technologies · Est. {IDS.founded}</span>
        </div>
      </div>
    </footer>
  );
}
