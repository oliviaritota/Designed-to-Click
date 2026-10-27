import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { FaqList } from "@/components/faq-list";
import { SectionHeading } from "@/components/section-heading";
import { faqs, projects, services, steps } from "@/lib/content";
import { mainNav } from "@/lib/site";

const contents = mainNav.filter((item) => item.href !== "/");

const hints: Record<string, string> = {
  "/about": "The studio",
  "/services": "What a project includes",
  "/work": "The sites we build",
  "/process": "How a project runs",
  "/faq": "Practical questions",
  "/contact": "Start with a note",
};

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="grid gap-14 py-16 sm:py-24 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-signal-deep">
              Web development studio
            </p>
            <h1 className="mt-5 font-serif text-[clamp(3.1rem,7.4vw,6.6rem)] leading-[0.9] tracking-[-0.045em] text-ink">
              Websites with a reason{" "}
              <em className="text-signal">to click.</em>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              Designed to Click plans, designs, and builds marketing sites that
              are clear on a first read, comfortable to use, and straightforward
              to look after.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Start a project</ButtonLink>
              <ButtonLink href="/work" variant="ghost">
                Our work
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              On this site
            </p>
            <ol className="mt-4 border-t border-line">
              {contents.map((item, index) => (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    className="group flex items-baseline justify-between gap-4 py-3.5"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="w-7 font-serif text-sm text-muted">
                        0{index + 1}
                      </span>
                      <span className="text-lg group-hover:underline group-focus-visible:underline">
                        {item.label}
                      </span>
                    </span>
                    <span className="hidden text-sm text-muted sm:inline">
                      {hints[item.href]}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="bg-ink text-paper" aria-label="Studio point of view">
        <Container className="py-16 sm:py-20">
          <p className="max-w-3xl font-serif text-3xl leading-snug tracking-[-0.03em] sm:text-4xl">
            A website has one job before it has any style: a person should
            understand what you do, and what to do next. We design and build
            for that moment.
          </p>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Services"
            title="Four ways to work together."
            lede="Every engagement is scoped in writing. These are the shapes that scope usually takes."
          />
          <div className="mt-12 border-t border-line">
            {services.map((service, index) => (
              <article key={service.slug} className="grid gap-4 border-b border-line py-7 sm:grid-cols-12 sm:items-baseline">
                <p className="font-serif text-signal-deep sm:col-span-1">0{index + 1}</p>
                <h3 className="font-serif text-3xl tracking-[-0.03em] sm:col-span-4">
                  <Link href={`/services#${service.slug}`} className="hover:underline">
                    {service.title}
                  </Link>
                </h3>
                <p className="text-muted sm:col-span-7">{service.summary}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Our work"
              title="The kinds of sites we build."
              lede="Client stories will be added as work is ready to share. These are the projects the studio is set up to take."
            />
            <ButtonLink href="/work" variant="ghost">
              See our work
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <article key={project.slug} className="flex flex-col border border-line bg-cream">
                <div className={`flex min-h-40 items-end p-6 ${project.panel}`}>
                  <p className="font-serif text-5xl tracking-[-0.04em]">{project.index}</p>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                    {project.audience}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl tracking-[-0.03em]">
                    <Link href={`/work#${project.slug}`} className="hover:underline">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-muted">{project.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="The process"
            title="A project with a beginning, a middle, and a handoff."
          />
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => (
              <li key={step.number}>
                <p className="font-serif text-signal-deep">{step.number}</p>
                <h3 className="mt-3 font-serif text-2xl tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.summary}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <ButtonLink href="/process" variant="ghost">
              Read the process
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="Before the first call."
              lede="A few practical answers. The rest are on the FAQ page."
            />
            <div className="mt-8">
              <ButtonLink href="/faq" variant="ghost">
                All questions
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={faqs.slice(0, 4)} />
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-24">
          <div className="bg-pine px-6 py-12 text-paper sm:px-12 sm:py-16">
            <h2 className="max-w-2xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              Have a site that needs to exist, or one that needs to work better?
            </h2>
            <p className="mt-5 max-w-xl text-paper/80">
              Send the goal, the timing, and any links that help. A short note is enough to start.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-paper px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-sand"
              >
                Contact the studio
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
