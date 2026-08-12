import Link from "next/link";
import styles from "./SiteHeader.module.css";

export type SitePage = "home" | "works" | "index";

type SiteHeaderProps = { activePage?: SitePage };

export function SiteHeader({ activePage = "home" }: SiteHeaderProps) {
  return <header className={styles.nav}>
    <Link href="/" className={styles.navName} aria-current={activePage === "home" ? "page" : undefined}>Phan Thị Ý Như</Link>
    <nav aria-label="Primary navigation">
      <Link href="/works" className={activePage === "works" ? styles.navActive : undefined} aria-current={activePage === "works" ? "page" : undefined}>Works</Link>
      <Link href="/index" className={activePage === "index" ? styles.navActive : undefined} aria-current={activePage === "index" ? "page" : undefined}>Index</Link>
      <Link href="/#about">About</Link>
    </nav>
  </header>;
}
