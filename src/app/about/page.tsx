import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "About",
  "Designed to Click is a web development studio for marketing sites with a clear structure, careful language, and code you can keep.",
  "/about",
);

const attentions = [
  {
    title: "Structure",
    text: "The page order matches how someone actually decides. The offer shows up before the decoration.",
  },
  {
    title: "Language",
    text: "Short and specific. If a sentence could sit on any studio’s site, it does not belong on yours.",
  },
  {
    title: "Use",
    text: "A keyboard, a screen reader, a phone, and a slow connection are part of the design, not a pass we do at the end.",
  },
  {
    title: "Upkeep",
    text: "The site should still make sense after handoff. You get the repository, and a build that is ordinary to change.",
  },
];

const clients = [
  "Independent practices that need a site as clear as the work",
  "Local and specialist businesses whose customers look them up before calling",
  "Small teams replacing a site that has fallen behind the offer",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A studio for sites that have a job to do."
        lede="Designed to Click designs and builds websites for people who need the site to explain the work and invite a next step. That next step might be a booking, a conversation, or a clear understanding of an offer."
      />
      <section className="border-b border-line">
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl tracking-[-0.03em]">What we pay attention to</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-muted">
              We treat the words, the interface, and the code as one piece of work.
              A handsome page that hides the point is unfinished. A fast page that
              is confusing is unfinished too.
            </p>
            <dl className="mt-10 border-t border-line">
              {attentions.map((item) => (
                <div key={item.title} className="grid gap-2 border-b border-line py-6 sm:grid-cols-4">
                  <dt className="font-medium">{item.title}</dt>
                  <dd className="text-muted sm:col-span-3">{item.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>
      <section className="border-b border-line">
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl tracking-[-0.03em]">Who the work is for</h2>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-5">
              {clients.map((item) => (
                <li key={item} className="border-l-2 border-signal pl-5 text-lg leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 leading-relaxed text-muted">
              If a project is a fit, we say so and send a scope. If it is not, we
              say that too. The studio works remotely. Reviews happen on a shared
              link, in the browser.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact">Start a project</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
