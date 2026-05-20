# landing

Caliente AI marketing landing page — Next.js 15 / React 19, deployed on Vercel.

Public validation surface for **ProEstimator AI** at https://caliente-ai.com
([MAR-6](https://calientesolutions.atlassian.net/browse/MAR-6)). Presentation only.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy

Hosted on Vercel, apex domain `caliente-ai.com` (DNS stays on Namecheap).
See [DEPLOY.md](DEPLOY.md) for the full Vercel + Namecheap runbook.

Design tokens are kept in lockstep with the `proestimator-web` repo
("Agentic Precision" design system) so the landing page and the product cohere.
