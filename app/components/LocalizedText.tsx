"use client";

import { type ReactNode } from "react";
import { useLocale } from "./LocaleProvider";

export function LocalizedText({ vi, en }: { vi: ReactNode; en: ReactNode }) {
  const { locale } = useLocale();
  return <>{locale === "vi" ? vi : en}</>;
}
