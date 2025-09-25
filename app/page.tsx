"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Lamp from "./styles/Lamp";

export default function Home() {
  const [opening, setOpening] = useState(false);
  const router = useRouter();

  const goNext = () => {
    setOpening(true);           // 円形オーバーレイ（既存の gate-reveal を使う）
    setTimeout(() => router.push('/profile'), 500);
  };

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
      {/* 左→右の黒グラデ */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* 上の細ライン */}
      <div className="absolute left-4 right-4 top-16 h-px bg-white/60" />

      {/* 右上ナビ */}
      <nav className="absolute bottom-60 left-1/2 -translate-x-1/2 z-[80] flex gap-8 text-sm text-neutral-100">
        <a className="hover:opacity-80" href="#home">Home</a>
        <a className="hover:opacity-80" href="#news">News</a>
        <a className="hover:opacity-80" href="#profile">Profile</a>
        <a className="hover:opacity-80" href="#contact">Contact</a>
      </nav>


      {/* 装飾 */}
      <div aria-hidden className="absolute -top-16 left-[6%] h-[120vh] w-[120vh] rounded-full border border-white/15" />
      <div aria-hidden className="absolute top-[18vh] left-[25%] h-[70vh] w-[70vh] rounded-full border border-white/20" />
      <div className="marquee-window absolute inset-0 overflow-hidden pointer-events-none">
        <div className="marquee__track font-orbitron text-[40vw] tracking-widest opacity-10">
          <span className="marquee__text">STRUCTURE • DESIGN • CODE • FUTURE •</span>
          <span className="marquee__text">STRUCTURE • DESIGN • CODE • FUTURE •</span>
          <span className="marquee__text">STRUCTURE • DESIGN • CODE • FUTURE •</span>
          <span className="marquee__text">STRUCTURE • DESIGN • CODE • FUTURE •</span>
        </div>
      </div>

      {/* 左上：見出し */}
      <div className="absolute left-[25vh] top-[12vh] z-[80] max-w-[36rem]">
        <div className="flex items-center gap-6">
          {/* 縦線 */}
          <div className="h-[200px] top-[12vh] w-[1px] bg-white" />
          {/* 見出し */}
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
      </div>

      {/* 吊りランプ CTA */}
      <Lamp onClick={goNext} top="12vh" />

      {/* 右下：バーコード部分 */}
      <div className="absolute bottom-[60px] right-[120px] z-[80] opacity-70 flex flex-col items-end gap-1">
        <p className="font-barcode text-6xl text-white block leading-none overflow-hidden h-[40px]">
          *KAZUKI*
        </p>
        <p className="font-mono text-[11px] tracking-widest text-neutral-200">
          Skeletons to Structures
        </p>
      </div>

      {/* 遷移アニメ */}
      <div className={`gate-reveal ${opening ? 'gate-reveal--open' : ''}`} aria-hidden />
    </main>
  );
}




