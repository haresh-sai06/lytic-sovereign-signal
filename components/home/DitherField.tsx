"use client";
import { useEffect, useRef } from "react";
// Ordered (Bayer 4x4) dither over a flowing value-noise field; pointer warps the field.
const B = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map((v) => (v + 0.5) / 16);
export default function DitherField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!; const ctx = c.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const S = 4; let w = 0, h = 0, img: ImageData, raf = 0, vis = true;
    const m = { x: 0.7, y: 0.4, tx: 0.7, ty: 0.4 };
    const resize = () => { w = Math.ceil(c.clientWidth / S); h = Math.ceil(c.clientHeight / S); c.width = w; c.height = h; img = ctx.createImageData(w, h); };
    resize(); window.addEventListener("resize", resize);
    const mv = (e: PointerEvent) => { const r = c.getBoundingClientRect(); m.tx = (e.clientX - r.left) / r.width; m.ty = (e.clientY - r.top) / r.height; };
    window.addEventListener("pointermove", mv);
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting; if (vis && !reduce) loop(performance.now()); }); io.observe(c);
    const draw = (t: number) => {
      m.x += (m.tx - m.x) * 0.05; m.y += (m.ty - m.y) * 0.05;
      const d = img.data, T = t * 0.00018;
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
        const u = x / w, v = y / h;
        let f = Math.sin(u * 6 + T * 3 + Math.sin(v * 4 - T * 2) * 1.5) * 0.5 + Math.sin(v * 9 - T * 4 + Math.cos(u * 5 + T) * 2) * 0.35;
        const dx = u - m.x, dy = (v - m.y) * (h / w), r = Math.sqrt(dx * dx + dy * dy);
        f += Math.exp(-r * 9) * 1.4;
        const lum = (f + 1) * 0.5 * (0.15 + v * 0.75) * (1 - u * 0.35);
        const on = lum > B[(y & 3) * 4 + (x & 3)] + 0.18;
        const i = (y * w + x) * 4; const mint = on && r < 0.22;
        d[i] = on ? (mint ? 16 : 52) : 5; d[i + 1] = on ? (mint ? 217 : 56) : 5; d[i + 2] = on ? (mint ? 160 : 60) : 5; d[i + 3] = 255;
      }
      ctx.putImageData(img, 0, 0);
    };
    const loop = (t: number) => { draw(t); if (vis && !reduce) raf = requestAnimationFrame(loop); };
    draw(0); if (!reduce) raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", mv); };
  }, []);
  return <canvas ref={ref} aria-hidden className="absolute inset-0 h-full w-full [image-rendering:pixelated]" />;
}
