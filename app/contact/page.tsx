export default function Contact() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center bg-neutral-950 text-white">
      <h2 className="font-serif text-3xl mb-6">Contact (学芸員カウンター)</h2>
      <form className="flex flex-col gap-4 w-80">
        <input type="text" placeholder="Name" className="px-3 py-2 rounded bg-white/10" />
        <input type="email" placeholder="Email" className="px-3 py-2 rounded bg-white/10" />
        <textarea placeholder="Message" className="px-3 py-2 rounded bg-white/10" rows={4} />
        <button type="submit" className="rounded bg-white/20 py-2 hover:bg-white/30">送信</button>
      </form>
    </main>
  );
}
