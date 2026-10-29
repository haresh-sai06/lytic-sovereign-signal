"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
export default function Preloader() {
  const [show, setShow] = useState(true);
  useEffect(() => { const t = setTimeout(() => setShow(false), 1100); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="fixed inset-0 z-[70] flex items-center justify-center bg-obsidian" exit={{ clipPath: "inset(0 0 100% 0)" }} initial={{ clipPath: "inset(0 0 0% 0)" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <svg width="220" height="80" viewBox="0 0 220 80" fill="none">
            <motion.path d="M20 8v52h52" stroke="#E4E4E7" strokeWidth="5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.45 }} />
            <motion.path d="M36 8v36h36 H210" stroke="#10D9A0" strokeWidth="5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }} />
          </svg>
          <span className="mono absolute bottom-10 text-mist/40">Establishing signal…</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
