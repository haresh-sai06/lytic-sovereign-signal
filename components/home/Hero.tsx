"use client";
import { motion } from "motion/react";
import DitherField from "./DitherField";
import Magnetic from "../Magnetic";
import { IDS } from "@/lib/content";
const ease = [0.16, 1, 0.3, 1] as const;
const Line = ({ children, d }: { children: React.ReactNode; d: number }) => (
  <span className="line-mask"><motion.span className="block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 1.0 + d, ease }}>{children}</motion.span></span>
);
export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-obsidian">
      <DitherField />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-obsidian to-transparent" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pb-24 pt-32 md:px-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.8 }}
          className="mono mb-10 inline-flex w-fit items-center gap-3 rounded-full border border-mint/30 bg-mint/5 px-4 py-2 text-mint">
          <span className="h-1.5 w-1.5 rounded-full bg-mint pulse-dot" /> Systems nominal · Shift API sub-50ms
        </motion.div>
        <h1 className="serif max-w-[15ch] text-[clamp(52px,9vw,148px)] leading-[0.9] text-paper">
          <Line d={0}>Turning complex</Line>
          <Line d={0.08}>logistics into</Line>
          <Line d={0.16}><em className="text-mint">sovereign</em> software.</Line>
        </h1>
        <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-end">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="md:col-span-5 max-w-md text-[17px] leading-relaxed text-mist/70">
            LYTIC Technologies engineers offline-first dispatch software for cement and steel logistics — deployed on clouds our clients own.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }} className="md:col-span-4 flex flex-wrap gap-3">
            <Magnetic href="/contact">Schedule Briefing</Magnetic>
            <Magnetic href="#route" variant="ghost">See Shift move</Magnetic>
          </motion.div>
          <div className="md:col-span-3 flex flex-col items-start md:items-end gap-1 mono text-mist/40">
            <span>Est. {IDS.founded}</span><span>Krishnagiri · Tamil Nadu</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="mono text-[10px] text-mist/40">Scroll</span>
          <span className="relative block h-16 w-px overflow-hidden bg-white/10"><span className="absolute inset-x-0 top-0 h-6 bg-mint animate-[cue_1.8s_ease-in-out_infinite]" /></span>
        </div>
      </div>
      <style>{`@keyframes cue{0%{transform:translateY(-100%)}100%{transform:translateY(300%)}}`}</style>
    </section>
  );
}
