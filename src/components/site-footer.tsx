import Link from "next/link";
import { Container } from "@/components/container";
import { contactEmail, legalNav, mainNav, siteName } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-ink text-paper">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-serif text-3xl tracking-[-0.03em]">{siteName}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/75">
            A web development studio for marketing sites with a clear job:
            explain the work, and make the next step obvious.
          </p>
          <a
            className="mt-6 inline-block text-sm underline decoration-signal underline-offset-4"
            href={`mailto:${contactEmail}`}
          >
            {contactEmail}
          </a>
        </div>
        <nav className="lg:col-span-3" aria-label="Footer">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-paper/60">
            Pages
          </p>
          <ul className="mt-4 space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="lg:col-span-4" aria-label="Legal">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-paper/60">
            Policies
          </p>
          <ul className="mt-4 space-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <Container className="border-t border-white/10 py-6">
        <p className="text-sm text-paper/60">© 2026 {siteName}</p>
      </Container>
    </footer>
  );
}
