import { CONTACT, IDS } from "@/lib/content";
export default function Legal({ label, sections }: { label: string; sections: { t: string; p: (string | [string, string])[] }[] }) {
  return (
    <section className="bg-paper text-obsidian">
      <div className="mx-auto max-w-[1000px] px-5 py-24 md:px-8">
        <p className="mono text-obsidian/50 border-b hair-d pb-4">{label} · Effective October 24, 2026 · {IDS.udyam}</p>
        {sections.map((s, i) => (
          <div key={s.t} className="grid md:grid-cols-[80px_1fr] gap-4 border-b hair-d py-12">
            <span className="mono text-obsidian/40">{String(i + 1).padStart(2, "0")}</span>
            <div><h2 className="serif text-4xl">{s.t}</h2>
              <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-obsidian/70">{s.p.map((x, j) => typeof x === "string" ? <p key={j}>{x}</p> : <p key={j}><strong className="text-obsidian">{x[0]}.</strong> {x[1]}</p>)}</div></div>
          </div>))}
        <div className="grid md:grid-cols-3 gap-6 pt-12 font-mono text-[12px] text-obsidian/70">
          <div><p className="text-obsidian/40">ENTITY</p>LYTIC · Ideas • Technology • Impact</div>
          <div><p className="text-obsidian/40">REGISTRATION</p>{IDS.udyam}<br />Ministry of MSME Verified</div>
          <div><p className="text-obsidian/40">CONTACT</p>{CONTACT.email}<br />{CONTACT.phone}<br />Krishnagiri, Tamil Nadu 635112</div>
        </div>
      </div>
    </section>
  );
}
