# Works V1 QA

Codex-side non-browser checks for the Works route:

- `npm run typecheck` — pass
- `npm run lint` — pass
- local runtime smoke — pass (`/works` returns `200`)
- canonical artwork assets — pass (`pic_1.webp` through `pic_12.webp`)
- route links and filter markup — pass by rendered HTML inspection
- public provisional/debug copy — absent when `NEXT_PUBLIC_ARTWORK_DEBUG` is not enabled
- `git diff --check` — pass

Browser visual QA status: unavailable in this environment (`No browser is
available`). No manual user QA was required as a replacement. The approved
Works references are stored in `design/references/works-v1/`.

When browser tooling is available, save captures here as:

```text
desktop-1440.png
mobile-390.png
```
