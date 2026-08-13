import type { Metadata } from "next";
import Link from "next/link";
import { ArtistMedia } from "../components/ArtistMedia";
import { ArtworkMedia } from "../components/ArtworkMedia";
import { PortfolioMotion } from "../components/PortfolioMotion";
import { SiteHeader } from "../components/SiteHeader";
import { artist } from "../data/artist";
import { aboutCuration, requireArtworkById } from "../data/artworks";
import styles from "./page.module.css";
import { ArtworkMedium, ArtworkTitle } from "../components/LocalizedArtworkText";
import { LocalizedText } from "../components/LocalizedText";
import { ArtistFacts, ArtistName, ArtistRole } from "../components/LocalizedArtistText";

export const metadata: Metadata = {
  title: "About — Phan Thị Ý Như",
  description: "About visual artist Phan Thị Ý Như.",
};

function RecordSection() {
  const records = artist.education;
  if (!records?.length) return null;

  return <section className={`${styles.recordSection} motion-reveal`}>
    <h2><LocalizedText vi="Học vấn" en="Education" /></h2>
    <div className={styles.records}>
      {records.map((record, index) => <div className={styles.record} key={`${record.title}-${index}`}>
        {record.year && <span>{record.year}</span>}
        <div>
          <strong><LocalizedText vi="Trường Đại học Mỹ thuật Thành phố Hồ Chí Minh" en={record.title} /></strong>
          {(record.institution || record.venue || record.organization) && <span><LocalizedText vi="Hội hoạ" en={record.institution ?? record.venue ?? record.organization} /></span>}
          {record.location && <span><LocalizedText vi="Sinh viên năm ba" en={record.location} /></span>}
        </div>
      </div>)}
    </div>
  </section>;
}

export default function AboutPage() {
  const pauseArtwork = requireArtworkById(aboutCuration.artworkPause, "about artwork pause");
  const hasRecords = Boolean(artist.education?.length);
  const hasContact = Boolean(artist.contact?.email || artist.contact?.facebook || artist.contact?.instagram || artist.contact?.website);

  return <PortfolioMotion>
    <main className={styles.page}>
      <SiteHeader activePage="about" />

      <section className={`${styles.opening} motion-reveal`}>
        <div className={styles.openingCopy}>
          <p className={styles.eyebrow}><LocalizedText vi="Giới thiệu" en="About" /></p>
          <h1><ArtistName /></h1>
          <p className={styles.role}><ArtistRole /></p>
          <p className={styles.practiceLine}><LocalizedText vi="Sơn dầu · Sơn mài" en="Oil · Lacquer" /></p>
          <div className={styles.facts}>
            <ArtistFacts />
          </div>
        </div>
        <ArtistMedia src={artist.portrait} alt={artist.portrait ? artist.name : undefined} className={styles.portrait} paperReveal preload={Boolean(artist.portrait)} sizes="(max-width: 900px) 90vw, 52vw" />
      </section>

      <section className={`${styles.profile} motion-reveal`}>
        <div className={styles.profileHeading}>
          <p className={styles.eyebrow}><LocalizedText vi="Hồ sơ" en="Profile" /></p>
          <h2><ArtistName /></h2>
          <p><ArtistRole /></p>
        </div>
        <div className={styles.practice}>
          <h2><LocalizedText vi="Thực hành" en="Practice" /></h2>
          <div className={styles.practiceList}>
            <span><LocalizedText vi="Sơn dầu" en="Oil" /></span>
            <span><LocalizedText vi="Sơn mài" en="Lacquer" /></span>
          </div>
        </div>
      </section>

      {artist.statement && <section className={`${styles.textSection} motion-reveal`}><h2>Statement</h2><p>{artist.statement}</p></section>}
      {artist.biography && <section className={`${styles.textSection} motion-reveal`}><h2><LocalizedText vi="Tiểu sử" en="Biography" /></h2><p><LocalizedText vi="Phan Thị Ý Như sinh năm 2004 tại Bình Định và hiện sống, học tập tại Thành phố Hồ Chí Minh. Cô là sinh viên năm ba ngành Hội hoạ, Trường Đại học Mỹ thuật Thành phố Hồ Chí Minh.\n\nĐến với hội hoạ từ sớm, Ý Như hiện đang tìm hiểu những chất liệu và cách tiếp cận khác nhau để tìm ra ngôn ngữ thị giác phù hợp nhất với thực hành đang hình thành của mình. Các tác phẩm thường bắt đầu từ những quan sát gần gũi về đời sống và những không gian xung quanh — những con phố quen, nội thất, môi trường lao động, con người và khoảnh khắc thoáng qua được chuyển hoá qua màu sắc, bề mặt và bố cục." en={artist.biography} /></p></section>}
      {artist.practice && <section className={`${styles.textSection} motion-reveal`}><h2><LocalizedText vi="Thực hành" en="Practice" /></h2><p><LocalizedText vi="Ở giai đoạn này, Ý Như đặc biệt quan tâm đến sơn mài. Quy trình nhiều lớp — bồi, phủ, mài và dần dần hé lộ bề mặt — cho phép hình ảnh phát triển qua cả chất liệu lẫn thời gian. Mối quan hệ thay đổi giữa chiều sâu, kết cấu và ánh sáng phản chiếu mở ra một cách suy nghĩ về hình ảnh vượt ra ngoài sơn vẽ đơn thuần." en={artist.practice} /></p></section>}

      {hasRecords && <section className={styles.recordsBlock}>
        <h2 className={styles.recordsTitle}><LocalizedText vi="Thông tin" en="Record" /></h2>
        <RecordSection />
      </section>}

      <section className={`${styles.artworkPause} motion-reveal`}>
        <div className={styles.pauseCopy}>
          <p className={styles.eyebrow}><LocalizedText vi="Tác phẩm chọn lọc" en="Selected work" /></p>
          <span className={styles.pauseIndex}>02</span>
          <h2><ArtworkTitle artwork={pauseArtwork} /></h2>
          {pauseArtwork.medium && <p><ArtworkMedium artwork={pauseArtwork} /></p>}
        </div>
        <Link href={`/works/${pauseArtwork.id}`} className={styles.pauseLink}>
          <ArtworkMedia src={pauseArtwork.image} alt={pauseArtwork.alt ?? pauseArtwork.title} aspectRatio={pauseArtwork.aspectRatio} sizes="(max-width: 900px) 90vw, 48vw" className={styles.pauseArtwork} />
        </Link>
      </section>

      {hasContact && <section className={`${styles.contact} motion-reveal`}><h2><LocalizedText vi="Liên hệ" en="Contact" /></h2>{artist.contact?.facebook && <a href={artist.contact.facebook} target="_blank" rel="noreferrer">Facebook</a>}{artist.contact?.email && <a href={`mailto:${artist.contact.email}`}>{artist.contact.email}</a>}{artist.contact?.instagram && <a href={artist.contact.instagram}>Instagram</a>}{artist.contact?.website && <a href={artist.contact.website}>Website</a>}</section>}

      <footer className={styles.closing}>
        <div><h2><ArtistName /></h2><p><ArtistRole /></p></div>
        <nav aria-label="Footer navigation"><Link href="/works"><LocalizedText vi="Tác phẩm" en="Works" /></Link><Link href="/index"><LocalizedText vi="Danh mục" en="Index" /></Link><Link href="/about" aria-current="page"><LocalizedText vi="Giới thiệu" en="About" /></Link></nav>
      </footer>
    </main>
  </PortfolioMotion>;
}
