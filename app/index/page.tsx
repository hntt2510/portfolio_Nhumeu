import type { Metadata } from "next";
import { PortfolioMotion } from "../components/PortfolioMotion";
import { SiteHeader } from "../components/SiteHeader";
import { artworks } from "../data/artworks";
import { IndexArchive } from "./IndexArchive";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Index — Phan Thị Ý Như",
  description: "An artwork index for visual artist Phan Thị Ý Như.",
};

export default function IndexPage() {
  return <PortfolioMotion>
    <main className={styles.page}>
      <SiteHeader activePage="index" />
      <section className={`${styles.intro} motion-reveal`}>
        <p className={styles.eyebrow}>Archive</p>
        <h1>Index</h1>
      </section>
      <IndexArchive artworks={artworks} />
    </main>
  </PortfolioMotion>;
}
