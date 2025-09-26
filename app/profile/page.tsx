export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      {/* 背景画像 */}
      <img
        src="/my-img.jpg"
        alt="base"
        className="absolute inset-0 object-cover"
      />
      <div className="max-w-screen-md text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Profile</h1>
        <p className="text-neutral-300">
          長田一輝
          2007/3/18
          学生エンジニア
          プログラミング言語（Python, HTML/CSS, JavaScript）
          ツール・フレームワーク（React, Tailwind, Git, Docker）
          デザイン系なら：Illustrator, Photoshop, clip studio paint
          スピード感や柔軟性
          GitHub, LinkedIn, Twitter (仕事用なら)
          メールアドレス
        </p>
      </div>
    </main>
  );
}