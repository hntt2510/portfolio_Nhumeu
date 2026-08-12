# Artwork Detail V1 Reference Analysis

The six frames extend the Homepage V1 catalogue system into a reusable
artwork viewing room. They are section-specific references, not a new visual
identity.

## Shared system

- Surfaces remain the Homepage greige family: `#D9D5CE`, `#EEEAE4`,
  `#E5E1DA`, and `#F3F0EA`.
- Text remains `#252421` with muted metadata in `#77736D`; dividers use the
  thin `#BDB8AF` rule language.
- Noto Serif Display carries the artwork title and large index; Inter carries
  navigation, metadata, and the `DETAIL / 01` or `NEXT WORK` labels.
- Geometry stays open and square-cornered. There are no cards, shadows,
  gradients, pills, or decorative controls.
- The artwork is the strongest color source and the first visual priority.

## Opening

- Desktop uses a narrow metadata rail on the left and a complete portrait work
  on the right. The rail is separated by a quiet vertical rule and leaves
  generous negative space around the image.
- Mobile changes the order deliberately: header, metadata/title, then the full
  portrait artwork. The artwork keeps its native 2:3 ratio and spans most of
  the content width without cropping.
- The metadata hierarchy is `01 → Untitled I → Oil → 2026 → Dimensions
  pending`; no provisional or debug copy is visible.

## Surface detail

- The detail is a macro crop of the same work, not a second artwork. It moves
  closer to paper texture, torn edges, pigment, and the muted terracotta and
  blue-grey material range.
- Desktop places the crop off-center with a large calm field of negative space.
  Mobile gives the crop a tall readable field followed by a thin rule and the
  only label, `DETAIL / 01`.
- Runtime uses `mode="crop"` only for this intentional provisional detail;
  `mode="full"` remains mandatory for the primary work.

## Next work

- Desktop places `NEXT WORK`, `02`, `Study I`, and `Silk / 2025` in a quiet
  left editorial block beside the complete `pic_2.webp` preview.
- Mobile stacks the same hierarchy above the complete preview with generous
  breathing room and no CTA button.
- The transition is a semantic link to the next stable artwork ID. The final
  artwork wraps to the first record.

## Responsive and motion implications

- The detail route uses natural vertical scrolling at both breakpoints.
- Motion is limited to per-element opacity/translate reveal and a barely
  visible image drift. Reduced motion exposes the final layout immediately.
- No detail-page pinning is required by the references. Any existing desktop
  Homepage pin must be managed through responsive GSAP lifecycle cleanup.

## Implementation note

The generated frames establish layout, hierarchy, spacing, and image treatment.
The implementation uses the canonical repository artwork assets directly so
the primary and next-work images remain exact, replaceable, and uncropped.
