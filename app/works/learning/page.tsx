export default function LearningWorks() {
  const list = [
    { title: "イラスト学習の記録", desc: "CLIP STUDIO / Photoshop 作品（練習過程）" },
    { title: "動画（キャラクター準備中）", desc: "アニメーション習作" },
  ];
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Learning / Creative</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {list.map((item, idx) => (
          <article key={idx} className="wf-card p-6">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-white/80">{item.desc}</p>
            <div className="mt-4 text-sm">
              <a className="underline text-white/80 hover:text-white" href="#">ギャラリー</a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
