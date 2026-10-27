import Link from "next/link";
import { Container } from "@/components/container";
import { contactEmail } from "@/lib/site";

export function HomeCta() {
  return (
    <section
      className="relative overflow-hidden bg-signal text-ink"
      aria-label="Start a project"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-5 top-0 h-px bg-ink/20 sm:inset-x-8"
      />
      <SectionCorners />

      <Container className="relative py-28 lg:py-40">
        <div className="flex items-center gap-5">
          <p className="shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-ink/70">
            06 / Your next move
          </p>
          <span aria-hidden="true" className="hidden h-px flex-1 bg-ink/20 sm:block" />
          <p className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45 sm:block">
            /contact
          </p>
        </div>

        <div className="mt-12 grid items-center gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <div className="max-w-3xl lg:col-span-8">
            <h2 className="font-serif text-[clamp(2.7rem,7vw,5.6rem)] leading-[0.94] tracking-[-0.04em]">
              Ready to make
              <span className="mt-1 block">something click?</span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ink/75 sm:text-lg">
              Whether you’re starting from scratch or ready for a fresh look,
              we’re here to bring your vision to life. Tell us what you have in
              mind, and let’s create something worth clicking.
            </p>

            <div className="mt-12">
              <Link
                href="/contact"
                className="group inline-flex items-center bg-ink px-8 py-4 text-sm font-medium text-paper outline outline-1 outline-ink transition-[outline-color,transform] duration-200 hover:outline-paper/50 active:translate-y-px focus-visible:outline-offset-4"
              >
                Start a Project
                <span
                  aria-hidden="true"
                  className="ml-2 text-signal motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </Link>

              <p className="mt-7 text-sm text-ink/70">
                Have a question? Email us directly.
              </p>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-1 inline-block font-mono text-sm tracking-[0.03em] underline-offset-8 hover:underline focus-visible:outline-offset-4"
              >
                {contactEmail}
              </a>
            </div>
          </div>

          <div className="hidden lg:col-span-4 lg:flex lg:justify-end">
            <ClickMark />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ClickMark() {
  return (
    <div
      aria-hidden="true"
      data-cta-hud="true"
      className="relative w-[18.75rem] overflow-hidden border border-signal/70 bg-[#071111] text-paper shadow-[0_0_40px_rgb(0_0_0_/_0.18)]"
    >
      <span className="absolute top-0 left-0 h-4 w-4 border-t border-l border-signal" />
      <span className="absolute top-0 right-0 h-4 w-4 border-t border-r border-signal" />
      <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-signal" />
      <span className="absolute right-0 bottom-0 h-4 w-4 border-r border-b border-signal" />

      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
          06 / next
        </p>
        <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/50">
          <span className="cta-pulse size-1.5 rounded-full bg-signal" />
          ready
        </p>
      </div>

      <div className="relative grid h-[14.25rem] place-items-center">
        <div className="cta-hud-grid pointer-events-none absolute inset-3 opacity-[0.14]" />
        <div className="cta-scan pointer-events-none absolute inset-x-6 top-1/2 h-px bg-signal/70" />

        <svg viewBox="0 0 180 180" className="cta-ring absolute size-[12.5rem] text-signal">
          <circle
            cx="90"
            cy="90"
            r="62"
            fill="none"
            stroke="currentColor"
            strokeDasharray="3 9"
            strokeOpacity="0.7"
            strokeWidth="1.2"
          />
        </svg>
        <svg viewBox="0 0 180 180" className="absolute size-[12.5rem] text-signal">
          <circle
            cx="90"
            cy="90"
            r="78"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.18"
            strokeWidth="1"
          />
          <circle
            cx="90"
            cy="90"
            r="38"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.45"
            strokeWidth="1.1"
          />
          <path
            d="M90 18v14M90 148v14M18 90h14M148 90h14"
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth="1.1"
          />
          <path
            d="M22 22h18M22 22v18M158 22h-18M158 22v18M22 158h18M22 158v-18M158 158h-18M158 158v-18"
            stroke="currentColor"
            strokeOpacity="0.4"
            strokeWidth="1.1"
          />
          <path
            d="M48 90h18M114 90h18M90 48v18M90 114v18"
            stroke="currentColor"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
        </svg>

        <span className="cta-pulse absolute size-2 rounded-full bg-signal shadow-[0_0_16px_rgb(56_204_208_/_0.8)]" />

        <svg
          viewBox="0 0 24 24"
          className="absolute size-10 translate-x-[1.35rem] translate-y-[1.15rem] text-paper"
        >
          <path
            d="M4.4 2.8 19.8 12.1l-7.4 1.7-2.6 7.6Z"
            fill="currentColor"
          />
          <path
            d="M4.4 2.8 19.8 12.1l-7.4 1.7-2.6 7.6Z"
            fill="none"
            stroke="#38ccd0"
            strokeLinejoin="round"
            strokeWidth="1.3"
          />
        </svg>
      </div>

      <dl className="grid grid-cols-2 gap-x-4 border-t border-white/10 px-4 py-3 font-mono text-[10px] tracking-[0.08em]">
        <div>
          <dt className="uppercase text-signal/75">route</dt>
          <dd className="mt-1 text-paper/55">/contact</dd>
        </div>
        <div>
          <dt className="uppercase text-signal/75">action</dt>
          <dd className="mt-1 text-paper/55">start_project</dd>
        </div>
      </dl>
    </div>
  );
}

function SectionCorners() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-5 sm:inset-8">
      <span className="absolute top-0 left-0 h-5 w-5 border-t border-l border-ink/55" />
      <span className="absolute top-0 right-0 h-5 w-5 border-t border-r border-ink/55" />
      <span className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-ink/55" />
      <span className="absolute right-0 bottom-0 h-5 w-5 border-r border-b border-ink/55" />
    </div>
  );
}
