import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "light";
type Size = "sm" | "md";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-on-primary shadow-sm hover:bg-primary/90",
  secondary:
    "border border-outline-variant bg-surface text-on-surface hover:bg-surface-container-low",
  light: "bg-canvas-white text-sidebar-navy shadow-sm hover:bg-white/90",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-[15px]",
};

/** Anchor styled as a button. The page has no JS interactivity, so every
 *  call to action is a plain link — to an in-page section or a mailto. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}
