import Link from "next/link";
import { site, navLinks } from "@/lib/site";
import { Mark } from "@/components/icons";
import { ButtonLink } from "@/components/button-link";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline/80 bg-ink/70 backdrop-blur-glass">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label={`${site.company} home`}
        >
          <Mark className="h-8 w-8" />
          <span className="font-display text-lg font-semibold tracking-tight text-bone">
            {site.company}
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate transition-colors hover:text-bone"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ButtonLink
            href="/#partner"
            variant="primary"
            size="sm"
            className="hidden md:inline-flex"
          >
            Become a design partner
          </ButtonLink>
          {/* Hamburger menu, smartphones only */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
