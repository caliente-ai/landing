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
    <section id="partner" className="px-6 py-20 sm:py-28">
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border-subtle bg-sidebar-navy px-8 py-14 text-center sm:px-14 sm:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-[520px] max-w-[120%] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/25 blur-[120px]"
        />
        <p className="relative text-label-caps uppercase tracking-wide text-inverse-primary">
          Design partners
        </p>
        <h2 className="relative mt-4 font-display text-display-lg text-canvas-white text-balance">
          Want to help shape ProEstimator AI?
        </h2>
        <p className="relative mx-auto mt-4 max-w-lg text-body-lg text-secondary-fixed-dim text-pretty">
          We&rsquo;re working with a small group of estimating teams to build
          ProEstimator AI around real bid workflows. If that&rsquo;s you, tell
          us a little about your team — your name, company, and role is plenty
          to start the conversation.
        </p>
        <div className="relative mt-8 flex justify-center">
          <ButtonLink href={mailtoHref} variant="light">
            Become a design partner
          </ButtonLink>
        </div>
        <p className="relative mt-4 text-body-sm text-white/45">
          Opens an email to {site.contactEmail}.
        </p>
      </div>
    </section>
  );
}
