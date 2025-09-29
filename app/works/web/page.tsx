export default function WebWorks() {
  const list = [
    { title: "災害時多言語サポート検定（架空サイト）", bullets: ["HTML / CSS / JS / jQuery / slick-carousel", "ロゴ・バナー、固定ヘッダー、スライダーUI"] },
    { title: "好み特徴学習 × 画像生成", bullets: ["Python (diffusers / gensim / Flet)", "Stable Diffusion + word2vec + GUI"] },
    { title: "音声認識 × ボイスボックス対話", bullets: ["音声認識API + 音声合成", "HCIの試作"] },
  ];
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Web / Programming</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {list.map((item, idx) => (
          <article key={idx} className="wf-card p-6">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <ul className="mt-3 list-disc pl-5 text-white/80">
              {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="mt-4 flex gap-3 text-sm">
              <a className="underline text-white/80 hover:text-white" href="#">詳細</a>
              <a className="underline text-white/80 hover:text-white" href="#">GitHub</a>
              <a className="underline text-white/80 hover:text-white" href="#">デモ</a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
