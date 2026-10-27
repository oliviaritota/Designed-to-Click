export function SectionHeading({
  eyebrow,
  title,
  lede,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-signal-deep">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-serif text-4xl leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl ${eyebrow ? "mt-3" : ""}`}
      >
        {title}
      </h2>
      {lede ? (
        <p className="mt-4 text-lg leading-relaxed text-muted">{lede}</p>
      ) : null}
    </div>
  );
}
