import { site, demoVideoUrl } from "@/lib/site";
import { TakeoffViz } from "@/components/takeoff-viz";

/**
 * Demo slot, above the fold (MAR-6 / MAR-7), framed as a product window.
 * While `demoVideoUrl` is null it runs the live TakeoffViz; once the
 * Loom/YouTube embed URL is set in lib/site.ts the real player takes over.
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
            {/* Demo area */}
            <div className="relative aspect-video bg-ink">
              {demoVideoUrl ? (
                <iframe
                  src={demoVideoUrl}
                  title={`${site.product} product demo`}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <TakeoffViz />
              )}
            </div>
          </div>
        </div>
        <p className="reveal mt-5 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-slate-dim">
          Live preview · the full 90-second walkthrough lands here soon
        </p>
      </div>
    </section>
  );
}
