"use client";

import Link from "next/link";
import { useState } from "react";
import { ArtworkMedia } from "../components/ArtworkMedia";
import type { Artwork } from "../data/artworks";
import styles from "./page.module.css";

function numberFor(artwork: Artwork, artworks: Artwork[]) {
  return String(artworks.indexOf(artwork) + 1).padStart(2, "0");
}

export function IndexArchive({ artworks }: { artworks: Artwork[] }) {
  const [selected, setSelected] = useState(artworks[0]);

  return <div className={styles.archiveLayout}>
    <div className={styles.archiveList}>
      {artworks.map((artwork) => {
        const selectedState = selected.id === artwork.id;
        const previewId = `index-preview-${artwork.id}`;
        return <div className={`${styles.rowShell} ${selectedState ? styles.rowSelected : ""}`} key={artwork.id} onMouseEnter={() => setSelected(artwork)}>
          <Link
            href={`/works/${artwork.id}`}
            className={styles.archiveRow}
            onFocus={() => setSelected(artwork)}
          >
            <span>{numberFor(artwork, artworks)}</span>
            <span className={styles.rowTitle}>{artwork.title}</span>
            <span>{artwork.medium}</span>
            <span>{artwork.year}</span>
          </Link>
          <button
            type="button"
            className={styles.previewToggle}
            aria-expanded={selectedState}
            aria-controls={previewId}
            onClick={() => setSelected(artwork)}
          >Preview</button>
          {selectedState && <div id={previewId} className={styles.mobilePreview}>
            <ArtworkMedia src={artwork.image} alt={artwork.title} aspectRatio={artwork.aspectRatio} sizes="88vw" className={styles.mobilePreviewArtwork} />
            <Link href={`/works/${artwork.id}`} className={styles.previewLink}>View selected work</Link>
          </div>}
        </div>;
      })}
    </div>
    <aside className={styles.previewColumn} aria-live="polite">
      <ArtworkMedia src={selected.image} alt={selected.title} aspectRatio={selected.aspectRatio} sizes="38vw" className={styles.previewArtwork} />
      <Link href={`/works/${selected.id}`} className={styles.previewCaption}>{numberFor(selected, artworks)} / {selected.title}</Link>
    </aside>
  </div>;
}
