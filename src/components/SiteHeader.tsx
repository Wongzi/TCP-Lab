"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/Container";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/team/", label: "Team" },
  { href: "/publications/", label: "Publications" },
  { href: "/outreach/", label: "Outreach" },
  { href: "/open-positions/", label: "Open Positions" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-30 border-b border-[#D8E4F0] bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Link
            href="/"
            className="flex min-w-0 flex-col text-[#1F2937]"
            onClick={() => setOpen(false)}
          >
            <span className="truncate text-sm font-bold sm:text-base">TCP Lab</span>
            <span className="hidden text-xs text-[#5F6F82] sm:block">
              Department of Psychology, Tsinghua University
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive(item.href)
                    ? "bg-[#E8F1FA] text-[#2F4F78]"
                    : "text-[#4B5563] hover:bg-[#F5F9FD] hover:text-[#2F4F78]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-[#B8CAE0] px-3 text-sm font-semibold text-[#2F4F78] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            Menu
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-navigation" className="border-t border-[#D8E4F0] bg-white lg:hidden">
          <Container className="py-3">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3 text-sm font-medium transition ${
                    isActive(item.href)
                      ? "bg-[#E8F1FA] text-[#2F4F78]"
                      : "text-[#4B5563] hover:bg-[#F5F9FD] hover:text-[#2F4F78]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
