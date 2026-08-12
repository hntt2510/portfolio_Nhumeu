import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "./components/SiteHeader";
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
        <p className={styles.notFoundLabel}>Not found</p>
      </div>
      <nav className={styles.notFoundLinks} aria-label="Recovery navigation">
        <Link href="/works">Works</Link>
        <Link href="/index">Index</Link>
      </nav>
    </div>
  </main>;
}
