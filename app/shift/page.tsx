import Image from "next/image";
import PageHead from "@/components/page/PageHead";
import RouteStoryboard from "@/components/home/RouteStoryboard";
import { SHIFT_MODULES } from "@/lib/content";
export const metadata = { title: "Shift — LYTIC" };
const SPEC = [["Driver client", ".NET 10 MAUI · Android 10+"], ["Offline storage", "SQLite on device, sync on reconnection"], ["Proof of delivery", "Camera capture per stop"], ["API", "ASP.NET Core 9"], ["Hosting", "AWS EC2 · Ubuntu 24.04 · systemd · NGINX SSL"], ["Database", "SQL Server / PostgreSQL"], ["Transport security", "TLS 1.3"], ["Response target", "Sub-50ms"], ["Outputs", "WhatsApp slips · PDF letterhead · fleet ledger"], ["Materials", "Cement & steel · ton ↔ bag recalculation"]];
const FAQ = [["Does Shift work without network?", "Yes. The driver client is offline-first: route execution continues and events queue in on-device SQLite, syncing to the API when the network returns."], ["Who owns the servers and data?", "Under our Infrastructure Sovereignty commitment, client databases, freight records and dedicated AWS servers are held under complete client ownership with full export sovereignty."], ["What does LYTIC do with driver data?", "It is used exclusively for platform execution. LYTIC does not sell, lease or monetize data and runs no ad networks or data-broker trackers."]];
export default function Shift() {
  return (<>
    <PageHead k="Flagship product" title={<>Shift<span className="text-mint">.</span> Dispatch that keeps moving.</>} sub="The delivery and logistics platform for cement and steel — driver app, high-throughput API and web ERP in one strict C# / .NET stack." />
    <section className="bg-obsidian"><div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8"><div className="relative aspect-[16/8] overflow-hidden rounded-[8px] border hair"><Image src="/shift_preview.png" alt="Shift preview" fill className="object-cover" sizes="100vw" priority /></div></div></section>
    <section className="bg-paper text-obsidian"><div className="mx-auto max-w-[1400px] px-5 py-28 md:px-8 grid md:grid-cols-3 border-t hair-d">
      {SHIFT_MODULES.map((m) => <div key={m.k} className="border-b md:border-b-0 md:border-r last:border-r-0 hair-d py-10 md:px-8 first:md:pl-0"><span className="mono text-obsidian/40">{m.k} · {m.s}</span><h2 className="serif mt-5 text-4xl">{m.t}</h2><p className="mt-4 text-obsidian/60 leading-relaxed">{m.d}</p></div>)}
    </div></section>
    <RouteStoryboard />
    <section className="blueprint text-obsidian"><div className="mx-auto max-w-[1400px] px-5 py-28 md:px-8 grid gap-12 lg:grid-cols-12">
      <h2 className="serif lg:col-span-4 text-6xl leading-[0.95]">Specification<br /><em>sheet.</em></h2>
      <dl className="lg:col-span-8 border-t hair-d font-mono text-[13px]">{SPEC.map(([k, v]) => <div key={k} className="grid grid-cols-[180px_1fr] border-b hair-d py-4 bg-paper/60"><dt className="uppercase text-obsidian/40 px-3">{k}</dt><dd>{v}</dd></div>)}</dl>
    </div></section>
    <section className="bg-obsidian"><div className="mx-auto max-w-[1000px] px-5 py-28 md:px-8"><p className="mono text-mist/40 mb-8">FAQ</p>
      {FAQ.map(([q, a]) => <details key={q} className="group border-b hair py-6"><summary className="flex cursor-pointer list-none justify-between text-xl text-paper">{q}<span className="text-mint transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 max-w-2xl text-mist/60">{a}</p></details>)}
    </div></section>
  </>);
}
