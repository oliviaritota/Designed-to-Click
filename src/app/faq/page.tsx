import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { FaqList } from "@/components/faq-list";
import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "FAQ",
  "Practical answers about working with Designed to Click: project types, timelines, copy, updates, and how a project starts.",
  "/faq",
);

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions that come up before a project starts."
        lede="If yours is not here, send it. A specific question is a good way to find out whether the studio is a fit."
      />
      <section>
        <Container className="py-14 sm:py-16">
          <FaqList />
          <div className="mt-12">
            <ButtonLink href="/contact">Ask about a project</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
