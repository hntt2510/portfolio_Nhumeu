import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "./components/SiteHeader";
import { LocalizedText } from "./components/LocalizedText";
import styles from "./status.module.css";

export const metadata: Metadata = {
  title: "404 — Phan Thị Ý Như",
  description: "The requested catalogue page was not found.",
};

export default function NotFound() {
  return <main className={styles.notFound}>
    <SiteHeader activePage={null} />
    <div className={styles.notFoundBody}>
      <div>
        <p className={styles.notFoundCode}>404</p>
        <p className={styles.notFoundLabel}><LocalizedText vi="Không tìm thấy" en="Not found" /></p>
      </div>
      <nav className={styles.notFoundLinks} aria-label="Recovery navigation">
        <Link href="/works"><LocalizedText vi="Tác phẩm" en="Works" /></Link>
        <Link href="/index"><LocalizedText vi="Danh mục" en="Index" /></Link>
      </nav>
    </div>
  </main>;
}
