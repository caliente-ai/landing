type IconProps = { className?: string };

/** Viewfinder: agents detecting symbols on a sheet. */
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

/** Ruler: quantities measured off the plans. */
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

/** Document with a check: every number traces back to its sheet. */
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

/**
 * Brand mark: a tower crane whose jib is an ember node network. Construction
 * structure plus connected intelligence, adapted to the Ember dark theme.
 */
export function Mark({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <g stroke="#F5F3EF" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 28.5h8" strokeWidth="2" />
        <path d="M12 28.5V8" strokeWidth="2" />
        <path d="M12 8V3.5" strokeWidth="2" />
        <path d="M12 3.5 30 8" strokeWidth="1.3" opacity="0.6" />
        <path d="M12 3.5 4 8" strokeWidth="1.3" opacity="0.6" />
        <path d="M23.5 8v5.5" strokeWidth="1.6" opacity="0.6" />
      </g>
      <path d="M4 8h26" stroke="#FF5C35" strokeWidth="2.2" strokeLinecap="round" />
      <g fill="#FF5C35">
        <circle cx="4" cy="8" r="2" />
        <circle cx="12" cy="8" r="2.3" />
        <circle cx="23.5" cy="8" r="2" />
        <circle cx="30" cy="8" r="2" />
      </g>
    </svg>
  );
}

export function LinkedInIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.73v20.53C0 23.22.8 24 1.77 24h20.45C23.2 24 24 23.22 24 22.26V1.73C24 .78 23.2 0 22.22 0z" />
    </svg>
  );
}

export function XIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.87l7.74-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.01 4.13H5.04z" />
    </svg>
  );
}
