import { site } from "@/lib/site";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Soft brand glow behind the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <p className="relative mb-5 text-label-caps uppercase text-primary">
        from {site.company}
      </p>

      <h1 className="relative font-display text-display-hero text-on-background sm:text-[64px] sm:leading-[1.05]">
        {site.product}
      </h1>

      <p className="relative mt-5 max-w-md text-body-lg text-on-surface-variant">
        {site.tagline}
      </p>

      <div className="relative mt-12 flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-2 text-body-sm text-outline">
        <span className="h-1.5 w-1.5 rounded-full bg-warning-amber animate-pulse-subtle" />
        Site in progress — full launch coming soon.
      </div>
    </main>
  );
}
