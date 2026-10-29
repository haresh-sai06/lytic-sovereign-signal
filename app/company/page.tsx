import PageHead from "@/components/page/PageHead";
import Team from "@/components/home/Team";
import Credentials from "@/components/home/Credentials";
import { CONTACT, IDS } from "@/lib/content";
export const metadata = { title: "Company — LYTIC" };
const TL = [["17 Feb 2023", "LYTIC founded", "Incorporated in Nadu Paiyur, Krishnagiri, Tamil Nadu."], ["MSME", "Government registration", `Ministry of MSME Udyam registration ${IDS.udyam}.`], ["D-U-N-S", "Global identity", `Dun & Bradstreet number ${IDS.duns}.`], ["Shift", "Flagship platform", "Driver app, web API and ERP dispatch for cement and steel logistics."], ["School ERP", "Second product", "Applying the same engineering to school administration."]];
export default function Company() {
  return (<>
    <PageHead k="LYTIC Technologies" title={<>Ideas. Technology. <em className="text-mint">Impact.</em></>} sub={`An engineering company from Krishnagiri, building sovereign enterprise software since ${IDS.founded}.`} />
    <section className="bg-paper text-obsidian"><div className="mx-auto max-w-[1400px] px-5 py-28 md:px-8 grid gap-12 lg:grid-cols-12">
      <h2 className="serif lg:col-span-4 text-6xl leading-[0.95]">Trajectory<em>.</em></h2>
      <ol className="lg:col-span-8 relative border-l border-obsidian/15 pl-10">{TL.map(([d, t, p]) => <li key={t} className="relative pb-14 last:pb-0"><span className="absolute -left-[45px] top-1.5 h-2.5 w-2.5 rounded-full bg-mint ring-4 ring-paper" /><p className="mono text-obsidian/40">{d}</p><h3 className="mt-2 text-2xl font-semibold">{t}</h3><p className="mt-2 text-obsidian/60">{p}</p></li>)}</ol>
    </div></section>
    <Team /><Credentials />
    <section className="bg-obsidian"><div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 mono text-mist/50">Registered office · {CONTACT.address}</div></section>
  </>);
}
