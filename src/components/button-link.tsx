import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
}) {
  const styles =
    variant === "solid"
      ? "bg-ink text-paper hover:bg-signal-deep"
      : "border border-ink/15 bg-transparent text-ink hover:border-ink";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-5 py-3 text-sm font-medium transition-colors ${styles}`}
    >
      {children}
    </Link>
  );
}
