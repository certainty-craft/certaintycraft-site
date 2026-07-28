# Certainty Craft Design System

A calm-tech, "clarity over noise" design system built for **Certainty Craft** — the content-systems practice of Dae Courtney (Montreal) — and demonstrated end-to-end through a fictional case-study product, **meeting place.** (a calm VR meeting tool). One shared token/component layer powers both surfaces in this project.

**Sources provided:**
- Attached local codebase `certainty-craft/` — the real Certainty Craft marketing site (`Certainty Craft Landing.html`, `cc-styles.css`, `cc-script.js`, plus starter helpers `image-slot.js` / `tweaks-panel.jsx`), and 7 zip exports (`calm tech dae design system*.zip`) containing a previously-built tokens/components/guidelines/UI-kit set. Both were unpacked and reorganized into this project's standard layout — nothing here was invented from scratch; see "What's real vs. demo" below.
- No Figma file or additional codebase was attached.

## Who is Certainty Craft

Certainty Craft helps complex organizations (product, content, support, legal, brand teams) audit, structure, and govern the claims, source records, ownership rules, and reusable language behind everything they publish — websites, product UI, support content, sales decks, and AI-assisted drafting. Its signature offer is a 10-day "Content Trust Audit." The practice is run solo by Dae Courtney, a content systems strategist and copywriter based in Montreal.

## What's real vs. demo

- **Certainty Craft marketing site** (`ui_kits/marketing-site/`) is the real, working website copy and design for the practice — treat this as ground truth for voice and visual system.
- **meeting place.** (`ui_kits/app/`, the "Brand" guideline cards, `assets/orb*.png`, `assets/hero-bg.png`) is a fictional VR-meeting product used as a case-study / demo to show the same token system applied to a full application (sidebar, dashboard, in-room UI, post-meeting insights). It is not a real Certainty Craft client — treat its copy/screens as demonstration material only, not brand fact.

## Content fundamentals

**Certainty Craft (real, service-brand voice):**
- Editorial, direct, systems-minded. Second person ("you," "your team") mixed with plain declarative claims about the problem — e.g. "Most organizations do not have a content problem. They have a trust problem hiding inside a system problem."
- Sentences favor plain nouns over jargon (claims, sources, ownership, drift) and repeat a small working vocabulary throughout (certainty, trust, drift, structure, governance) so the reader learns the practice's own terms.
- Headlines are short and aphoristic ("Truth needs somewhere to live," "Certainty is designed," "Structure in service of meaning"); body copy is longer and explanatory underneath.
- No emoji, no exclamation points, no forced enthusiasm. Confidence comes from precision, not hype.
- Objection-handling is written as direct quotes ("We already have a CMS.") answered head-on rather than deflected.
- Lowercase wordmark with a trailing period as a design affectation ("certainty craft.") — same convention used for the demo brand.

**meeting place. (demo product voice):** lowercase brand name, short and warm ("good morning, Sorrel"), calm/confident tech copy ("inspiration takes presence."), no exclamation points, minimal iconography-first UI labels.

## Visual foundations

- **Palette:** deep petrol/teal is the core brand color (`--teal-600` `#0d7f8c` is the signature "wordmark" teal). A single electric "presence" blue (`--blue-500` `#1457d6`) is reserved for one focal accent per view (a CTA, the orb, a live indicator) — never used broadly. Warm brick/clay (`--brick-600`) and a golden amber "spark" (`--amber-500`) are secondary accents used sparingly (status dots, the wordmark's dotted "i"). Neutrals are cool "mist" greys, not warm greys. Semantic success/warning/danger colors are distinct from the brand accents.
- **Backgrounds:** signature "misty canvas" — very light cool-grey radial-gradient wash (`.mp-canvas` / `--canvas`), occasionally a full-bleed dark-to-light vertical "journey" gradient (night water → daylight mist) on the marketing site's long-scroll hero. No photographic backgrounds; one soft blurred glowing "orb" image is the brand's recurring atmospheric visual. No repeating geometric patterns or textures.
- **Type:** four-family system — Jost (thin, geometric) for display/hero type and the wordmark; Quicksand (rounded geometric) for headings/UI labels; Mulish (humanist sans) for body copy; IBM Plex Mono for eyebrows, timestamps, and data labels. Display type leans thin-weight and large; body stays regular-weight and generously spaced (1.5–1.65 line-height). Letter-spacing tightens on display type, widens on mono eyebrows/labels.
- **Spacing:** generous 4px-based scale from 4px to 144px; content max-widths 640–1320px. Airy, uncrowded layouts — lots of vertical rhythm between sections (96–160px section padding).
- **Corner radii:** generous and consistent — 6/10/14/20/28/36px steps plus true pills (999px) for buttons/chips/badges and a true circle for avatars/the orb. Nothing sharp-cornered.
- **Shadows:** soft, diffuse, cool-tinted, low-contrast ("objects float in mist") — never hard or dark. A separate warm "glow" shadow (teal or presence-blue) is used only for focal/brand-emphasis elements (the orb, a highlighted source-card, a hovering brand button).
- **Borders:** hairline, low-opacity borders (`--border`, `--hairline`) rather than heavy strokes; a slightly thicker brand-teal border marks an emphasized/"this is the answer" card.
- **Glass & blur:** frosted-glass panels (`backdrop-filter: blur`) are used for the nav on scroll, floating in-meeting controls, and mobile menus — always over motion or imagery, sparingly elsewhere.
- **Animation:** slow, calm easing (`--ease-out`, `--ease-in-out`, 130–420ms for UI, up to 8s for ambient drift). Scroll-triggered fade-up reveals on the marketing site; a slow floating/drifting animation on the orb; live "typing/listening" dot-pulses in the demo app. No bounces, no springs except a gentle toggle-switch spring. Respects `prefers-reduced-motion` throughout.
- **Hover / press states:** hover = slight lift (`translateY(-1px)` to `-3px`) plus a soft brand-tinted glow shadow, or a lightening/darkening of fill by one token step; press = return to resting position (buttons) or a slight `scale(0.97–0.985)` (touch devices only, no hover). No opacity-fade hover style.
- **Imagery color vibe:** cool-toned, soft-focus, slightly glowing — the orb photograph reads blue/teal/gold, never warm-neutral or desaturated/grainy.
- **Cards:** white/glass/tinted (cream, mint, inverse-teal) surfaces, soft shadow, soft border, generous rounded corners (20px), optional hover lift — never a colored left border accent.
- **Layout rules:** fixed/sticky top nav that swaps from transparent-on-dark to frosted-light as the page scrolls past its dark hero section.

## Iconography

- UI icons are **Lucide** (loaded from CDN, `<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js">`, used as `<i data-lucide="...">` + `lucide.createIcons()`) — this matches the stroke weight/style already used throughout the provided `meeting place.` app screens, so it was kept as-is rather than substituted.
- No icon font, no PNG icon set, and no emoji are used anywhere in either surface.
- The one recurring hand-made "icon" is the brand orb (`assets/orb.png`, `assets/orb-glow.png`) — a glowing textured sphere used as the brand's avatar/presence mark. Treat it as artwork, not an icon: float it in mist, never flatten, recolor, or place it over busy content.
- `assets/hero-bg.png` is a generic full-bleed background reference image.

## Fonts

Real brand font files were **not** provided. `tokens/fonts.css` substitutes the closest match for each role via Google Fonts and documents the substitution inline:
- Jost → thin geometric display/wordmark
- Quicksand → rounded geometric headings
- Mulish → humanist body
- IBM Plex Mono → mono/data/labels

**If you have the real brand font files, please share them and I'll swap these `@font-face` substitutes for the real ones.**

## Components

Enumerated from the provided component library (`components/`), grouped by concern:
- **Buttons** — `Button` (primary/presence/secondary/ghost/clay variants, 3 sizes, icon slots), `IconButton` (ghost/solid/outline, icon-only, requires an a11y label)
- **Core** — `Avatar` (image or initials, presence status dot, 3 sizes), `Badge` (status pill, 8 tones, optional dot), `Card` (default/glass/cream/mint/inverse surfaces, optional interactive/flat/padding)
- **Forms** — `Input` (label/hint/error/icon), `Checkbox`, `Switch`
- **Navigation** — `Tabs` (pill or underline variant, controlled/uncontrolled)

No components beyond this inventory were added.

## UI kits

- `ui_kits/marketing-site/` — the real Certainty Craft website: full long-scroll landing page (hero, problem/approach narrative, 10-day audit, Core Content model, services, objections, about, booking CTA) with a tweakable living-water background.
- `ui_kits/app/` — the **meeting place.** case-study app: sidebar shell + Home dashboard, an immersive Meeting Room (presence orbs, live transcript/insights panel, frosted floating controls), and a post-meeting Insights screen (summary/actions/goals/transcript tabs). Demonstrates the component library composed into a full product.

## Index

- `styles.css` — root stylesheet; imports everything below
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`
- `components/buttons/`, `components/core/`, `components/forms/`, `components/navigation/` — see Components above
- `guidelines/` — foundation specimen cards: Brand (wordmark, orb), Colors (teal/blue/neutrals/status/accents/surfaces), Type (scale/display/headings/body/mono), Spacing (scale/radius/elevation)
- `ui_kits/marketing-site/`, `ui_kits/app/` — see UI kits above
- `assets/` — `orb.png`, `orb-glow.png` (brand mark), `hero-bg.png` (generic background)
- `thumbnail.html` — homepage tile
- `SKILL.md` — Claude Code / Agent Skills–compatible package description

## Intentional additions

None — every component, token, and screen here traces to the provided sources.

## Caveats & ask

- **Brand identity is a judgment call.** The provided files contain two brand identities sharing one token system: the real "Certainty Craft" site and a fully fleshed-out fictional "meeting place." product (logo, orb asset, full app UI kit). I've framed the design system around Certainty Craft as the primary/real brand and kept meeting place. as a labeled case-study demo — **please confirm this is the right framing**, or let me know if meeting place. should actually be treated as the primary brand instead (or split into its own project).
- **No real logo file exists for Certainty Craft** — its wordmark is CSS text only ("certainty craft."), so the thumbnail and any brand mark uses styled type, not a mark.
- **Fonts are Google Fonts substitutes** (Jost/Quicksand/Mulish/IBM Plex Mono) — flag if you have the real brand font files.
- Only one product screen size (desktop) was provided for the app case study — no mobile app screens exist to recreate.

Tell me what to iterate on — brand framing, more components, more marketing-site sections, mobile app screens, or real fonts/logo once you have them.
