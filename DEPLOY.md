# Deploying `caliente-ai.com`

Runbook for [MAR-6](https://calientesolutions.atlassian.net/browse/MAR-6) — host
the landing page on Vercel and bind the apex domain `caliente-ai.com`.

> **DNS host stays Namecheap.** Google Workspace email (MX / SPF / DKIM /
> DMARC) lives in Namecheap DNS from C0 / MAR-15. Do **not** switch the
> nameservers to Vercel — that would drop those records and break email. We
> only *add* two web records in Namecheap.

---

## 1 — Connect the repo to Vercel

1. <https://vercel.com> → **Add New… → Project → Import Git Repository**.
2. If `caliente-ai/landing` is not listed, click **Adjust GitHub App
   Permissions** and grant the Vercel app access to the `caliente-ai` org
   (or just the `landing` repo).
3. Select **`caliente-ai/landing`**. Vercel auto-detects **Next.js** — leave
   every build setting at its default (build `next build`, root `./`,
   production branch `main`). No environment variables are needed yet.
4. **Deploy.** First build takes ~1 minute. You get a `*.vercel.app` URL —
   open it to confirm the page renders.

Every push to `main` now auto-deploys to production.

## 2 — Add the domain in Vercel

1. Project → **Settings → Domains**.
2. Add **`caliente-ai.com`**. When prompted, also add **`www.caliente-ai.com`**
   and let Vercel redirect `www` → apex (apex as primary).
3. Vercel shows the exact DNS records to create — they should match step 3.

## 3 — Add the web records in Namecheap

Namecheap → **Domain List → Manage `caliente-ai.com` → Advanced DNS**.

**Remove the parking defaults** (these collide with the records below):

- `CNAME Record` · Host `www` · → `parkingpage.namecheap.com`
- `URL Redirect Record` (or `A Record`) · Host `@` · → Namecheap parking

**Leave every `MX` and `TXT` record untouched** — that is Google Workspace email.

**Add these two Host Records:**

| Type    | Host  | Value                  | TTL       |
| ------- | ----- | ---------------------- | --------- |
| `A`     | `@`   | `76.76.21.21`          | Automatic |
| `CNAME` | `www` | `cname.vercel-dns.com` | Automatic |

Save (green checkmark). If Vercel's dashboard shows a different IP/target,
use the value Vercel displays.

## 4 — Verify

- Vercel marks the domain **Valid** within minutes (DNS can take up to a few
  hours) and auto-issues the SSL certificate.
- Open **`https://caliente-ai.com` on a phone** — it must resolve, be served
  over HTTPS, and load in under 2 seconds (MAR-6 "done means").
- `https://www.caliente-ai.com` should redirect to the apex.

---

## Still open

- **Demo video** (MAR-7) — set `demoVideoUrl` in [`lib/site.ts`](lib/site.ts)
  to the Loom/YouTube embed URL once published; the placeholder swaps itself.
- **Design-partner form** — currently a mailto CTA to `hello@caliente-ai.com`.
  Pick a backend (Tally / Formspree / own route) to replace it with an inline
  3-field form.
