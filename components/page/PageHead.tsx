export default function PageHead({ k, title, sub }: { k: string; title: React.ReactNode; sub?: string }) {
  return (
    <section className="bg-obsidian border-b hair">
      <div className="mx-auto max-w-[1400px] px-5 pt-44 pb-20 md:px-8">
        <p className="mono text-mint">● {k}</p>
        <h1 className="serif mt-8 max-w-[16ch] text-[clamp(52px,8vw,128px)] leading-[0.9] text-paper">{title}</h1>
        {sub && <p className="mt-8 max-w-xl text-lg text-mist/60">{sub}</p>}
      </div>
    </section>
  );
}
