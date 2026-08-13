import Link from "next/link";
import { PortfolioMotion } from "./components/PortfolioMotion";
import { ArtworkMedia } from "./components/ArtworkMedia";
import { ArchiveSection } from "./components/ArchiveSection";
import { SiteHeader } from "./components/SiteHeader";
import { ArtworkMedium, ArtworkTitle } from "./components/LocalizedArtworkText";
import { ArtistName, ArtistRole } from "./components/LocalizedArtistText";
import { LocalizedText } from "./components/LocalizedText";
import { artworks, homepageCuration, practiceGroups, resolveArtworkIds, requireArtworkById } from "./data/artworks";
import styles from "./page.module.css";

function Metadata({ artwork, index }: { artwork: (typeof artworks)[number]; index?: string }) {
  return <div className={styles.metadata}>
    {index && <span className={styles.metadataIndex}>{index}</span>}
    <span className={styles.metadataTitle}><ArtworkTitle artwork={artwork} /></span>
    {artwork.medium && <span><ArtworkMedium artwork={artwork} /></span>}
    {artwork.year !== undefined && <span>{artwork.year}</span>}
    {artwork.dimensions && <span>{artwork.dimensions}</span>}
  </div>;
}

export default function HomePage() {
  const featured = requireArtworkById(homepageCuration.featured, "homepage featured");
  const opening = requireArtworkById(homepageCuration.opening, "homepage opening");
  const contrast = requireArtworkById(homepageCuration.contrast, "homepage contrast");
  const sequence = resolveArtworkIds(homepageCuration.sequence, "homepage sequence");
  const archive = resolveArtworkIds(homepageCuration.archive, "homepage archive");
  const practiceWorks = practiceGroups.map(({ medium, artworkId }) => ({ medium, artwork: requireArtworkById(artworkId, `homepage practice ${medium}`) }));

  return <PortfolioMotion>
    <main className={styles.page}>
      <SiteHeader activePage="home" />

      <section id="top" className={`${styles.opening} ${styles.movement}`}>
        <div className={styles.openingName}><h1><ArtistName /></h1></div>
        <Link href={`/works/${opening.id}`} className={`${styles.artworkLink} ${styles.openingArtworkLink}`}><ArtworkMedia src={opening.image} alt={opening.alt ?? opening.title} aspectRatio={opening.aspectRatio} className={styles.openingArtwork} paperReveal preload sizes="(max-width: 700px) 88vw, 52vw" /></Link>
        <div className={styles.openingFooter}><span><ArtistRole /></span><span><LocalizedText vi="Tác phẩm chọn lọc" en="Selected Works" /></span></div>
      </section>

      <section id="works" className={`${styles.featured} ${styles.movement} motion-reveal`}>
        <div className={styles.sectionHeading}><span><LocalizedText vi="Tác phẩm chọn lọc" en="Selected work" /></span><span>01</span></div>
        <div className={styles.featuredGrid}>
          <Metadata artwork={featured} index="01" />
        <Link href={`/works/${featured.id}`} className={`${styles.artworkLink} ${styles.featuredArtworkLink} ${featured.id === "work-ve-nha" ? styles.featuredArtworkLinkVeNha : ""} artwork-drift`}><ArtworkMedia src={featured.image} alt={featured.alt ?? featured.title} aspectRatio={featured.aspectRatio} sizes="(max-width: 700px) 92vw, 70vw" className={styles.featuredArtwork} paperReveal /></Link>
        </div>
      </section>

      <section className={`${styles.contrast} ${styles.movement} motion-reveal`}>
        <Link href={`/works/${contrast.id}`} className={`${styles.artworkLink} ${styles.contrastArtworkLink}`}><ArtworkMedia src={contrast.image} alt={contrast.alt ?? contrast.title} aspectRatio={contrast.aspectRatio} sizes="(max-width: 700px) 66vw, 31vw" className={`${styles.contrastArtwork} artwork-drift`} /></Link>
        <Metadata artwork={contrast} index="02" />
      </section>

      <section className={`${styles.sequence} ${styles.movement}`}>
        <div className={styles.sequenceLead}><span><LocalizedText vi="Tác phẩm chọn lọc" en="Selected works" /></span><span>03—05</span></div>
        <div className={styles.sequenceArtworkSmall}><Link href={`/works/${sequence[0].id}`} className={styles.artworkLink}><ArtworkMedia src={sequence[0].image} alt={sequence[0].alt ?? sequence[0].title} aspectRatio={sequence[0].aspectRatio} sizes="(max-width: 700px) 57vw, 22vw" /></Link></div>
        <div className={styles.sequenceArtworkLarge}><Link href={`/works/${sequence[1].id}`} className={styles.artworkLink}><ArtworkMedia src={sequence[1].image} alt={sequence[1].alt ?? sequence[1].title} aspectRatio={sequence[1].aspectRatio} sizes="(max-width: 700px) 88vw, 39vw" /></Link></div>
        <div className={styles.sequenceArtworkNarrow}><Link href={`/works/${sequence[2].id}`} className={styles.artworkLink}><ArtworkMedia src={sequence[2].image} alt={sequence[2].alt ?? sequence[2].title} aspectRatio={sequence[2].aspectRatio} sizes="(max-width: 700px) 43vw, 16vw" /></Link></div>
        <div className={styles.sequenceMeta}><Metadata artwork={sequence[0]} index="03" /><Metadata artwork={sequence[1]} index="04" /><Metadata artwork={sequence[2]} index="05" /></div>
      </section>

      <section className={`${styles.practice} ${styles.movement} practice-section`}>
        <div className={`${styles.practiceCopy} practice-copy`}><p className={styles.eyebrow}><LocalizedText vi="Chất liệu và thực hành" en="Materials and practice" /></p><h2><LocalizedText vi="Nghiên cứu chất liệu" en="Material Studies" /></h2><nav className={styles.practiceNav} aria-label="Materials">{practiceWorks.map(({ medium, artwork }) => <a href={`#practice-${medium.toLowerCase()}`} key={medium}><ArtworkMedium artwork={artwork} /></a>)}</nav></div>
        <div className={styles.practiceWorks}>{practiceWorks.map(({ medium, artwork }) => { const anchor = `practice-${medium.toLowerCase()}`; return <article className={styles.practiceWork} id={anchor} key={medium}><div className={styles.practiceLabel}><ArtworkMedium artwork={artwork} /></div><Link href={`/works/${artwork.id}`} className={styles.artworkLink}><ArtworkMedia src={artwork.image} alt={artwork.alt ?? artwork.title} aspectRatio={artwork.aspectRatio} sizes="(max-width: 700px) 90vw, 58vw" className={styles.practiceArtwork} /></Link><Metadata artwork={artwork} /></article>; })}</div>
      </section>

      <ArchiveSection artworks={archive} />

      <footer id="about" className={`${styles.closing} ${styles.movement}`}><div><h2><ArtistName /></h2><p><ArtistRole /></p></div><nav aria-label="Footer navigation"><Link href="/works"><LocalizedText vi="Tác phẩm" en="Works" /></Link><Link href="/index"><LocalizedText vi="Danh mục" en="Index" /></Link><Link href="/about"><LocalizedText vi="Giới thiệu" en="About" /></Link></nav></footer>
    </main>
  </PortfolioMotion>;
}
