# Global Polish V1 analysis

These three frames extend the approved portfolio system. They are reference
frames for global state and responsive behavior only; they do not introduce a
new page composition or visual concept.

## Mobile menu

- The menu is a native modal surface on the same greige/paper family as the
  catalogue, with a thin rule and generous vertical spacing.
- The artist name remains in Noto Serif Display; menu labels and the Close
  control use Inter. Numbered rows make the three destinations easy to scan
  without turning them into pills or cards.
- The modal is intentionally quieter than the artwork pages. It has no image,
  decorative overlay, shadow, gradient, or transition concept. Focus state,
  Escape, and the Close control are functional details rather than visual
  decoration.
- The mobile header keeps the name at the left and Menu at the right. Desktop
  direct navigation remains unchanged.

## Not found frames

- The 404 state uses a sparse asymmetric field: the artist name and hairline
  sit at the top, while the large serif `404` and small sans-serif `Not found`
  sit in the lower-left/mid-left reading area.
- Works and Index are quiet text links placed away from the error message so
  recovery remains available without becoming a CTA block.
- The desktop frame prioritizes a broad field of whitespace. The mobile frame
  preserves the same order and hierarchy while allowing the text to breathe
  in one vertical column.
- No artwork is introduced in an error state. The absence of artwork prevents
  a missing route from competing with the catalogue itself.

## Global implementation cues

- Use the existing Noto Serif Display + Inter pairing and existing greige
  tokens without warmer overlays or new accents.
- Keep hairline rules, square geometry, native cursor behavior, and calm
  underline/opacity feedback consistent with the approved routes.
- Loading and not-found states use fixed neutral geometry. They do not use
  spinners, skeleton cards, route fades, or invented artist content.
- Responsive behavior is intentional at the 700px menu breakpoint; direct
  navigation remains in place at 768px and above.
