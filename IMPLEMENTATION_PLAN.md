# Glossline Auto Care — Implementation Plan

## Approved technical approach

Build a static four-page site using plain HTML, CSS, and JavaScript. Do not introduce React, Vite, a package manifest, server, database, authentication, or unnecessary dependencies.

## Existing project structure

```text
README.md
index.html
services.html
gallery.html
contact.html
assets/
  css/
    styles.css
  js/
    site.js
    quote-form.js
  images/
    ATTRIBUTION.md
  fonts/
    outfit-latin-variable.woff2
    work-sans-latin-variable.woff2
    ATTRIBUTION.md
```

## Approval gates and milestones

Every milestone is a separate approval gate. Work only on the milestone explicitly authorized by the user. Stop at its completion and wait for approval before starting another.

### Milestone 1 — Static site skeleton

**Goal:** Establish the four-page HTML structure and asset placeholders.

**Acceptance criteria:**

- Four HTML page shells: Home, Services & Pricing, Gallery, and Contact & About.
- Shared basic navigation, main content area, page heading, and footer on each.
- CSS and JavaScript placeholders and image attribution instructions exist.
- README documents the project and restrictions.
- No styling, finished page sections, form, JavaScript behavior, external assets, or later-milestone features.

### Milestone 2 — Shared design foundations and navigation

**Goal:** Implement approved shared design foundations and navigation.

**Acceptance criteria:**

- Shared styling follows `DESIGN_BLUEPRINT.md`, including exact tokens, typography plan, spacing, and responsive behavior.
- The approved shared palette is Obsidian & Champagne: obsidian `#0B0D0E`, carbon `#17191A`, raised `#202426`, warm ivory `#F4F0E8`, stone `#B7B2A8`, and restrained champagne `#C7A66A` with specified hover/pressed states. Use the complete exact token table and contrast results in `DESIGN_BLUEPRINT.md`; do not reintroduce the superseded slate-and-blue palette.
- The dark-surface border token is `#666F6F`, adjusted from the proposed `#5F6868` because the latter measured 2.73:1 on the raised surface, below the 3:1 meaningful-boundary threshold. The revised token measures 3.03:1 on raised.
- Apply context-specific focus rings: champagne outer and warm-ivory inner rings on dark surfaces, with a charcoal inner ring for champagne controls; use charcoal on light surfaces. Check actual foreground/background pairs, including hover, pressed, errors, success, disabled states, and focus rings; preserve text and meaningful-boundary contrast.
- Use the already verified local Outfit and Work Sans WOFF2 assets and their attribution/license record. Do not add remote font requests.
- Navigation and shared page foundations are consistent and usable by keyboard.
- Actual color combinations and focus visibility are checked; no accessibility assumptions are made from token definitions alone.
- No page-specific content beyond this milestone's authorized scope.

### Milestone 3 — Home page

**Goal:** Build the approved Home page.

**Acceptance criteria:**

- Page follows the approved Home section order and copy/design guidance.
- Hero, three-service overview, detailing approach, gallery preview, and quote call-to-action are present.
- Content remains factual to the fictional concept and avoids invented business claims.

### Milestone 4 — Services & Pricing

**Goal:** Build the approved Services & Pricing page.

**Acceptance criteria:**

- Basic clean, full detail, and premium paint protection entries are present.
- Pricing is clearly illustrative and preserves `[amount + currency]`.
- Explain that hypothetical final quotes depend on vehicle size and condition.
- Include service-choice guidance and quote call-to-actions without fabricating prices or business claims.

### Milestone 5 — Rights-verified illustrative gallery

**Goal:** Build the Gallery page using permitted illustrative imagery.

**Acceptance criteria:**

- Page includes its introduction/disclosure, six-image gallery, and closing navigation link.
- Verify usage rights before adding each image and record source, creator where available, license or permission basis, and required attribution.
- Captions are factual and do not imply Glossline Auto Care performed the work.
- Images are identified as illustrative where appropriate; no lightbox or complex gallery interactions.

### Milestone 6 — Contact & About and safe demo form

**Goal:** Build the Contact & About page and the restricted front-end demo form.

**Acceptance criteria:**

- Include the fictional-concept explanation, `[City/Region]` service-area placeholder, form introduction, and demo disclosure.
- Required fields: name, email, and service of interest. Optional fields: vehicle details and a short note.
- Validate required fields and invalid email input; preserve entered values after validation errors; provide accessible errors; allow reset.
- For valid fictional sample input, display exactly: “This is a portfolio demo. Your sample information was not sent or saved. Glossline Auto Care is fictional, so no service request was made.”
- The form never sends, transmits, or persists submitted information. It must not call an external provider, API, server, or service, or use local storage, session storage, cookies, IndexedDB, or another storage mechanism.
- If JavaScript is unavailable or the handler has not initialized, submission is unavailable; show a clear JavaScript-required notice and prevent normal submission, accidental navigation, transmission, or data in the URL.
- Do not collect real customer information for a service that does not exist.

### Milestone 7 — Responsive and accessibility review

**Goal:** Review responsive behavior and accessibility across all pages.

**Acceptance criteria:**

- Review all pages at the approved breakpoints and responsive layouts.
- Check keyboard interaction, visible focus on light and dark surfaces, controls and labels, readability, actual contrast combinations, form errors/status messages, and reduced-motion behavior.
- Record the checks performed, outcomes, and any remaining issues without claiming unchecked items passed.

### Milestone 8 — Final verification and publishing preparation

**Goal:** Perform final verification and prepare for possible publishing, without publishing.

**Acceptance criteria:**

- Verify page structure, navigation destinations, asset paths, required content, and scope restrictions.
- Perform appropriate automated checks, browser-assisted checks, and human visual review; report each category separately and only claim checks actually performed.
- Resolve or disclose remaining issues and limitations.
- Do not publish or deploy until the user separately approves it.

## Testing and reporting responsibilities

- Test actual required outcomes, not proxies.
- Distinguish automated checks, browser-assisted checks, and human visual review.
- Do not claim a browser preview, accessibility review, or complete website test unless it actually occurred.
- Report exact files changed, checks performed and results, known limitations, and remaining work.
- Do not install tools or dependencies just to produce a test report unless a later authorized task requires them.

## Agent skill policy

Use the five globally installed core skills only when relevant to the explicitly authorized task: `grill-me` for materially ambiguous requirements or new-project planning (without reopening approved Glossline scope absent a specific reason); `junior-to-senior` for critical review of major plans, technical decisions, or high-risk changes; `ui-ux-pro-max` for relevant design-system or UX decisions; `frontend-design` for visual implementation of approved designs; and `web-design-guidelines` for review of implemented interfaces, accessibility, navigation, forms, and related quality. Do not load all skills by default, copy their full instructions into this repository, reinstall them, or create project-specific duplicates.

Before using a required skill, verify native discoverability in the current coding agent and load the actual instructions through its native skill mechanism. If unavailable, report that and do not claim use. Skill guidance does not establish correctness: perform and report actual milestone checks. Skills cannot override approved scope, form restrictions, design tokens, or milestone approval gates; stop and report conflicts rather than changing approved decisions silently.

Native-discovery audits have verified all five skills in GitHub Copilot and Cline. OpenCode's audit is outstanding; when OpenCode is available again, verify actual discovery and loading of all five before claiming compatibility. Do not install further skills during the documentation-only checkpoint.

## Cross-milestone safety and scope

- Preserve all fictional-business, content-placeholder, accessibility, font-license, image-rights, and form-safety requirements in `PROJECT_BRIEF.md` and `DESIGN_BLUEPRINT.md`.
- Verify font source and license before use; prefer local font files and do not add remote font requests without approval.
- Do not add excluded features, dependencies, external services, pages, or project-wide changes without approval.
- Do not overwrite unrelated work.
- Each milestone requires explicit user approval; do not begin a later milestone based on prior approval of an earlier one.
