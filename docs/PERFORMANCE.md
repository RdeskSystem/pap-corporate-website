# Performance

## Targets

Aim for Lighthouse 90+ where realistically achievable after real deployment and assets are known. Core Web Vitals should be monitored on representative mobile and desktop routes.

## Approach

- Prefer server rendering for public content and limit client JavaScript to interactions that require it.
- Optimize responsive images, explicit dimensions, modern formats where suitable, and lazy-load below-the-fold media.
- Avoid oversized fonts, excessive animation, large UI dependencies, layout shifts, and unbounded content queries.
- Serve the selected Manrope variable font locally and subset/remove weights when production measurements justify it.
- Cache public published content; use invalidation on publish/unpublish. Do not cache private CMS, contact or application data publicly.
- Use CDN/static delivery for immutable public assets; paginate/filter admin lists server-side.
- Respect reduced motion; keep diagrams/CSS effects lightweight.

## Measurement

Record baseline Lighthouse/Web Vitals on production-like builds and test 320 px through 1920 px layouts. The current workspace has no deployed origin, analytics ID, or representative corporate photography, so final performance verification remains pending.
