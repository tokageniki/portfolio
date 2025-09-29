export default function DesignWorks() {
  const list = [
    { title: "3分RPGプレゼン", desc: "プレゼン練習を促す企画スライド" },
    { title: "かたかなーし", desc: "カードゲーム企画" },
    { title: "My Quest Report", desc: "好き・強み・価値観の整理" },
    { title: "ソーシャルロボットをもっと身近に", desc: "認知科学 × AI 研究資料" },
  ];
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Design & Presentation</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {list.map((item, idx) => (
          <article key={idx} className="wf-card p-6">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-white/80">{item.desc}</p>
            <div className="mt-4 text-sm">
              <a className="underline text-white/80 hover:text-white" href="#">資料を見る</a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
