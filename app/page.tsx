import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { VideoEmbed } from "@/components/video-embed";
import { ValueSections } from "@/components/value-sections";
import { PartnerCTA } from "@/components/partner-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <VideoEmbed />
        <ValueSections />
        <PartnerCTA />
      </main>
      <SiteFooter />
    </>
  );
}
