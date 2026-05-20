import type { ReactNode } from "react";
import { DetectIcon, MeasureIcon, AuditIcon } from "@/components/icons";

/**
 * The three short sections from MAR-6: the problem, what we do, who it's for.
 * Tone: written for a prospect who already heard the pitch on a call — this
 * confirms what they were told, it does not re-pitch.
 */
export function ValueSections() {
  return (
    <>
      {/* The problem — manual takeoff pain */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-label-caps uppercase tracking-wide text-primary">
            The problem
          </p>
          <h2 className="mt-4 font-display text-display-lg text-on-background text-balance">
            Takeoff still eats your estimators&rsquo; best hours.
          </h2>
          <p className="mt-5 text-body-lg text-on-surface-variant text-pretty">
            Measuring quantities by hand off plan sets is slow, repetitive, and
            easy to get wrong. Every bid cycle, your senior estimators spend
            days counting symbols and tracing areas instead of pricing the work
            — and a single missed count follows the bid all the way to the
            number you submit.
          </p>
        </div>
      </section>

      {/* What we do — ProEstimator AI */}
      <section className="border-y border-border-subtle bg-surface px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-label-caps uppercase tracking-wide text-primary">
            What we do
          </p>
          <h2 className="mt-4 font-display text-display-lg text-on-background text-balance">
            ProEstimator AI does the measuring. Your estimator stays in command.
          </h2>
          <p className="mt-5 text-body-lg text-on-surface-variant text-pretty">
            Agents work the whole plan set — detecting symbols, tracing
            quantities, and structuring the takeoff inside a canvas your team
            already knows. Every number traces back to the sheet it came from.
            It&rsquo;s a faster takeoff with a full audit trail, not a black box.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
          <Capability
            icon={<DetectIcon />}
            title="Detects"
            body="Agents find and classify symbols across every sheet in the set."
          />
          <Capability
            icon={<MeasureIcon />}
            title="Measures"
            body="Counts, lengths, and areas captured straight from the plans."
          />
          <Capability
            icon={<AuditIcon />}
            title="Stays accountable"
            body="Every quantity links back to its sheet, ready for an estimator to review."
          />
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-label-caps uppercase tracking-wide text-primary">
            Who it&rsquo;s for
          </p>
          <h2 className="mt-4 font-display text-display-lg text-on-background text-balance">
            Built for estimating teams that bid to win.
          </h2>
          <p className="mt-5 text-body-lg text-on-surface-variant text-pretty">
            General and specialty contractors whose estimators carry the bid. If
            your team measures takeoff by hand today and the bid calendar never
            lets up, ProEstimator AI is built to fit the way you already work —
            not to replace the judgment that wins jobs.
          </p>
        </div>
      </section>
    </>
  );
}

function Capability({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-xl border border-border-subtle bg-background p-6 text-left">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-container text-primary">
        {icon}
      </div>
      <h3 className="mt-4 text-headline-md text-on-background">{title}</h3>
      <p className="mt-1.5 text-body-md text-on-surface-variant text-pretty">
        {body}
      </p>
    </div>
  );
}
