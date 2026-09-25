# Accessibility

## Target

Target WCAG 2.2 AA where practical, verified across representative public and admin flows.

## Requirements

- Semantic landmarks and headings; one meaningful H1 per page; logical reading order.
- Full keyboard access, visible focus, skip link, accessible name/state for controls, and no keyboard traps.
- Mobile navigation and dialogs support keyboard use, focus management, Escape dismissal, and announced expanded/closed states.
- Every input has an associated label, instructions and textual error; required state is announced.
- Informative images have meaningful alt text; decorative artwork is hidden from assistive technology.
- Text and interactive states meet contrast requirements. Color is never the only status indicator.
- Respect `prefers-reduced-motion`; provide pause/avoidance for non-essential motion.
- Tables, pagination, alerts, empty states, and status badges are understandable without visual styling.

## Verification

Run automated accessibility checks as one signal, then manually test keyboard-only, screen-reader landmarks/forms, zoom/reflow, contrast, and mobile menu. Record unresolved exceptions in `PROGRESS.md`; do not claim conformance without testing.
