import { site } from "@/lib/site";
import { ButtonLink } from "@/components/button-link";

/**
 * Design-partner ask (MAR-6). The inline 3-field form is deferred until the
 * form backend is chosen (Tally / Formspree / own route). Until then this is
 * a clean mailto CTA: it opens a pre-structured email to hello@ with the same
 * three fields, so qualified inbound still lands in the right inbox.
 */
const mailtoHref =
  `mailto:${site.contactEmail}` +
  `?subject=${encodeURIComponent("Design partner — ProEstimator AI")}` +
  `&body=${encodeURIComponent(
    "Name:\nCompany:\nRole:\n\nA bit about your estimating team:\n",
  )}`;

export function PartnerCTA() {
  return (
    <section id="partner" className="relative px-6 py-24 sm:py-32">
      <div className="reveal relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-hairline-bright bg-carbon px-8 py-16 text-center sm:px-16 sm:py-20">
        <div
          aria-hidden
          className="blueprint-grid fade-radial absolute inset-0 opacity-[0.05]"
        />
        <div
          aria-hidden
          className="absolute left-1/2 top-0 h-72 w-[680px] max-w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-ember/25 blur-[120px]"
        />
        <div className="relative">
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ember">
            <span className="h-1.5 w-1.5 rotate-45 bg-ember" />
            Design partners
          </div>
          <h2 className="mt-6 font-display font-bold tracking-[-0.02em] text-balance leading-[1.05] text-bone text-[clamp(2.1rem,5vw,3.5rem)]">
            Want to help shape ProEstimator AI?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate sm:text-lg">
            We&rsquo;re working with a small group of estimating teams to build
            ProEstimator AI around real bid workflows. If that&rsquo;s you, tell
            us a little about your team — your name, company, and role is plenty
            to start the conversation.
          </p>
          <div className="mt-9 flex justify-center">
            <ButtonLink href={mailtoHref} variant="primary">
              Become a design partner
            </ButtonLink>
          </div>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-dim">
            Opens an email to {site.contactEmail}
          </p>
        </div>
      </div>
    </section>
  );
}
