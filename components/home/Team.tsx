"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { TEAM } from "@/lib/content";

export default function Team() {
  const founder = TEAM.find((p) => p.featured === "founder")!;
  const ceo = TEAM.find((p) => p.featured === "ceo")!;
  const rest = TEAM.filter((p) => !p.featured);

  return (
    <section className="bg-paper text-obsidian">
      <div className="mx-auto max-w-[1400px] px-5 py-32 md:px-8">
        <div className="mb-16 flex items-center justify-between border-b hair-d pb-4 mono text-obsidian/50">
          <span>§ 05 — Executive Board</span>
          <span>07 people · Krishnagiri</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <h2 className="serif lg:col-span-4 text-[clamp(44px,5.5vw,88px)] leading-[0.92]">
            The people
            <br />
            behind the <em>signal.</em>
          </h2>

          <div className="lg:col-span-8 space-y-10">
            {/* Leadership row: Founder (big) + CEO */}
            <div className="grid gap-5 md:grid-cols-12">
              <motion.figure
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="group md:col-span-7"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                  <Image
                    src={founder.img}
                    alt={founder.name}
                    fill
                    sizes="(min-width:768px) 45vw, 100vw"
                    className="object-cover object-top grayscale contrast-110 transition-all duration-700 ease-out-expo group-hover:grayscale-0 group-hover:scale-[1.04]"
                  />
                  <span className="mono absolute left-3 top-3 bg-paper/90 px-2 py-1 text-obsidian/70">01 · FOUNDER</span>
                </div>
                <figcaption className="mt-4 border-t hair-d pt-3">
                  <div className="text-[20px] font-semibold tracking-tight">{founder.name}</div>
                  <div className="mono mt-1 text-obsidian/50">
                    {founder.role} · {founder.meta}
                  </div>
                </figcaption>
              </motion.figure>

              <motion.figure
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group md:col-span-5"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-mist md:aspect-auto md:h-full md:min-h-[280px]">
                  <Image
                    src={ceo.img}
                    alt={ceo.name}
                    fill
                    sizes="(min-width:768px) 30vw, 100vw"
                    className="object-cover object-top grayscale contrast-110 transition-all duration-700 ease-out-expo group-hover:grayscale-0 group-hover:scale-[1.04]"
                  />
                  <span className="mono absolute left-3 top-3 bg-paper/90 px-2 py-1 text-obsidian/70">02 · CEO</span>
                </div>
                <figcaption className="mt-4 border-t hair-d pt-3">
                  <div className="text-[18px] font-semibold tracking-tight">{ceo.name}</div>
                  <div className="mono mt-1 text-obsidian/50">
                    {ceo.role} · {ceo.meta}
                  </div>
                </figcaption>
              </motion.figure>
            </div>

            {/* Remaining team */}
            <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3">
              {rest.map((p, i) => (
                <motion.figure
                  key={p.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-mist">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      sizes="(min-width:768px) 25vw, 50vw"
                      className="object-cover object-top grayscale contrast-110 transition-all duration-700 ease-out-expo group-hover:grayscale-0 group-hover:scale-[1.04]"
                    />
                    <span className="mono absolute left-3 top-3 bg-paper/90 px-2 py-1 text-obsidian/70">
                      {String(i + 3).padStart(2, "0")}
                    </span>
                  </div>
                  <figcaption className="mt-4 border-t hair-d pt-3">
                    <div className="text-[17px] font-semibold tracking-tight">{p.name}</div>
                    <div className="mono mt-1 text-obsidian/50">
                      {p.role} · {p.meta}
                    </div>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
