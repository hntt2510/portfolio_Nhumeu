import type { Metadata } from "next";
import Link from "next/link";
import { ArtistMedia } from "../components/ArtistMedia";
import { ArtworkMedia } from "../components/ArtworkMedia";
import { PortfolioMotion } from "../components/PortfolioMotion";
import { SiteHeader } from "../components/SiteHeader";
import { artist } from "../data/artist";
import { aboutCuration, requireArtworkById } from "../data/artworks";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About — Phan Thị Ý Như",
  description: "About visual artist Phan Thị Ý Như.",
};

function RecordSection({ title, records }: { title: string; records?: typeof artist.education }) {
  if (!records?.length) return null;

  return <section className={`${styles.recordSection} motion-reveal`}>
    <h2>{title}</h2>
    <div className={styles.records}>
      {records.map((record, index) => <div className={styles.record} key={`${record.title}-${index}`}>
        {record.year && <span>{record.year}</span>}
        <div>
          <strong>{record.title}</strong>
          {(record.institution || record.venue || record.organization) && <span>{record.institution ?? record.venue ?? record.organization}</span>}
          {record.location && <span>{record.location}</span>}
        </div>
      </div>)}
    </div>
  </section>;
}

export default function AboutPage() {
  const pauseArtwork = requireArtworkById(aboutCuration.artworkPause, "about artwork pause");
  const hasRecords = Boolean(artist.education?.length || artist.exhibitions?.length || artist.awards?.length);
  const hasContact = Boolean(artist.contact?.email || artist.contact?.instagram || artist.contact?.website);

  return <PortfolioMotion>
    <main className={styles.page}>
      <SiteHeader activePage="about" />

      <section className={`${styles.opening} motion-reveal`}>
        <div className={styles.openingCopy}>
          <p className={styles.eyebrow}>About</p>
          <h1>{artist.name}</h1>
          <p className={styles.role}>{artist.role}</p>
          <p className={styles.practiceLine}>{artist.practices.join(" · ")}</p>
        </div>
        <ArtistMedia src={artist.portrait} alt={artist.portrait ? `${artist.name} portrait` : undefined} className={styles.portrait} preload={Boolean(artist.portrait)} sizes="(max-width: 900px) 90vw, 52vw" />
      </section>

      <section className={`${styles.profile} motion-reveal`}>
        <div className={styles.profileHeading}>
          <p className={styles.eyebrow}>Profile</p>
          <h2>{artist.name}</h2>
          <p>{artist.role}</p>
        </div>
        <div className={styles.practice}>
          <h2>Practice</h2>
          <div className={styles.practiceList}>
            {artist.practices.map((practice) => <span key={practice}>{practice}</span>)}
          </div>
        </div>
      </section>

      {artist.statement && <section className={`${styles.textSection} motion-reveal`}><h2>Statement</h2><p>{artist.statement}</p></section>}
      {artist.biography && <section className={`${styles.textSection} motion-reveal`}><h2>Biography</h2><p>{artist.biography}</p></section>}

      {hasRecords && <section className={styles.recordsBlock}>
        <h2 className={styles.recordsTitle}>Record</h2>
        <RecordSection title="Education" records={artist.education} />
        <RecordSection title="Selected Exhibitions" records={artist.exhibitions} />
        <RecordSection title="Awards" records={artist.awards} />
      </section>}

      <section className={`${styles.artworkPause} motion-reveal`}>
        <div className={styles.pauseCopy}>
          <p className={styles.eyebrow}>Selected work</p>
          <span className={styles.pauseIndex}>02</span>
          <h2>{pauseArtwork.title}</h2>
          {(pauseArtwork.medium || pauseArtwork.year !== undefined) && <p>{[pauseArtwork.medium, pauseArtwork.year].filter((value) => value !== undefined).join(" / ")}</p>}
        </div>
        <Link href={`/works/${pauseArtwork.id}`} className={styles.pauseLink}>
          <ArtworkMedia src={pauseArtwork.image} alt={pauseArtwork.alt ?? pauseArtwork.title} aspectRatio={pauseArtwork.aspectRatio} sizes="(max-width: 900px) 90vw, 48vw" className={styles.pauseArtwork} />
        </Link>
      </section>

      {hasContact && <section className={`${styles.contact} motion-reveal`}><h2>Contact</h2>{artist.contact?.email && <a href={`mailto:${artist.contact.email}`}>{artist.contact.email}</a>}{artist.contact?.instagram && <a href={artist.contact.instagram}>Instagram</a>}{artist.contact?.website && <a href={artist.contact.website}>Website</a>}</section>}

      <footer className={styles.closing}>
        <div><h2>{artist.name}</h2><p>{artist.role}</p></div>
        <nav aria-label="Footer navigation"><Link href="/works">Works</Link><Link href="/index">Index</Link><Link href="/about" aria-current="page">About</Link></nav>
      </footer>
    </main>
  </PortfolioMotion>;
}
