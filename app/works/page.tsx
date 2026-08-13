import type { Metadata } from "next";
import { PortfolioMotion } from "../components/PortfolioMotion";
import { SiteHeader } from "../components/SiteHeader";
import { artworks } from "../data/artworks";
import { WorksGallery } from "./WorksGallery";
import { LocalizedText } from "../components/LocalizedText";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Works — Phan Thị Ý Như",
  description: "Selected works by visual artist Phan Thị Ý Như.",
};

export default function WorksPage() {
  return <PortfolioMotion>
    <main className={styles.page}>
      <SiteHeader activePage="works" />
      <section className={`${styles.intro} motion-reveal`}>
        <div>
          <h1><LocalizedText vi="Tác phẩm" en="Works" /></h1>
          <p className={styles.eyebrow}><LocalizedText vi="Tác phẩm chọn lọc" en="Selected Works" /></p>
        </div>
        <p className={styles.introNote}>{artworks.length} <LocalizedText vi="tác phẩm" en="works" /></p>
      </section>
      <WorksGallery artworks={artworks} />
    </main>
  </PortfolioMotion>;
}
