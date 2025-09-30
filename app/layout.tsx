import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "長田一輝 — Portfolio",
  description: "Web × AI × Design — 学生エンジニアのポートフォリオ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-[var(--bg)] text-white antialiased">
        <div className="container py-4">
          <header className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <Link href="/" className="font-semibold tracking-wide">
              Kazuki Nagata
            </Link>
            <nav className="flex gap-4 text-sm text-white/80">
              <Link href="/works" className="hover:text-white">Works</Link>
              <Link href="/about" className="hover:text-white">About</Link>
              <Link href="/skills" className="hover:text-white">Skills</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </nav>
          </header>
        </div>
        {children}
      </body>
    </html>
  );
}

