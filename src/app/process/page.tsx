import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { steps } from "@/lib/content";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "The Process",
  "How a Designed to Click project runs, from the first note through scope, design, build, launch, and care.",
  "/process",
);

const needs = [
  "Someone who can approve the scope and the page list",
  "Access to the current site, domain, and any brand materials that already exist",
  "Feedback inside the review windows named in the scope",
  "The facts only you know: who the work is for, and what should happen after they read the page",
];

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="The process"
        title="Five steps, and no mystery middle."
        lede="You always know what is being made, what we need from you, and what done looks like. The scope is the reference. If the work changes, the scope changes with it."
      />
      <section className="border-b border-line">
        <Container>
          <ol>
            {steps.map((step) => (
              <li
                key={step.number}
                className="grid gap-6 border-t border-line py-12 lg:grid-cols-12"
              >
                <p className="font-serif text-5xl tracking-[-0.04em] text-signal-deep lg:col-span-2">
                  {step.number}
                </p>
                <div className="lg:col-span-4">
                  <h2 className="font-serif text-4xl tracking-[-0.03em]">{step.title}</h2>
                  <p className="mt-4 leading-relaxed text-muted">{step.summary}</p>
                </div>
                <p className="leading-relaxed text-muted lg:col-span-5 lg:col-start-8">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <section>
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl tracking-[-0.03em]">What we need from you</h2>
            <p className="mt-4 leading-relaxed text-muted">
              The studio can shape the site. It cannot invent the business. These
              are the things that keep a project moving.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact">Start with a note</ButtonLink>
            </div>
          </div>
          <ul className="lg:col-span-6 lg:col-start-7">
            {needs.map((item, index) => (
              <li key={item} className="flex gap-4 border-t border-line py-5">
                <span className="font-serif text-signal-deep">0{index + 1}</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
