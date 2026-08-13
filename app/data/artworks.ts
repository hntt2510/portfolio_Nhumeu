export type Medium = "Oil" | "Lacquer";

export type DetailFocus = {
  x: number;
  y: number;
  zoom: number;
};

export type ArtworkImageAsset = {
  image: string;
  aspectRatio: number;
  alt?: string;
};

const assetVersion = "real-v1";

function artworkImage(file: string) {
  return `/assets/artworks/${file}?v=${assetVersion}`;
}

export type Artwork = {
  id: string;
  title: string;
  image: string;
  aspectRatio: number;
  year?: number;
  medium?: Medium;
  dimensions?: string;
  series?: string;
  featured?: boolean;
  description?: string;
  details?: ArtworkImageAsset[];
  process?: ArtworkImageAsset[];
  provisional?: boolean;
  alt?: string;
  detailFocus?: DetailFocus;
};

export const artworks: Artwork[] = [
  {
    id: "work-ve-nha",
    title: "Về Nhà",
    medium: "Oil",
    image: artworkImage("pic_1.webp"),
    aspectRatio: 1630 / 2189,
    alt: "Về Nhà",
    provisional: false,
    detailFocus: { x: 46, y: 43, zoom: 1.65 },
    description: "A narrow path draws the eye through overlapping houses, vegetation and light. Về Nhà holds onto the familiarity of an ordinary place — neither completely still nor dramatic, but close enough to awaken the quiet memory of returning.",
  },
  {
    id: "work-ban",
    title: "Bận",
    medium: "Oil",
    image: artworkImage("pic_2.webp"),
    aspectRatio: 1776 / 2398,
    alt: "Bận",
    provisional: false,
    detailFocus: { x: 50, y: 48, zoom: 1.65 },
    description: "Figures gather around fabric, bodies and unfinished gestures, creating a space defined by activity rather than stillness. Bận observes the small overlaps of attention and movement that accumulate when many things seem to be happening at once.",
  },
  {
    id: "work-be",
    title: "Bé",
    medium: "Oil",
    image: artworkImage("pic_3.webp"),
    aspectRatio: 2606 / 2171,
    alt: "Bé",
    provisional: false,
    detailFocus: { x: 42, y: 47, zoom: 1.6 },
    description: "A fleeting moment of childhood is held through colour, movement and the proximity of everyday life. The scene feels lively yet tender, as though a brief fragment of play has been kept from disappearing into the rest of the day.",
  },
  {
    id: "work-xuong-tau",
    title: "Xưởng Tàu",
    medium: "Oil",
    image: artworkImage("pic_4.webp"),
    aspectRatio: 2560 / 1952,
    alt: "Xưởng Tàu",
    provisional: false,
    detailFocus: { x: 53, y: 43, zoom: 1.65 },
    description: "Scaffolding, structures and working figures form a continuous rhythm across the industrial space. Xưởng Tàu looks at the relationship between people and an environment being built, repaired and transformed piece by piece.",
  },
  {
    id: "work-dau-nang",
    title: "Dấu Nắng",
    medium: "Oil",
    image: artworkImage("pic_5.webp"),
    aspectRatio: 1338 / 2562,
    alt: "Dấu Nắng",
    provisional: false,
    detailFocus: { x: 55, y: 58, zoom: 1.7 },
    description: "Light passes across roofs, trees and a sloping path, leaving behind a temporary trace on an otherwise familiar place. Dấu Nắng is less concerned with locating a specific landscape than with the way light can briefly turn an ordinary space into a visual memory.",
  },
  {
    id: "work-tranh-dong-ho",
    title: "Tranh Đông Hồ",
    medium: "Lacquer",
    image: artworkImage("pic_6.webp"),
    aspectRatio: 2090 / 2560,
    alt: "Tranh Đông Hồ",
    provisional: false,
    detailFocus: { x: 57, y: 44, zoom: 1.75 },
    description: "A familiar folk-image vocabulary is carried into the depth and reflective surface of lacquer. The work retains a decorative sense of traditional imagery while allowing layers, texture and changing light to reshape how the image is experienced.",
  },
];

export function getArtworkById(id: string) {
  return artworks.find((artwork) => artwork.id === id);
}

export function requireArtworkById(id: string, context = "curation") {
  const artwork = getArtworkById(id);
  if (!artwork) throw new Error(`Invalid artwork ID "${id}" in ${context}.`);
  return artwork;
}

export function resolveArtworkIds(ids: string[], context = "curation") {
  return ids.map((id) => requireArtworkById(id, context));
}

export function getNextArtwork(artwork: Artwork) {
  const index = artworks.findIndex((item) => item.id === artwork.id);
  return artworks[(index + 1) % artworks.length];
}

export function getArtworkYearRange(items: Artwork[] = artworks) {
  const years = items.map((artwork) => artwork.year).filter((year): year is number => year !== undefined);
  if (!years.length) return undefined;
  const earliest = Math.min(...years);
  const latest = Math.max(...years);
  return earliest === latest ? String(earliest) : `${earliest}—${latest}`;
}

export const practiceGroups = [
  { medium: "Oil" as const, artworkId: "work-ban" },
  { medium: "Lacquer" as const, artworkId: "work-tranh-dong-ho" },
];

export const homepageCuration = {
  opening: "work-ve-nha",
  featured: "work-ve-nha",
  contrast: "work-be",
  sequence: ["work-tranh-dong-ho", "work-xuong-tau", "work-dau-nang"],
  archive: ["work-ve-nha", "work-ban", "work-be", "work-xuong-tau", "work-dau-nang", "work-tranh-dong-ho"],
};

export const aboutCuration = {
  artworkPause: "work-ban",
};
