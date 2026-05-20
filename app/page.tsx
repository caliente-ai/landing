import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { VideoEmbed } from "@/components/video-embed";
import { ValueSections } from "@/components/value-sections";
import { PartnerCTA } from "@/components/partner-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      {/* Filmic grain over the whole page */}
      <div
        aria-hidden
        className="grain pointer-events-none fixed inset-0 z-[1] opacity-[0.035]"
      />
      <SiteHeader />
      <main className="relative overflow-x-clip">
        <Hero />
        <VideoEmbed />
        <ValueSections />
        <PartnerCTA />
      </main>
      <SiteFooter />
    </>
  );
}
