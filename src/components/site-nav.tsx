"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/container";
import { Mark } from "@/components/mark";
import { mainNav } from "@/lib/site";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNav() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenPath(null);
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md">
      <div className="h-1.5 bg-signal" aria-hidden="true" />
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Mark />
          <span className="font-serif text-[1.15rem] leading-none tracking-[-0.03em]">
            Designed to Click
          </span>
        </Link>
        <nav className="hidden items-center gap-x-5 lg:flex" aria-label="Primary">
          {mainNav.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`text-sm text-ink underline-offset-8 ${current ? "underline decoration-signal decoration-2" : "hover:underline"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 text-sm font-medium lg:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>
      <div id="site-menu" hidden={!open} className="border-t border-line lg:hidden">
        <nav aria-label="Primary">
          <Container className="flex flex-col py-2">
            {mainNav.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className="border-b border-line py-4 font-serif text-3xl tracking-[-0.03em] last:border-b-0"
                >
                  {item.label}
                </Link>
              );
            })}
          </Container>
        </nav>
      </div>
    </header>
  );
}
