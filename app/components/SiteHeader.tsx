"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LocaleSwitch } from "./LocaleSwitch";
import { LocalizedText } from "./LocalizedText";
import { ArtistName } from "./LocalizedArtistText";
import styles from "./SiteHeader.module.css";

export type SitePage = "home" | "works" | "index" | "about";

type SiteHeaderProps = { activePage?: SitePage | null };

const menuItems: Array<{ page: SitePage; vi: string; en: string; href: string }> = [
  { page: "works", vi: "Tác phẩm", en: "Works", href: "/works" },
  { page: "index", vi: "Danh mục", en: "Index", href: "/index" },
  { page: "about", vi: "Giới thiệu", en: "About", href: "/about" },
];

function currentProps(activePage: SitePage | null | undefined, page: SitePage) {
  return activePage === page ? { "aria-current": "page" as const } : {};
}

export function SiteHeader({ activePage = "home" }: SiteHeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (dialogRef.current?.open) dialogRef.current.close();
  }, [pathname]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (menuOpen && !dialog.open) {
      lastFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      dialog.showModal();
      requestAnimationFrame(() => closeButtonRef.current?.focus());
    }

    if (!menuOpen && dialog.open) dialog.close();
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )).filter((element) => !element.hasAttribute("hidden"));
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    dialog.addEventListener("keydown", handleKeyDown);
    return () => dialog.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
    requestAnimationFrame(() => (lastFocusedRef.current ?? menuButtonRef.current)?.focus());
  }

  function openMenu() {
    lastFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : menuButtonRef.current;
    setMenuOpen(true);
  }

  return <header className={styles.nav}>
    <Link href="/" className={styles.navName} {...currentProps(activePage, "home")}><ArtistName /></Link>

    <div className={styles.desktopActions}>
      <nav className={styles.desktopNav} aria-label="Primary navigation">
        {menuItems.map((item) => <Link href={item.href} className={activePage === item.page ? styles.navActive : undefined} {...currentProps(activePage, item.page)} key={item.page}><LocalizedText vi={item.vi} en={item.en} /></Link>)}
      </nav>
      <LocaleSwitch />
    </div>

    <button
      ref={menuButtonRef}
      type="button"
      className={styles.menuButton}
      aria-expanded={menuOpen}
      aria-controls="site-mobile-menu"
      onClick={openMenu}
    ><LocalizedText vi="Menu" en="Menu" /></button>

    <dialog
      ref={dialogRef}
      id="site-mobile-menu"
      className={styles.dialog}
      aria-label="Site menu"
      onCancel={(event) => { event.preventDefault(); closeMenu(); }}
      onClose={() => setMenuOpen(false)}
    >
      <div className={styles.dialogHeader}>
        <span className={styles.dialogName}><ArtistName /></span>
        <span className={styles.dialogLabel}><LocalizedText vi="Menu" en="Menu" /></span>
      </div>
      <nav className={styles.dialogNav} aria-label="Mobile navigation">
        {menuItems.map((item, index) => <Link href={item.href} className={styles.dialogLink} {...currentProps(activePage, item.page)} onClick={closeMenu} key={item.page}>
          <span className={styles.dialogLinkInner}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span><LocalizedText vi={item.vi} en={item.en} /></span>
          </span>
        </Link>)}
      </nav>
      <div className={styles.dialogLocale}><LocaleSwitch /></div>
      <button ref={closeButtonRef} type="button" className={styles.dialogClose} onClick={closeMenu}><LocalizedText vi="Đóng" en="Close" /></button>
    </dialog>
  </header>;
}
