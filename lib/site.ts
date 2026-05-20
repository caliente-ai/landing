/**
 * Single source of truth for company / product identity and the public domain.
 * If the domain or TLD ever changes (MAR-15), change it here only.
 */
export const site = {
  company: "Caliente AI",
  product: "ProEstimator AI",
  tagline: "Agentic precision for construction estimators.",
  domain: "caliente-ai.com",
  url: "https://caliente-ai.com",
  contactEmail: "hello@caliente-ai.com",
} as const;

/**
 * MAR-7 demo video embed URL. Null until the 60-90s walkthrough is published.
 * When it's ready, set this to the Loom/YouTube *embed* URL — <VideoEmbed>
 * swaps the branded placeholder for the live player with no other change.
 */
export const demoVideoUrl: string | null = null;

/**
 * Social profiles linked from the footer. Fill in the full URL to switch an
 * icon on; an empty value renders nothing — so we never ship a dead link.
 */
export const socials: { linkedin: string; x: string } = {
  linkedin: "",
  x: "",
};
