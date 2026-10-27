import Link from "next/link";
import { Container } from "@/components/container";

const points = [
  {
    number: "01",
    title: "Thoughtful Design",
    detail: "Unique, on-brand, and built to make an impression.",
  },
  {
    number: "02",
    title: "Custom Development",
    detail: "Fast, responsive, and built to perform.",
  },
  {
    number: "03",
    title: "Real Results",
    detail: "Websites designed to attract, engage, and grow.",
  },
];

export function HomeApproach() {
  return (
    <section
      id="studio-note"
      className="relative bg-ink text-paper"
      aria-label="Our approach"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.045]" aria-hidden="true">
        <div className="hero-grid absolute inset-0" />
      </div>

      <Container className="relative grid gap-16 border-y border-white/10 py-24 lg:grid-cols-12 lg:gap-20 lg:py-32">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal">
            01 / Our approach
          </p>
          <h2 className="mt-6 max-w-xl font-serif text-[clamp(2.4rem,5.4vw,4.25rem)] leading-[0.98] tracking-[-0.04em]">
            Websites should look good.
            <span className="mt-1 block">
              They should also{" "}
              <span className="text-signal">make sense.</span>
            </span>
          </h2>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-paper/68 sm:text-lg">
            At Designed to Click, we create custom websites that look
            incredible, work seamlessly, and help your business grow. Every
            detail is intentional – from the first impression to the final
            click.
          </p>
          <Link
            href="/process"
            className="mt-10 inline-flex items-center font-mono text-sm tracking-[0.04em] text-signal underline-offset-8 hover:underline"
          >
            How we work
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>
        </div>

        <ol className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-12">
          {points.map((point, index) => (
            <li
              key={point.number}
              className={`py-7 first:pt-0 last:pb-0 ${index < points.length - 1 ? "border-b border-signal/25" : ""}`}
            >
              <p className="font-mono text-xs tracking-[0.16em] text-signal">
                {point.number}
              </p>
              <h3 className="mt-3 font-serif text-2xl tracking-[-0.03em] sm:text-[1.7rem]">
                {point.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/60">
                {point.detail}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
