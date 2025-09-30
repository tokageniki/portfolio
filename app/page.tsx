import Background from "./components/Background";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Background />
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

      {/* ========== Section: ABOUT ========== */}
      <section id="about" className="relative min-h-[100svh] snap-start overflow-hidden">
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 md:py-32">
          <h2 className="text-4xl md:text-6xl font-bold">About</h2>
          <div className="mt-10 space-y-6 text-white/80 leading-relaxed">
            <p>
              長田一輝 — 学生エンジニア。技術（Web / AI）とデザインを組み合わせ、
              「人に寄り添う体験」を設計・実装します。現在は
              千葉工業大学 情報変革科学部 認知情報科学科でメタ認知アプローチを学習中。
            </p>
            <p>
              関心領域：UI改善、アクセシビリティ、対話的AI、生成AIの実装と評価。
              中学からPythonとUIに親しみ、Web × AI × Designを軸に活動しています
            </p>
            <p className="text-white/70">
              <span className="font-semibold text-white">Now:</span> Webフロント実務インターン／個人プロジェクトの共同開発を募集中。
              軽い相談でも歓迎です。
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://github.com/tokageniki" className="rounded-full border border-white/20 px-3 py-1 text-sm hover:bg-white/10">GitHub</a>
              <a href="/resume.pdf" className="rounded-full border border-white/20 px-3 py-1 text-sm hover:bg-white/10">Resume</a>
              <a href="tokatyan36@gmail.com" className="rounded-full border border-white/20 px-3 py-1 text-sm hover:bg-white/10">Mail</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* ========== Section: WORKS ========== */}
      <section id="works" className="relative min-h-[100svh] snap-start overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
          <h2 className="text-4xl md:text-6xl font-bold">Works</h2>
          <ul className="mt-8 space-y-6 text-white/80">
            <li>
              <span className="font-semibold text-white">AI画像生成システム</span> — 好み特徴学習＋Stable Diffusionで対話的生成。
              <span className="text-white/60">（Python / diffusers / word2vec）</span>
            </li>
            <li>
              <span className="font-semibold text-white">音声認識 × ボイスボックス会話</span> — 音声認識と合成を連携しHCI体験を実装。
              <span className="text-white/60">（対話設計 / 実装）</span>
            </li>
            <li>
              <span className="font-semibold text-white">災害時多言語サポート検定（架空サイト）</span> — “実在しそうなUI/UX”を設計しフロント実装。
              <span className="text-white/60">（HTML / CSS / JS / jQuery / slick）</span>
            </li>
            <li>
              <span className="font-semibold text-white">博麗神社例大祭ホームページ</span> — "年間数万人が参加するイベントの公式サイトを制作。企画紹介・入場券販売ページなど複数コンテンツを担当。
              <span className="text-white/60">（Design & チーム制作）</span>
            </li>
          </ul>
          <div className="mt-8">
            <a href="/works" className="inline-block rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:bg-white/10">
              View all Projects →
            </a>
          </div>
        </div>
      </section>
      
      {/* ========== Section: SKILLS ========== */}
      <section id="skills" className="relative min-h-[100svh] snap-start overflow-hidden">
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 md:py-32">
          <h2 className="text-4xl md:text-6xl font-bold">Skills</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-white/80">
            <div>
              <h3 className="text-xl font-semibold text-white">Programming</h3>
              <ul className="mt-3 space-y-2">
                <li>Python <span className="rounded-full border border-white/20 px-2 py-0.5 text-xs">Proficient</span></li>
                <li>JavaScript <span className="rounded-full border border-white/20 px-2 py-0.5 text-xs">Working</span></li>
                <li>C# <span className="rounded-full border border-white/20 px-2 py-0.5 text-xs">Learning</span></li>
                <li>HTML/CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Frameworks & Tools</h3>
              <ul className="mt-3 space-y-2">
                <li>Next.js, Tailwind CSS</li>
                <li>Git / GitHub, VS Code, Unity</li>
                <li>Illustrator, Photoshop, CLIP STUDIO PAINT</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* ========== Section: CERTIFICATES ========== */}
      <section id="certificates" className="relative min-h-[100svh] snap-start overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
          <h2 className="text-4xl md:text-6xl font-bold">Certificates</h2>
          <ul className="mt-8 space-y-4 text-lg text-white/80">
            <li>ITパスポート <span className="text-white/50">（取得年：2023）</span></li>
            <li>基本情報技術者試験 <span className="text-white/50">（取得年：2024）</span></li>
            <li>G検定（JDLA Deep Learning for GENERAL） <span className="text-white/50">（取得年：2025）</span></li>
          </ul>
        </div>
      </section>

      <footer className="w-full border-t border-white/20 bg-black/40 text-xs text-gray-300 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-4 md:flex-row">
          {/* 左側 - コピーライト */}
          <p className="text-center md:text-left">
            © 2025 Kazuki Nagata
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
