"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-canvas/90 backdrop-blur-sm border-b border-border">
        <nav className="container-content flex items-center justify-between h-16">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-serif italic text-xl text-heading tracking-wide hover:text-accent transition-colors"
          >
            DeClaire Design
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-xs tracking-[0.15em] uppercase font-sans transition-colors relative pb-0.5
                    ${
                      active
                        ? "text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-accent"
                        : "text-body hover:text-heading"
                    }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 cursor-pointer"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px bg-heading transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-px bg-heading transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px bg-heading transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-canvas flex flex-col justify-center items-center gap-8 transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map(({ href, label }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`font-serif italic text-3xl transition-colors ${
                active ? "text-accent" : "text-heading hover:text-accent"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </>
  );
}
