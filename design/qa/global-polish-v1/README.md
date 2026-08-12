# Global Polish V1 QA

## Automated checks

- `npm run typecheck` — pass
- `npm run lint` — pass
- Local Next runtime smoke — pass for `/`, `/works`, `/index`, `/about`,
  `/works/work-01`, `/works/work-12`, and unknown-route handling
- Canonical artwork assets — 12/12 `public/assets/artworks/pic_1.webp` through
  `pic_12.webp` present and loadable through the local server
- `git diff --check` — pass
- Production build — intentionally not run per project policy

## Browser QA

Unavailable in the current environment: the in-app browser connection returned
`No browser is available` on the required attempt.

No manual user QA is required as a substitute. Desktop/mobile screenshots were
therefore not produced for this run. The approved page references remain under
`design/references/`, and the three new global state references are under
`design/references/global-polish-v1/`.

When browser tooling is available, inspect 1440px, 1280px, approximately 900px,
768px, and 390px for the mobile dialog, focus containment, route close,
reduced-motion state, overflow, image loading, and loading/404 geometry.
