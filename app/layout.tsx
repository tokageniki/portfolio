import "./globals.css";
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
            <a href="/" className="font-semibold tracking-wide">
              Kazuki Nagata
            </a>
            <nav className="flex gap-4 text-sm text-white/80">
              <a href="/works" className="hover:text-white">Works</a>
              <a href="/about" className="hover:text-white">About</a>
              <a href="/skills" className="hover:text-white">Skills</a>
              <a href="/contact" className="hover:text-white">Contact</a>
            </nav>
          </header>
        </div>
        {children}
        <footer className="mt-20 border-t border-white/10">
          <div className="container py-10 text-sm text-white/60">
            © {new Date().getFullYear()} Kazuki Nagata. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
