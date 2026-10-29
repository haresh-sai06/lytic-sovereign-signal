"use client";
import { motion } from "motion/react";
import { IDS } from "@/lib/content";
const C = [["Ministry of MSME · Govt. of India", "Udyam Registration", IDS.udyam], ["Dun & Bradstreet", "D-U-N-S Number", IDS.duns], ["Incorporated", "Founded", IDS.founded]];
export default function Credentials() {
  return (
    <section className="bg-carbon border-y hair">
      <div className="mx-auto grid max-w-[1400px] md:grid-cols-3 px-5 md:px-8">
        {C.map(([a, b, c], i) => (
          <div key={b} className={`flex items-start gap-5 py-10 md:px-8 first:md:pl-0 ${i < 2 ? "md:border-r hair" : ""} border-b md:border-b-0 hair`}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="mt-1 shrink-0"><circle cx="14" cy="14" r="13" stroke="rgba(16,217,160,.4)" />
              <motion.path d="M8 14.5l4 4 8-9" stroke="#10D9A0" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }} /></svg>
            <div><p className="mono text-mist/40">{a}</p><p className="mt-2 text-paper font-semibold">{b}</p><p className="mt-1 font-mono text-[13px] text-mint break-all">{c}</p></div>
          </div>))}
      </div>
    </section>
  );
}
