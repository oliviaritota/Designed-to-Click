import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost" | "accent" | "ghost-on-dark";
}) {
  const styles = {
    solid: "bg-ink text-paper hover:bg-signal hover:text-ink",
    ghost: "border border-ink/15 bg-transparent text-ink hover:border-ink",
    accent: "bg-signal text-ink hover:bg-paper",
    "ghost-on-dark":
      "border border-paper/30 bg-transparent text-paper hover:border-paper",
  }[variant];

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-5 py-3 text-sm font-medium transition-colors ${styles}`}
    >
      {children}
    </Link>
  );
}
