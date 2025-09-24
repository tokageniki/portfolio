"use client";

export default function Home() {
  return (
    <main className="relative h-[100svh] overflow-hidden text-white">
      {/* 背景写真 */}
      <img
        src="/hero-dino.jpg"
        alt="Dinosaur skeleton"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* ベースの薄暗レイヤー */}
      <div className="absolute inset-0 bg-black/30" />
      {/* 右側をより黒くするグラデーション（上書き） */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent" />

      {/* 上の細ライン */}
      <div className="absolute left-4 right-4 top-5 h-px bg-white/30" />

      {/* 右上ナビ */}
      <nav className="absolute right-8 top-4 z-20 flex gap-6 text-sm text-neutral-100">
        <a className="hover:opacity-80" href="#home">Home</a>
        <a className="hover:opacity-80" href="#news">News</a>
        <a className="hover:opacity-80" href="#profile">Profile</a>
        <a className="hover:opacity-80" href="#contact">Contact</a>
      </nav>

      {/* 装飾の円 */}
      <div aria-hidden className="absolute -top-16 left-[6%] h-[120vh] w-[120vh] rounded-full border border-white/25" />
      <div aria-hidden className="absolute top-[18vh] left-[22%] h-[70vh] w-[70vh] rounded-full border border-white/35" />
      <div aria-hidden className="absolute top-[42vh] left-[50%] h-[42vh] w-[42vh] rounded-full border border-white/20" />

      {/* 見出しブロック：少し右へ（left を 15% に） */}
      <div className="absolute left-[15%] top-[16vh] z-10 max-w-[36rem]">
        <h1 className="font-serif text-[42px] leading-[1.2] drop-shadow md:text-[64px]">
          AI×人間
          <br />
          感性で
          <br />
          構造美の
          <br />
          デザイン
        </h1>
      </div>

      {/* 右下：白いバーコード＋サブコピー＋CLI行 */}
      <div className="absolute bottom-6 right-6 z-10 flex flex-col items-end gap-1">
        {/* 白バーコード（repeating-linear-gradient で白ストライプ） */}
        <div className="h-2 w-64 opacity-85 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.9)_0_8px,rgba(255,255,255,0)_8px_14px)]" />
        <p className="font-mono text-[11px] tracking-widest text-neutral-200">
          Skeletons to Structures
        </p>
        <p className="font-mono text-[10px] text-neutral-400">{">"} npm run design</p>
      </div>
    </main>
  );
}



