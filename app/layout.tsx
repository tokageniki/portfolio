import "./globals.css";
import "./styles/lamp.css";
import type { Metadata, Viewport } from "next";
import { inter, grotesk } from "./fonts";

export const metadata: Metadata = {
  title: "Portfolio — Nagata",
  description: "AI × Design / Skeletons to Structures",
};
export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${inter.variable} ${grotesk.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Barcode+39&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-neutral-950 text-white antialiased selection:bg-white/10">
        {children}
      </body>
    </html>
  );
}