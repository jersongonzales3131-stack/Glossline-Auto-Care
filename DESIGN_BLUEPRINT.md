# Glossline Auto Care — Design Blueprint

## Design concept

**“Light across the finish.”** The visual identity is **Obsidian & Champagne**: a precise, contemporary detailing studio with a dominant dark-charcoal and near-black canvas, warm ivory type, and restrained champagne-gold accents. The distinctive visual element remains a large editorial photograph with reflected light when the Home page is built. Shared foundations use deliberate typography, editorial spacing, and carefully placed metallic warmth without simulating metallic effects.

Use champagne gold primarily on dark surfaces. Do not use it as ordinary text on warm ivory when contrast is inadequate. Avoid gold gradients, neon glow, excessive metallic effects, gold body text everywhere, glassmorphism, oversized rounded cards, excessive shadows, decorative clutter, heavy motion, fabricated trust badges, and generic luxury templates.

## Color tokens

Use these approved tokens. The dark-surface border is adjusted from the proposed value because its contrast on the raised surface did not meet the 3:1 meaningful-boundary target. Verify actual combinations whenever new components or surfaces are implemented.

| Purpose | Token | Value |
|---|---|---|
| Obsidian background | `--color-page` | `#0B0D0E` |
| Carbon surface | `--color-surface` | `#17191A` |
| Raised surface | `--color-surface-raised` | `#202426` |
| Warm ivory | `--color-text` | `#F4F0E8` |
| Stone gray | `--color-text-secondary` | `#B7B2A8` |
| Champagne gold | `--color-accent` | `#C7A66A` |
| Gold hover | `--color-accent-hover` | `#D8B97B` |
| Gold pressed | `--color-accent-pressed` | `#A98545` |
| Text on gold | `--color-text-on-accent` | `#17191A` |
| Dark-surface border | `--color-border-dark` | `#666F6F` |
| Light-surface border | `--color-border-light` | `#69716F` |
| Decorative divider | `--color-divider` | `#303435` |
| Focus ring on dark surfaces | `--color-focus-dark` | `#D8B97B` |
| Focus ring on light surfaces | `--color-focus-light` | `#17313A` |
| Inner focus ring | `--color-focus-inner` | `#F4F0E8` |
| Error on dark surfaces | `--color-error-dark` | `#FF8A80` |
| Error on light surfaces | `--color-error-light` | `#B42318` |
| Success on dark surfaces | `--color-success-dark` | `#6FD1A4` |
| Success on light surfaces | `--color-success-light` | `#176B4F` |
| Disabled dark surface | `--color-disabled-dark` | `#2A2D2D` |
| Disabled text on dark surface | `--color-disabled-text-dark` | `#A19F96` |

### Contrast verification

WCAG 2.x relative-luminance contrast ratios were calculated for the actual shared-foundation pairs and approved component-state tokens, including status and disabled states that are not yet rendered in the page skeleton. Normal text is at least 4.5:1; applicable meaningful control boundaries and focus indicators are at least 3:1. Ratios are rounded to two decimals.

| Combination | Ratio | Result |
|---|---:|---|
| Warm ivory on obsidian | 17.14:1 | Pass |
| Warm ivory on carbon | 15.52:1 | Pass |
| Warm ivory on raised surface | 13.77:1 | Pass |
| Stone gray on obsidian | 9.23:1 | Pass |
| Stone gray on carbon | 8.36:1 | Pass |
| Stone gray on raised surface | 7.41:1 | Pass |
| Dark text on champagne button | 7.64:1 | Pass |
| Dark text on gold hover | 9.36:1 | Pass |
| Dark text on gold pressed | 5.15:1 | Pass |
| Champagne accent on obsidian | 8.43:1 | Pass |
| Champagne accent on carbon | 7.64:1 | Pass |
| Champagne accent on raised surface | 6.78:1 | Pass |
| Gold hover link on obsidian / carbon / raised | 10.34 / 9.36 / 8.31:1 | Pass |
| Gold pressed link on obsidian / carbon / raised | 5.68 / 5.15 / 4.57:1 | Pass |
| Dark border on obsidian | 3.77:1 | Pass |
| Dark border on carbon | 3.42:1 | Pass |
| Dark border on raised surface | 3.03:1 | Pass |
| Gold focus ring on obsidian | 10.34:1 | Pass |
| Gold focus ring on carbon | 9.36:1 | Pass |
| Gold focus ring on raised surface | 8.31:1 | Pass |
| Warm-ivory inner focus ring on carbon | 15.52:1 | Pass |
| Charcoal inner focus ring on champagne controls | 7.64:1 | Pass |
| Charcoal focus ring on warm ivory | 12.02:1 | Pass |
| Light-surface border on warm ivory | 4.41:1 | Pass |
| Dark error on obsidian / carbon / raised | 8.53 / 7.73 / 6.86:1 | Pass |
| Light error on warm ivory | 5.78:1 | Pass |
| Dark success on obsidian / carbon / raised | 10.51 / 9.52 / 8.45:1 | Pass |
| Light success on warm ivory | 5.68:1 | Pass |
| Disabled text on disabled dark surface | 5.24:1 | Pass |
| Warm ivory text on disabled dark surface | 12.22:1 | Pass |
| Dark-surface disabled border on carbon / raised | 3.42 / 3.03:1 | Pass |
| Dark-surface disabled border on disabled control fill | 2.69:1 | Disabled controls are exempt from the WCAG non-text contrast requirement; muted state is intentional. |

The proposed dark border `#5F6868` measured 2.73:1 against the raised surface `#202426`, below the 3:1 meaningful-boundary target. It is revised to `#666F6F`, which measures 3.03:1 on that surface and also passes on obsidian and carbon. Disabled controls remain visually muted; preserve the contrasting disabled text and a visible control boundary when those controls are implemented.

Use a context-specific two-tone focus treatment: gold outer ring with warm-ivory inner ring on dark surfaces; use a charcoal inner ring when the focused control itself is champagne gold so the indicator contrasts with both the control and surrounding dark surface. Use the charcoal focus ring on light surfaces. The current shared shell uses dark surfaces. A focus color must contrast against the surrounding surface, must not be clipped, and color must not be the only indication of current page or state. Decorative dividers must never substitute for meaningful control boundaries.

## Typography and font licensing

- Headings: Outfit, weight 600 or 700.
- Body text and controls: Work Sans, weight 400 or 500.
- Emphasized controls: Work Sans, weight 600.
- Provide system sans-serif fallbacks.
- Outfit and Work Sans Latin-subset variable WOFF2 files are locally hosted under `assets/fonts/`; their sources and SIL Open Font License 1.1 details are recorded in `assets/fonts/ATTRIBUTION.md`.
- Do not introduce remote font requests or additional fonts without approval.

## Layout, spacing, and responsive behavior

- Maximum content width: 1200 px.
- Long text width: approximately 680 px.
- Base spacing rhythm: 4 px; common values 8, 12, 16, 24, 32, 48, 64, and 80 px.
- Section spacing should be generous but purposeful; avoid unnecessary repeated cards.
- Button and control radius: 6 px.
- Content-surface radius: 8 px maximum.
- Breakpoints: 480, 768, 1024, and 1280 px.
- Aim for interactive targets of at least 44 × 44 px.
- Hero image aspect ratio: 16:10.
- Gallery image aspect ratio: 4:3.
- Use brief interaction feedback only. Avoid autoplay, parallax, and excessive scroll reveals. Respect reduced-motion preferences.

## Page section order

### Home

1. Hero.
2. Service overview.
3. Detailing approach.
4. Gallery preview.
5. Quote call-to-action.

### Services & Pricing

1. Page introduction.
2. Pricing explanation.
3. Three service entries.
4. Guidance on choosing a service.
5. Quote call-to-action.

### Gallery

1. Page introduction and illustrative-photo disclosure.
2. Six-image gallery.
3. Closing navigation link.

### Contact & About

1. Page introduction.
2. About and service-area section.
3. Form introduction and demo disclosure.
4. Quote form.
5. Demo confirmation state.

Use any further approved section details and copy guidance when supplied. Do not invent important design decisions or change the approved scope.

## Components and content guidance

- Keep navigation and footer shared across all four pages.
- Keep champagne-gold actions restrained and primarily on dark surfaces; use clear hierarchy and purposeful spacing rather than repeated cards.
- Use factual, concise copy appropriate to a fictional portfolio concept.
- Keep `[City/Region]` and `[amount + currency]` unchanged until explicitly approved. Do not fabricate business details, prices, testimonials, results, awards, guarantees, or claims.
- Clearly label illustrative prices and imagery where appropriate.
- Gallery captions must be factual and must not imply the fictional business performed the pictured work.

## Accessibility requirements

- Use semantic page structure and readable content.
- Provide accessible controls and form labels, visible keyboard focus, and keyboard operability.
- On dark surfaces, use a champagne outer focus ring with a warm-ivory inner ring; use a charcoal inner ring when the focused control is champagne gold. On light surfaces, use the charcoal focus ring.
- Check actual text and control contrast combinations when implemented.
- Make form errors and status messages accessible to assistive technology.
- Respect reduced-motion preferences and avoid motion that is unnecessary or excessive.
- Do not use decorative dividers in place of meaningful control boundaries.

## Imagery restrictions

- Use six illustrative detailing-related gallery images only after verifying their rights and permitted use.
- For every image, record its source, creator where available, license or permission basis, and any required attribution in `assets/images/ATTRIBUTION.md`.
- Do not claim unverified permissions or licenses.
- Do not imply Glossline Auto Care performed work shown in imagery.
- Do not download or add images before an authorized milestone.
