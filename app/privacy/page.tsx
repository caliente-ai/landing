import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="May 2026">
      <p>
        This policy explains what happens to your information when you visit{" "}
        <strong>caliente-ai.com</strong>, the website for ProEstimator AI by
        Caliente AI.
      </p>

      <h2>The short version</h2>
      <p>
        This website sets no cookies, runs no analytics, and does not track you.
        The only personal information we ever receive is what you choose to send
        us directly.
      </p>

      <h2>What we collect</h2>
      <p>
        If you use the design-partner button or email us, your message reaches
        us at{" "}
        <a href="mailto:hello@caliente-ai.com">hello@caliente-ai.com</a> and
        includes whatever you provide: typically your name, company, role, email
        address, and anything you write.
      </p>
      <p>
        The site is hosted on Vercel. Like any web host, Vercel processes basic
        technical request data (such as IP address and browser type) to serve
        the page and keep it secure. We do not add our own tracking on top of
        that.
      </p>

      <h2>How we use it</h2>
      <p>
        We use what you send us for one purpose: to reply to you and to consider
        whether the ProEstimator AI design-partner program is a fit. We do not
        sell your information, and we do not share it except where it is needed
        to run our email (Google Workspace).
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep design-partner correspondence for as long as the program is
        active and our conversation stays relevant. You can ask us to delete
        your information at any time.
      </p>

      <h2>Your choices</h2>
      <p>
        To see what we hold about you, correct it, or have it deleted, email{" "}
        <a href="mailto:hello@caliente-ai.com">hello@caliente-ai.com</a> and we
        will take care of it.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes, the date at the top of this page will change
        with it.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy? Reach us at{" "}
        <a href="mailto:hello@caliente-ai.com">hello@caliente-ai.com</a>.
      </p>
    </LegalPage>
  );
}
