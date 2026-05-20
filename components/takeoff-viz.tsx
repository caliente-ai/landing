/**
 * A self-running visualisation of ProEstimator AI working a takeoff — it stands
 * in for the demo video (MAR-7) until that ships. Pure SVG + CSS, zero
 * JavaScript: the plan draws itself in, detection boxes lock on, a scan sweeps,
 * and the symbol counter ticks up live (CSS @property counter).
 */

const symbols = [
  { x: 235, y: 195, delay: "1.5s" },
  { x: 355, y: 315, delay: "1.68s" },
  { x: 485, y: 170, delay: "1.86s" },
  { x: 610, y: 295, delay: "2.04s" },
  { x: 690, y: 205, delay: "2.22s" },
  { x: 255, y: 345, delay: "2.4s" },
  { x: 540, y: 240, delay: "2.58s" },
];

/** Four L-shaped corner brackets for an AI-style detection box. */
function corners(x: number, y: number) {
  const h = 26;
  const c = 9;
  return [
    `M${x - h} ${y - h + c}V${y - h}H${x - h + c}`,
    `M${x + h - c} ${y - h}H${x + h}V${y - h + c}`,
    `M${x + h} ${y + h - c}V${y + h}H${x + h - c}`,
    `M${x - h + c} ${y + h}H${x - h}V${y + h - c}`,
  ].join("");
}

export function TakeoffViz() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden bg-gradient-to-b from-carbon to-ink"
    >
      <div className="blueprint-grid absolute inset-0 opacity-[0.06]" />
      <div className="absolute left-1/2 top-1/2 h-72 w-96 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-ember/10 blur-[80px]" />

      <svg
        viewBox="0 0 880 495"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <defs>
          <linearGradient id="viz-scan-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#FF5C35" stopOpacity="0" />
            <stop offset="0.5" stopColor="#FF7A57" stopOpacity="0.5" />
            <stop offset="1" stopColor="#FF5C35" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Floor plan — draws itself in */}
        <g
          stroke="#5B9BFF"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        >
          <path className="viz-draw" pathLength={1} style={{ animationDelay: "0.1s" }} d="M120 95H760V400H120Z" />
          <path className="viz-draw" pathLength={1} style={{ animationDelay: "0.4s" }} d="M455 95V255" />
          <path className="viz-draw" pathLength={1} style={{ animationDelay: "0.6s" }} d="M455 255H760" />
          <path className="viz-draw" pathLength={1} style={{ animationDelay: "0.8s" }} d="M120 255H310" />
          <path className="viz-draw" pathLength={1} style={{ animationDelay: "0.95s" }} d="M310 255V400" />
          <path className="viz-draw" pathLength={1} style={{ animationDelay: "1.1s" }} d="M310 312A48 48 0 0 1 358 360" />
        </g>

        {/* Scan sweep */}
        <rect
          className="viz-scan"
          x={0}
          y={86}
          width={130}
          height={326}
          fill="url(#viz-scan-grad)"
        />

        {/* Detection boxes — lock on, staggered */}
        {symbols.map((s) => (
          <g
            key={`${s.x}-${s.y}`}
            className="viz-detect"
            style={{ animationDelay: s.delay }}
          >
            <rect
              x={s.x - 26}
              y={s.y - 26}
              width={52}
              height={52}
              rx={2}
              fill="#FF5C35"
              fillOpacity={0.07}
              stroke="#FF5C35"
              strokeWidth={1.4}
            />
            <path
              d={corners(s.x, s.y)}
              stroke="#FF7A57"
              strokeWidth={2.4}
              strokeLinecap="round"
            />
            <circle cx={s.x} cy={s.y} r={3.4} fill="#FF5C35" />
          </g>
        ))}
      </svg>

      {/* HUD */}
      <div className="viz-hud pointer-events-none absolute inset-0">
        <div className="absolute left-3 top-3 flex items-center gap-2 rounded-md border border-hairline-bright bg-ink/75 px-2.5 py-1.5 backdrop-blur-glass">
          <span className="viz-blink h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_6px_1px_rgba(255,92,53,0.7)]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone">
            Detecting
          </span>
        </div>
        <div className="absolute right-3 top-3 rounded-md border border-hairline bg-ink/60 px-2.5 py-1.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate">
            Sheet A-201
          </span>
        </div>
        <div className="absolute bottom-3 left-3">
          <div className="flex items-end gap-2">
            <span className="viz-count font-display text-2xl font-bold leading-none text-bone sm:text-3xl" />
            <span className="mb-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ember">
              symbols
            </span>
          </div>
          <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-dim">
            detected &amp; measured
          </p>
        </div>
      </div>
    </div>
  );
}
