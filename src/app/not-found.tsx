import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page is not on the Designed to Click site.",
};

export default function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title="That page is not here."
        lede="The link may be out of date, or the address may have a typo. The pages below are the site."
      />
      <Container className="py-12">
        <Link href="/" className="text-signal-deep underline underline-offset-4">
          Back to the home page
        </Link>
      </Container>
    </>
  );
}
