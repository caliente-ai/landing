import { site } from "@/lib/site";
import { ButtonLink } from "@/components/button-link";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-24 pb-16 sm:pt-32 sm:pb-20"
    >
      <HeroBackdrop />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="animate-rise-in inline-flex items-center gap-2 rounded-full border border-hairline-bright bg-white/[0.03] px-3.5 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_8px_2px_rgba(255,92,53,0.55)]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate">
            From {site.company}
          </span>
        </div>

        <h1 className="animate-rise-in mt-7 font-display font-bold tracking-[-0.03em] text-balance leading-[0.96] text-bone text-[clamp(3rem,9.5vw,6.5rem)] [animation-delay:80ms]">
          {site.product}
        </h1>

        <p className="animate-rise-in mt-6 text-balance font-display leading-[1.18] text-slate text-[clamp(1.35rem,3.6vw,2.05rem)] [animation-delay:160ms]">
          {site.tagline}
        </p>

        <p className="animate-rise-in mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate [animation-delay:240ms] sm:text-lg">
          The takeoff platform we walked through with you. Agents detect,
          measure, and price straight from your plan sets, with an estimator in
          command of every number.
        </p>

        <div className="animate-rise-in mt-9 flex w-full flex-col items-stretch gap-3 [animation-delay:320ms] sm:w-auto sm:flex-row sm:items-center">
          <ButtonLink href="#partner" variant="primary">
            Become a design partner
          </ButtonLink>
          <ButtonLink href="#demo" variant="secondary">
            Watch the 90-second demo
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function HeroBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Blueprint grid, dissolving toward the edges */}
      <div className="blueprint-grid fade-radial absolute inset-0 opacity-[0.05]" />
      {/* Warm ember light source, slowly breathing */}
      <div className="animate-glow-pulse absolute left-1/2 top-[-240px] h-[480px] w-[860px] max-w-[150vw] -translate-x-1/2 rounded-[50%] bg-ember/20 blur-[140px]" />
      {/* Cool blueprint counter-glow */}
      <div className="absolute left-1/2 top-[60px] h-[380px] w-[640px] max-w-[130vw] -translate-x-1/2 rounded-[50%] bg-blueprint/10 blur-[150px]" />
      {/* Settle back into ink at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
    </div>
  );
}
