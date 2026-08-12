import type { Metadata } from "next";
import { Inter, Noto_Serif_Display } from "next/font/google";
import "./globals.css";

const display = Noto_Serif_Display({ subsets: ["latin", "vietnamese"], variable: "--font-display", weight: ["400", "500"] });
const sans = Inter({ subsets: ["latin", "vietnamese"], variable: "--font-sans", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Phan Thị Ý Như — Visual Artist",
  description: "A digital catalogue for visual artist Phan Thị Ý Như.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
