"use client";

import { useState } from "react";

export default function PortfolioSite() {
  const [active, setActive] = useState<null | number>(null);

  // —— あなたの実績に差し替えてください ——
  const projects = [
    {
      id: 1,
      title: "GenAI Product Assistant",
      role: "AI Engineer / Full-stack",
      year: "2024–2025",
      tags: ["Next.js", "TypeScript", "Python", "OpenAI", "RAG"],
      thumb: "https://picsum.photos/seed/genai/1200/800",
      images: [
        "https://picsum.photos/seed/genai1/1600/1000",
        "https://picsum.photos/seed/genai2/1600/1000",
      ],
      summary:
        "営業資料・FAQ・ログを統合したRAGアシスタント。一次応答率 68%→91%、平均応答時間 ▲58%。",
      details:
        "Embedding設計とドキュメント分割、ベクトルDBを最適化。プロンプトのガードレール/ツール使用を整理し、Next.js + Edge Functionsでフロント実装。FME（Fast Model Eval）で自動評価パイプラインを構築。",
      links: [
        { label: "Case Study", href: "#" },
        { label: "Demo", href: "#" },
      ],
    },
    {
      id: 2,
      title: "Design System & Site Revamp",
      role: "Web Designer / Front-end",
      year: "2025",
      tags: ["Figma", "Tailwind", "Design System", "Accessibility"],
      thumb: "https://picsum.photos/seed/design/1200/800",
      images: [
        "https://picsum.photos/seed/design1/1600/1000",
        "https://picsum.photos/seed/design2/1600/1000",
      ],
      summary:
        "Figmaでトークン設計→Tailwindへ同期。CLS 0.28→0.02、CVR +7.3%。",
      details:
        "カラー/タイポ/スペーシングのデザイントークン化、UIキット整備、アクセシビリティ監査（WCAG 2.2 AA）。ブランドらしさを保ちつつ実装コストを削減。",
      links: [{ label: "Figma Preview", href: "#" }],
    },
    {
      id: 3,
      title: "Real-time Personalization",
      role: "ML Engineer / Data",
      year: "2025",
      tags: ["Python", "FastAPI", "Feature Store", "A/B Test"],
      thumb: "https://picsum.photos/seed/rt/1200/800",
      images: [
        "https://picsum.photos/seed/rt1/1600/1000",
        "https://picsum.photos/seed/rt2/1600/1000",
      ],
      summary:
        "オンライン特徴量配信でレコメンドを低遅延化。TTFB 420ms→95ms、CTR +9.8%。",
      details:
        "オフライン/オンライン整合性の検証フレームを整備。計測設計（event schema・実験パラメータ）と可観測性（OpenTelemetry）を統合。",
      links: [{ label: "Notebook", href: "#" }],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-800 selection:bg-black selection:text-white">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-5 py-4 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-wide text-xl">
            Nagata<span className="ml-1 font-light">.dev</span>
          </a>
          <nav className="flex gap-6 text-sm">
            <a href="#work" className="hover:opacity-60">Work</a>
            <a href="#about" className="hover:opacity-60">About</a>
            <a href="#process" className="hover:opacity-60">Process</a>
            <a href="#contact" className="hover:opacity-60">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
        <p className="uppercase tracking-widest text-xs text-neutral-500 mb-6">
          AI Engineer × Web Designer
        </p>
        <h1 className="text-4xl md:text-6xl leading-tight font-medium mb-6">
          データとデザインで、<br className="hidden md:block" />
          体験と成果の両立を設計します。
        </h1>
        <p className="max-w-2xl text-neutral-600">
          GenAI / RAG / MLOps と、UI/UX・ブランディングの両面からプロダクトを前進。
          要件定義から検証・実装・計測・運用まで一気通貫で伴走します。
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs">
          {["Next.js","TypeScript","Python","OpenAI","RAG","Tailwind","Figma","FastAPI","k8s","Terraform"].map(s=>(
            <span key={s} className="rounded-full border border-neutral-300 px-2 py-1 text-neutral-600">{s}</span>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-neutral-200 bg-neutral-50/60">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl font-semibold">Work</h2>
            <span className="text-xs uppercase tracking-widest text-neutral-500">
              Selected {projects.length}
            </span>
          </div>

          <div className="grid gap-10 md:gap-12 md:grid-cols-2">
            {projects.map((p, idx) => (
              <article
                key={p.id}
                className="group cursor-pointer"
                onClick={() => setActive(idx)}
              >
                <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                  <img
                    src={p.thumb}
                    alt={p.title}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="text-xl md:text-2xl font-medium">{p.title}</h3>
                  <span className="text-sm text-neutral-500">{p.year}</span>
                </div>
                <p className="text-neutral-600 mt-1">{p.role}</p>
                <p className="text-neutral-500 text-sm mt-2">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full border border-neutral-300 px-2 py-1 text-neutral-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="text-3xl font-semibold mb-6">About</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4 leading-relaxed text-neutral-700">
            <p>
              AIエンジニア / Webデザイナー / フルスタック開発者。データ設計から体験設計まで一貫して担当し、
              事業KPIとユーザー体験の両立を目標にプロダクトを磨き込みます。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>AI/ML: RAG, LLMOps, Prompt/Tool設計, 評価自動化</li>
                <li>Backend: FastAPI, gRPC, PostgreSQL, Redis</li>
                <li>Infra: k8s, Terraform, Cloudflare, CI/CD</li>
              </ul>
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>Frontend: Next.js, React, TypeScript</li>
                <li>Design: Figma, デザインシステム, アクセシビリティ</li>
                <li>Obs/QA: OpenTelemetry, Sentry, Playwright, k6</li>
              </ul>
            </div>
          </div>
          <aside className="space-y-3 text-sm text-neutral-600">
            <p className="uppercase tracking-widest text-xs text-neutral-500">
              Links
            </p>
            <ul className="space-y-2">
              <li>
                <a className="underline decoration-neutral-300 underline-offset-4 hover:opacity-70" href="#" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <a className="underline decoration-neutral-300 underline-offset-4 hover:opacity-70" href="#" target="_blank">
                  X / Blog
                </a>
              </li>
              <li>
                <a className="underline decoration-neutral-300 underline-offset-4 hover:opacity-70" href="#" target="_blank">
                  Speaker Deck
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-y border-neutral-200 bg-neutral-50/60">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <h2 className="text-3xl font-semibold mb-10">Process</h2>
          <ol className="grid md:grid-cols-3 gap-8">
            {[
              "ヒアリング / 課題と指標の定義（KPI・SLO）",
              "スパイク＆設計：情報/データ/体験を同時に設計",
              "実装 / 計測 / 実験 / 移行（継続的改善）",
            ].map((step, i) => (
              <li
                key={step}
                className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm"
              >
                <div className="text-6xl font-light leading-none mb-4 text-neutral-300">
                  {i + 1}
                </div>
                <p className="font-medium mb-2">{step}</p>
                <p className="text-sm text-neutral-600">
                  デザイン仮説とデータ仮説を同期し、A/Bやオフライン/オンライン評価で検証します。
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-5 py-20">
        <div className="rounded-2xl border border-neutral-200 p-8 md:p-12 shadow-sm bg-white">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-neutral-600 mb-6">
            お仕事のご相談・共同制作・登壇依頼などは、以下フォームまたはSNSからお気軽に。
          </p>
          <form className="grid md:grid-cols-2 gap-4">
            <input className="border border-neutral-300 rounded-lg p-3" placeholder="Your name" />
            <input type="email" className="border border-neutral-300 rounded-lg p-3" placeholder="Email" />
            <input className="md:col-span-2 border border-neutral-300 rounded-lg p-3" placeholder="Subject" />
            <textarea className="md:col-span-2 border border-neutral-300 rounded-lg p-3 h-40" placeholder="Message" />
            <button
              className="md:col-span-2 inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 px-5 py-3 text-white hover:opacity-80 transition"
              type="button"
              // TODO: Formspree などに接続
            >
              Send
            </button>
          </form>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-neutral-500 border-t border-neutral-200">
        © {new Date().getFullYear()} Nagata — Built with care.
      </footer>

      {/* Project Modal */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-5 py-4 border-b border-neutral-200">
              <div>
                <h3 className="text-xl font-semibold">{projects[active].title}</h3>
                <p className="text-sm text-neutral-500">
                  {projects[active].role} ・ {projects[active].year}
                </p>
              </div>
              <button
                aria-label="Close"
                className="rounded-lg border border-neutral-300 px-3 py-1 hover:bg-neutral-50"
                onClick={() => setActive(null)}
              >
                Close
              </button>
            </div>
            <div className="p-5 grid gap-5">
              {projects[active].images.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt="detail"
                  className="w-full rounded-xl border border-neutral-200"
                />
              ))}
              <p className="text-neutral-700">{projects[active].details}</p>
              <div className="flex flex-wrap gap-3">
                {projects[active].links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-sm underline underline-offset-4 decoration-neutral-300 hover:opacity-70"
                    target="_blank"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


