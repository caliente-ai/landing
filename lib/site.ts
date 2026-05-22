/**
 * Single source of truth for company identity and the public domain.
 * If the domain or TLD ever changes (MAR-15), change it here only.
 */
export const site = {
  name: "Caliente AI",
  tagline: "Agentic precision for construction estimators.",
  domain: "caliente-ai.com",
  url: "https://caliente-ai.com",
  contactEmail: "hello@caliente-ai.com",
} as const;

/**
 * Social profiles linked from the footer. Fill in the full URL to switch an
 * icon on; an empty value renders nothing, so we never ship a dead link.
 */
export const socials: { linkedin: string; x: string } = {
  linkedin: "https://www.linkedin.com/company/caliente-ai",
  x: "https://x.com/caliente_ai",
};

/** Primary navigation, shared by the desktop header and the mobile menu. */
export const navLinks = [
  { href: "/#demo", label: "Demo" },
  { href: "/#how", label: "How it works" },
  { href: "/#who", label: "Who it’s for" },
];
