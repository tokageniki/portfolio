"use client";

import { useState } from "react";

export default function PortfolioSite() {
  const [active, setActive] = useState<null | number>(null);
  const projects = [
    {
      id: 1,
      title: "API Platform Refactor",
      role: "Backend / DevOps",
      year: "2024–2025",
      tags: ["Go", "PostgreSQL", "k8s"],
      thumb: "https://picsum.photos/seed/api/1200/800",
      images: [
        "https://picsum.photos/seed/api1/1600/1000",
        "https://picsum.photos/seed/api2/1600/1000",
      ],
      summary:
        "モノリスからサービス分割。スループット2.3x / コスト▲18%。事故ゼロでの段階移行を実現。",
      details:
        "レート制限とキャッシュ層を再設計。Terraformで環境定義をコード化し、Blue/Greenで移行。",
      links: [{ label: "Case Study", href: "#" }, { label: "GitHub", href: "#" }],
    },
    {
      id: 2,
      title: "Recommender Revamp",
      role: "ML / Data",
      year: "2025",
      tags: ["Python", "XGBoost", "Airflow"],
      thumb: "https://picsum.photos/seed/reco/1200/800",
      images: [
        "https://picsum.photos/seed/reco1/1600/1000",
        "https://picsum.photos/seed/reco2/1600/1000",
      ],
      summary:
        "CTR +12.4%、滞在時間 +9.1%。A/Bテストで統計的有意を確認。",
      details:
        "特徴量ストアを導入。オフライン評価→オンライン検証のループを自動化。",
      links: [{ label: "Notebook", href: "#" }],
    },
    {
      id: 3,
      title: "Edge Render System",
      role: "Full‑stack",
      year: "2025",
      tags: ["Next.js", "Cloudflare", "Rust"],
      thumb: "https://picsum.photos/seed/edge/1200/800",
      images: [
        "https://picsum.photos/seed/edge1/1600/1000",
        "https://picsum.photos/seed/edge2/1600/1000",
      ],
      summary:
        "TTFBを300ms→38msへ。地域分散とレンダリングの並列化を実装。",
      details:
        "SSR/ISRをハイブリッド化。画像最適化をRustワーカーに移譲。",
      links: [{ label: "Demo", href: "#" }],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-800 selection:bg-black selection:text-white">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-5 py-4 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-wide text-xl">YourName<span className="ml-1 font-light">.dev</span></a>
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
        <p className="uppercase tracking-widest text-xs text-neutral-500 mb-6">Engineer Portfolio</p>
        <h1 className="text-4xl md:text-6xl leading-tight font-medium mb-6">
          線一本までこだわるように、<br className="hidden md:block" />
          システムの一挙手一投足まで設計します。
        </h1>
        <p className="max-w-2xl text-neutral-600">
          Backend / ML / Infra を中心に、要件定義から検証・運用までを一気通貫で担当。
          可観測性・再現性・拡張性を重視した設計で、持続可能な開発を支援します。
        </p>
      </section>

      {/* Work Grid (yt-archi風の大きめサムネ + 余白) */}
      <section id="work" className="border-t border-neutral-200 bg-neutral-50/60">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl font-semibold">Work</h2>
            <span className="text-xs uppercase tracking-widest text-neutral-500">Selected 3</span>
          </div>

          <div className="grid gap-10 md:gap-12 md:grid-cols-2">
            {projects.map((p, idx) => (
              <article key={p.id} className="group cursor-pointer" onClick={() => setActive(idx)}>
                <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                  <img src={p.thumb} alt={p.title} className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="text-xl md:text-2xl font-medium">{p.title}</h3>
                  <span className="text-sm text-neutral-500">{p.year}</span>
                </div>
                <p className="text-neutral-600 mt-1">{p.role}</p>
                <p className="text-neutral-500 text-sm mt-2">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full border border-neutral-300 px-2 py-1 text-neutral-600">{t}</span>
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
              2019年よりWebエンジニア。サーバーサイドとML基盤が専門。CI/CDとIaCで環境差分を排除し、
              データパイプラインの可観測性とテスト容易性を最重視します。
            </p>
            <p>
              最近はエッジでの動的レンダリングや、スコアリングの低レイテンシ化に注力。
              プロダクト指標とSLOの両立を設計の起点にしています。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>Languages: TypeScript / Go / Python / Rust</li>
                <li>Frameworks: Next.js, FastAPI, gRPC</li>
                <li>Infra: k8s, Terraform, Cloudflare</li>
              </ul>
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>Data: Airflow, DuckDB, Feature Store</li>
                <li>Obs: OpenTelemetry, Grafana, Sentry</li>
                <li>QA: Playwright, pytest, k6</li>
              </ul>
            </div>
          </div>
          <aside className="space-y-3 text-sm text-neutral-600">
            <p className="uppercase tracking-widest text-xs text-neutral-500">Links</p>
            <ul className="space-y-2">
              <li><a className="underline decoration-neutral-300 underline-offset-4 hover:opacity-70" href="#">GitHub</a></li>
              <li><a className="underline decoration-neutral-300 underline-offset-4 hover:opacity-70" href="#">X / Blog</a></li>
              <li><a className="underline decoration-neutral-300 underline-offset-4 hover:opacity-70" href="#">Speaker Deck</a></li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Process (yt-archiの「家づくりの流れ」に相当) */}
      <section id="process" className="border-y border-neutral-200 bg-neutral-50/60">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <h2 className="text-3xl font-semibold mb-10">Process</h2>
          <ol className="grid md:grid-cols-3 gap-8 counter-decimal">
            {["ヒアリング / 目標の定義","スパイク・検証 / 設計","実装 / 計測 / 移行"].map((step, i) => (
              <li key={step} className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
                <div className="text-6xl font-light leading-none mb-4 text-neutral-300">{i+1}</div>
                <p className="font-medium mb-2">{step}</p>
                <p className="text-sm text-neutral-600">プロダクトKPIとSLOを定量化し、仮説→検証→実装を短サイクルで回します。</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="mx-auto max-w-7xl px-5 py-20">
        <div className="rounded-2xl border border-neutral-200 p-8 md:p-12 shadow-sm bg-white">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-neutral-600 mb-6">案件のご相談や登壇依頼などは、以下フォームまたはSNSからお気軽にどうぞ。</p>
          <form className="grid md:grid-cols-2 gap-4">
            <input className="border border-neutral-300 rounded-lg p-3" placeholder="Your name" />
            <input type="email" className="border border-neutral-300 rounded-lg p-3" placeholder="Email" />
            <input className="md:col-span-2 border border-neutral-300 rounded-lg p-3" placeholder="Subject" />
            <textarea className="md:col-span-2 border border-neutral-300 rounded-lg p-3 h-40" placeholder="Message" />
            <button className="md:col-span-2 inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 px-5 py-3 text-white hover:opacity-80 transition" type="button">
              Send
            </button>
          </form>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-neutral-500 border-t border-neutral-200">
        © {new Date().getFullYear()} YourName — Built with care.
      </footer>

      {/* Project Modal */}
      {active !== null && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <div className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center px-5 py-4 border-b border-neutral-200">
              <div>
                <h3 className="text-xl font-semibold">{projects[active].title}</h3>
                <p className="text-sm text-neutral-500">{projects[active].role} ・ {projects[active].year}</p>
              </div>
              <button aria-label="Close" className="rounded-lg border border-neutral-300 px-3 py-1 hover:bg-neutral-50" onClick={() => setActive(null)}>Close</button>
            </div>
            <div className="p-5 grid gap-5">
              {projects[active].images.map((src) => (
                <img key={src} src={src} alt="detail" className="w-full rounded-xl border border-neutral-200" />
              ))}
              <p className="text-neutral-700">{projects[active].details}</p>
              <div className="flex flex-wrap gap-3">
                {projects[active].links.map((l) => (
                  <a key={l.label} href={l.href} className="text-sm underline underline-offset-4 decoration-neutral-300 hover:opacity-70">{l.label}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

