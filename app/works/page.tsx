import type { Metadata } from "next";
import { PortfolioMotion } from "../components/PortfolioMotion";
import { SiteHeader } from "../components/SiteHeader";
import { artworks } from "../data/artworks";
import { WorksGallery } from "./WorksGallery";
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
          <h1>Works</h1>
          <p className={styles.eyebrow}>Selected Works</p>
          <p className={styles.dateRange}>2020—2026</p>
        </div>
        <p className={styles.introNote}>12 works</p>
      </section>
      <WorksGallery artworks={artworks} />
    </main>
  </PortfolioMotion>;
}
