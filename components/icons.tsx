type IconProps = { className?: string };

/** Viewfinder — agents detecting symbols on a sheet. */
export function DetectIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 8.5V5.5A1.5 1.5 0 0 1 5.5 4h3" />
      <path d="M15.5 4h3A1.5 1.5 0 0 1 20 5.5v3" />
      <path d="M20 15.5v3a1.5 1.5 0 0 1-1.5 1.5h-3" />
      <path d="M8.5 20h-3A1.5 1.5 0 0 1 4 18.5v-3" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

/** Ruler — quantities measured off the plans. */
export function MeasureIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2.5" y="8.5" width="19" height="7" rx="1.5" />
      <path d="M7 8.5v3M12 8.5v4M17 8.5v3" />
    </svg>
  );
}

/** Document with a check — every number traces back to its sheet. */
export function AuditIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14 3.5H6.5A1.5 1.5 0 0 0 5 5v14a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 19V8.5z" />
      <path d="M14 3.5V8.5h5" />
      <path d="M8.5 14l2.5 2.5 4.5-4.5" />
    </svg>
  );
}

export function PlayIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5.5v13a1 1 0 0 0 1.54.84l10-6.5a1 1 0 0 0 0-1.68l-10-6.5A1 1 0 0 0 8 5.5z" />
    </svg>
  );
}

/** Brand mark — a precision crosshair in an ember tile, matching app/icon.svg. */
export function Mark({ className = "h-8 w-8" }: IconProps) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-lg bg-ember ${className}`}
      aria-hidden
    >
      <svg className="h-3/5 w-3/5" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="7" stroke="#0B0C10" strokeWidth="2.25" />
        <path
          d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4"
          stroke="#0B0C10"
          strokeWidth="2.25"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="1.9" fill="#0B0C10" />
      </svg>
    </span>
  );
}
