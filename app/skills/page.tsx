export default function Skills() {
  const skills = [
    "Python 3", "JavaScript(学習中)", "C#(学習中)", "HTML",
    "Next.js", "Tailwind CSS",
    "Git / GitHub", "VS Code", "Unity",
    "Illustrator", "Photoshop", "CLIP STUDIO PAINT"
  ];
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Skills</h1>
      <div className="mt-6 wf-card p-6">
        <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((s, i) => <li key={i} className="text-white/85">{s}</li>)}
        </ul>
      </div>
    </main>
  );
}
