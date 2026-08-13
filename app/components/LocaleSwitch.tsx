"use client";

import { useLocale } from "./LocaleProvider";
import styles from "./LocaleSwitch.module.css";

export function LocaleSwitch() {
  const { locale, setLocale } = useLocale();

  return <div className={styles.switch} aria-label="Language">
    <button type="button" aria-pressed={locale === "vi"} onClick={() => setLocale("vi")}>VI</button>
    <span aria-hidden="true">/</span>
    <button type="button" aria-pressed={locale === "en"} onClick={() => setLocale("en")}>EN</button>
  </div>;
}
