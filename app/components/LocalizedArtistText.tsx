"use client";

import { useLocale } from "./LocaleProvider";

export function ArtistName() {
  const { locale } = useLocale();
  return <>{locale === "vi" ? "Phan Thị Ý Như" : "Phan Thi Y Nhu"}</>;
}

export function ArtistRole() {
  const { locale } = useLocale();
  return <>{locale === "vi" ? "Nghệ sĩ thị giác" : "Visual Artist"}</>;
}

export function ArtistFacts() {
  const { locale } = useLocale();
  return <>
    <span>{locale === "vi" ? "Sinh năm 2004" : "Born 2004"}</span>
    <span>{locale === "vi" ? "Bình Định, Việt Nam" : "Binh Dinh, Vietnam"}</span>
    <span>{locale === "vi" ? "Hiện sống tại Thành phố Hồ Chí Minh, Việt Nam" : "Based in Ho Chi Minh City, Vietnam"}</span>
  </>;
}
