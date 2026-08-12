import type { Metadata } from "next";
import { Inter, Noto_Serif_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const display = Noto_Serif_Display({ subsets: ["latin", "vietnamese"], variable: "--font-display", weight: ["400", "500"] });
const sans = Inter({ subsets: ["latin", "vietnamese"], variable: "--font-sans", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Phan Thị Ý Như — Visual Artist",
  description: "A digital catalogue for visual artist Phan Thị Ý Như.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi" suppressHydrationWarning>
    <body className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <Script id="remove-bitdefender-hydration-attributes" strategy="beforeInteractive">
        {`(() => {
          const attribute = "bis_skin_checked";
          const remove = (element) => element?.removeAttribute?.(attribute);
          const clean = (root = document) => root.querySelectorAll?.("[" + attribute + "]").forEach(remove);
          clean();
          new MutationObserver((records) => records.forEach((record) => {
            if (record.type === "attributes") remove(record.target);
            record.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                remove(node);
                clean(node);
              }
            });
          })).observe(document.documentElement, { attributes: true, attributeFilter: [attribute], childList: true, subtree: true });
        })();`}
      </Script>
      {children}
    </body>
  </html>;
}
