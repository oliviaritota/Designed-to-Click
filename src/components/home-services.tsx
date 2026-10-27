import Link from "next/link";
import { Container } from "@/components/container";
import { services } from "@/lib/content";

export function HomeServices() {
  return (
    <section className="relative bg-ink text-paper" aria-label="Services">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        aria-hidden="true"
      >
        <div className="hero-grid absolute inset-0" />
      </div>

      <Container className="relative pt-24 pb-10 lg:pt-32 lg:pb-12">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal">
            02 / Our services
          </p>
          <h2 className="mt-6 font-serif text-[clamp(2.4rem,5.4vw,4.25rem)] leading-[0.98] tracking-[-0.04em]">
            Four ways to
            <span className="block">work together.</span>
          </h2>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-paper/68 sm:text-lg">
            Every business is different, and every website should be too.
            Explore our services to see how we can bring your ideas to life.
          </p>
          <Link
            href="/services"
            className="mt-10 inline-flex items-center font-mono text-sm tracking-[0.04em] text-signal underline-offset-8 hover:underline"
          >
            All services
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>
        </div>

        <ol className="mt-16 border-t border-white/10 lg:mt-20">
          {services.map((service, index) => {
            const featured = index === 0;

            return (
              <li
                key={service.slug}
                className={`grid gap-5 border-b border-signal/20 py-10 sm:gap-8 lg:grid-cols-12 lg:items-start ${featured ? "lg:py-16" : "lg:py-12"}`}
              >
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal lg:col-span-4">
                  {service.number} / {service.label}
                </p>
                <div className="lg:col-span-8">
                  <h3
                    className={`font-serif tracking-[-0.03em] ${featured ? "text-[clamp(1.85rem,3.2vw,2.85rem)] leading-[1.05]" : "text-2xl leading-snug sm:text-[1.7rem]"}`}
                  >
                    <Link
                      href={`/services#${service.slug}`}
                      className="hover:underline"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p
                    className={`mt-4 max-w-2xl leading-relaxed text-paper/65 ${featured ? "text-base sm:text-lg" : "text-sm"}`}
                  >
                    {service.summary}
                  </p>
                  <p className="mt-6 max-w-2xl text-sm leading-relaxed text-paper/50">
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-signal">
                      Ideal for
                    </span>{" "}
                    {service.idealFor}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
