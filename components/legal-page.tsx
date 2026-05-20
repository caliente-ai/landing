import type { ReactNode } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

/** Shared chrome for the policy pages (Privacy, Terms). */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className="scroll-progress" aria-hidden />
      <div
        aria-hidden
        className="grain pointer-events-none fixed inset-0 z-[1] opacity-[0.035]"
      />
      <SiteHeader />
      <main className="relative overflow-x-clip px-6 pb-24 pt-16 sm:pt-20">
        <article className="mx-auto max-w-2xl">
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate transition-colors hover:text-ember"
          >
            ‹ Back to home
          </Link>
          <h1 className="mt-6 font-display text-[clamp(2.1rem,5vw,3rem)] font-bold tracking-[-0.02em] text-bone">
            {title}
          </h1>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-dim">
            Last updated · {updated}
          </p>
          <div className="legal-prose mt-10">{children}</div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
