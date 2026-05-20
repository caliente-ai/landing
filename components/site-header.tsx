import { site } from "@/lib/site";
import { Mark } from "@/components/icons";
import { ButtonLink } from "@/components/button-link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/85 backdrop-blur-glass">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-md"
          aria-label={`${site.product} — home`}
        >
          <Mark className="h-8 w-8" />
          <span className="font-display text-headline-md text-on-background">
            {site.product}
          </span>
        </a>
        <ButtonLink
          href="#partner"
          variant="primary"
          size="sm"
          className="hidden sm:inline-flex"
        >
          Become a design partner
        </ButtonLink>
      </div>
    </header>
  );
}
