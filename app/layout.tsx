import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Nagata",
  description: "AI × Design / Skeletons to Structures",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-neutral-950 antialiased">{children}</body>
    </html>
  );
}

