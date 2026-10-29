import PageHead from "@/components/page/PageHead";
import ContactForm from "./ContactForm";
import { CONTACT } from "@/lib/content";
export const metadata = { title: "Contact — LYTIC" };
export default function Contact() {
  return (<>
    <PageHead k="Channel open" title={<>Schedule an executive <em className="text-mint">briefing.</em></>} sub="Tell us about your fleet and dispatch flow. We respond from Krishnagiri, IST." />
    <section className="bg-paper text-obsidian"><div className="mx-auto max-w-[1400px] px-5 py-28 md:px-8 grid gap-16 lg:grid-cols-12">
      <div className="lg:col-span-7"><ContactForm /></div>
      <aside className="lg:col-span-5 space-y-10">
        {[["Email", CONTACT.email, `mailto:${CONTACT.email}`], ["WhatsApp / Phone", CONTACT.phone, CONTACT.wa]].map(([k, v, h]) => <div key={k} className="border-t hair-d pt-4"><p className="mono text-obsidian/40">{k}</p><a href={h} className="serif mt-2 block text-4xl hover:text-mint transition-colors">{v}</a></div>)}
        <div className="border-t hair-d pt-4"><p className="mono text-obsidian/40">Registered office</p><p className="mt-2 text-lg">{CONTACT.address}, India</p>
          <iframe title="Krishnagiri map" className="mt-5 h-64 w-full grayscale border hair-d" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=78.05%2C12.40%2C78.35%2C12.62&layer=mapnik&marker=12.52%2C78.21" /></div>
      </aside>
    </div></section>
  </>);
}
