import Link from "next/link";
import { LegalDocument } from "@/components/legal-document";
import { contactEmail, pageMetadata, siteName } from "@/lib/site";

export const metadata = pageMetadata(
  "Accessibility Statement",
  "Designed to Click aims to conform to WCAG 2.2 Level AA. This statement explains what is in place and how to report a barrier.",
  "/accessibility",
);

export default function AccessibilityPage() {
  return (
    <LegalDocument
      title="Accessibility Statement"
      lede="Last updated October 26, 2026. Designed to Click wants this website to be usable with a keyboard, a screen reader, zoom, and a phone. This statement explains the target, what is in place, and how to tell us if something gets in the way."
    >
      <h2>Target</h2>
      <p>
        We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.2
        at Level AA. WCAG is published by the W3C Web Accessibility Initiative.
        This statement is our account of the work. It is not a formal audit
        certificate.
      </p>

      <h2>What is in place</h2>
      <ul>
        <li>Pages use headings in a logical order, and a skip link to the main content</li>
        <li>The menu and the contact form can be used with a keyboard</li>
        <li>Focus is visible, and the current page is indicated in the navigation</li>
        <li>Form fields have visible labels, and errors are described in text</li>
        <li>Text colors were chosen to meet contrast for their size</li>
        <li>Links are underlined where color alone would be easy to miss</li>
        <li>The site keeps motion small, and it respects reduced-motion settings</li>
        <li>The contact form explains that it opens your email app and does not store the message on the site</li>
      </ul>

      <h2>Known limits</h2>
      <p>
        The work page describes the kinds of sites we build. It does not yet
        include client case-study images. There are no third-party videos,
        maps, or embedded widgets on the site. If those are added, we will
        check them and update this statement.
      </p>
      <p>
        We have not certified every combination of browser and assistive
        technology. The site is built for current versions of major browsers,
        and with screen readers such as VoiceOver and NVDA in mind.
      </p>

      <h2>If you hit a barrier</h2>
      <p>
        Write to <a href={`mailto:${contactEmail}`}>{contactEmail}</a> and tell
        us the page, what you were trying to do, and the browser or assistive
        technology you were using. We will reply, look for a fix, and offer
        another way to get the information in the meantime. You can also use
        the <Link href="/contact">contact page</Link>.
      </p>
      <p>
        We review this statement when the site changes in a way that affects
        access. {siteName} is happy to hear what is still in the way.
      </p>
    </LegalDocument>
  );
}
