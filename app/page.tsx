import Link from "next/link";
import { PortfolioMotion } from "./components/PortfolioMotion";
import { ArtworkMedia } from "./components/ArtworkMedia";
import { ArchiveSection } from "./components/ArchiveSection";
import { SiteHeader } from "./components/SiteHeader";
import { artworks, homepageCuration, practiceGroups, resolveArtworkIds, requireArtworkById } from "./data/artworks";
import styles from "./page.module.css";

function Metadata({ artwork, index }: { artwork: (typeof artworks)[number]; index?: string }) {
  return <div className={styles.metadata}>
    {index && <span className={styles.metadataIndex}>{index}</span>}
    <span className={styles.metadataTitle}>{artwork.title}</span>
    {artwork.medium && <span>{artwork.medium}</span>}
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
        <div className={styles.openingName}><h1>Phan Thị Ý Như</h1></div>
        <Link href={`/works/${opening.id}`} className={`${styles.artworkLink} ${styles.openingArtworkLink}`}><ArtworkMedia src={opening.image} alt={opening.alt ?? opening.title} aspectRatio={opening.aspectRatio} className={styles.openingArtwork} preload sizes="(max-width: 700px) 88vw, 52vw" /></Link>
        <div className={styles.openingFooter}><span>Visual Artist</span><span>Selected Works<br />{homepageCuration.yearRange}</span></div>
      </section>

      <section id="works" className={`${styles.featured} ${styles.movement} motion-reveal`}>
        <div className={styles.sectionHeading}><span>Selected work</span><span>01</span></div>
        <div className={`${styles.featuredGrid} artwork-drift`}>
          <Metadata artwork={featured} index="01" />
        <Link href={`/works/${featured.id}`} className={`${styles.artworkLink} ${styles.featuredArtworkLink}`}><ArtworkMedia src={featured.image} alt={featured.alt ?? featured.title} aspectRatio={featured.aspectRatio} sizes="(max-width: 700px) 92vw, 70vw" className={styles.featuredArtwork} /></Link>
        </div>
      </section>

      <section className={`${styles.contrast} ${styles.movement} motion-reveal`}>
        <Link href={`/works/${contrast.id}`} className={`${styles.artworkLink} ${styles.contrastArtworkLink}`}><ArtworkMedia src={contrast.image} alt={contrast.alt ?? contrast.title} aspectRatio={contrast.aspectRatio} sizes="(max-width: 700px) 66vw, 31vw" className={`${styles.contrastArtwork} artwork-drift`} /></Link>
        <Metadata artwork={contrast} index="02" />
      </section>

      <section className={`${styles.sequence} ${styles.movement}`}>
        <div className={styles.sequenceLead}><span>Selected works</span><span>03—05</span></div>
        <div className={styles.sequenceArtworkSmall}><Link href={`/works/${sequence[0].id}`} className={styles.artworkLink}><ArtworkMedia src={sequence[0].image} alt={sequence[0].alt ?? sequence[0].title} sizes="(max-width: 700px) 57vw, 22vw" /></Link></div>
        <div className={styles.sequenceArtworkLarge}><Link href={`/works/${sequence[1].id}`} className={styles.artworkLink}><ArtworkMedia src={sequence[1].image} alt={sequence[1].alt ?? sequence[1].title} sizes="(max-width: 700px) 88vw, 39vw" /></Link></div>
        <div className={styles.sequenceArtworkNarrow}><Link href={`/works/${sequence[2].id}`} className={styles.artworkLink}><ArtworkMedia src={sequence[2].image} alt={sequence[2].alt ?? sequence[2].title} sizes="(max-width: 700px) 43vw, 16vw" /></Link></div>
        <div className={styles.sequenceMeta}><Metadata artwork={sequence[0]} index="03" /><Metadata artwork={sequence[1]} index="04" /><Metadata artwork={sequence[2]} index="05" /></div>
      </section>

      <section className={`${styles.practice} ${styles.movement} practice-section`}>
        <div className={`${styles.practiceCopy} practice-copy`}><p className={styles.eyebrow}>Materials and practice</p><h2>Material Studies</h2><nav className={styles.practiceNav} aria-label="Materials"><a href="#practice-oil">Oil</a><a href="#practice-silk">Silk</a><a href="#practice-lacquer">Lacquer</a><a href="#practice-mixed">Mixed Media</a></nav></div>
        <div className={styles.practiceWorks}>{practiceWorks.map(({ medium, artwork }) => { const anchor = medium === "Oil" ? "practice-oil" : medium === "Silk" ? "practice-silk" : medium === "Lacquer" ? "practice-lacquer" : "practice-mixed"; return <article className={styles.practiceWork} id={anchor} key={medium}><div className={styles.practiceLabel}>{medium}</div><Link href={`/works/${artwork.id}`} className={styles.artworkLink}><ArtworkMedia src={artwork.image} alt={artwork.alt ?? artwork.title} sizes="(max-width: 700px) 90vw, 58vw" className={styles.practiceArtwork} /></Link><Metadata artwork={artwork} /></article>; })}</div>
      </section>

      <ArchiveSection artworks={archive} />

      <footer id="about" className={`${styles.closing} ${styles.movement}`}><div><h2>Phan Thị Ý Như</h2><p>Visual Artist</p></div><nav aria-label="Footer navigation"><Link href="/works">Works</Link><Link href="/index">Index</Link><Link href="/about">About</Link></nav></footer>
    </main>
  </PortfolioMotion>;
}
