import Link from "next/link";
import styles from "./SiteHeader.module.css";

type SiteHeaderProps = { homePath?: "" | "/" };

export function SiteHeader({ homePath = "" }: SiteHeaderProps) {
  const homeLink = (anchor: string) => `${homePath}#${anchor}`;
  return <header className={styles.nav}>
    <Link href={homeLink("top")} className={styles.navName}>Phan Thị Ý Như</Link>
    <nav aria-label="Primary navigation">
      <Link href={homeLink("works")}>Works</Link>
      <Link href={homeLink("index")}>Index</Link>
      <Link href={homeLink("about")}>About</Link>
    </nav>
  </header>;
}
