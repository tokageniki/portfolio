export default function WorksIndex() {
  const items = [
    { href: "/works/web", title: "Web / Programming", desc: "サイト制作・AIアプリ・音声対話" },
    { href: "/works/design", title: "Design & Presentation", desc: "企画・スライド・研究資料" },
    { href: "/works/learning", title: "Learning / Creative", desc: "イラスト学習・動画" },
  ];
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Works</h1>
      <p className="mt-2 text-white/80">カテゴリを選んでください。</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <a key={it.href} href={it.href} className="wf-card p-6 hover:border-white/20">
            <h2 className="text-lg font-semibold">{it.title}</h2>
            <p className="mt-2 text-white/80">{it.desc}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
