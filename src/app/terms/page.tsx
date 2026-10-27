import { LegalDocument } from "@/components/legal-document";
import { contactEmail, pageMetadata, siteName } from "@/lib/site";

export const metadata = pageMetadata(
  "Website Terms of Use",
  "The terms for using the Designed to Click website. Project work is covered by a separate written scope.",
  "/terms",
);

export default function TermsPage() {
  return (
    <LegalDocument
      title="Website Terms of Use"
      lede="Last updated October 26, 2026. These terms cover use of this website. They are a practical notice for the site, and they are not legal advice. A client project is governed by its own written scope."
    >
      <h2>Using this site</h2>
      <p>
        {siteName} provides this website so you can read about the studio and
        get in touch. By using the site, you agree to these terms. If you do
        not agree, please do not use the site.
      </p>
      <p>
        The pages are for information. Nothing on the site is an offer to
        contract, a quote, or a promise to take a project. Work starts only
        when a scope is written and accepted.
      </p>

      <h2>The studio’s work</h2>
      <p>
        The text, design, and code of this website belong to {siteName} unless
        a page says otherwise. You may link to the site. You may not copy the
        site’s design or code for another commercial website, and you may not
        present the studio’s materials as your own.
      </p>

      <h2>Acceptable use</h2>
      <p>Please do not:</p>
      <ul>
        <li>Interfere with the site or attempt to break its security</li>
        <li>Use the site to send unlawful, harmful, or misleading content</li>
        <li>Scrape or load the site in a way that degrades it for other people</li>
        <li>Misrepresent your affiliation with {siteName}</li>
      </ul>

      <h2>Project agreements</h2>
      <p>
        If we work together, the scope, price, timeline, and responsibilities
        will be in a separate agreement. That agreement controls the project.
        These website terms do not.
      </p>

      <h2>Availability and accuracy</h2>
      <p>
        We work to keep the site accurate and available. We do not warrant that
        it will always be error-free, complete, or uninterrupted, or that it
        will meet a particular need. Information can change before a page is
        updated.
      </p>

      <h2>Liability</h2>
      <p>
        To the extent the law allows, {siteName} is not liable for damages
        arising from your use of this informational website, or from your
        inability to use it. This does not limit any liability that cannot be
        limited under applicable law, including liability for fraud or for
        death or personal injury caused by negligence where such a limit is
        not allowed.
      </p>

      <h2>Law</h2>
      <p>
        These terms are governed by the law that applies where {siteName}{" "}
        operates, without regard to conflict-of-law rules. If a provision
        cannot be enforced, the rest of the terms still apply.
      </p>

      <h2>Changes and contact</h2>
      <p>
        We may update these terms by posting a new version on this page with a
        new date. Questions about the terms can be sent to{" "}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    </LegalDocument>
  );
}
