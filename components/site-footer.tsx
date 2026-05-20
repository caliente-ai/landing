import { site } from "@/lib/site";
import { Mark } from "@/components/icons";
import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex items-center gap-3">
          <Mark className="h-9 w-9" />
          <div className="text-center sm:text-left">
            <p className="font-display text-sm font-semibold tracking-tight text-bone">
              {site.product}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-dim">
              from {site.company}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 sm:items-end">
          <SocialLinks />
          <a
            href={`mailto:${site.contactEmail}`}
            className="text-sm text-slate transition-colors hover:text-ember"
          >
            {site.contactEmail}
          </a>
          <p className="font-mono text-[11px] tracking-[0.1em] text-slate-dim">
            © {new Date().getFullYear()} {site.company}
          </p>
        </div>
      </div>
    </footer>
  );
}
