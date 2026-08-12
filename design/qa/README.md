# Codex QA Artifacts

Codex-side QA is the completion gate for visual implementations. Manual user
review is optional and does not replace the checks below.

Required checks for visual work:

- `npm run typecheck`
- `npm run lint`
- local runtime smoke test, including the homepage response and relevant asset
  paths
- browser QA around 1440px desktop and 390px mobile when browser tooling is
  available
- comparison against the approved reference frames in
  `design/references/homepage-v1/`
- regression fixes before delivery

Store screenshots and optional interaction captures in:

```text
design/qa/<page-or-task>/desktop-1440.png
design/qa/<page-or-task>/mobile-390.png
```

Additional viewport or interaction captures may use descriptive names in the
same folder. If browser tooling is unavailable, record that visual QA was
unavailable in the task handoff, complete all non-browser checks, and do not
require manual user QA as a blocking replacement.

Approved reference frames remain the source of truth for visual direction unless
a later task explicitly refines an individual detail.
