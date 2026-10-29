"use client";
import { useState } from "react";
import { CONTACT } from "@/lib/content";
export default function ContactForm() {
  const [f, setF] = useState({ name: "", org: "", email: "", msg: "" });
  const go = (e: React.FormEvent) => { e.preventDefault();
    const body = `Name: ${f.name}\nOrganisation: ${f.org}\nEmail: ${f.email}\n\n${f.msg}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Executive Briefing — " + f.org)}&body=${encodeURIComponent(body)}`; };
  const I = "w-full border-b border-obsidian/20 bg-transparent py-4 text-lg outline-none focus:border-mint transition-colors placeholder:text-obsidian/30";
  return (
    <form onSubmit={go} className="space-y-6">
      <input required className={I} placeholder="Your name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
      <input className={I} placeholder="Organisation / fleet" value={f.org} onChange={(e) => setF({ ...f, org: e.target.value })} />
      <input required type="email" className={I} placeholder="Work email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
      <textarea rows={4} className={I} placeholder="What are you dispatching, and where?" value={f.msg} onChange={(e) => setF({ ...f, msg: e.target.value })} />
      <button className="group inline-flex items-center gap-3 rounded-full bg-obsidian px-7 py-4 text-sm font-semibold text-paper hover:bg-mint hover:text-obsidian transition-colors">Request briefing <span className="group-hover:translate-x-1 transition-transform">→</span></button>
    </form>
  );
}
