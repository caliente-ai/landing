import Link from "next/link";
import { site } from "@/lib/site";
import { Mark } from "@/components/icons";
import { SocialLinks } from "@/components/social-links";

const policyLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline px-6 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Top row: brand + description, then contact */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="flex items-center gap-3">
              <Mark className="h-9 w-9" />
              <div>
                <p className="font-display text-sm font-semibold tracking-tight text-bone">
                  {site.company}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-dim">
                  {site.product}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-slate-dim">
              The agentic takeoff platform for construction estimators. In
              active development with our first design partners.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:items-end">
            <SocialLinks />
            <a
              href={`mailto:${site.contactEmail}`}
              className="text-sm text-slate transition-colors hover:text-ember"
            >
              {site.contactEmail}
            </a>
          </div>
        </div>

        {/* Bottom row: policies + copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-6 sm:flex-row">
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {policyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-slate-dim transition-colors hover:text-bone"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="font-mono text-[11px] tracking-[0.1em] text-slate-dim">
            © {new Date().getFullYear()} {site.company}
          </p>
        </div>
      </div>
    </footer>
  );
}
