import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { services } from "@/lib/content";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Services",
  "New websites, redesigns, landing pages, and site care. Each Designed to Click project is scoped in writing before design starts.",
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
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="grid gap-8 border-t border-line py-14 lg:grid-cols-12"
            >
              <div className="lg:col-span-4">
                <p className="font-serif text-signal-deep">0{index + 1}</p>
                <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em]">{service.title}</h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="text-lg leading-relaxed text-muted">{service.summary}</p>
                <h3 className="mt-8 text-xs font-medium uppercase tracking-[0.16em]">Included</h3>
                <ul className="mt-4 space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="border-l border-line pl-4 text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
          <div className="border-t border-line py-14">
            <h2 className="font-serif text-4xl tracking-[-0.03em]">Not sure which one it is?</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
              Send the goal. We will tell you whether it is a new site, a redesign,
              a single page, or care — and whether we are the right studio for it.
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
