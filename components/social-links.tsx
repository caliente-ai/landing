import type { ComponentType } from "react";
import { socials } from "@/lib/site";
import { LinkedInIcon, XIcon } from "@/components/icons";

const channels: {
  key: string;
  url: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
}[] = [
  { key: "linkedin", url: socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { key: "x", url: socials.x, label: "X", Icon: XIcon },
];

/** Footer social row. Renders only the channels that have a URL set in
 *  lib/site.ts — an empty list renders nothing, so no dead links ship. */
export function SocialLinks() {
  const live = channels.filter((c) => c.url);
  if (live.length === 0) return null;

  return (
    <div className="flex items-center gap-2">
      {live.map(({ key, url, label, Icon }) => (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Caliente AI on ${label}`}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-hairline bg-carbon text-slate transition-colors hover:border-hairline-bright hover:text-bone"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
