/**
 * Testimonials carousel.
 *
 * PLACEHOLDER CONTENT. The companies, roles, and quotes below are fictional.
 * Caliente AI has no customers yet, so this exists only to preview the design
 * (see /preview/testimonials, which is noindex and unlinked). Replace it with
 * real, attributable design-partner quotes before it goes on the live homepage.
 */
type Testimonial = {
  quote: string;
  company: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Our estimators stopped spending Mondays counting symbols. The takeoff is ready before the coffee is cold.",
    company: "Northgate Builders",
    role: "VP, Preconstruction",
  },
  {
    quote:
      "The audit trail is what sold our team. Every quantity points straight back to the sheet it came from.",
    company: "Summit Construction Group",
    role: "Chief Estimator",
  },
  {
    quote:
      "We started bidding more work without adding headcount. That math is hard to argue with.",
    company: "Ironside Contracting",
    role: "Director of Estimating",
  },
  {
    quote:
      "It fits the way our estimators already work. Nobody is fighting a new tool to get a number out.",
    company: "Meridian Build Partners",
    role: "Senior Estimator",
  },
  {
    quote:
      "Fewer missed counts means fewer surprises after we win the job. That is the whole game.",
    company: "Cornerstone Civil",
    role: "Preconstruction Manager",
  },
];

function TestimonialCard({ quote, company, role }: Testimonial) {
  return (
    <figure className="flex w-[330px] shrink-0 flex-col rounded-2xl border border-hairline bg-carbon p-7 sm:w-[360px]">
      <blockquote className="text-[15px] leading-relaxed text-bone">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-hairline pt-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-hairline-bright bg-ember/10 font-display text-sm font-bold text-ember">
          {company.charAt(0)}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-bone">
            {company}
          </span>
          <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-slate-dim">
            {role}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

function TestimonialRow() {
  return (
    <div className="flex shrink-0 gap-4 pr-4">
      {testimonials.map((t) => (
        <TestimonialCard key={t.company} {...t} />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="reveal mx-auto max-w-3xl px-6 text-center">
        <div className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ember">
          <span className="h-1.5 w-1.5 rotate-45 bg-ember" />
          Design partners
        </div>
        <h2 className="mt-6 font-display font-bold tracking-[-0.02em] text-balance leading-[1.05] text-bone text-[clamp(2rem,4.6vw,3.25rem)]">
          What estimating teams say.
        </h2>
      </div>
      <div className="marquee-fade mt-14 flex overflow-hidden">
        <div className="flex w-max [animation:marquee_60s_linear_infinite] hover:[animation-play-state:paused]">
          <TestimonialRow />
          <TestimonialRow />
        </div>
      </div>
    </section>
  );
}
