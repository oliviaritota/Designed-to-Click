import type { Metadata } from "next";

export const siteName = "Designed to Click";

export const siteDescription =
  "Designed to Click is a web development studio. We plan, design, and build marketing websites that are clear, fast, and easy to use.";

/**
 * Canonical site URL. Set NEXT_PUBLIC_SITE_URL in production so the sitemap,
 * robots file, and social metadata point at the live domain.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

/**
 * Inbox for project inquiries. Replace this before sharing the contact page.
 */
export const contactEmail = "hello@designedtoclick.com";

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our Work" },
  { href: "/process", label: "The Process" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalNav = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Website Terms of Use" },
  { href: "/accessibility", label: "Accessibility Statement" },
] as const;

export const allRoutes = [...mainNav, ...legalNav];

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
    },
  };
}
