"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { TEAM } from "@/lib/content";
export default function Team() {
  return (
    <section className="bg-paper text-obsidian">
      <div className="mx-auto max-w-[1400px] px-5 py-32 md:px-8">
        <div className="mb-16 flex items-center justify-between border-b hair-d pb-4 mono text-obsidian/50"><span>§ 05 — Executive Board</span><span>07 people · Krishnagiri</span></div>
        <div className="grid gap-12 lg:grid-cols-12">
          <h2 className="serif lg:col-span-4 text-[clamp(44px,5.5vw,88px)] leading-[0.92]">The people<br />behind the <em>signal.</em></h2>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-12">
            {TEAM.map((p, i) => (
              <motion.figure key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group ${i === 0 ? "md:col-span-2 md:row-span-1" : ""}`}>
                <div className={`relative overflow-hidden bg-mist ${i === 0 ? "aspect-[4/3]" : "aspect-[3/4]"}`}>
                  <Image src={p.img} alt={p.name} fill sizes="(min-width:768px) 30vw, 50vw" className="object-cover object-top grayscale contrast-110 transition-all duration-700 ease-out-expo group-hover:grayscale-0 group-hover:scale-[1.04]" />
                  <span className="mono absolute left-3 top-3 bg-paper/90 px-2 py-1 text-obsidian/70">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <figcaption className="mt-4 border-t hair-d pt-3">
                  <div className="text-[17px] font-semibold tracking-tight">{p.name}</div>
                  <div className="mono mt-1 text-obsidian/50">{p.role} · {p.meta}</div>
                </figcaption>
              </motion.figure>))}
          </div>
        </div>
      </div>
    </section>
  );
}
