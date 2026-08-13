"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArtworkMedia } from "../components/ArtworkMedia";
import { ArtworkMedium, ArtworkTitle } from "../components/LocalizedArtworkText";
import { LocalizedText } from "../components/LocalizedText";
import type { Artwork } from "../data/artworks";
import styles from "./page.module.css";

gsap.registerPlugin(useGSAP);

function numberFor(artwork: Artwork, artworks: Artwork[]) {
  return String(artworks.indexOf(artwork) + 1).padStart(2, "0");
}

function isCompactPreview(artwork: Artwork) {
  return artwork.id === "work-be" || artwork.id === "work-xuong-tau";
}

export function IndexArchive({ artworks }: { artworks: Artwork[] }) {
  const [selected, setSelected] = useState(artworks[0]);
  const [previous, setPrevious] = useState<Artwork | undefined>();
  const previewRef = useRef<HTMLDivElement>(null);

  function selectArtwork(artwork: Artwork) {
    if (selected.id === artwork.id) return;
    setPrevious(selected);
    setSelected(artwork);
  }

  useGSAP(() => {
    if (!previewRef.current || !selected || !previous || previous.id === selected.id) return;
    const outgoing = previewRef.current.querySelector<HTMLElement>("[data-preview-layer='outgoing']");
    const incoming = previewRef.current.querySelector<HTMLElement>("[data-preview-layer='incoming']");
    if (!outgoing || !incoming) return;

    const mediaQuery = gsap.matchMedia();
    mediaQuery.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(outgoing, { autoAlpha: 0 });
      gsap.set(incoming, { autoAlpha: 1, scale: 1 });
    });
    mediaQuery.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(outgoing, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.45, ease: "power2.out", overwrite: "auto" });
      gsap.fromTo(incoming, { autoAlpha: 0, scale: 1.02 }, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.45,
        ease: "power2.out",
        overwrite: "auto",
      });
    });

    return () => mediaQuery.revert();
  }, { dependencies: [selected?.id, previous?.id], scope: previewRef, revertOnUpdate: true });

  if (!selected) return null;

  return <div className={styles.archiveLayout}>
    <div className={styles.archiveList}>
      {artworks.map((artwork) => {
        const selectedState = selected.id === artwork.id;
        const previewId = `index-preview-${artwork.id}`;
        return <div className={`${styles.rowShell} ${selectedState ? styles.rowSelected : ""}`} key={artwork.id} onMouseEnter={() => selectArtwork(artwork)}>
          <Link
            href={`/works/${artwork.id}`}
            className={styles.archiveRow}
            onFocus={() => selectArtwork(artwork)}
          >
            <span>{numberFor(artwork, artworks)}</span>
            <span className={styles.rowTitle}><ArtworkTitle artwork={artwork} /></span>
            {artwork.medium && <span><ArtworkMedium artwork={artwork} /></span>}
            {artwork.year !== undefined && <span>{artwork.year}</span>}
          </Link>
          <button
            type="button"
            className={styles.previewToggle}
            aria-expanded={selectedState}
            aria-controls={previewId}
            onClick={() => selectArtwork(artwork)}
          ><LocalizedText vi="Xem trước" en="Preview" /></button>
          {selectedState && <div id={previewId} className={styles.mobilePreview}>
            <ArtworkMedia src={artwork.image} alt={artwork.alt ?? artwork.title} aspectRatio={artwork.aspectRatio} sizes="88vw" className={styles.mobilePreviewArtwork} />
            <Link href={`/works/${artwork.id}`} className={styles.previewLink}><LocalizedText vi="Xem tác phẩm" en="View selected work" /></Link>
          </div>}
        </div>;
      })}
    </div>
    <aside ref={previewRef} className={styles.previewColumn} aria-live="polite">
      <div className={styles.previewStage}>
        {previous && previous.id !== selected.id && <div className={`${styles.previewLayer} ${isCompactPreview(previous) ? styles.previewLayerCompact : ""}`} data-preview-layer="outgoing"><ArtworkMedia src={previous.image} alt={previous.alt ?? previous.title} aspectRatio={previous.aspectRatio} sizes="43vw" className={styles.previewArtwork} /></div>}
        <div className={`${styles.previewLayer} ${isCompactPreview(selected) ? styles.previewLayerCompact : ""}`} data-preview-layer="incoming"><ArtworkMedia src={selected.image} alt={selected.alt ?? selected.title} aspectRatio={selected.aspectRatio} sizes="43vw" className={styles.previewArtwork} /></div>
      </div>
      <Link href={`/works/${selected.id}`} className={styles.previewCaption}>{numberFor(selected, artworks)} / <ArtworkTitle artwork={selected} /></Link>
    </aside>
  </div>;
}
