# Caliente AI — Brand Palette

**System name:** Ember
**Applies to:** all Caliente AI marketing — landing page, decks, outbound, social.
**Source of truth:** this file + `tailwind.config.ts` in the `landing` repo.

---

## The idea

*Caliente* means heat. **Ember** pairs a warm ember accent with a cool
blueprint-blue on a deep ink foundation — construction's own colours
(hi-vis safety orange + drawing blue), made cinematic. The blueprint blue sits
in the same family as the ProEstimator AI product app, so the app and the
marketing stay coherent.

## Core palette

| Token     | Hex       | Role                                       |
| --------- | --------- | ------------------------------------------ |
| Ink       | `#0B0C10` | Primary background / canvas                |
| Carbon    | `#14161C` | Raised surfaces, cards, the CTA panel      |
| Ember     | `#FF5C35` | Signature accent — CTAs, highlights        |
| Blueprint | `#3B82F6` | Supporting accent — data, links, cool glow |
| Bone      | `#F5F3EF` | Headlines / high-emphasis text             |
| Slate     | `#9498A6` | Body / secondary text                      |
| Hairline  | `#242732` | Borders, dividers, fine lines              |

## Extended shades

| Token            | Hex       | Use                                 |
| ---------------- | --------- | ----------------------------------- |
| Ink Deep         | `#070708` | Deepest wells, shadows              |
| Carbon High      | `#1C1F28` | Hover state for surfaces            |
| Ember Bright     | `#FF7A57` | Ember hover / glow highlight        |
| Ember Deep       | `#E0421F` | Ember pressed state                 |
| Blueprint Bright | `#5B9BFF` | Blueprint hover                     |
| Slate Dim        | `#7F828E` | Captions, mono labels, low emphasis |
| Hairline Bright  | `#343847` | Hover borders, raised dividers      |

## Usage balance

- **~70%** Ink + Carbon — the dark foundation
- **~22%** Bone + Slate — typography
- **~6%** Ember — accent; keep it scarce, that scarcity is what makes it land
- **~2%** Blueprint — sparingly, for "data / tech" moments

## Rules

- **Contrast** — Ember `#FF5C35` always carries **dark Ink text**, never white
  (white on ember fails WCAG contrast). Bone-on-Ink and Slate-on-Ink both pass AA.
- **Do** — let ember earn attention: roughly one ember element per viewport.
- **Don't** — flood large areas with ember, or set ember as body text on carbon.

## Typography

| Role    | Typeface       | Notes                                    |
| ------- | -------------- | ---------------------------------------- |
| Display | Inter Tight    | Headlines, product name — tight tracking |
| Text    | Inter          | Body copy, UI                            |
| Mono    | JetBrains Mono | Eyebrow labels, indices, spec text       |

All three are self-hosted via `next/font` — no external requests, fast load.

## Quick reference

```
Ink  #0B0C10   Carbon #14161C   Ember #FF5C35   Blueprint #3B82F6
Bone #F5F3EF   Slate  #9498A6   Hairline #242732
```
