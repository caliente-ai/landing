import { site, demoVideoUrl } from "@/lib/site";
import { PlayIcon } from "@/components/icons";

/**
 * Demo video slot, above the fold (MAR-6 / MAR-7), framed as a product window.
 * While `demoVideoUrl` is null it renders a branded placeholder; once the
 * Loom/YouTube embed URL is set in lib/site.ts the live player takes over.
 */
export function VideoEmbed() {
  return (
    <section id="demo" className="relative px-6 pb-20 sm:pb-28">
      <div className="mx-auto max-w-5xl">
        <div className="reveal relative">
          {/* Ember halo behind the window */}
          <div
            aria-hidden
            className="absolute -inset-x-10 -top-10 bottom-4 -z-10 rounded-[40px] bg-ember/10 blur-[70px]"
          />
          <div className="overflow-hidden rounded-2xl border border-hairline-bright bg-carbon shadow-depth">
            {/* Window chrome */}
            <div className="flex items-center gap-2 border-b border-hairline px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-hairline-bright" />
              <span className="h-2.5 w-2.5 rounded-full bg-hairline-bright" />
              <span className="h-2.5 w-2.5 rounded-full bg-hairline-bright" />
              <div className="mx-auto rounded-md border border-hairline bg-white/[0.02] px-3 py-1">
                <span className="font-mono text-[11px] tracking-wide text-slate">
                  {site.domain}
                </span>
              </div>
            </div>
            {/* Video area */}
            <div className="relative aspect-video bg-ink">
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
          </div>
        </div>
        <p className="reveal mt-5 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-slate-dim">
          A 90-second walkthrough of the takeoff platform
        </p>
      </div>
    </section>
  );
}

function DemoPlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-carbon to-ink">
      <div
        aria-hidden
        className="blueprint-grid absolute inset-0 opacity-[0.05]"
      />
      <div
        aria-hidden
        className="animate-glow-pulse absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/25 blur-3xl"
      />
      <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full bg-ember text-ink shadow-[0_0_50px_-6px_rgba(255,92,53,0.7)]">
        <PlayIcon className="ml-1 h-7 w-7" />
      </div>
      <div className="relative text-center">
        <p className="font-display text-lg font-semibold text-bone">
          {site.product} — product demo
        </p>
        <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-slate">
          60–90 seconds · coming soon
        </p>
      </div>
    </div>
  );
}
