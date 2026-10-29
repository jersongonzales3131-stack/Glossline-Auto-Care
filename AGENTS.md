# Instructions for Coding Agents

1. Before substantial work, read `PROJECT_BRIEF.md`, `DESIGN_BLUEPRINT.md`, `IMPLEMENTATION_PLAN.md`, and `README.md`. Treat repository documents as the source of truth, not chat history.
2. Before a task that requires a skill, check whether it is natively discoverable by the current coding agent and load its actual instructions through that agent's native skill mechanism. Follow those instructions together with the approved project documents. If unavailable, report that fact; never pretend to have used the skill.
3. Work only on the milestone explicitly authorized by the user. Stop after that milestone and wait for approval.
4. Inspect the active workspace and affected files before changing anything.
5. If approved documents conflict, requirements are ambiguous, or an important design decision is missing, report the issue and ask for approval. Do not resolve it silently or invent requirements.
6. Do not add out-of-scope features, dependencies, external services, pages, or project-wide changes without approval.
7. Preserve fictional-business, content-placeholder, accessibility, font-license, image-rights, and form-safety restrictions. Never allow the demo form to transmit or persist data; follow its JavaScript fail-safe requirements.
8. Do not overwrite unrelated work. Keep changes small, reviewable, and consistent with the approved project scope.
9. Report exact files changed, tests and checks actually performed with outcomes, known limitations, and remaining work. Never claim implementation or testing is complete without evidence.

If requirements conflict or cannot be met safely, stop and request a decision. Do not proceed to a later milestone without explicit user approval.

## Permanent Agent Skills Policy

The five core skills are installed globally in the user's shared skills directory. Do not copy their full `SKILL.md` contents into this repository, reinstall them, or create project-specific duplicates. Load only skills relevant to the explicitly authorized task; do not load all five by default.

| Skill | Use when |
|---|---|
| `grill-me` | Clarifying materially ambiguous requirements or planning a new project. Do not reopen the approved Glossline scope without a specific reason. |
| `junior-to-senior` | Critically reviewing major plans, technical decisions, or high-risk proposed changes. |
| `ui-ux-pro-max` | Establishing or revising design systems and UX decisions when relevant. |
| `frontend-design` | Guiding visual implementation of approved designs. |
| `web-design-guidelines` | Reviewing implemented interfaces, accessibility, navigation, forms, and other relevant quality concerns. |

A skill provides guidance, not proof of correctness. Perform the milestone's required checks and report actual results. No skill may override the approved scope, form restrictions, design tokens, or milestone approval gates. If a skill recommendation conflicts with an approved project decision, stop and report the conflict rather than changing the project silently.

Native discovery of all five core skills has been verified in GitHub Copilot and Cline. OpenCode has not completed its audit; when it becomes available again, verify actual discovery and loading of all five skills before claiming OpenCode compatibility. Do not install further skills during this documentation-only checkpoint.
