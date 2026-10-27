import { LegalDocument } from "@/components/legal-document";
import { contactEmail, pageMetadata, siteName } from "@/lib/site";

export const metadata = pageMetadata(
  "Privacy Policy",
  "How the Designed to Click website handles information you send us, server logs, and cookies.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      lede="Last updated October 26, 2026. This policy describes the Designed to Click website as it is currently built. It is a practical notice for this site, and it is not legal advice."
    >
      <h2>Who we are</h2>
      <p>
        {siteName} operates this website. If you have a question about this
        policy or about information you have sent us, write to{" "}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>

      <h2>Information you send</h2>
      <p>
        The contact form does not submit information to this website and does
        not store it here. Choosing “Open email to send” opens your own email
        application with a message addressed to us. The message is sent only if
        you send that email.
      </p>
      <p>If you email us, we receive what you include. That is typically:</p>
      <ul>
        <li>Your name</li>
        <li>Your email address</li>
        <li>Your organization, if you provide it</li>
        <li>The project type and any website address you include</li>
        <li>Whatever you write about the project</li>
      </ul>
      <p>
        We use that information to reply, to decide whether we can take the
        work, and to carry on a project conversation. We do not sell personal
        information. We do not add you to an advertising list because you wrote
        to us.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Inquiry emails stay in our mail while the conversation is active, and
        for as long as we need them as ordinary business records. You can ask
        what we still have from an email conversation and ask us to delete it.
        We will do that, except where we need to keep a record for legal,
        security, or accounting reasons.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        This website does not set analytics cookies or advertising cookies, and
        it does not include third-party tracking scripts. If that changes, this
        policy will be updated before those tools are added, or at the time
        they are added.
      </p>

      <h2>Hosting and server logs</h2>
      <p>
        The company that hosts the site may keep standard server logs, such as
        IP address, browser type, the page requested, and the time of the
        request. Those logs are used to operate, secure, and troubleshoot the
        site. We do not use them to build marketing profiles.
      </p>

      <h2>Children</h2>
      <p>
        This site is not directed at children under 13, and we do not knowingly
        collect personal information from them. If you believe a child has
        emailed us, write to us and we will delete the message.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes, the new version will be posted on this page
        with a new date.
      </p>
    </LegalDocument>
  );
}
