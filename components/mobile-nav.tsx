"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { navLinks } from "@/lib/site";
import { ButtonLink } from "@/components/button-link";

/**
 * Hamburger menu shown only below the `md` breakpoint. The panel is rendered
 * through a portal to document.body: the header carries a `backdrop-filter`,
 * which would otherwise trap this `position: fixed` panel inside the 64px
 * header box and collapse it to nothing.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Lock body scroll while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape, and when the viewport grows to desktop.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const panel = (
    <div
      inert={!open}
      className={`fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-ink transition-opacity duration-200 md:hidden ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <nav className="flex min-h-full flex-col px-6 py-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="border-b border-hairline py-5 font-display text-2xl font-semibold text-bone transition-colors active:text-ember"
          >
            {link.label}
          </Link>
        ))}
        <ButtonLink
          href="/#partner"
          variant="primary"
          className="mt-8"
          onClick={() => setOpen(false)}
        >
          Become a design partner
        </ButtonLink>
        <p className="mt-auto pt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-dim">
          From Caliente AI
        </p>
      </nav>
    </div>
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="relative z-50 flex h-10 w-10 items-center justify-center text-bone"
      >
        <span className="relative block h-4 w-5">
          <span
            className={`absolute left-0 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
              open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
              open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
            }`}
          />
        </span>
      </button>
      {mounted && createPortal(panel, document.body)}
    </div>
  );
}
