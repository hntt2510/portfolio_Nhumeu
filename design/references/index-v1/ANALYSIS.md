# Index V1 reference analysis

The Index route is the fast archive layer, intentionally different from the image-led Works route. It should read like a gallery inventory or exhibition checklist, not a dashboard or spreadsheet.

## Shared system

- Use the approved greige/stone palette and shared quiet SiteHeader.
- Heading and artwork titles use Noto Serif Display; numbers, medium, year, navigation, and rules use Inter.
- Rows are open, link-like, and separated by thin rules. There are no cards, shadows, gradients, pills, glass, rounded containers, or debug/provisional labels.

## Desktop composition

The desktop page uses a generous left archive column and a persistent opposite-side preview field. The heading `Index` is large but restrained. Rows expose all 12 works with number, title, medium, and year; the number and title sit left, medium and year sit toward the right edge of the list. Row height is generous enough for scanning and keyboard focus. A complete portrait preview at native `2 / 3` is held on the far right, with a small caption such as `04 / Study II`.

Hover and keyboard focus change only row emphasis (subtle text color or underline) and update the preview; no tooltip card or overlay appears. Every row remains a normal link to `/works/{id}`.

## Mobile composition

Mobile does not squeeze desktop columns into 390px. Rows stack into readable blocks: number and title lead, medium and year follow in the same link, and a selected preview can open directly below the active row. The preview keeps the complete artwork ratio and has a quiet detail link to `/works/{id}`. Rows remain natural vertical content with no horizontal scrolling.

## Interaction and motion

Index uses less motion than Works. Preview selection may update immediately on hover/focus or tap; only a subtle opacity/translate reveal is permitted. Reduced motion keeps the selected preview visible without smoothing. No duplicated medium filter is required because Index prioritizes speed and clarity.

