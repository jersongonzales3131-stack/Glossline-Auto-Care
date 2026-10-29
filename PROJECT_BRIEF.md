# Glossline Auto Care — Project Brief

## Purpose and audience

Glossline Auto Care is a fictional car-detailing business concept created as a portfolio project by a beginner who wants to attract future freelance clients. The site demonstrates a considered four-page static website concept; it is not a real client or operating business.

The primary audience is prospective freelance clients reviewing the portfolio concept. Site visitors are hypothetical people exploring illustrative detailing services and a non-submitting quote-form demonstration.

## Problem the project addresses

The project gives its creator a clear, cohesive example of planning and building a small, responsive, accessible static website. It must not imply that a real detailing business exists, that work was performed, or that genuine customer results are represented.

## Pages and approved features

### Home — `index.html`

- Hero introducing the fictional concept.
- Overview of three sample services.
- Explanation of the detailing approach.
- Gallery preview.
- Link to the demo quote form.

### Services & Pricing — `services.html`

- Basic clean, full detail, and premium paint protection.
- Illustrative starting-price placeholders.
- Explanation that a hypothetical final quote depends on vehicle size and condition.
- Links to the demo quote form.

### Gallery — `gallery.html`

- Six illustrative detailing-related images, only after rights and permitted use are verified.
- Factual captions that do not imply Glossline Auto Care performed the pictured work.
- No complex gallery interaction or lightbox in the first version.
- Clearly identify photographs as illustrative where appropriate.

### Contact & About — `contact.html`

- Short explanation of the fictional concept.
- Replaceable service-area placeholder `[City/Region]`.
- Quote form with required name, email, and service of interest; optional vehicle details and a short note.
- Clear demo disclosure.

### Shared

- Shared navigation and footer across all pages.
- Responsive layouts.
- Accessible controls, labels, keyboard focus, and readable content.

## Quote form: mandatory restrictions and behavior

The quote form is a local front-end demonstration only. It must not collect real customer information for a service that does not exist. It must never send or transmit submitted information, call a provider, API, server, or external service, or persist form data in local storage, session storage, cookies, IndexedDB, or any other storage mechanism.

When implemented, it must:

- Validate required fields and invalid email input.
- Preserve entered values after validation errors.
- Show accessible error messages.
- Allow the user to reset the form.
- For valid fictional sample input, display this exact confirmation:

  > This is a portfolio demo. Your sample information was not sent or saved. Glossline Auto Care is fictional, so no service request was made.

**Fail-safe:** If JavaScript is unavailable or the form handler has not initialized, the form must not submit normally. Show a clear explanation that the demo form requires JavaScript and cannot be submitted. Prevent accidental navigation, transmission, or placement of form information in the URL.

## Content and claims restrictions

- Keep `[City/Region]` and `[amount + currency]` unchanged until explicitly approved.
- Do not invent a currency, prices, street address, phone number, email address, business hours, reviews, awards, customer results, guarantees, or other real-world business claims.
- Do not imply permissions or licenses for images that have not been checked.
- Identify all prices and photographs as illustrative where appropriate.
- Do not present this concept as a real client, operating business, or source of genuine customer results.

## Explicitly excluded

Unless separately approved, do not add a booking calendar, payment, customer accounts, store, backend, database, staff dashboard, persistent form storage, live chat, fabricated testimonials, deployment, or additional pages.

## Finish criteria

The approved first-version scope is complete only when:

- All four pages contain the approved content and section intent, with shared navigation and footer.
- The design follows `DESIGN_BLUEPRINT.md`, including responsive and accessibility requirements.
- Any gallery images have verified usage rights, recorded attribution, and factual illustrative captions.
- The demo form meets every behavior and fail-safe restriction above and never transmits or persists form data.
- Testing and review are reported accurately, with automated, browser-assisted, and human visual checks distinguished.
- The authorized milestone is completed without implementing excluded features; publishing still requires separate approval.
