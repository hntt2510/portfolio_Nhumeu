# Works V1 reference analysis

The Works route is the visual-discovery layer of the portfolio. It extends the approved Homepage and Artwork Detail system without becoming a gallery grid.

## Shared system

- Background stays greige/stone paper (`#D9D5CE` / `#EEEAE4`); artwork supplies the strongest color.
- Header uses the shared quiet navigation with a thin rule below it. Display headings use Noto Serif Display; metadata and filters use Inter.
- Artwork remains complete and uncropped at its native `2 / 3` ratio. There are no cards, shadows, gradients, rounded containers, debug labels, or provisional wording.
- Desktop gutters are approximately 3vw–4vw. Mobile gutters are approximately 12vw at the image edge and 12px–18px for small metadata groups.

## Opening

The opening is restrained: `Works`, `Selected Works`, and `2020—2026` sit in a quiet left field while the first complete portrait artwork occupies the right side. The artwork begins quickly after the heading and carries more visual weight than the copy. The first metadata group is small and vertically aligned near the image, not presented as a hero card.

## Body

The body establishes the curated rhythm with a dominant portrait around 34vw–38vw, a smaller offset portrait around 20vw–24vw, and a following medium portrait around 28vw–32vw. Metadata alternates between left and right of the image so the page does not become a repeated two-column template. Thin rules provide alignment, while large paper gaps separate each visual beat.

On mobile, the same rhythm becomes a natural vertical sequence: wide image, smaller offset image, then medium image. Widths are intentionally varied (roughly 78%, 60%, and 70% of the viewport), with no horizontal overflow. Metadata remains attached to its work and appears after or beside the image only when space allows.

## Ending

The final sequence slows down: one large complete artwork, then smaller offset works with compact metadata, and a quiet `Index` transition at the bottom. The Index transition is typographic and link-like, not a CTA button.

## Filter and interaction

The filter is secondary, typographic, and uses `All / Oil / Silk / Lacquer / Mixed Media`. It sits near the page heading with thin spacing rather than pills. Changing the filter replaces the visible sequence without dramatic animation. Artwork and title links navigate directly to `/works/{id}`; hover and focus may use only a restrained opacity or text emphasis.

## Motion

Works may use per-element opacity/translateY reveals and very small artwork scale drift through the existing scoped GSAP motion layer. The page must remain coherent with motion removed. No horizontal hijacking, snap, pin, distortion, or decorative effects are introduced.

