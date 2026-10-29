"use client";
import { useEffect, useRef, useState } from "react";

/** Digit-width glyphs only — keeps layout stable while scrambling */
const CH = "0123456789";

function Scramble({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      setDone(true);
      return;
    }

    let raf = 0;
    let started = false;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || started) return;
        started = true;
        io.disconnect();
        const t0 = performance.now();
        const duration = 900;
        const chars = value.split("");

        const step = (t: number) => {
          const p = Math.min(1, (t - t0) / duration);
          // Reveal left→right; unrevealed slots pick same-class glyph (digit vs keep punctuation)
          const next = chars
            .map((c, i) => {
              if (c === " " || c === "." || c === "–" || c === "-" || c === "<" || c === ">") return c;
              if (i / chars.length < p) return c;
              return CH[(Math.random() * CH.length) | 0];
            })
            .join("");
          setDisplay(next);
          if (p < 1) {
            raf = requestAnimationFrame(step);
          } else {
            setDisplay(value);
            setDone(true);
          }
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.45 }
    );

    if (ref.current) io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className="relative inline-block">
      {/* Invisible final string locks width so random digits never reflow the grid */}
      <span className="invisible select-none" aria-hidden>
        {value}
      </span>
      <span
        className={`absolute inset-0 tabular-nums ${done ? "" : "will-change-contents"}`}
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {display}
      </span>
    </span>
  );
}

const N: [string, string, string][] = [
  ["<50", "ms", "API response target"],
  ["100", "%", "Shift execution offline"],
  [".NET 10", "", "Driver client runtime"],
  ["10–15", "", "Android versions"],
  ["2023", "", "Founded · 17 Feb"],
];

export default function Numbers() {
  return (
    <section className="bg-obsidian">
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-8">
        <p className="mono mb-12 text-mist/40">§ 04 — Measured, not marketed</p>
        <div className="grid grid-cols-2 lg:grid-cols-5 border-t hair">
          {N.map(([a, u, l], i) => (
            <div
              key={l}
              className={`border-b hair py-10 pr-6 ${i < 4 ? "lg:border-r" : ""} lg:pl-6 first:lg:pl-0`}
            >
              <div className="serif text-[clamp(48px,5vw,84px)] leading-none text-paper">
                <Scramble value={a} />
                {u ? <span className="ml-1 text-[0.45em] text-mint">{u}</span> : null}
              </div>
              <p className="mono mt-5 text-mist/50">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
