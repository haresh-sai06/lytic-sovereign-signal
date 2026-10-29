export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M5 3v14h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
        <path d="M9 3v10h10" stroke="#10D9A0" strokeWidth="2.4" strokeLinecap="square" />
      </svg>
      <span className="font-sans font-extrabold tracking-[0.22em] text-[13px]">LYTIC</span>
    </span>
  );
}
