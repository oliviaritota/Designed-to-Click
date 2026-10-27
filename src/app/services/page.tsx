import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { services } from "@/lib/content";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Services",
  "Custom website design, redesigns, e-commerce, and ongoing site care. Each Designed to Click project is scoped in writing before design starts.",
  "/services",
);

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Work with a written scope."
        lede="A typical project is a fixed set of pages, a small number of revision rounds, and a handoff you can keep. Timing depends on the page list and how ready the content is. We talk through that before anyone starts designing."
      />
      <section>
        <Container className="pb-8">
          {services.map((service) => (
            <article
              key={service.slug}
              id={service.slug}
              className="grid gap-8 border-t border-line py-14 lg:grid-cols-12"
            >
              <div className="lg:col-span-4">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal-deep">
                  {service.number} / {service.label}
                </p>
                <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em]">
                  {service.title}
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="text-lg leading-relaxed text-muted">
                  {service.summary}
                </p>
                <p className="mt-8 text-sm leading-relaxed text-muted">
                  <span className="block text-xs font-medium uppercase tracking-[0.16em] text-ink">
                    Ideal for
                  </span>
                  <span className="mt-2 block">{service.idealFor}</span>
                </p>
              </div>
            </article>
          ))}
          <div className="border-t border-line py-14">
            <h2 className="font-serif text-4xl tracking-[-0.03em]">
              Not sure which one it is?
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
              Send the goal. We will tell you whether it is a new site, a
              redesign, a store, or ongoing care — and whether we are the right
              studio for it.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact">Contact the studio</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
