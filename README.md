# Glossline Auto Care

Glossline Auto Care is a fictional car-detailing business concept created for a freelance portfolio. It is not a real business, and this project must not be presented as one.

## Project structure

- `index.html` — Home page starting point.
- `services.html` — Services & Pricing page starting point.
- `gallery.html` — Gallery page starting point.
- `contact.html` — Contact & About page starting point.
- `assets/css/styles.css` — Shared design tokens, typography, and global page/navigation/footer styles.
- `assets/js/site.js` — Progressive-enhancement behavior for the mobile navigation.
- `assets/js/quote-form.js` — Placeholder for the future quote-form milestone; no form behavior is implemented.
- `assets/images/` — Future images and their attribution record.
- `assets/fonts/` — Locally hosted Outfit and Work Sans font files, with verified license and source details in `assets/fonts/ATTRIBUTION.md`.

Each page currently contains a basic document structure, shared header and navigation, skip link, main-content area, page heading, and footer. The shared design foundation and responsive navigation are in place; detailed page content and form behavior have not been implemented.

## Preview

Open `index.html` directly in a web browser to preview the page. Use its navigation links to open the other pages. No preview server or additional tools are required for this basic preview.

## Implementation status and milestones

Milestone 1 established the project skeleton. Milestone 2 established the shared design foundations and navigation only. The Home, Services & Pricing, Gallery, and Contact & About page-specific sections and the quote form remain for later milestones.

Planned later milestones will add the approved page content and visual design, verify and add any permitted local assets, and implement only the approved front-end interactions. Later milestones are not complete.

## Project restrictions

- Keep this as a static HTML, CSS, and JavaScript project. Do not add a framework, server, database, package manager, or unnecessary dependencies.
- Do not add unapproved pages or features, publish or deploy the site, or change the approved project scope.
- The approved design specifies Outfit for headings and Work Sans for body text and controls, with system sans-serif fallbacks. The approved Latin-subset variable WOFF2 files are hosted locally; their source and SIL Open Font License 1.1 notices are recorded in `assets/fonts/ATTRIBUTION.md`.
- Do not download or add images until a later milestone. After verifying each image, record its source, creator where available, license or permission basis, and any required attribution in `assets/images/ATTRIBUTION.md`.
- Preserve `[City/Region]` and `[amount + currency]` as placeholders. Do not invent a currency, prices, address, contact information, testimonials, customer results, or other real-world business claims.
- The future quote form is a front-end demo only. It must never send, transmit, or persist submissions. Do not use a database, external provider, API, local storage, session storage, or other persistent storage for form information.
- When the quote form is implemented later, it must be unavailable for submission if its JavaScript handler is not working. Display a clear notice that the demo form requires JavaScript and cannot be submitted. Prevent normal HTML submission so form information cannot be put in the URL or sent elsewhere. Do not implement this behavior during Milestone 1.
