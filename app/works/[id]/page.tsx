import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArtworkMedia } from "../../components/ArtworkMedia";
import { PortfolioMotion } from "../../components/PortfolioMotion";
import { SiteHeader } from "../../components/SiteHeader";
import { artworks, getArtworkById, getNextArtwork } from "../../data/artworks";
import styles from "./page.module.css";

type DetailPageProps = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return artworks.map((artwork) => ({ id: artwork.id }));
}

export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const artwork = getArtworkById(id);
  if (!artwork) return { title: "Artwork — Phan Thị Ý Như" };

  const metadata = [artwork.medium, artwork.year].filter((value) => value !== undefined).join(", ");
  return {
    title: `${artwork.title} — Phan Thị Ý Như`,
    ...(metadata ? { description: `${artwork.title}, ${metadata}.` } : {}),
  };
}

function MetadataRail({ artwork }: { artwork: (typeof artworks)[number] }) {
  return <div className={styles.metadataRail}>
    <Link href="/works" className={styles.backLink}>← Works</Link>
    <span className={styles.metadataIndex}>{String(artworks.indexOf(artwork) + 1).padStart(2, "0")}</span>
    <h1>{artwork.title}</h1>
    {artwork.medium && <span>{artwork.medium}</span>}
    {artwork.year !== undefined && <span>{artwork.year}</span>}
    {artwork.dimensions && <span>{artwork.dimensions}</span>}
    {artwork.series && <span className={styles.metadataSeries}>{artwork.series}</span>}
  </div>;
}

function DetailMovement({ artwork }: { artwork: (typeof artworks)[number] }) {
  const suppliedDetail = artwork.details?.[0];
  const detailImage = suppliedDetail?.image ?? (artwork.provisional ? artwork.image : undefined);
  if (!detailImage) return null;

  return <section className={`${styles.detailMovement} motion-reveal`}>
    <div className={styles.detailRule} />
    <ArtworkMedia
      src={detailImage}
      alt={suppliedDetail?.alt ?? artwork.alt ?? artwork.title}
      mode="crop"
      aspectRatio={suppliedDetail?.aspectRatio}
      sizes="(max-width: 900px) 90vw, 62vw"
      className={styles.detailArtwork}
    />
    <span className={styles.detailLabel}>DETAIL / 01</span>
  </section>;
}

function NextMovement({ artwork }: { artwork: (typeof artworks)[number] }) {
  const next = getNextArtwork(artwork);
  const index = artworks.indexOf(next) + 1;
  const nextMetadata = [next.medium, next.year].filter((value) => value !== undefined).join(" / ");

  return <section className={`${styles.nextMovement} motion-reveal`}>
    <Link href={`/works/${next.id}`} className={styles.nextLink}>
      <div className={styles.nextCopy}>
        <span className={styles.nextEyebrow}>NEXT WORK</span>
        <span className={styles.nextIndex}>{String(index).padStart(2, "0")}</span>
        <h2>{next.title}</h2>
        {nextMetadata && <span>{nextMetadata}</span>}
      </div>
      <ArtworkMedia src={next.image} alt={next.alt ?? next.title} aspectRatio={next.aspectRatio} sizes="(max-width: 900px) 90vw, 42vw" className={styles.nextArtwork} />
    </Link>
  </section>;
}

export default async function ArtworkDetailPage({ params }: DetailPageProps) {
  const { id } = await params;
  const artwork = getArtworkById(id);
  if (!artwork) notFound();

  return <PortfolioMotion>
    <main className={styles.page}>
      <SiteHeader activePage="works" />
      <section className={`${styles.opening} motion-reveal`}>
        <MetadataRail artwork={artwork} />
        <ArtworkMedia src={artwork.image} alt={artwork.alt ?? artwork.title} aspectRatio={artwork.aspectRatio} className={styles.primaryArtwork} preload sizes="(max-width: 900px) 90vw, 58vw" />
      </section>
      {artwork.description && <section className={`${styles.description} motion-reveal`}><p>{artwork.description}</p></section>}
      <DetailMovement artwork={artwork} />
      {artwork.process?.map((item) => <section className={`${styles.processMovement} motion-reveal`} key={item.image}><ArtworkMedia src={item.image} alt={item.alt ?? artwork.alt ?? artwork.title} mode="full" aspectRatio={item.aspectRatio} className={styles.processArtwork} /></section>)}
      <NextMovement artwork={artwork} />
    </main>
  </PortfolioMotion>;
}
