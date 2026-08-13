"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import type { DetailFocus } from "../data/artworks";
import styles from "./ArtworkMedia.module.css";

export type ArtworkMediaProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  preload?: boolean;
  sizes?: string;
  mode?: "full" | "crop";
  aspectRatio?: number;
  focus?: DetailFocus;
  paperReveal?: boolean;
};

export function ArtworkMedia({ src, alt, label, className = "", preload = false, sizes, mode = "full", aspectRatio, focus, paperReveal = false }: ArtworkMediaProps) {
  const showDebugLabel = process.env.NEXT_PUBLIC_ARTWORK_DEBUG === "true";
  const focusStyle = focus && mode === "crop" ? {
    objectPosition: `${focus.x}% ${focus.y}%`,
    "--focus-zoom": focus.zoom,
  } as CSSProperties : undefined;

  return (
    <div
      className={`${styles.artworkMedia} ${paperReveal ? `${styles.paperReveal} paper-reveal` : ""} ${focus ? `${styles.surfaceFocus} surface-focus` : ""} ${className}`}
      data-focus-zoom={focus?.zoom}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "(max-width: 700px) 92vw, (max-width: 1200px) 70vw, 55vw"}
        className={`${styles.artworkImage} ${mode === "crop" ? styles.artworkImageCrop : styles.artworkImageFull} ${focus ? styles.artworkImageFocus : ""}`}
        style={focusStyle}
        preload={preload}
        onError={(event) => {
          event.currentTarget.style.display = "none";
          event.currentTarget.parentElement?.classList.add(styles.artworkFallback);
        }}
      />
      {paperReveal && <span className={`${styles.paperMatte} paper-matte`} aria-hidden="true" />}
      {showDebugLabel && label && <span className={styles.artworkLabel}>{label}</span>}
    </div>
  );
}
