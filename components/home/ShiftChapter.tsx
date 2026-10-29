import Image from "next/image";
import Link from "next/link";
import { SHIFT_MODULES } from "@/lib/content";
export default function ShiftChapter() {
  return (
    <section className="bg-obsidian border-t hair">
      <div className="mx-auto max-w-[1400px] px-5 py-32 md:px-8 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
          <p className="mono text-mint">● Flagship product</p>
          <h2 className="serif mt-6 text-[clamp(64px,9vw,150px)] leading-[0.85] text-paper">Shift<span className="text-mint">.</span></h2>
          <p className="mt-6 max-w-sm text-mist/60">The delivery and logistics platform for cement and steel dispatch — three tightly coupled systems in one typed stack.</p>
          <Link href="/shift" className="mono mt-8 inline-block border-b border-mint pb-1 text-mint">Read the full spec →</Link>
        </div>
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[8px] border hair"><Image src="/shift_preview.png" alt="Shift platform preview" fill sizes="60vw" className="object-cover" /></div>
          <ol className="mt-4">{SHIFT_MODULES.map((m) => (
            <li key={m.k} className="group grid grid-cols-[48px_1fr] md:grid-cols-[64px_1fr_180px] gap-4 border-b hair py-7">
              <span className="mono text-mist/30 pt-1">{m.k}</span>
              <div><h3 className="text-xl font-semibold text-paper group-hover:text-mint transition-colors">{m.t}</h3><p className="mt-2 text-[15px] leading-relaxed text-mist/60">{m.d}</p></div>
              <span className="mono hidden md:block text-right text-mist/40 pt-1">{m.s}</span>
            </li>))}</ol>
        </div>
      </div>
    </section>
  );
}
