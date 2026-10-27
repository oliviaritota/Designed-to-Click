import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export function LegalDocument({
  title,
  lede,
  children,
}: {
  title: string;
  lede: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} lede={lede} />
      <Container className="py-14 sm:py-16">
        <div className="legal-copy">{children}</div>
      </Container>
    </>
  );
}
