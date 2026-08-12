"use client";

import Image from "next/image";
import styles from "../page.module.css";

type ArtworkMediaProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
};

export function ArtworkMedia({ src, alt, label, className = "", priority = false }: ArtworkMediaProps) {
  return (
    <div className={`${styles.artworkMedia} ${className}`}>
      <Image
        src={src}
        alt={`${alt} — Provisional visual study`}
        fill
        sizes="(max-width: 700px) 92vw, (max-width: 1200px) 70vw, 55vw"
        className={styles.artworkImage}
        priority={priority}
        onError={(event) => {
          event.currentTarget.style.display = "none";
          event.currentTarget.parentElement?.classList.add(styles.artworkFallback);
        }}
      />
      <span className={styles.artworkLabel}>{label}</span>
    </div>
  );
}
