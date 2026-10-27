import Link from "next/link";
import { Container } from "@/components/container";
import { HomeProcessWorkspace } from "@/components/home-process-workspace";

export function HomeProcess() {
  return (
    <section className="relative bg-ink text-paper" aria-label="The process">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
      >
        <div className="hero-grid absolute inset-0" />
      </div>

      <Container className="relative pt-12 pb-24 lg:pt-16 lg:pb-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal">
              04 / The process
            </p>
            <h2 className="mt-6 font-serif text-[clamp(2.4rem,5.4vw,4.25rem)] leading-[0.98] tracking-[-0.04em]">
              From first hello
              <span className="mt-1 block">to final launch.</span>
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-paper/68 sm:text-lg">
              Great websites don’t happen by accident. Our process keeps things
              creative, collaborative, and clear from the first conversation to
              the moment your website goes live.
            </p>
          </div>
          <Link
            href="/process"
            className="inline-flex items-center font-mono text-sm tracking-[0.04em] text-signal underline-offset-8 hover:underline"
          >
            Explore our process
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>
        </div>

        <HomeProcessWorkspace />
      </Container>
    </section>
  );
}
