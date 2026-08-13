"use client";

import Link from "next/link";
import { useState } from "react";
import { ArtworkMedia } from "./ArtworkMedia";
import { ArtworkMedium } from "./LocalizedArtworkText";
import { LocalizedText } from "./LocalizedText";
import type { Artwork } from "../data/artworks";
import styles from "../page.module.css";

export function ArchiveSection({ artworks }: { artworks: Artwork[] }) {
  const archiveWorks = artworks;
  const [selected, setSelected] = useState(archiveWorks[0]);

  if (!selected) return null;

  return <section id="index" className={`${styles.archive} ${styles.movement}`}>
    <div className={styles.archiveIntro}>
      <p className={styles.eyebrow}><LocalizedText vi="Lưu trữ" en="Archive" /></p>
      <h2><LocalizedText vi="Tác phẩm chọn lọc" en="Selected works" /></h2>
      <Link href={`/works/${selected.id}`} className={styles.archivePreviewLink}><ArtworkMedia src={selected.image} alt={selected.alt ?? selected.title} aspectRatio={selected.aspectRatio} sizes="(max-width: 700px) 70vw, 28vw" className={styles.archivePreview} /></Link>
    </div>
    <div className={styles.archiveList}>
      {archiveWorks.map((artwork, index) => <Link
        className={`${styles.archiveRow} ${selected.id === artwork.id ? styles.archiveRowActive : ""}`}
        href={`/works/${artwork.id}`}
        key={artwork.id}
        onMouseEnter={() => setSelected(artwork)}
        onFocus={() => setSelected(artwork)}
      >
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span className={styles.archiveTitle}>{artwork.title}</span>
        {artwork.medium && <span><ArtworkMedium artwork={artwork} /></span>}
        {artwork.year !== undefined && <span>{artwork.year}</span>}
      </Link>)}
    </div>
  </section>;
}
