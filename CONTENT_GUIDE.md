# Content guide

Portfolio content is maintained through `app/data/` and `public/assets/`.
Page layouts should not need editing when an artwork or factual artist record
is replaced.

## Asset folders and naming

Use the canonical folders below and the `type_index` convention:

```text
public/assets/
├── artist/    at_1.webp, at_2.webp, at_3.webp
├── artworks/  pic_1.webp, pic_2.webp, pic_3.webp
├── details/   detail_1.webp, detail_2.webp
└── process/   process_1.webp, process_2.webp
```

`pic_N` is the complete artwork. `detail_N` is an intentionally selected
surface or texture close-up. `process_N` is a creation/process image. Do not
use a crop of a full artwork as a permanent real detail asset unless that crop
has been intentionally selected.

Do not automatically rename real artist files. Normalize supplied files
deliberately after confirming their mapping.

## Add or replace content

For the primary About portrait, add the supplied image as:

```text
public/assets/artist/at_1.webp
```

Then update `portrait` in `app/data/artist.ts`. For an artwork, add the file
under `public/assets/artworks/` and update one record in
`app/data/artworks.ts`:

```ts
{
  id: "work-13",
  title: "Artist-supplied title",
  image: "/assets/artworks/pic_13.webp",
  aspectRatio: 2 / 3,
  year: 2026,
  medium: "Oil",
  dimensions: "Artist-supplied dimensions",
  series: "Artist-supplied series",
  provisional: false,
}
```

Required technical data is `id`, `title`, `image`, and `aspectRatio`.
Recommended real metadata is `year`, `medium`, `dimensions`, and `series`.
Optional fields are `alt`, `description`, `details`, and `process`.

All factual titles, years, dimensions, series, descriptions, statements,
biographies, exhibitions, education, awards, and contact details must be
supplied or confirmed by the artist. Do not fill unknown fields with invented
content. `provisional` is an internal maintenance flag and never appears in
the public UI.

## Editorial curation

The array order in `artworks` is the Works/Index archive order. Homepage roles
are intentionally separate in `homepageCuration` and use stable artwork IDs.
About's artwork pause is configured in `aboutCuration`. When replacing real
works, assign them deliberately by:

- portrait or landscape orientation;
- visual density and dominant color;
- medium and material relationship;
- importance within the body of work;
- how the work relates to adjacent artwork.

Do not reorder or assign works randomly, and do not sort only by year. Update
the curation IDs when the editorial role should change.

## Image quality

Prefer high-quality WebP or JPEG exports in sRGB. Photograph artwork as
straight as possible, preserve the complete composition, and do not include
gallery-app UI, screenshots, borders, or unrelated frames. Use an intentional
crop only for a detail asset; the main artwork uses complete-image rendering.
Do not enforce arbitrary dimensions in code. Run:

```text
npm run content:audit
```

The audit reports width, height, aspect ratio, missing/broken references,
duplicate paths, naming issues, curation IDs, and optional metadata gaps. It
does not modify images or data.

## Artist data

Update factual artist information in `app/data/artist.ts`. Portrait, statement,
biography, education, exhibitions, awards, and contact fields are optional.
Empty sections stay hidden until real content is available.
