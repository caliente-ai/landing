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

/** Anchor styled as a button. Used for in-page section links and mailto links. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-tight transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}
