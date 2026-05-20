import type { ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "sm" | "md";

const variants: Record<Variant, string> = {
  primary: "bg-ember text-ink shadow-ember-glow hover:bg-ember-bright",
  secondary:
    "border border-hairline-bright bg-white/[0.03] text-bone hover:border-slate-dim hover:bg-white/[0.06]",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-5 py-3 text-[15px]",
};

/** Anchor styled as a button. The page ships zero client JS, so every call to
 *  action is a plain link — to an in-page section or a mailto. */
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
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-tight transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}
