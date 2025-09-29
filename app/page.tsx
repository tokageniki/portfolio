export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[70svh] overflow-hidden">
        <img
          src="/bg-hero.jpg"
          alt="Dinosaur skeleton"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="container relative z-10 flex h-full flex-col items-start justify-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/80">Web × AI × Design</p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            一人ひとりに寄り添ったワクワクを提供する
          </h1>
          <p className="mt-5 max-w-xl text-white/85">
            学生エンジニアとして、UIデザインと機械学習の知見を活かし、人の心を動かす体験をつくります。
          </p>
          <div className="mt-8 flex gap-3">
            <a href="/works" className="rounded-2xl bg-white px-5 py-3 text-black hover:opacity-90">View Works</a>
            <a href="/contact" className="rounded-2xl border border-white/40 px-5 py-3 hover:bg-white/10">Contact</a>
          </div>
        </div>
      </section>
      {/* ========== Section: SKILLS ========== */}
      <section
        id="skills"
        className="relative min-h-[100svh] snap-start overflow-hidden"
      >
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="text-4xl md:text-6xl font-bold">Skills</h2>
          <p className="mt-3 text-white/70">
            日常的に使用している言語・フレームワーク・ツール
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["JavaScript", "React", "Next.js", "Tailwind CSS", "Python", "Docker"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ========== Section: EXPERIENCE ========== */}
      <section
        id="experience"
        className="relative min-h-[100svh] snap-start overflow-hidden"
      >
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 md:py-32">
          <h2 className="text-4xl md:text-6xl font-bold">Experience</h2>
          <div className="mt-10 space-y-8 border-l border-white/20 pl-6">
            <div>
              <h3 className="text-xl font-semibold">2025 – インターン (Web開発)</h3>
              <p className="mt-2 text-white/70">
                React / Next.js を用いた社内ツール開発。UI改善とアクセシビリティ対応を担当。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2024 – 学生プロジェクト</h3>
              <p className="mt-2 text-white/70">
                チーム制作でIoT × AI 家電の研究を推進。発表資料・PoC実装を担当。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2023 – ボランティア (子供歌舞伎20周年誌)</h3>
              <p className="mt-2 text-white/70">
                レイアウト設計・印刷発注を担当。クライアントと調整し納品まで遂行。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Section: AWARDS ========== */}
      <section
        id="awards"
        className="relative min-h-[100svh] snap-start overflow-hidden"
      >
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
          <h2 className="text-4xl md:text-6xl font-bold">Awards</h2>
          <ul className="mt-8 space-y-4 text-lg text-white/80">
            <li>2025 – JOI 予選通過</li>
            <li>2024 – デザインコンテスト入賞</li>
            <li>2023 – Hackathon 優秀賞</li>
          </ul>
        </div>
      </section>
      <footer className="w-full border-t border-white/20 bg-black/40 text-xs text-gray-300 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-4 md:flex-row">
          {/* 左側 - コピーライト */}
          <p className="text-center md:text-left">
            © 2025 Your Name
          </p>

          {/* 右側 - リンク */}
          <div className="flex gap-4">
            <a
              href="mailto:yourmail@example.com"
              className="hover:text-white transition-colors"
            >
              ✉︎ Mail
            </a>
            <a
              href="https://github.com/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yourname/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
