"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Works() {
  const [opening, setOpening] = useState(false);
  const router = useRouter();

  const goNext = () => {
    setOpening(true);
    setTimeout(() => router.push("/contact"), 500);
  };

  return (
    <main className="relative min-h-[100svh] bg-neutral-900 text-white">
      <div className="mx-auto max-w-6xl p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1,2,3].map(i => (
          <article key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="aspect-video bg-neutral-700 mb-4" />
            <h3 className="font-serif text-xl">Exhibit #{i}</h3>
            <p className="text-sm text-white/70">作品解説をここに</p>
          </article>
        ))}
      </div>

      <button
        onClick={goNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-2"
      >
        次の展示へ
      </button>

      <div className={`gate-reveal ${opening ? "gate-reveal--open" : ""}`} aria-hidden />
    </main>
  );
}
