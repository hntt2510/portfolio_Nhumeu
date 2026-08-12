"use client";

import Link from "next/link";
import { useState } from "react";
import { ArtworkMedia } from "./ArtworkMedia";
import type { Artwork } from "../data/artworks";
import styles from "../page.module.css";

export function ArchiveSection({ artworks }: { artworks: Artwork[] }) {
  const archiveWorks = artworks.slice(0, 8);
  const [selected, setSelected] = useState(archiveWorks[0]);

  return <section id="index" className={`${styles.archive} ${styles.movement}`}>
    <div className={styles.archiveIntro}>
      <p className={styles.eyebrow}>Archive</p>
      <h2>Selected works</h2>
      <Link href={`/works/${selected.id}`} className={styles.archivePreviewLink}><ArtworkMedia src={selected.image} alt={selected.title} label={`PIC_${selected.id.slice(-2)}`} aspectRatio={selected.aspectRatio} className={styles.archivePreview} /></Link>
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
        <span>{artwork.medium}</span>
        <span>{artwork.year}</span>
      </Link>)}
    </div>
  </section>;
}
