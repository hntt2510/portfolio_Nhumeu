# Phan Thị Ý Như — Portfolio Design System

## 1. Project Identity

Artist: **Phan Thị Ý Như**

Discipline: Visual Artist / Painting

Primary media may include:

* Oil painting
* Silk painting
* Lacquer
* Mixed media
* Drawing / studies

Do not position the artist as exclusively a lacquer artist.

The website represents a **body of work across multiple materials and artistic practices**.

---

## 2. Core Concept

The portfolio should feel like:

**Contemporary Art Catalogue × Artist Archive × Personal Exhibition**

It must not feel like:

* SaaS website
* UX/UI portfolio
* startup landing page
* AI-generated website template
* WebGL technology demo
* Behance case-study template

The artwork is always the dominant visual element.

UI should remain quiet and almost invisible.

---

## 3. Experience

Primary navigation model:

**Natural vertical scrolling**

Do not use full-page slide navigation.

Do not force scroll snapping between every section.

The experience should resemble browsing through a carefully curated exhibition catalogue.

Allowed interaction patterns:

* natural vertical scrolling
* sticky editorial compositions
* subtle artwork reveal
* restrained parallax
* occasional overlap
* one optional horizontal sequence
* fullscreen artwork viewer
* hover preview inside the artwork index

Three.js is not required for V1.

Do not introduce WebGL unless there is a clear artistic reason.

---

## 4. Typography

### Display

**Noto Serif Display**

Use for:

* artist name
* artwork titles
* series titles
* major editorial headings
* selected statements

Preferred weights:

* Regular
* Medium

Avoid excessive Bold.

### UI / Metadata

**Inter**

Use for:

* navigation
* artwork metadata
* year
* dimensions
* medium
* captions
* filters
* supporting text

Typography should create hierarchy through:

* scale
* whitespace
* position
* contrast

Avoid unnecessary decorative typography.

---

## 5. Color System

Primary visual family:

**Greige / Beige Grey / Warm Paper**

Suggested tokens:

```css
--bg-main: #D9D5CE;
--bg-light: #EEEAE4;
--surface: #E5E1DA;

--paper: #F3F0EA;

--text-main: #252421;
--text-muted: #77736D;

--line: #BDB8AF;
```

Do not introduce a strong brand accent color in V1.

The artwork itself provides the strongest colors.

Avoid pure white as the dominant page background.

Avoid pure black unless required for artwork viewing.

---

## 6. Layout Principles

Composition should be:

* editorial
* asymmetrical
* spacious
* deliberate
* curated

Avoid repeating the same grid for every section.

Artwork sizes should vary.

Use negative space intentionally.

Examples:

* one large artwork with small metadata
* one small artwork surrounded by significant whitespace
* artwork aligned far right
* artwork overlapping typography slightly
* alternating visual rhythm

Do not create random asymmetry.

Every composition should still feel balanced.

---

## 7. Homepage

Homepage should introduce the artist through artwork rather than biography.

Opening should contain approximately:

* Phan Thị Ý Như
* Visual Artist
* Selected Works
* year range
* first featured artwork

Avoid generic hero copy such as:

"Welcome to my creative world."

Do not use marketing CTA buttons.

Homepage rhythm:

1. Artist introduction
2. Featured artwork
3. Selected works sequence
4. Material / practice transition
5. Additional selected works
6. Archive preview
7. Artist introduction / footer

---

## 8. Artwork Hierarchy

Primary information hierarchy:

**Series → Artwork → Medium**

Do not structure the entire portfolio primarily as:

Oil / Silk / Lacquer.

Material should remain searchable/filterable, but artistic ideas and bodies of work should take precedence.

---

## 9. Artwork Metadata

Each artwork should support:

```ts
id
title
year
medium
dimensions
series
description
mainImage
details[]
process[]
featured
```

Example:

```ts
{
  id: "work-01",
  title: "Untitled No. 01",
  year: 2026,
  medium: "Oil on canvas",
  dimensions: "80 × 120 cm",
  series: "Studies",
  mainImage: "/assets/artworks/pic_1.webp"
}
```

Temporary titles/content must clearly remain mock data.

Do not invent biographical facts about the artist.

---

## 10. Asset Rules

Artist images:

```text
at_1
at_2
at_3
```

Artwork images:

```text
pic_1
pic_2
pic_3
...
```

Artwork detail images:

```text
detail_1
detail_2
...
```

Process images:

```text
process_1
process_2
...
```

If a real asset does not exist:

**Render a blank neutral placeholder.**

Do not automatically insert:

* Unsplash
* random stock photography
* generated portraits
* unrelated artwork

Temporary AI imagery may only be used intentionally during design prototyping and must remain easily replaceable.

---

## 11. Motion

Recommended stack:

* Lenis
* GSAP
* ScrollTrigger

Motion should feel:

* slow
* restrained
* editorial
* deliberate

Allowed:

### Image Reveal

```text
opacity: 0 → 1
translateY: 20–40px → 0
```

### Subtle Image Drift

```text
scale: 1 → 1.02 / 1.03
```

### Typography

```text
opacity: 0 → 1
translateY: 10–16px → 0
```

### Sticky Composition

Text or metadata may remain fixed while artworks progress through the viewport.

Avoid:

* bouncing
* elastic effects
* exaggerated spring animation
* cursor trails
* aggressive mouse-follow effects
* constant floating objects
* excessive parallax

---

## 12. Artwork Viewer

Clicking a work may open a fullscreen viewing experience.

Suggested hierarchy:

```text
Artwork

Title
Medium
Dimensions
Year

01 / 12
```

Artwork should remain visually dominant.

Artwork detail page flow:

1. Full artwork
2. Metadata
3. Detail / surface imagery
4. Optional artist statement
5. Process imagery
6. Related or next work

---

## 13. Index

Create an artwork archive view.

Example:

```text
01   Untitled I        2026      Oil
02   Study II          2026      Silk
03   Untitled III      2025      Lacquer
```

Optional filters:

* All
* Oil
* Silk
* Lacquer
* Mixed Media
* Drawing

On desktop:

hovering an entry may reveal an artwork preview.

The Index should feel like an exhibition inventory, not a dashboard table.

---

## 14. Navigation

Keep navigation minimal.

Preferred:

```text
Phan Thị Ý Như

Works
Index
About
```

Avoid:

* giant floating navigation capsules
* hamburger menu on desktop without reason
* excessive menu transitions
* unnecessary page categories

---

## 15. Shape Language

Corners:

```text
0–2px
```

Prefer square imagery.

Avoid excessive rounded rectangles.

Avoid pill-shaped UI except where functionally justified.

Shadows:

**none by default.**

Use hierarchy through spacing and contrast instead.

---

## 16. Forbidden Visual Patterns

Do not use:

* gradients
* glassmorphism
* glowing elements
* neon
* bento grids
* floating cards
* generic 3-column feature layouts
* decorative pills
* blobs
* random SVG decoration
* excessive grain
* fake handwritten fonts
* giant marketing headline
* startup hero composition
* testimonial cards
* service cards
* unnecessary icons
* "View Project" overlays on every image
* excessive rounded corners
* 3D gallery navigation
* fullpage slide snapping

---

## 17. Responsive Philosophy

Mobile is not a scaled-down desktop screenshot.

Maintain:

* artwork hierarchy
* whitespace
* readable metadata
* natural scroll

Reduce complex sticky behavior where necessary.

Do not sacrifice artwork size purely to preserve desktop composition.

---

## 18. Design Test

Before approving any section, ask:

1. Does the artwork remain the first thing I notice?
2. Does this look like an artist's website rather than a web designer's portfolio?
3. Is every animation serving the artwork?
4. Could this layout exist in a contemporary exhibition catalogue?
5. Did we introduce a UI element simply because it looks fashionable?
6. Does the section still work without animation?

If the answer to 1–4 is no, redesign it.
