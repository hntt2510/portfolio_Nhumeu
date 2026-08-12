# About V1 QA

Codex-side verification for the About route:

- `npm run typecheck` — pass
- `npm run lint` — pass
- local runtime smoke — pass (`/about` returns `200`)
- global routes checked: `/`, `/works`, `/index`, `/about`, `/works/work-01`
- About navigation points to `/about` and exposes `aria-current="page"` on the About route
- missing portrait fallback — pass; `/public/assets/artist/at_1.webp` is absent and no broken image or public placeholder label is rendered
- optional empty sections — pass; statement, biography, records, and contact are omitted when data is empty
- artwork pause — pass; complete `work-02` artwork links to `/works/work-02`
- canonical artwork assets — pass (`pic_1.webp` through `pic_12.webp`)
- exact artist identity — pass (`Phan Thị Ý Như`, `Visual Artist`)
- public invented/provisional/debug text — absent
- `git diff --check` — pass

Browser visual QA status: unavailable in this environment (`No browser is
available`). No manual user QA was required as a replacement. The approved
About references are stored in `design/references/about-v1/`.

When browser tooling is available, save captures here as:

```text
desktop-1440.png
mobile-390.png
```
