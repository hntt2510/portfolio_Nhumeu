# Homepage V1 Reference Analysis

The 14 reference frames establish one visual system rather than 14 independent layouts.

## Shared system

- Page gutters: approximately 5vw desktop and 5vw mobile, with a 2.4vw navigation inset on desktop.
- Surface family: `#D9D5CE`, `#EEEAE4`, `#E5E1DA`, and `#F3F0EA`; artwork provides the only strong color variation.
- Display type: Noto Serif Display, regular or medium, with generous tracking control and short editorial lines.
- Metadata type: Inter, small, muted, and grouped with hairline rules instead of containers.
- Image language: direct rectangular artwork fields, square corners, no shadows, no UI frames.
- Motion implication: opacity/translate reveal and a barely visible scale drift, never effect-first.

## Movement decisions

1. Opening uses a split editorial composition: oversized artist name on the left and a tall artwork on the right.
2. Featured work makes the artwork dominant and keeps metadata in a narrow rail.
3. Contrast work reduces image scale and moves the metadata away from the image to create a deliberate pause.
4. Sequence uses small, large, and narrow artwork blocks on different axes instead of a regular grid.
5. Practice keeps a material rail on desktop and lets the artwork sequence carry the vertical scroll; mobile removes pinning.
6. Archive changes the page tempo into a typographic inventory with hover/focus preview rather than a data table.
7. Closing returns to quiet paper space and simple navigation without a commercial action block.

## Responsive rules

- Desktop preserves asymmetry and sticky practice copy.
- Mobile uses a single natural column, keeps artwork wide, and moves metadata below each image.
- Hover-only behavior becomes focus/click behavior on mobile-capable markup.
- Extreme desktop whitespace is reduced only where it would make the mobile page needlessly empty.

## Prototype status

All artwork imagery is a generated provisional visual study for layout testing. The site labels it as provisional and stores it separately under `public/assets/mock-artworks` so real artist assets can replace it without changing the content model.
