"use client";

import Image from "next/image";
import styles from "./ArtistMedia.module.css";

type ArtistMediaProps = {
  src?: string;
  alt?: string;
  aspectRatio?: number;
  mode?: "full" | "crop";
  className?: string;
  priority?: boolean;
};

export function ArtistMedia({ src, alt = "", aspectRatio = 3 / 4, mode = "crop", className = "", priority = false }: ArtistMediaProps) {
  return <div className={`${styles.media} ${className}`} style={{ aspectRatio }}>
    {src && <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 900px) 90vw, 50vw"
      className={mode === "crop" ? styles.crop : styles.full}
      priority={priority}
      onError={(event) => {
        event.currentTarget.style.display = "none";
        event.currentTarget.parentElement?.classList.add(styles.fallback);
      }}
    />}
  </div>;
}
