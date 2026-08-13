import type { Metadata } from "next";
import Link from "next/link";
import { ArtistMedia } from "../components/ArtistMedia";
import { ArtworkMedia } from "../components/ArtworkMedia";
import { PortfolioMotion } from "../components/PortfolioMotion";
import { SiteHeader } from "../components/SiteHeader";
import { artist } from "../data/artist";
import { aboutCuration, requireArtworkById } from "../data/artworks";
import styles from "./page.module.css";
import { ArtworkMedium } from "../components/LocalizedArtworkText";
import { LocalizedText } from "../components/LocalizedText";

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
  const hasContact = Boolean(artist.contact?.email || artist.contact?.facebook || artist.contact?.instagram || artist.contact?.website);

  return <PortfolioMotion>
    <main className={styles.page}>
      <SiteHeader activePage="about" />

      <section className={`${styles.opening} motion-reveal`}>
        <div className={styles.openingCopy}>
          <p className={styles.eyebrow}><LocalizedText vi="Giới thiệu" en="About" /></p>
          <h1>{artist.name}</h1>
          <p className={styles.role}>{artist.role}</p>
          <p className={styles.practiceLine}>{artist.practices.join(" · ")}</p>
          <div className={styles.facts}>
            {artist.born && <span>{artist.born}</span>}
            {artist.bornIn && <span>{artist.bornIn}</span>}
            {artist.basedIn && <span>{artist.basedIn}</span>}
          </div>
        </div>
        <ArtistMedia src={artist.portrait} alt={artist.portrait ? artist.name : undefined} className={styles.portrait} paperReveal preload={Boolean(artist.portrait)} sizes="(max-width: 900px) 90vw, 52vw" />
      </section>

      <section className={`${styles.profile} motion-reveal`}>
        <div className={styles.profileHeading}>
          <p className={styles.eyebrow}>Profile</p>
          <h2>{artist.name}</h2>
          <p><LocalizedText vi="Nghệ sĩ thị giác" en={artist.role} /></p>
        </div>
        <div className={styles.practice}>
          <h2><LocalizedText vi="Thực hành" en="Practice" /></h2>
          <div className={styles.practiceList}>
            {artist.practices.map((practice) => <span key={practice}>{practice}</span>)}
          </div>
        </div>
      </section>

      {artist.statement && <section className={`${styles.textSection} motion-reveal`}><h2>Statement</h2><p>{artist.statement}</p></section>}
      {artist.biography && <section className={`${styles.textSection} motion-reveal`}><h2><LocalizedText vi="Tiểu sử" en="Biography" /></h2><p><LocalizedText vi="Phan Thị Ý Như sinh năm 2004 tại Bình Định và hiện sống, học tập tại Thành phố Hồ Chí Minh. Cô là sinh viên năm ba ngành Hội hoạ, Trường Đại học Mỹ thuật Thành phố Hồ Chí Minh.\n\nĐến với hội hoạ từ sớm, Ý Như hiện đang tìm hiểu những chất liệu và cách tiếp cận khác nhau để tìm ra ngôn ngữ thị giác phù hợp nhất với thực hành đang hình thành của mình. Các tác phẩm thường bắt đầu từ những quan sát gần gũi về đời sống và những không gian xung quanh — những con phố quen, nội thất, môi trường lao động, con người và khoảnh khắc thoáng qua được chuyển hoá qua màu sắc, bề mặt và bố cục." en={artist.biography} /></p></section>}
      {artist.practice && <section className={`${styles.textSection} motion-reveal`}><h2><LocalizedText vi="Thực hành" en="Practice" /></h2><p><LocalizedText vi="Ở giai đoạn này, Ý Như đặc biệt quan tâm đến sơn mài. Quy trình nhiều lớp — bồi, phủ, mài và dần dần hé lộ bề mặt — cho phép hình ảnh phát triển qua cả chất liệu lẫn thời gian. Mối quan hệ thay đổi giữa chiều sâu, kết cấu và ánh sáng phản chiếu mở ra một cách suy nghĩ về hình ảnh vượt ra ngoài sơn vẽ đơn thuần." en={artist.practice} /></p></section>}

      {hasRecords && <section className={styles.recordsBlock}>
        <h2 className={styles.recordsTitle}><LocalizedText vi="Thông tin" en="Record" /></h2>
        <RecordSection title="Education" records={artist.education} />
        <RecordSection title="Selected Exhibitions" records={artist.exhibitions} />
        <RecordSection title="Awards" records={artist.awards} />
      </section>}

      <section className={`${styles.artworkPause} motion-reveal`}>
        <div className={styles.pauseCopy}>
          <p className={styles.eyebrow}><LocalizedText vi="Tác phẩm chọn lọc" en="Selected work" /></p>
          <span className={styles.pauseIndex}>02</span>
          <h2>{pauseArtwork.title}</h2>
          {pauseArtwork.medium && <p><ArtworkMedium artwork={pauseArtwork} /></p>}
        </div>
        <Link href={`/works/${pauseArtwork.id}`} className={styles.pauseLink}>
          <ArtworkMedia src={pauseArtwork.image} alt={pauseArtwork.alt ?? pauseArtwork.title} aspectRatio={pauseArtwork.aspectRatio} sizes="(max-width: 900px) 90vw, 48vw" className={styles.pauseArtwork} />
        </Link>
      </section>

      {hasContact && <section className={`${styles.contact} motion-reveal`}><h2><LocalizedText vi="Liên hệ" en="Contact" /></h2>{artist.contact?.facebook && <a href={artist.contact.facebook} target="_blank" rel="noreferrer">Facebook</a>}{artist.contact?.email && <a href={`mailto:${artist.contact.email}`}>{artist.contact.email}</a>}{artist.contact?.instagram && <a href={artist.contact.instagram}>Instagram</a>}{artist.contact?.website && <a href={artist.contact.website}>Website</a>}</section>}

      <footer className={styles.closing}>
        <div><h2>{artist.name}</h2><p><LocalizedText vi="Nghệ sĩ thị giác" en={artist.role} /></p></div>
        <nav aria-label="Footer navigation"><Link href="/works"><LocalizedText vi="Tác phẩm" en="Works" /></Link><Link href="/index"><LocalizedText vi="Danh mục" en="Index" /></Link><Link href="/about" aria-current="page"><LocalizedText vi="Giới thiệu" en="About" /></Link></nav>
      </footer>
    </main>
  </PortfolioMotion>;
}
