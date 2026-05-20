import { site, demoVideoUrl } from "@/lib/site";
import { PlayIcon } from "@/components/icons";

/**
 * Demo video slot, above the fold (MAR-6 / MAR-7).
 * While `demoVideoUrl` is null it renders a branded placeholder; once the
 * Loom/YouTube embed URL is set in lib/site.ts the live player takes over.
 */
export function VideoEmbed() {
  return (
    <section id="demo" className="px-6 pb-16 sm:pb-20">
      <div className="mx-auto max-w-4xl">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-border-subtle bg-sidebar-navy shadow-[0_30px_70px_-28px_rgba(15,23,42,0.5)]">
          {demoVideoUrl ? (
            <iframe
              src={demoVideoUrl}
              title={`${site.product} — product demo`}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <DemoPlaceholder />
          )}
        </div>
        <p className="mt-3 text-center text-body-sm text-outline">
          A 90-second walkthrough of the ProEstimator AI takeoff platform.
        </p>
      </div>
    </section>
  );
}

function DemoPlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-gradient-to-b from-sidebar-navy to-[#0a0f1d] px-6 text-center">
      {/* Precision grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:34px_34px]"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl"
      />

      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-primary shadow-ai-glow-strong">
        <PlayIcon className="ml-0.5 h-7 w-7" />
      </div>
      <div className="relative">
        <p className="font-display text-headline-md text-canvas-white">
          {site.product} — product demo
        </p>
        <p className="mt-1 text-body-sm text-secondary-fixed-dim">
          60–90 seconds · {site.domain}
        </p>
      </div>
      <span className="relative rounded-full border border-white/15 px-3 py-1 text-label-caps uppercase tracking-wide text-white/55">
        Demo video coming soon
      </span>
    </div>
  );
}
