import { Container } from "@/components/container";

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="border-b border-line">
      <Container className="py-16 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-signal-deep">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-[clamp(2.6rem,6vw,4.75rem)] leading-[1.02] tracking-[-0.03em] text-ink">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
      </Container>
    </header>
  );
}
