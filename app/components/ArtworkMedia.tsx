"use client";

import Image from "next/image";
import styles from "./ArtworkMedia.module.css";

type ArtworkMediaProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  priority?: boolean;
  mode?: "full" | "crop";
  aspectRatio?: number;
};

export function ArtworkMedia({ src, alt, label, className = "", priority = false, mode = "full", aspectRatio }: ArtworkMediaProps) {
  const showDebugLabel = process.env.NEXT_PUBLIC_ARTWORK_DEBUG === "true";

  return (
    <div className={`${styles.artworkMedia} ${className}`} style={aspectRatio ? { aspectRatio } : undefined}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 700px) 92vw, (max-width: 1200px) 70vw, 55vw"
        className={`${styles.artworkImage} ${mode === "crop" ? styles.artworkImageCrop : styles.artworkImageFull}`}
        priority={priority}
        onError={(event) => {
          event.currentTarget.style.display = "none";
          event.currentTarget.parentElement?.classList.add(styles.artworkFallback);
        }}
      />
      {showDebugLabel && label && <span className={styles.artworkLabel}>{label}</span>}
    </div>
  );
}
