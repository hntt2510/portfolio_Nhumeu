import { PortfolioMotion } from "./components/PortfolioMotion";
import { ArtworkMedia } from "./components/ArtworkMedia";
import { ArchiveSection } from "./components/ArchiveSection";
import { artworks, practiceGroups } from "./data/artworks";
import styles from "./page.module.css";

function Metadata({ artwork, index }: { artwork: (typeof artworks)[number]; index?: string }) {
  return <div className={styles.metadata}>
    {index && <span className={styles.metadataIndex}>{index}</span>}
    <span className={styles.metadataTitle}>{artwork.title}</span>
    <span>{artwork.medium}</span>
    <span>{artwork.year}</span>
    <span>{artwork.dimensions}</span>
    <span className={styles.provisional}>Provisional visual study</span>
  </div>;
}

export default function HomePage() {
  const featured = artworks[0];
  const contrast = artworks[1];
  const sequence = [artworks[2], artworks[3], artworks[4]];

  return <PortfolioMotion>
    <main className={styles.page}>
      <header className={styles.nav}>
        <a href="#top" className={styles.navName}>Phan Thị Ý Như</a>
        <nav aria-label="Primary navigation"><a href="#works">Works</a><a href="#index">Index</a><a href="#about">About</a></nav>
      </header>

      <section id="top" className={`${styles.opening} ${styles.movement}`}>
        <div className={styles.openingName}><h1>Phan Thị Ý Như</h1></div>
        <ArtworkMedia src={featured.image} alt={featured.title} label="PIC_01" className={styles.openingArtwork} priority />
        <div className={styles.openingFooter}><span>Visual Artist</span><span>Selected Works / 2023—2026</span></div>
      </section>

      <section id="works" className={`${styles.featured} ${styles.movement} motion-reveal`}>
        <div className={styles.sectionHeading}><span>Selected work</span><span>01</span></div>
        <div className={`${styles.featuredGrid} artwork-drift`}>
          <Metadata artwork={featured} index="01" />
          <ArtworkMedia src={featured.image} alt={featured.title} label="PIC_01" className={styles.featuredArtwork} />
        </div>
      </section>

      <section className={`${styles.contrast} ${styles.movement} motion-reveal`}>
        <ArtworkMedia src={contrast.image} alt={contrast.title} label="PIC_02" className={`${styles.contrastArtwork} artwork-drift`} />
        <Metadata artwork={contrast} index="02" />
      </section>

      <section className={`${styles.sequence} ${styles.movement}`}>
        <div className={styles.sequenceLead}><span>Selected works</span><span>03—05</span></div>
        <div className={styles.sequenceArtworkSmall}><ArtworkMedia src={sequence[0].image} alt={sequence[0].title} label="PIC_03" /></div>
        <div className={styles.sequenceArtworkLarge}><ArtworkMedia src={sequence[1].image} alt={sequence[1].title} label="PIC_04" /></div>
        <div className={styles.sequenceArtworkNarrow}><ArtworkMedia src={sequence[2].image} alt={sequence[2].title} label="PIC_05" /></div>
        <div className={styles.sequenceMeta}><Metadata artwork={sequence[0]} index="03" /><Metadata artwork={sequence[1]} index="04" /><Metadata artwork={sequence[2]} index="05" /></div>
      </section>

      <section className={`${styles.practice} ${styles.movement} practice-section`}>
        <div className={`${styles.practiceCopy} practice-copy`}><p className={styles.eyebrow}>Materials and practice</p><h2>Across materials,<br />without a fixed centre.</h2><nav className={styles.practiceNav} aria-label="Materials"><a href="#practice-oil">Oil</a><a href="#practice-silk">Silk</a><a href="#practice-lacquer">Lacquer</a><a href="#practice-mixed">Mixed Media</a></nav><span className={styles.practiceNote}>Provisional visual studies</span></div>
        <div className={styles.practiceWorks}>{practiceGroups.map(({ medium, artworkId }) => { const artwork = artworks.find((item) => item.id === artworkId)!; const anchor = medium === "Oil" ? "practice-oil" : medium === "Silk" ? "practice-silk" : medium === "Lacquer" ? "practice-lacquer" : "practice-mixed"; return <article className={styles.practiceWork} id={anchor} key={medium}><div className={styles.practiceLabel}>{medium}</div><ArtworkMedia src={artwork.image} alt={artwork.title} label={`PIC_${artworkId.slice(-2)}`} className={styles.practiceArtwork} /><Metadata artwork={artwork} /></article>; })}</div>
      </section>

      <ArchiveSection artworks={artworks} />

      <footer id="about" className={`${styles.closing} ${styles.movement}`}><div><h2>Phan Thị Ý Như</h2><p>Visual Artist</p></div><nav aria-label="Footer navigation"><a href="#works">Works</a><a href="#index">Index</a><a href="#about">About</a></nav><span className={styles.closingNote}>Provisional homepage study / 2026</span></footer>
    </main>
  </PortfolioMotion>;
}
