"use client";

import { useEffect, useRef, useState } from "react";

/** 固定背景に表示する画像の順序（home → works → profile） */
const BG_IMAGES = ["/bg-hero.jpg", "/bg-works.jpg", "/bg-profile.jpg"];

export default function Page() {
  const [opacities, setOpacities] = useState<number[]>([1, 0, 0]);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const lastRatiosRef = useRef<number[]>([0, 0, 0]);

  // ===== マウス追従（スポットライト & パララックス） =====
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const x = e.clientX, y = e.clientY;
      document.documentElement.style.setProperty("--mx", `${x}px`);
      document.documentElement.style.setProperty("--my", `${y}px`);
      // 画面中心からの相対で軽く動かす
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      document.documentElement.style.setProperty("--tx", `${(x - cx) * 0.02}px`);
      document.documentElement.style.setProperty("--ty", `${(y - cy) * 0.02}px`);
    };
    window.addEventListener("pointermove", handle);
    return () => window.removeEventListener("pointermove", handle);
  }, []);

  // ===== 背景クロスフェード（既存ロジック） =====
  useEffect(() => {
    const els = sectionsRef.current.filter(Boolean);
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const idx = Number((e.target as HTMLElement).dataset.index);
          lastRatiosRef.current[idx] = e.isIntersecting ? e.intersectionRatio : 0;
        });
        const ratios = lastRatiosRef.current;
        let maxIdx = 0, maxVal = ratios[0];
        for (let i = 1; i < ratios.length; i++) if (ratios[i] > maxVal) { maxVal = ratios[i]; maxIdx = i; }
        setOpacities([0, 0, 0].map((_, i) => (i === maxIdx ? 1 : 0)));
      },
      { threshold: [0.01, 0.1, 0.25, 0.5, 0.8, 1], rootMargin: "0px 0px -40% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="relative text-white">
      {/* === 固定背景（下レイヤー）：3枚重ねでクロスフェード === */}
      <div className="fixed inset-0 -z-10">
        {BG_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
            style={{ opacity: opacities[i] }}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="pointer-events-none absolute top-0 left-0 h-24 w-full bg-gradient-to-b from-black/60 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* === 派手レイヤー（上に重ねる） === */}
      <div className="starfield" aria-hidden />
      <div className="spotlight" aria-hidden />

      {/* 右側：情報レール（既存Heroはそのまま／上に被せるだけ） */}
      <aside
        className="hidden md:block absolute right-[3.5%] top-[96px] z-20 w-[340px] space-y-4"
        aria-label="Hero side information"
      >
        {/* ヘッダー行 */}
        <div className="flex items-center justify-between text-[11px] tracking-widest text-white/70">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            LIVE
          </span>
          <span className="text-white/50">Since 2024</span>
        </div>

        {/* 補助説明 */}
        <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-4 shadow-lg">
          <p className="text-[13px] leading-relaxed text-white/85">
            構造思考 × 視覚言語。UI/UXを「仕組み」と「質感」で設計し、
            <span className="text-white font-medium"> 実装まで一気通貫 </span>
            で仕上げます。
          </p>
        </div>

        {/* Recent */}
        <div className="rounded-2xl bg-white/[0.06] backdrop-blur-sm border border-white/15 p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Recent</h3>
            <div className="h-px w-24 bg-gradient-to-r from-white/60 to-transparent" />
          </div>
          <ul className="mt-2 space-y-2 text-[13px] text-white/85">
            <li>
              <a href="#works" className="group flex items-center justify-between hover:opacity-90">
                <span>Portfolio revamp / Motion</span>
                <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-70 group-hover:opacity-100">
                  <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3l-1.42-1.42L17.59 5H14V3Z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="#profile" className="group flex items-center justify-between hover:opacity-90">
                <span>About / Skills update</span>
                <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-70 group-hover:opacity-100">
                  <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3l-1.42-1.42L17.59 5H14V3Z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="#contact" className="group flex items-center justify-between hover:opacity-90">
                <span>Open to work / Contact</span>
                <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-70 group-hover:opacity-100">
                  <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3l-1.42-1.42L17.59 5H14V3Z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* 数字（信頼感） */}
        <div className="rounded-2xl bg-white/[0.06] backdrop-blur-sm border border-white/15 p-4 shadow-lg">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-2xl font-semibold leading-none">12</div>
              <div className="mt-1 text-[11px] text-white/70">Works</div>
            </div>
            <div>
              <div className="text-2xl font-semibold leading-none">5</div>
              <div className="mt-1 text-[11px] text-white/70">Stacks</div>
            </div>
            <div>
              <div className="text-2xl font-semibold leading-none">3</div>
              <div className="mt-1 text-[11px] text-white/70">Awards</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="group block rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-sm hover:bg-white/15 transition shadow-lg"
        >
          <span className="text-sm font-medium">案件・インターンのご相談はこちら</span>
          <div className="mt-1 text-xs text-white/70 group-hover:text-white/90">Response within 24h</div>
        </a>
      </aside>


      {/* ========== Section 0: HOME ========== */}
      <section
        id="home"
        data-bg="/bg-hero.jpg"
        data-index={0}
        ref={(el) => { if (el) sectionsRef.current[0] = el; }}
        className="relative min-h-[100svh] snap-start overflow-hidden"
      >
        <div className="absolute left-4 right-4 top-12 h-px bg-white/30" />

        {/* 右上ナビ（既存） */}
        <nav className="absolute top-[calc(24%+380px)] left-[17%] z-[80] hidden md:flex flex-col gap-4 text-sm text-stone-300 [&>a:hover]:underline [&>a:hover]:decoration-stone-400">
          <a className="hover:opacity-80" href="#home">Home</a>
          <a className="hover:opacity-80" href="#news">News</a>
          <a className="hover:opacity-80" href="#profile-section">Profile</a>
          <a className="hover:opacity-80" href="#contact">Contact</a>
        </nav>

        {/* 装飾サークル（パララックスで微動） */}
        <div aria-hidden className="parallax absolute -top-24 -left-24 h-[120vh] w-[120vh] rounded-full border border-white/10" />
        <div aria-hidden className="parallax absolute top-[18vh] left-[22%] h-[70vh] w-[70vh] rounded-full border border-white/10" />

        {/* マルキー（既存） */}
        <div className="marquee-window absolute inset-0 overflow-hidden pointer-events-none">
          <div className="marquee__track font-orbitron text-[40vw] tracking-widest opacity-5">
            <span className="marquee__text">STRUCTURE • DESIGN • CODE • FUTURE •</span>
            <span className="marquee__text">STRUCTURE • DESIGN • CODE • FUTURE •</span>
            <span className="marquee__text">STRUCTURE • DESIGN • CODE • FUTURE •</span>
            <span className="marquee__text">STRUCTURE • DESIGN • CODE • FUTURE •</span>
          </div>
        </div>

        {/* 右下バーコード（既存） */}
        <div className="absolute bottom-[60px] right-[120px] z-[20] opacity-60 text-right">
          <p className="font-barcode text-5xl leading-none">KAZUKI</p>
          <p className="mt-1 text-[11px] tracking-widest text-white/80">Skeletons to Structures</p>
        </div>

        {/* ヒーロー見出し（派手版） */}
        <div className="absolute left-[15%] top-[24%] z-10 max-w-[36rem] parallax">
          <div className="flex items-center gap-6">
            <div className="h-[160px] w-[1px] bg-stone-200/70" />
            <div className="transition-all duration-[1500ms] ease-out">
              <h1 className="font-serif text-[42px] md:text-[64px] leading-[1.35] drop-shadow fancy-head">
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
        </div>

        {/* 下スクロール誘導（既存） */}
        <button
          onClick={() => document.getElementById("works")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur-sm hover:bg-white/20 transition"
          aria-label="Scroll to works"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" className="opacity-90">
            <path fill="currentColor" d="M12 16L6 10h12z" />
          </svg>
        </button>

        <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-b from-transparent to-black" />
      </section>

      {/* ========== 黒いスペーサー（そのまま） ========== */}
      <section aria-hidden className="relative h-[40vh] bg-black flex items-center justify-center">
        <div className="pointer-events-none absolute top-0 left-0 h-24 w-full bg-gradient-to-b from-transparent to-black" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-transparent to-black" />
        <div className="flex items-center gap-4 text-white/60">
          <div className="h-[1px] w-16 bg-white/30" />
          <span className="tracking-widest text-xs">SELECTED WORKS</span>
          <div className="h-[1px] w-16 bg-white/30" />
        </div>
      </section>

      {/* ========== Section 1: WORKS ========== */}
      <section
        id="works"
        data-bg="/bg-works.jpg"
        data-index={1}
        ref={(el) => { if (el) sectionsRef.current[1] = el; }}
        className="relative min-h-[100svh] snap-start overflow-hidden"
      >
        <div className="pointer-events-none absolute top-0 left-0 h-24 w-full bg-gradient-to-b from-black to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black to-transparent" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur-sm">
              WORKS
            </span>
            <div className="mt-4 flex items-end gap-4">
              <h2 className="text-4xl md:text-6xl font-bold text-white">制作実績</h2>
              <div className="hidden md:block h-[1px] w-32 bg-gradient-to-r from-white/60 to-transparent" />
            </div>
            <p className="mt-3 text-white/70 max-w-2xl">
              学校課題・個人開発・チーム制作から厳選。設計〜デザイン〜実装まで担当。
            </p>
          </div>

          {/* 作品カード（光る＆走る） */}
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 hover-speedup">
            {[
              { title: "ポートフォリオサイト", desc: "Next.js + Tailwind で構築。アニメーションとアクセシビリティ最適化。", img: "/work-sample1.jpg", tags: ["React", "Tailwind", "Framer Motion"], link: "#", badge: "Web" },
              { title: "データ可視化ツール", desc: "Python で整形→D3.js で可視化。インタラクティブなダッシュボード。", img: "/work-sample2.jpg", tags: ["Python", "D3.js"], link: "#", badge: "Viz" },
              { title: "モバイルアプリ試作", desc: "Flutter でタスク管理。Firebase Auth/Storage 連携。", img: "/work-sample3.jpg", tags: ["Flutter", "Firebase"], link: "#", badge: "App" },
            ].map((w, i) => (
              <a
                key={i}
                href={w.link}
                className="group relative overflow-hidden rounded-2xl bg-white/[0.04] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
              >
                {/* サムネ（キラッ） */}
                <div className="relative h-44 w-full glint">
                  <img src={w.img} alt={w.title} className="h-full w-full object-cover scale-105 group-hover:scale-100 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/15 px-2 py-0.5 text-[11px] text-white/80 backdrop-blur">
                    作品{i + 1}・{w.badge}
                  </span>
                </div>

                {/* テキスト */}
                <div className="p-4">
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-white">{w.title}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{w.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/15 bg-white/10 px-2 py-1 text-[11px] text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 右下アイコン（既存） */}
                <div className="pointer-events-none absolute right-3 bottom-3 opacity-0 group-hover:opacity-100 transition">
                  <svg width="20" height="20" viewBox="0 0 24 24" className="text-white/70">
                    <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3l-1.42-1.42L17.59 5H14V3Z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Section 2: PROFILE ========== */}
      <section
        id="profile"
        data-bg="/bg-profile.jpg"
        data-index={2}
        ref={(el) => { if (el) sectionsRef.current[2] = el; }}
        className="relative min-h-[100svh] snap-start overflow-hidden"
      >
        <div className="pointer-events-none absolute top-0 left-0 h-24 w-full bg-gradient-to-b from-black to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black to-transparent" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur-sm">PROFILE</span>
          <h2 className="mt-6 text-4xl md:text-6xl font-bold flex items-center gap-4">
            <span className="h-10 w-[3px] bg-white/60 rounded-full" />
            長田一輝
          </h2>
          <p className="mt-2 text-white/70">
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs">学生エンジニア</span> / 2007-03-18
          </p>

          <p className="mt-6 max-w-prose text-base text-white/80">
            フロントエンドを中心に、React と Tailwind を使ったモダンな開発が得意です。
            デザインツールも扱い、実装までスピーディに仕上げます。
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Python", "HTML/CSS", "JavaScript", "React", "Tailwind", "Docker"].map((t) => (
              <span key={t} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur">{t}</span>
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            <a href="mailto:example@example.com" className="bg-white text-black px-5 py-2 rounded-lg transition hover:bg-white/90 neon">Contact</a>
            <a href="#" className="border border-white/30 px-5 py-2 rounded-lg hover:bg-white/10 transition flex items-center gap-2 border-dash">
              <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-80">
                <path fill="currentColor" d="M12 .5A12 12 0 0 0 0 12.7a12 12 0 0 0 8.2 11.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6c-.6-1.6-1.4-2-1.4-2c-1.1-.8.1-.8.1-.8c1.2.1 1.9 1.3 1.9 1.3c1 .1.8-.8 1.7-1.1c-2.6-.3-5.3-1.3-5.3-5.7c0-1.2.4-2.1 1.1-2.9c-.1-.3-.5-1.4.1-2.8c0 0 1-.3 3 1.2c.9-.3 2-.4 3-.4s2 .1 3 .4c2-1.5 3-1.2 3-1.2c.6 1.4.2 2.5.1 2.8c.7.8 1.1 1.7 1.1 2.9c0 4.5-2.7 5.4-5.3 5.7c.8.6 1.8 1.9 1.8 3.9v2.9c0 .3.2.7.8.6A12 12 0 0 0 24 12.7A12 12 0 0 0 12 .5" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}







