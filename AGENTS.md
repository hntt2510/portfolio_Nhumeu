<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Codex Visual QA Workflow

For every visual implementation, Codex owns the completion QA. Manual user
review is optional and must not be treated as a blocking replacement.

## Required checks

- Run `npm run typecheck`, `npm run lint`, and a local runtime smoke test.
- When browser tooling is available, inspect the responsive page at desktop
  and mobile sizes around 1440px and 390px.
- Compare the implementation against the approved frames in
  `design/references/homepage-v1/` and fix obvious visual regressions before
  completion.
- Verify responsive hierarchy, natural scrolling, interactions, asset loading,
  accessibility-critical states, and horizontal overflow.
- Preserve available screenshots and other QA artifacts under
  `design/qa/<page-or-task>/` using the convention in `design/qa/README.md`.

## Browser availability

If browser tooling is unavailable, report visual QA as unavailable, complete
all other checks, and continue without requiring manual user QA as a substitute.
Browser unavailability alone does not block delivery.

An available browser QA failure, typecheck failure, lint failure, or runtime
smoke-test failure blocks completion until fixed. Do not run a production build
unless the task explicitly requests it.

## Reference precedence and delivery

The approved reference frames remain the visual source of truth for composition,
rhythm, palette, typography, and art direction. A later explicit refinement may
override an individual prototype detail, but does not authorize a broader
redesign.

After all required available checks pass, automatically commit and push visual
work to the current branch. This includes work completed when browser tooling
is unavailable.
