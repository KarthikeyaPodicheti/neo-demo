# Design — Neo Skin Clinic

A locked design system for this app. Every page reads this file before emitting
code. Do not regenerate per page — extend or amend this file when the system
needs to grow.

## Genre

editorial

## Concept

Neo Skin presents itself as a **clinic ledger** — a published treatment record,
not a cosmetic resort. Mineral-paper surfaces, espresso ink, sodium-amber light
as the single accent. Information reads like a set fee schedule and clinical
notes; conversion reads like signing a first-visit dossier. Medical
credibility first, luxury as restraint. The home hero is the only
interactive moment on the site: a cursor-tracked amber wash, a cycling
emphasis word, and a live clinic-hours clock — three motion primitives total.

## Macrostructure family

- Marketing pages: `Marquee Hero` (home · statement-led first viewport),
  `Catalogue` (services · the fee-schedule ledger), `Portfolio Grid`
  (gallery · before/after contact sheet)
- App pages:       `Narrative Workflow` (book · the consultation as numbered
  stages 1.0 → 4.0)
- Content pages:   `Manifesto` (about · declarations, not cards),
  `Conversational FAQ` (contact · questions are the section structure)

## Theme

Almanac — **light** mineral-paper treatment hall. Every colour canaries
through `tokens.css`.

- `--color-paper`   oklch(94% 0.015 80)   mineral ivory (light)
- `--color-paper-2` oklch(91% 0.018 80)
- `--color-paper-3` oklch(86% 0.022 80)
- `--color-surface` oklch(96% 0.012 80)
- `--color-ink`     oklch(22% 0.014 60)   warm espresso ink
- `--color-ink-muted` oklch(46% 0.020 62)
- `--color-rule`    oklch(40% 0.020 60 / 18%)
- `--color-accent`  oklch(56% 0.135 60)   sodium amber
- `--color-accent-ink` oklch(98% 0.012 80)  paper-on-amber
- `--color-focus`   oklch(52% 0.150 60)

Accent is a highlighter: active nav, focus rings, links, small anchors. Never
fills more than a few percent of any viewport. Full-amber backgrounds carry
`--color-accent-ink` text, never `#fff`.

### Hero motion (the only interactive page-level sequence)

The home hero carries exactly three motion primitives (within the
≤ 3 primitives/page budget from `microinteractions.md`):

1. **Cursor wash** — pointer-tracked amber radial under the cursor inside the
   stage (`--mx` / `--my` CSS vars updated via `requestAnimationFrame`). Fine
   pointer only; on coarse pointer it collapses to a centred ambient.
2. **Em-word cycle** — the italic-emphasis word ("light." → "calm." →
   "honest." → "measured." → "yours." → "steady.") cycles every 3.2 s via
   Framer Motion `AnimatePresence`. Static (no caret) when reduced-motion.
3. **Live clock** — clinic hours indicator in the issue strip, ticking every
   second; "Open" / "Closed" reflects `CLINIC.hours`.

Plus, **scroll-morph** on the H1: past 12 % of viewport the H1's `y` eases
to 8 px and opacity to 0.92 — a tactile one-shot scroll response.

Hover-only affordances all have a focus equivalent. Every animation respects
`prefers-reduced-motion: reduce`.

## Typography

- Display: `Fraunces`, weight 340–600, style normal (italic banned on display)
- Body:    `IBM Plex Sans`, weight 400/500
- Mono:    `IBM Plex Mono`, weight 400/550 — numerals, metadata, labels only
- Wordmark: Fraunces, same family as display (editorial collapse is allowed here)
- Display tracking: -0.02em to -0.035em · labels: +0.12em uppercase mono
- Type scale anchor: `--text-display` = clamp(2.75rem, 5vw + 1rem, 5.35rem);
  single marquee statements may lift to clamp(3.5rem, 8.2vw, 7rem) at ≤ 24 chars
- Body weight on dark: 350–400 (reduce ~50 units from the light-mode norm)

## Spacing

4-point named scale, values in `tokens.css`. Pages use named tokens
(`var(--space-md)`), never raw values in CSS; Tailwind utilities may mirror the
same numbers for inline layout rhythm.

## Motion

- Easings: `--ease-out` cubic-bezier(0.16, 1, 0.3, 1) · `--ease-in`
  cubic-bezier(0.7, 0, 0.84, 0) · `--ease-in-out` cubic-bezier(0.65, 0, 0.35, 1)
- Reveal pattern: one orchestrated entrance on load; after that content is
  present (editorial = default-off for motion). Duration scale 0.85× (Almanac).
- Reduced-motion fallback: opacity-only, ≤ 150 ms, everything else instant.

## Microinteractions stance

- Silent success — no celebratory toasts. Booking confirm is a visible done-state.
- Hover delay 800 ms · focus delay 0 ms.
- Ledger rows: hover lifts via background shift + arrow slide (single signal).
- Focus rings appear instantly, never animated. Hit targets ≥ 44 × 44 px.

## CTA voice

- Primary CTA: filled amber (`--color-accent` bg, `--color-accent-ink` text),
  square edges, small-caps mono label, ~0.5rem padding-block. Verb copy
  ("Reserve a consultation").
- Secondary CTA: hairline border (`--color-cream` text), square edges, same
  label voice. Never pill where the theme is editorial.

## Per-page allowances

- Marketing pages MAY use Tier-A/C enrichment (single amber radial wash, ghost
  mono numerals). No re-drawn chrome, no gradient heroes, no stock-invented claims.
- App pages (book): function carries the page; minimal decoration.
- Content pages: typography only.

## What pages MUST share

- The wordmark (Fraunces, "Neo Skin").
- The accent colour and its ≤ 3 %-of-viewport placement.
- Fraunces display + IBM Plex Sans body + IBM Plex Mono metadata.
- The CTA voice (square, hairline, small-caps mono verbs).
- Hairline rule language: thin rules between ledger rows, 1px `--color-rule`.

## What pages MAY differ on

- Macrostructure within the family (marquee / catalogue / portfolio / narrative /
  manifesto / FAQ all use the same type, colour, and CTA voice).
- Section composition and heading placement, per the macrostructure.
- Enrichment — marketing pages only, restraint kept.

## Exports

Drop-in formats for re-using this design system in other projects.

### tokens.css

```css
:root {
  --color-paper:       oklch(94% 0.015 80);
  --color-paper-2:     oklch(91% 0.018 80);
  --color-paper-3:     oklch(86% 0.022 80);
  --color-surface:     oklch(96% 0.012 80);
  --color-ink:         oklch(22% 0.014 60);
  --color-ink-muted:   oklch(46% 0.020 62);
  --color-rule:        oklch(40% 0.020 60 / 18%);
  --color-accent:      oklch(56% 0.135 60);
  --color-accent-ink:  oklch(98% 0.012 80);
  --color-accent-soft: oklch(88% 0.060 75);
  --color-focus:       oklch(52% 0.150 60);
  --font-display: 'Fraunces', Georgia, serif;
  --font-body: 'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, monospace;
  --space-3xs: 0.125rem; --space-2xs: 0.25rem; --space-xs: 0.5rem;
  --space-sm: 0.75rem;   --space-md: 1rem;     --space-lg: 1.5rem;
  --space-xl: 2.5rem;    --space-2xl: 4rem;    --space-3xl: 6rem;
  --space-4xl: 9rem;
  --text-xs: 0.64rem; --text-sm: 0.8rem; --text-base: 1rem;
  --text-md: 1.25rem; --text-lg: 1.5625rem; --text-xl: 1.9531rem;
  --text-2xl: 2.4414rem; --text-3xl: 3.0518rem;
  --text-display: clamp(2.75rem, 5vw + 1rem, 5.35rem);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-short: 220ms;
  --radius-card: 0; --radius-pill: 999px;
}
```

### Tailwind v4 `@theme`

```css
@theme inline {
  --color-paper:    oklch(94% 0.015 80);
  --color-paper-2:  oklch(91% 0.018 80);
  --color-ink:      oklch(22% 0.014 60);
  --color-accent:   oklch(56% 0.135 60);
  --font-display:   'Fraunces', Georgia, serif;
  --font-body:      'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif;
  --font-mono:      'IBM Plex Mono', ui-monospace, monospace;
}
```

### DTCG `tokens.json`

```json
{
  "color": {
    "paper":   { "$value": "oklch(94% 0.015 80)", "$type": "color" },
    "paper-2": { "$value": "oklch(91% 0.018 80)", "$type": "color" },
    "ink":     { "$value": "oklch(22% 0.014 60)", "$type": "color" },
    "accent":  { "$value": "oklch(56% 0.135 60)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Fraunces", "$type": "fontFamily" },
    "body":    { "$value": "IBM Plex Sans", "$type": "fontFamily" },
    "mono":    { "$value": "IBM Plex Mono", "$type": "fontFamily" }
  },
  "space": {
    "xl": { "$value": "2.5rem", "$type": "dimension" }
  }
}
```

### shadcn/ui CSS variables

```css
:root {
  --background:        94% 0.015 80;   /* paper */
  --foreground:        22% 0.014 60;   /* ink */
  --primary:           56% 0.135 60;   /* accent */
  --primary-foreground: 98% 0.012 80;  /* accent-ink */
  --muted:             46% 0.020 62;   /* ink-muted */
  --border:            40% 0.020 60 / 18%;  /* rule */
  --ring:              52% 0.150 60;   /* focus */
  --radius:            0px;
}
```