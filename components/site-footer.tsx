import { site } from "@/lib/site";
import { Mark } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3">
          <Mark className="h-9 w-9" />
          <div>
            <p className="text-sm font-semibold text-on-background">
              {site.product}
            </p>
            <p className="text-body-sm text-outline">from {site.company}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 sm:items-end">
          <a
            href={`mailto:${site.contactEmail}`}
            className="text-body-sm text-on-surface-variant transition-colors hover:text-primary"
          >
            {site.contactEmail}
          </a>
          <p className="text-body-sm text-outline">
            © {new Date().getFullYear()} {site.company}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
