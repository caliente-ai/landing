import type { ReactNode } from "react";
import { DetectIcon, MeasureIcon, AuditIcon } from "@/components/icons";

/**
 * The content sections for MAR-6: the problem, what we do, how it works, and
 * who it's for. Tone: written for a prospect who already heard the pitch on a
 * call. It confirms what they were told; it does not re-pitch.
 */
export function ValueSections() {
  return (
    <>
      {/* 01 / The problem (manual takeoff pain) */}
      <section className="relative px-6 py-24 sm:py-32">
        <div className="reveal mx-auto max-w-3xl text-center">
          <SectionEyebrow index="01" label="The problem" />
          <h2 className="mt-7 font-display font-bold tracking-[-0.02em] text-balance leading-[1.05] text-bone text-[clamp(2rem,4.6vw,3.25rem)]">
            Takeoff still eats your estimators&rsquo; best hours.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate sm:text-lg">
            Measuring quantities by hand off plan sets is slow, repetitive, and
            easy to get wrong. Every bid cycle, your senior estimators spend
            days counting symbols and tracing areas instead of pricing the work.
            A single missed count then follows the bid all the way to the number
            you submit.
          </p>
        </div>
      </section>

      {/* 02 / What we do (ProEstimator AI) */}
      <section className="relative px-6 py-24 sm:py-32">
        <div className="reveal mx-auto max-w-3xl text-center">
          <SectionEyebrow index="02" label="What we do" />
          <h2 className="mt-7 font-display font-bold tracking-[-0.02em] text-balance leading-[1.05] text-bone text-[clamp(2rem,4.6vw,3.25rem)]">
            ProEstimator AI does the measuring. Your estimator stays in command.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate sm:text-lg">
            Agents work the whole plan set, detecting symbols, tracing
            quantities, and structuring the takeoff inside a canvas your team
            already knows. Every number traces back to the sheet it came from:
            a faster takeoff with a full audit trail, not a black box.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-3">
          <CapabilityCard
            index="A1"
            icon={<DetectIcon />}
            title="Detect"
            body="Agents find and classify symbols across every sheet in the set."
          />
          <CapabilityCard
            index="A2"
            icon={<MeasureIcon />}
            title="Measure"
            body="Counts, lengths, and areas captured straight from the plans."
          />
          <CapabilityCard
            index="A3"
            icon={<AuditIcon />}
            title="Trace"
            body="Every quantity links back to the sheet it came from, ready for review."
          />
        </div>
      </section>

      {/* 03 / How it works */}
      <section id="how" className="relative px-6 py-24 sm:py-32">
        <div className="reveal mx-auto max-w-3xl text-center">
          <SectionEyebrow index="03" label="How it works" />
          <h2 className="mt-7 font-display font-bold tracking-[-0.02em] text-balance leading-[1.05] text-bone text-[clamp(2rem,4.6vw,3.25rem)]">
            From plan set to priced takeoff in three moves.
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-3">
          <StepCard
            step="01"
            title="Drop in the plan set"
            body="Upload your PDF plan set. ProEstimator AI organizes it sheet by sheet, ready to work."
          />
          <StepCard
            step="02"
            title="Agents run the takeoff"
            body="Detection agents sweep every sheet, counting symbols and measuring quantities into a structured takeoff."
          />
          <StepCard
            step="03"
            title="Review and own the numbers"
            body="Your estimator checks the work in a familiar canvas, where every quantity links back to its sheet."
          />
        </div>
      </section>

      {/* 04 / Who it's for */}
      <section id="who" className="relative px-6 py-24 sm:py-32">
        <div className="reveal mx-auto max-w-3xl text-center">
          <SectionEyebrow index="04" label="Who it's for" />
          <h2 className="mt-7 font-display font-bold tracking-[-0.02em] text-balance leading-[1.05] text-bone text-[clamp(2rem,4.6vw,3.25rem)]">
            Built for estimating teams that bid to win.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate sm:text-lg">
            General and specialty contractors whose estimators carry the bid. If
            your team measures takeoff by hand today and the bid calendar never
            lets up, ProEstimator AI is built to fit the way you already work.
            It will not replace the judgment that wins jobs.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-2.5">
            {[
              "General contractors",
              "Specialty trades",
              "In-house estimating teams",
              "Design-build firms",
            ].map((who) => (
              <span
                key={who}
                className="rounded-full border border-hairline bg-carbon px-4 py-2 text-[13px] text-slate"
              >
                {who}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function SectionEyebrow({ index, label }: { index: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em]">
      <span className="text-ember">{index}</span>
      <span className="h-px w-7 bg-hairline-bright" />
      <span className="text-slate">{label}</span>
    </div>
  );
}

function CapabilityCard({
  index,
  icon,
  title,
  body,
}: {
  index: string;
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="reveal group relative overflow-hidden rounded-2xl border border-hairline bg-carbon p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-hairline-bright">
      <span className="absolute right-5 top-5 font-mono text-[11px] tracking-[0.14em] text-slate-dim">
        {index}
      </span>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-hairline-bright bg-ember/10 text-ember transition-colors duration-300 group-hover:bg-ember/20">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-bone">
        {title}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-slate">{body}</p>
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-ember to-transparent transition-transform duration-500 group-hover:scale-x-100"
      />
    </div>
  );
}

function StepCard({
  step,
  title,
  body,
}: {
  step: string;
  title: string;
  body: string;
}) {
  return (
    <div className="reveal relative rounded-2xl border border-hairline bg-carbon p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-hairline-bright">
      <div className="bg-gradient-to-b from-bone to-slate-dim bg-clip-text font-display text-5xl font-bold leading-none text-transparent sm:text-6xl">
        {step}
      </div>
      <div className="mt-4 h-px w-10 bg-ember" />
      <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-bone">
        {title}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-slate">{body}</p>
    </div>
  );
}
