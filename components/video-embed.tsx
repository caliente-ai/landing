import { site } from "@/lib/site";

/**
 * Demo slot, above the fold (MAR-6 / MAR-7), framed as a product window.
 * Plays the self-hosted takeoff-platform walkthrough. The file lives in
 * public/demo, so the page stays free of third-party players and tracking,
 * in line with our privacy policy.
 *
 * Music: "Horizons" by Alegend, a free-to-use track from freetouse.com.
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
              <video
                className="absolute inset-0 h-full w-full object-cover"
                controls
                preload="metadata"
                playsInline
                poster="/demo/caliente-demo-poster.jpg"
                aria-label={`${site.name} takeoff platform walkthrough`}
              >
                <source src="/demo/caliente-demo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <p className="reveal mt-5 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-slate-dim">
          The takeoff platform, start to finish
        </p>
      </div>
    </section>
  );
}
