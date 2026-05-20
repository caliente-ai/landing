import { site } from "@/lib/site";
import { ButtonLink } from "@/components/button-link";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-20 pb-14 sm:pt-28 sm:pb-16"
    >
      {/* Soft brand glow behind the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-60px] h-[460px] w-[760px] max-w-[120vw] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="inline-flex items-center rounded-full border border-border-subtle bg-surface px-3 py-1 text-label-caps uppercase tracking-wide text-primary">
          From {site.company}
        </p>

        <h1 className="mt-6 font-display font-bold tracking-tight text-[44px] leading-[1.06] text-on-background text-balance sm:text-[68px] sm:leading-[1.03]">
          {site.product}
        </h1>

        <p className="mt-5 text-[22px] leading-[30px] text-on-surface-variant text-balance sm:text-[26px] sm:leading-[34px]">
          {site.tagline}
        </p>

        <p className="mt-5 max-w-xl text-body-lg text-outline text-pretty">
          The takeoff platform we walked through with you — agents that detect,
          measure, and price straight from your plan sets, with an estimator in
          command of every number.
        </p>

        <div className="mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
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
