import Link from "next/link";
import { Container } from "@/components/container";

const features = [
  {
    number: "01",
    kind: "Featured project",
    imageLabel: "Featured project image",
    title: "Project Name",
    href: "/work",
    featured: true,
  },
  {
    number: "02",
    kind: "Project",
    imageLabel: "Project image",
    title: "Project Name",
    href: "/work",
    featured: false,
  },
  {
    number: "03",
    kind: "Project",
    imageLabel: "Project image",
    title: "Project Name",
    href: "/work",
    featured: false,
  },
];

export function HomeFeaturedWork() {
  return (
    <section className="relative bg-ink text-paper" aria-label="Featured work">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
      >
        <div className="hero-grid absolute inset-0" />
      </div>

      <Container className="relative pt-10 pb-24 lg:pt-14 lg:pb-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal">
              03 / Featured work
            </p>
            <h2 className="mt-6 font-serif text-[clamp(2.4rem,5.4vw,4.25rem)] leading-[0.98] tracking-[-0.04em]">
              Made to stand out.
              <span className="mt-1 block text-signal">Built to click.</span>
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-paper/68 sm:text-lg">
              From the first idea to the finished experience, every project is
              an opportunity to create something different. Explore the
              websites we’ve brought to life through thoughtful design and
              custom development.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center font-mono text-sm tracking-[0.04em] text-signal underline-offset-8 hover:underline"
          >
            Explore our work
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>
        </div>

        <ul className="mt-16 grid gap-x-5 gap-y-5 lg:mt-20 lg:grid-cols-2">
          {features.map((feature) => (
            <li
              key={feature.number}
              className={feature.featured ? "lg:col-span-2" : undefined}
            >
              <Link
                href={feature.href}
                aria-label={`${feature.kind} ${feature.number}: ${feature.title}`}
                className="group block"
              >
                <div
                  className={`grid place-items-center rounded-[1.25rem] border border-signal/80 bg-[#0a1414] ${
                    feature.featured
                      ? "aspect-[2.35/1] min-h-56"
                      : "aspect-[16/9] min-h-44"
                  }`}
                >
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#7d9a9a]">
                    {feature.imageLabel}
                  </p>
                </div>
                <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.12em] text-[#7d9a9a]">
                  {feature.number} / {feature.kind}
                </p>
                <div className="mt-0.5 flex items-center justify-between gap-4">
                  <h3 className="text-[1.65rem] font-semibold tracking-[-0.03em] sm:text-[1.85rem]">
                    {feature.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="grid size-10 shrink-0 place-items-center rounded-full border border-signal text-signal transition-colors group-hover:bg-signal group-hover:text-ink"
                  >
                    <ArrowUpRightIcon />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-4"
    >
      <path
        d="M7 17 17 7M10 7h7v7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
