# About V1 reference analysis

About is the personal dossier layer of the portfolio. It extends the approved Homepage, Artwork Detail, Works, and Index system without becoming a CV, résumé, or marketing biography.

## Shared visual system

- Keep the greige/stone paper palette: `#D9D5CE`, `#EEEAE4`, `#F3F0EA`, charcoal `#252421`, muted text `#77736D`, and hairline `#BDB8AF`.
- Use Noto Serif Display for identity and section titles, Inter for navigation, practice labels, metadata, and future records.
- Keep the shared quiet header, natural vertical scrolling, thin rules, square corners, no gradients, shadows, cards, pills, glass, CTA language, or decorative UI.
- Desktop gutters sit around 3vw–5vw. Mobile uses approximately 5vw page gutters and full-width portrait fields inside that content rail.

## Opening

The desktop opening is an asymmetric identity/portrait field: a small `ABOUT` eyebrow and prominent but restrained `Phan Thị Ý Như / Visual Artist` sit in the left field while a large neutral portrait rectangle occupies the right. The portrait is not an avatar or profile card. The current reference label `ARTIST PORTRAIT` exists only to communicate the future asset slot and must not ship in the public UI.

The mobile order becomes header → About label → identity → practice cue → portrait field. The portrait is wide, readable, and intentionally blank until `/public/assets/artist/at_1.webp` exists.

## Profile and practice

The profile frame keeps the identity rail quiet and gives Practice its own typographic block. `Oil`, `Silk`, `Lacquer`, and `Mixed Media` are factual labels separated by thin rules. No interpretation, biography, or medium-specific claim is added. On mobile the same content becomes a natural stack with generous gaps.

## Conditional record

The record frame explores future Education / Exhibitions / Awards geometry through open ruled rows and whitespace. These labels and the visible `No public record supplied` line are reference-only structural cues. In implementation, the entire record area disappears while the arrays are empty; no placeholder text, empty rules, or fake entries are rendered.

When real records exist later, each section should use open rows containing year, title, and optional institution/venue/organization. There are no cards, timeline dots, or résumé boxes.

## Artwork pause and closing

The closing frame uses one complete `pic_2.webp` artwork as a secondary visual pause. It is uncropped at its native `2 / 3` ratio and remains subordinate to artist identity. About does not become another Works page. The closing contains only verified identity and quiet links to Works, Index, and About.

## Motion and responsive behavior

Reuse the existing scoped per-element reveal: subtle opacity and small translateY only. About adds no pinning or horizontal sequence. Reduced motion exposes all content immediately and disables Lenis smoothing through the shared wrapper. The visual hierarchy remains valid with motion removed.

