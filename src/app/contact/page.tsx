import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { contactEmail, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Contact",
  "Tell Designed to Click what the website needs to do. A short note is enough to start.",
  "/contact",
);

const prompts = [
  "What the site is for",
  "Who it is for",
  "Whether this is a new site or a redesign",
  "Any date that is actually fixed",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what the site needs to do."
        lede="Share the goal, the timing, and any links that help. A short note is enough to start. We reply to say whether we can take the project, and what the next conversation should cover."
      />
      <section>
        <Container className="grid gap-16 py-14 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <h2 className="font-serif text-3xl tracking-[-0.03em]">Worth including</h2>
            <ul className="mt-5 space-y-3">
              {prompts.map((item) => (
                <li key={item} className="border-l border-signal pl-4 text-muted">
                  {item}
                </li>
              ))}
            </ul>
            <h2 className="mt-12 font-serif text-3xl tracking-[-0.03em]">Or write directly</h2>
            <p className="mt-4 leading-relaxed text-muted">
              The form opens your email app. You can also write to{" "}
              <a className="text-signal-deep underline underline-offset-4" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
              .
            </p>
          </aside>
        </Container>
      </section>
    </>
  );
}
