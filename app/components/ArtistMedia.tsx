"use client";

import Image from "next/image";
import styles from "./ArtistMedia.module.css";

export type ArtistMediaProps = {
  src?: string;
  alt?: string;
  aspectRatio?: number;
  mode?: "full" | "crop";
  className?: string;
  preload?: boolean;
  sizes?: string;
  paperReveal?: boolean;
};

export function ArtistMedia({ src, alt = "", aspectRatio = 3 / 4, mode = "crop", className = "", preload = false, sizes, paperReveal = false }: ArtistMediaProps) {
  return <div className={`${styles.media} ${paperReveal ? `${styles.paperReveal} paper-reveal` : ""} ${className}`} style={{ aspectRatio }}>
    {src && <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "(max-width: 900px) 90vw, 50vw"}
      className={mode === "crop" ? styles.crop : styles.full}
      preload={preload}
      onError={(event) => {
        event.currentTarget.style.display = "none";
        event.currentTarget.parentElement?.classList.add(styles.fallback);
      }}
      />}
    {paperReveal && <span className={`${styles.paperMatte} paper-matte`} aria-hidden="true" />}
  </div>;
}
