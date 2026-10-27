import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";

const particles = [
  { symbol: "{", left: "6%", delay: "0s", duration: "14s" },
  { symbol: "}", left: "14%", delay: "3s", duration: "17s" },
  { symbol: "<", left: "22%", delay: "7s", duration: "15s" },
  { symbol: "/>", left: "31%", delay: "1s", duration: "18s" },
  { symbol: "[", left: "39%", delay: "5s", duration: "16s" },
  { symbol: "]", left: "48%", delay: "9s", duration: "13s" },
  { symbol: ";", left: "57%", delay: "2s", duration: "19s" },
  { symbol: "=", left: "65%", delay: "6s", duration: "15s" },
  { symbol: "(", left: "73%", delay: "4s", duration: "17s" },
  { symbol: ")", left: "81%", delay: "8s", duration: "14s" },
  { symbol: "*", left: "88%", delay: "11s", duration: "16s" },
  { symbol: "#", left: "94%", delay: "1.5s", duration: "18s" },
];

const badges = [
  {
    mark: "De",
    title: "Custom Design",
    detail: "Distinctive, intentional, yours.",
    place: "left-0 top-6 hero-badge",
  },
  {
    mark: "Dv",
    title: "Development",
    detail: "Responsive, fast, functional.",
    place: "right-0 top-0 bottom-0 my-auto h-fit hero-badge hero-badge-delay",
  },
  {
    mark: "Ux",
    title: "User Experience",
    detail: "Built for people, not just pixels.",
    place: "bottom-8 left-8 hero-badge hero-badge-delay-2",
  },
];

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={`${particle.symbol}-${particle.left}`}
            className="hero-particle absolute bottom-0 font-mono text-sm text-signal"
            style={{
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          >
            {particle.symbol}
          </span>
        ))}
      </div>

      <Container className="relative grid min-h-[calc(100svh-5.5rem)] items-center gap-16 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-6">
          <p className="font-mono text-sm text-signal">Website developer</p>
          <h1 className="mt-5 whitespace-nowrap font-serif text-[clamp(1.85rem,6.4vw,4.6rem)] leading-none tracking-[-0.04em]">
            Designed to Click
          </h1>
          <p className="mt-5 font-mono text-base text-paper/70 sm:text-lg">
            <span className="text-signal">//</span> Websites with a reason to
            click.
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/75">
            We plan, design, and build marketing websites that are clear on a
            first read, comfortable to use, and straightforward to look after.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="accent">
              Start a project
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </ButtonLink>
            <ButtonLink href="/work" variant="ghost-on-dark">
              Our work
            </ButtonLink>
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <div className="relative mx-auto max-w-md md:px-8 md:py-10">
            <div className="hero-glow absolute left-1/2 top-1/2 hidden size-72 -translate-x-1/2 -translate-y-1/2 rounded-full md:block" />
            <div className="hero-frame relative mx-auto grid aspect-square w-[min(100%,16rem)] place-items-center rounded-full bg-[#071111] md:w-[18rem]">
              <Image
                src="/logo.png"
                alt=""
                width={220}
                height={220}
                className="size-[68%] object-contain"
                priority
              />
            </div>
            <ul className="mt-6 space-y-2 md:hidden">
              {badges.map((badge) => (
                <li
                  key={badge.title}
                  className="flex items-center gap-3 rounded-full border border-signal/35 bg-ink/90 px-3 py-2"
                >
                  <span className="grid size-8 place-items-center rounded-full bg-signal text-xs font-bold text-ink">
                    {badge.mark}
                  </span>
                  <span>
                    <span className="block text-sm font-medium">{badge.title}</span>
                    <span className="block text-xs text-paper/60">{badge.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
            {badges.map((badge) => (
              <div
                key={badge.title}
                className={`absolute hidden items-center gap-3 rounded-full border border-signal/35 bg-ink/90 px-3 py-2 backdrop-blur-sm md:flex ${badge.place}`}
              >
                <span className="grid size-8 place-items-center rounded-full bg-signal text-xs font-bold text-ink">
                  {badge.mark}
                </span>
                <span>
                  <span className="block text-sm font-medium">{badge.title}</span>
                  <span className="block text-xs text-paper/60">{badge.detail}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="relative pb-8">
        <Link
          href="#studio-note"
          className="mx-auto flex w-fit flex-col items-center gap-2 text-xs uppercase tracking-[0.16em] text-paper/60"
        >
          <span className="flex h-8 w-5 items-start justify-center rounded-full border border-paper/40 pt-1.5">
            <span className="hero-wheel block h-1.5 w-1 rounded-full bg-signal" />
          </span>
          Scroll
        </Link>
      </div>
    </section>
  );
}
