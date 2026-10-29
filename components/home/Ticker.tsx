import { EVENTS } from "@/lib/content";
export default function Ticker() {
  const row = [...EVENTS, ...EVENTS];
  return (
    <div className="relative overflow-hidden border-y hair bg-carbon py-4" aria-label="Sample dispatch telemetry">
      <div className="marquee gap-12">
        {row.map((e, i) => (
          <span key={i} className="mono flex items-center gap-3 whitespace-nowrap text-mist/60">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" /> <span className="text-mist/30">{String((i % EVENTS.length) + 1).padStart(3, "0")}</span> {e}
          </span>
        ))}
      </div>
    </div>
  );
}
