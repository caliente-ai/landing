import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="May 2026">
      <p>
        These terms cover your use of <strong>caliente-ai.com</strong>, the
        website for Caliente AI. By using the site, you agree to them.
      </p>

      <h2>About this site</h2>
      <p>
        This website provides general information about Caliente AI. Caliente AI
        is in active development, so descriptions on this site reflect our
        current plans and may change as the product evolves.
      </p>

      <h2>No guarantees</h2>
      <p>
        The site and its content are provided as they are, for information only.
        Nothing on this page is a binding offer, a contract, or a promise of
        specific features, availability, results, or pricing.
      </p>

      <h2>The design-partner program</h2>
      <p>
        Expressing interest in the design-partner program through this site
        starts a conversation. It does not create an obligation on either side.
        Any working relationship is set out in a separate written agreement.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The Caliente AI name, the site design, and all content here belong to
        Caliente AI. Please do not copy, reproduce, or reuse them without our
        written permission.
      </p>

      <h2>Links to other sites</h2>
      <p>
        Where this site links elsewhere, we are not responsible for the content
        or the practices of those other sites.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms. The date at the top of this page shows the
        current version.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Reach us at{" "}
        <a href="mailto:hello@caliente-ai.com">hello@caliente-ai.com</a>.
      </p>
    </LegalPage>
  );
}
