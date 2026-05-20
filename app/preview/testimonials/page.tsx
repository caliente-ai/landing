import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Testimonials } from "@/components/testimonials";

/**
 * Internal design preview for the testimonials carousel. Not linked from the
 * site and not indexed. The content is placeholder (fictional companies), so
 * this never goes on the live homepage until there are real quotes.
 */
export const metadata: Metadata = {
  title: "Testimonials preview",
  robots: { index: false, follow: false },
};

export default function TestimonialsPreviewPage() {
  return (
    <>
      <div
        aria-hidden
        className="grain pointer-events-none fixed inset-0 z-[1] opacity-[0.035]"
      />
      <SiteHeader />
      <main className="relative overflow-x-clip">
        <div className="border-b border-hairline bg-ember/[0.08] px-6 py-3">
          <p className="mx-auto max-w-6xl text-center font-mono text-[11px] uppercase tracking-[0.16em] text-ember">
            Internal design preview · placeholder companies, not real testimonials
          </p>
        </div>
        <Testimonials />
      </main>
      <SiteFooter />
    </>
  );
}
