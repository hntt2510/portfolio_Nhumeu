"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArtworkMedia } from "../components/ArtworkMedia";
import { ArtworkMedium } from "../components/LocalizedArtworkText";
import { LocalizedText } from "../components/LocalizedText";
import type { Artwork, Medium } from "../data/artworks";
import styles from "./page.module.css";

const filters: Array<"All" | Medium> = ["All", "Oil", "Lacquer"];

function artworkNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function WorksGallery({ artworks }: { artworks: Artwork[] }) {
  const [filter, setFilter] = useState<"All" | Medium>("All");
  const visibleArtworks = useMemo(
    () => filter === "All" ? artworks : artworks.filter((artwork) => artwork.medium === filter),
    [artworks, filter],
  );

  return <>
    <div className={styles.filterBar} aria-label="Filter works by medium">
      {filters.map((item) => <button
        type="button"
        className={item === filter ? styles.filterActive : undefined}
        aria-pressed={item === filter}
        onClick={() => setFilter(item)}
        key={item}
      ><LocalizedText vi={item === "All" ? "Tất cả" : item === "Oil" ? "Sơn dầu" : "Sơn mài"} en={item} /></button>)}
    </div>
    <div className={styles.gallery}>
      {visibleArtworks.map((artwork, index) => <article className={`${styles.galleryItem} ${styles[`item${index % 6}`]}`} key={artwork.id}>
        <Link href={`/works/${artwork.id}`} className={styles.galleryLink}>
          <ArtworkMedia
            src={artwork.image}
            alt={artwork.title}
            aspectRatio={artwork.aspectRatio}
            preload={index === 0}
            sizes="(max-width: 700px) 88vw, (max-width: 1100px) 62vw, 38vw"
            className={styles.galleryArtwork}
            paperReveal
          />
          <div className={styles.galleryMeta}>
            <span className={styles.galleryNumber}>{artworkNumber(artworks.indexOf(artwork))}</span>
            <span className={styles.galleryTitle}>{artwork.title}</span>
            {artwork.medium && <span><ArtworkMedium artwork={artwork} /></span>}
            {artwork.year !== undefined && <span>{artwork.year}</span>}
          </div>
        </Link>
      </article>)}
    </div>
  </>;
}
