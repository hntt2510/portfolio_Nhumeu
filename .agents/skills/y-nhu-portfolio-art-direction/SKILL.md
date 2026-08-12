---

name: y-nhu-portfolio-art-direction
description: "Art direction and visual quality rules for the personal portfolio of Vietnamese visual artist Phan Thi Y Nhu. Use this skill whenever designing, reviewing, prototyping, or implementing any page, section, interaction, animation, artwork presentation, or responsive layout for this portfolio."
---

# Phan Thị Ý Như — Portfolio Art Direction

## Mission

Create a distinctive contemporary artist portfolio for **Phan Thị Ý Như**.

The website represents a visual artist working across multiple media,
including:

* oil painting
* silk painting
* lacquer
* mixed media
* drawing and studies

Do not position the artist as exclusively a lacquer artist.

The portfolio must feel like a carefully curated personal exhibition and
artist archive rather than a conventional portfolio template.

The desired overall feeling is:

**Contemporary Art Catalogue × Personal Exhibition × Artist Archive**

The website should feel designed by an experienced editorial and exhibition
designer, not generated from a generic frontend template.

---

# 1. Fundamental Principle

The artwork is the protagonist.

The interface must support the work rather than compete with it.

When making a design decision, ask:

> Does this improve the way the viewer experiences the artwork?

If not, remove it.

Do not add visual effects simply to demonstrate technical ability.

---

# 2. Artist Identity

Artist:

**Phan Thị Ý Như**

Role:

**Visual Artist**

Primary artistic practice:

Painting and multi-material visual art.

Possible media:

* Oil on canvas
* Silk
* Lacquer
* Mixed media
* Drawing
* Material studies

Artwork organization should prioritize:

**Series → Artwork → Medium**

Do not make medium the primary identity of the artist.

---

# 3. Design Personality

The visual language should feel:

* quiet
* intelligent
* tactile
* editorial
* sophisticated
* human
* curated
* restrained
* contemporary
* slightly poetic

It should not feel:

* futuristic
* corporate
* technological
* startup-like
* playful SaaS
* luxury cosmetics
* fashion ecommerce
* template-driven
* excessively feminine
* artificially artistic

Avoid obvious visual clichés of an "artist website".

---

# 4. Core Visual Direction

Use an editorial gallery approach.

Imagine the visual system as a combination of:

* contemporary exhibition catalogue
* museum publication
* independent art book
* artist archive
* gallery inventory

Use:

* asymmetry
* intentional negative space
* variable artwork scale
* restrained typography
* strong composition
* subtle tension between image and text

Do not make every section symmetrical.

Do not make every artwork occupy the same dimensions.

Do not create random asymmetry.

Every composition should feel intentionally balanced.

---

# 5. Typography

Primary display typeface:

**Noto Serif Display**

Primary sans-serif:

**Inter**

## Noto Serif Display

Use for:

* artist name
* artwork titles
* large chapter titles
* series titles
* short editorial statements

Preferred weights:

* 400
* 500

Use italics only when conceptually appropriate.

Avoid excessive bold typography.

## Inter

Use for:

* navigation
* metadata
* body copy
* labels
* filters
* dimensions
* medium
* dates
* captions

Preferred weights:

* 400
* 500

Use typography primarily through scale and spacing rather than decorative
effects.

---

# 6. Artist Name

Preferred presentation:

**Phan Thị Ý Như**

Do not automatically convert the artist name to uppercase.

Title Case should remain the default.

Possible large editorial arrangement:

Phan Thị
Ý Như

may be explored only if the composition benefits from it.

Never alter Vietnamese diacritics.

---

# 7. Color System

The artist prefers a beige-grey / greige visual family.

The palette should feel like:

* aged paper
* gallery wall
* warm grey
* stone
* dust
* muted beige

Not:

* yellow cream
* brown luxury
* pink beige
* cosmetics beige

Recommended base palette:

```css
:root {
  --bg-main: #D9D5CE;
  --bg-light: #EEEAE4;
  --surface: #E5E1DA;

  --paper: #F3F0EA;

  --text-main: #252421;
  --text-muted: #77736D;

  --line: #BDB8AF;
}
```

Do not introduce a strong permanent accent color unless later justified by
the artist's real body of work.

The artwork itself should provide the primary color variation.

Avoid pure white for large surfaces.

Avoid pure black for standard backgrounds.

---

# 8. Layout

Primary layout style:

**Editorial asymmetry**

Use compositions such as:

* large artwork + tiny metadata
* artwork pushed far to one side
* small artwork surrounded by large negative space
* text positioned independently of image bounds
* vertical rhythm changes between artworks
* occasional overlapping composition
* intentionally irregular spacing

Do not repeat identical layout templates section after section.

The homepage should feel curated rather than generated from a component list.

---

# 9. Scroll Philosophy

The website is primarily a **natural vertical-scroll experience**.

Do not use full-page slide navigation.

Do not force users through mandatory screen-by-screen snapping.

Do not use scroll hijacking that removes the viewer's sense of control.

Allowed:

* sticky text
* sticky images
* ScrollTrigger sequences
* subtle parallax
* image reveal
* typography reveal
* occasional controlled horizontal movement

Any horizontal-scroll sequence must:

* exist inside a vertical page
* have a clear artistic purpose
* be used sparingly

Maximum recommended:

**one major horizontal-scroll moment per page.**

---

# 10. Motion

Preferred implementation:

* GSAP
* ScrollTrigger
* Lenis

Motion should be:

* slow
* subtle
* intentional
* editorial
* almost invisible

Good motion often makes the page feel alive without drawing attention to
itself.

## Allowed image motion

```text
opacity 0 → 1

translateY 30px → 0

scale 1 → 1.02

clip reveal
```

## Allowed typography motion

```text
opacity 0 → 1

translateY 12px → 0
```

## Avoid

* bouncing
* elastic transitions
* dramatic springs
* spinning elements
* continuous floating
* cursor particle effects
* mouse trails
* exaggerated magnetic buttons
* heavy perspective transforms
* rapid zooming
* excessive parallax

---

# 11. Three.js Policy

Three.js is **not part of the core V1 design system**.

Do not build a 3D gallery.

Do not create virtual museum navigation.

Do not make the viewer walk around using mouse or keyboard controls.

Do not turn artwork into floating 3D cards.

Three.js or WebGL may later be introduced for one subtle signature effect,
for example:

* artwork-to-artwork shader transition
* subtle surface displacement
* restrained depth effect

Only introduce it after the core typography, layout, artwork hierarchy, and
scroll experience are already successful.

---

# 12. Homepage Experience

The homepage should feel like entering a curated exhibition catalogue.

Recommended narrative:

## Opening

Introduce:

* Phan Thị Ý Như
* Visual Artist
* Selected Works
* optional date range
* one strong artwork

Do not use generic marketing copy.

Forbidden:

* "Welcome to my portfolio"
* "Explore my creative journey"
* "Where creativity meets passion"
* "View my work" CTA button

## Selected Works

Show several works with different compositions.

Do not immediately show a regular grid.

Create visual rhythm.

Example sequence:

```text
large
↓
small
↓
offset
↓
large
↓
detail
↓
archive
```

## Practice Moment

Introduce the idea of multiple artistic media without turning the page into
a material catalogue.

Possible labels:

* Oil
* Silk
* Lacquer
* Mixed Media

This section may use sticky scrolling.

## Archive Preview

Transition from emotional presentation into structured information.

Example:

```text
01   Untitled I      2026
02   Study II        2025
03   Untitled III    2025
04   ...
```

Desktop hover may reveal artwork preview.

---

# 13. Artwork Presentation

Artwork should never feel like product thumbnails.

Avoid:

* card frames
* drop shadows
* rounded containers
* ecommerce-style zoom
* "View Project" overlays
* tags floating over imagery

Artwork should appear as directly as possible.

Image boundaries should normally remain square or rectangular with:

```text
border-radius: 0px;
```

or at most:

```text
border-radius: 2px;
```

---

# 14. Artwork Detail

Suggested structure:

```text
Artwork
↓
Title + metadata
↓
Full image
↓
Surface detail
↓
Description / statement
↓
Process
↓
Next work
```

For oil works:

emphasize:

* full composition
* brushwork
* pigment
* canvas detail

For silk:

emphasize:

* space
* softness
* translucency
* line
* lightness

For lacquer:

emphasize:

* surface
* texture
* depth
* material detail
* process

Do not completely redesign the UI for each medium.

Adjust only rhythm and presentation.

---

# 15. Index

The Index is a core portfolio feature.

It should feel like:

* gallery inventory
* exhibition list
* archive

Not:

* dashboard
* spreadsheet
* ecommerce product list

Suggested desktop structure:

```text
01   Artwork title       2026      Oil
02   Artwork title       2025      Silk
03   Artwork title       2025      Lacquer
```

Hovering a row may reveal an artwork preview.

Filters may include:

* All
* Oil
* Silk
* Lacquer
* Mixed
* Drawing

Keep filters typographic and understated.

Avoid pill filters unless functionally necessary.

---

# 16. Navigation

Preferred desktop navigation:

```text
Phan Thị Ý Như

Works
Index
About
```

Keep navigation quiet.

Avoid:

* large floating navbar
* glass navigation
* excessive blur
* rounded navigation capsule
* unnecessary icons

---

# 17. Artist Assets

Asset naming convention:

## Artist photography

```text
at_1
at_2
at_3
```

## Artwork

```text
pic_1
pic_2
pic_3
...
```

## Artwork details

```text
detail_1
detail_2
...
```

## Process

```text
process_1
process_2
...
```

Preferred folders:

```text
/public/assets/

artist/
artworks/
details/
process/
```

---

# 18. Missing Asset Policy

Real artist assets may not initially exist.

If an expected asset is missing:

render a neutral placeholder.

Example:

```text
background: var(--surface);
```

Do not automatically fetch:

* Unsplash
* Pinterest
* stock imagery
* random image URLs

Do not display broken-image icons.

AI-generated placeholder imagery may be used only when explicitly creating
a visual prototype.

Implementation must make later replacement trivial.

---

# 19. Mock Content Policy

During prototyping, temporary artwork metadata may be used.

Temporary data must not be presented as verified biography or artwork facts.

Never invent:

* exhibition history
* awards
* schools
* galleries
* artist statements
* awards
* press mentions
* collection ownership

Unknown factual content should remain placeholder text.

---

# 20. Anti-AI Design Rules

Never introduce these patterns unless explicitly requested:

* gradient backgrounds
* purple gradients
* mesh gradients
* glowing shapes
* glassmorphism
* giant rounded cards
* bento grids
* decorative pill labels
* random status dots
* startup hero sections
* feature cards
* testimonial sections
* oversized CTA buttons
* blobs
* fake handwritten text
* random abstract SVGs
* generic flowers
* repeated 3-column layouts
* excessive badges
* fake dashboards
* meaningless metrics
* floating UI panels
* random grain over the whole interface
* excessive scroll indicators
* animated mouse trails
* decorative WebGL scenes

---

# 21. Responsive Design

Mobile should be designed independently.

Do not simply shrink the desktop layout.

On mobile:

* prioritize artwork width
* simplify sticky interactions
* maintain typography hierarchy
* preserve whitespace
* keep metadata readable
* avoid cramped multi-column compositions

Natural vertical scrolling remains the primary interaction.

---

# 22. Accessibility

Respect:

```text
prefers-reduced-motion
```

Do not make content inaccessible without animation.

Maintain readable contrast between:

```text
#252421
```

and background colors.

Artwork titles and navigation must remain keyboard accessible.

Artwork imagery should support meaningful alt text when real work metadata is
available.

---

# 23. Quality Gate

Before accepting any design, evaluate:

### Artwork

Is artwork visually dominant?

### Identity

Does this feel specific to Phan Thị Ý Như rather than a generic artist?

### Editorial quality

Could the composition plausibly exist in a contemporary art catalogue?

### Restraint

Did we add anything purely because it looks trendy?

### Motion

Would the layout still work if all animation were removed?

### Template detection

Does any section look like a common AI-generated website pattern?

### Technology

Is technology supporting the art rather than becoming the subject?

If any answer indicates a problem, redesign before proceeding.

---

# Final Principle

The ideal reaction from a viewer is:

> "I remember the artist and the artworks."

Not:

> "That website had impressive effects."
