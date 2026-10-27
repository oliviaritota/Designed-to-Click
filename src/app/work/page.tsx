import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { projects } from "@/lib/content";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Our Work",
  "The kinds of websites Designed to Click builds: practice sites, booking-led business sites, campaign pages, and content sites.",
  "/work",
);

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="The kinds of sites we build."
        lede="Client case studies will live here as projects are ready to share. Until then, this page describes the work the studio takes, so you can see whether it is a fit."
      />
      <section>
        <Container className="pb-20">
          {projects.map((project) => (
            <article
              key={project.slug}
              id={project.slug}
              className="grid border-t border-line lg:grid-cols-12"
            >
              <div className={`flex min-h-52 items-end p-8 lg:col-span-4 lg:min-h-full ${project.panel}`}>
                <p className="font-serif text-7xl leading-none tracking-[-0.05em]">
                  {project.index}
                </p>
              </div>
              <div className="py-10 lg:col-span-8 lg:py-14 lg:pl-12">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  {project.audience}
                </p>
                <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
                  {project.title}
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                  {project.summary}
                </p>
                <h3 className="mt-8 text-xs font-medium uppercase tracking-[0.16em]">
                  What the build focuses on
                </h3>
                <ul className="mt-4 max-w-2xl space-y-3">
                  {project.focus.map((item) => (
                    <li key={item} className="border-l border-line pl-4 text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
          <div className="border-t border-line py-14">
            <h2 className="max-w-2xl font-serif text-4xl tracking-[-0.03em]">
              If one of these is the site you need, start with a note.
            </h2>
            <div className="mt-8">
              <ButtonLink href="/contact">Start a project</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
