export default function Page() {
  return (
    <div className="min-h-screen bg-white text-[#1a2e1a] font-sans">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-green-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <span className="text-lg font-bold tracking-wide text-[#1a2e1a]">ぱうる</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#5a7a5a]">
            <a href="#service" className="hover:text-[#1a2e1a] transition-colors">サービス</a>
            <a href="#features" className="hover:text-[#1a2e1a] transition-colors">選ばれる理由</a>
            <a href="#staff" className="hover:text-[#1a2e1a] transition-colors">スタッフ</a>
            <a href="#contact" className="hover:text-[#1a2e1a] transition-colors">お問い合わせ</a>
          </nav>
          <a href="#contact" className="text-sm bg-[#3d7a3d] text-white px-5 py-2 rounded-full hover:bg-[#2d6a2d] transition-colors">
            見学予約
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-20 px-6 bg-[#f0faf0] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#e0f5e0] rounded-l-full opacity-40 -z-0" />
        <div className="max-w-5xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center min-h-[60vh]">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#d0ecd0] text-[#3d7a3d] rounded-full px-4 py-1.5 text-xs font-medium mb-6">
              🌿 東京都渋谷区 · 完全個室
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              大切な家族を、<br />
              <span className="text-[#3d7a3d]">安心して</span><br />
              お預けください。
            </h1>
            <p className="text-[#5a7a5a] leading-relaxed mb-8 max-w-md">
              ぱうるは犬・猫専門のペットホテル＆デイケア施設です。
              獣医師監修のもと、一頭一頭に合わせた個別ケアを提供しています。
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-[#3d7a3d] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#2d6a2d] transition-colors">
                見学・予約を申し込む
              </a>
              <a href="#service" className="border border-[#3d7a3d] text-[#3d7a3d] px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#e8f5e8] transition-colors">
                サービスを見る
              </a>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-4">
            <div className="bg-[#d0ecd0] rounded-3xl aspect-square flex items-center justify-center text-7xl">🐕</div>
            <div className="bg-[#c5e3c5] rounded-3xl aspect-square flex items-center justify-center text-7xl mt-8">🐈</div>
          </div>
        </div>
      </section>

      {/* Service */}
      <section id="service" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-[#5a9a5a] mb-4 uppercase text-center">Service</p>
          <h2 className="text-4xl font-bold text-center mb-16">サービス内容</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🌙",
                title: "ペットホテル",
                desc: "1泊から長期滞在まで対応。完全個室で、普段の環境に近い居心地の良い空間を用意しています。",
                price: "¥3,500〜/泊",
                tags: ["完全個室", "24h管理"],
              },
              {
                icon: "☀️",
                title: "デイケア",
                desc: "日中のお世話をお任せください。運動・遊び・食事・お昼寝まで、プロスタッフが対応します。",
                price: "¥2,200〜/日",
                tags: ["日帰りOK", "送迎あり"],
              },
              {
                icon: "✂️",
                title: "トリミング",
                desc: "シャンプー・カット・爪切り・耳掃除など。皮膚や毛の状態に合わせた丁寧なグルーミングを行います。",
                price: "¥4,400〜",
                tags: ["全犬種対応", "薬浴オプション"],
              },
            ].map((s) => (
              <div key={s.title} className="border border-green-100 rounded-2xl p-6 hover:border-[#3d7a3d] hover:shadow-lg hover:shadow-green-50 transition-all">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-[#5a7a5a] leading-relaxed mb-4">{s.desc}</p>
                <div className="text-[#3d7a3d] font-bold text-sm mb-3">{s.price}</div>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-xs bg-[#e8f5e8] text-[#3d7a3d] px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-[#f0faf0]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-[#5a9a5a] mb-4 uppercase text-center">Why ぱうる</p>
          <h2 className="text-4xl font-bold text-center mb-16">選ばれる4つの理由</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                no: "01",
                title: "獣医師常駐・監修",
                desc: "毎日、獣医師が健康チェックを実施。万が一の体調不良にも迅速に対応できる体制を整えています。",
              },
              {
                no: "02",
                title: "毎日の様子をお送り",
                desc: "1日1回以上、写真・動画付きのレポートをLINEで送信。離れていても安心していただけます。",
              },
              {
                no: "03",
                title: "完全個室・感染症対策",
                desc: "ほかの子との接触はゼロ。ウイルス・ノミ・寄生虫等の感染リスクを徹底排除した清潔な環境です。",
              },
              {
                no: "04",
                title: "いつでも見学できます",
                desc: "施設内を事前にご見学いただけます。「雰囲気が合わない」と感じたら無理に決める必要はありません。",
              },
            ].map((f) => (
              <div key={f.no} className="bg-white rounded-2xl p-6 flex gap-5">
                <div className="text-3xl font-bold text-[#c5e3c5] shrink-0">{f.no}</div>
                <div>
                  <h3 className="font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-[#5a7a5a] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 px-6 bg-[#1a2e1a] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-5xl mb-6">🐾</div>
          <h2 className="text-4xl font-bold mb-6">まずは見学に来てください</h2>
          <p className="text-[#8ab58a] leading-relaxed mb-10">
            無料の施設見学を随時受け付けています。
            「ここに預けたい」と思ってから予約してください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:03-0000-0000" className="border border-[#5a9a5a] text-[#8ab58a] px-8 py-3.5 rounded-full text-sm hover:bg-[#2d4a2d] transition-colors">
              📞 03-0000-0000
            </a>
            <a href="#" className="bg-[#3d7a3d] hover:bg-[#4d8a4d] text-white px-8 py-3.5 rounded-full text-sm font-medium transition-colors">
              LINEで問い合わせる
            </a>
          </div>
          <p className="text-xs text-[#5a7a5a] mt-6">営業時間：8:00〜20:00（年中無休）</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1f0f] text-[#5a7a5a] py-8 px-6 text-center text-xs">
        <p className="mb-2">🐾 ぱうる ペットホテル・デイケア</p>
        <p>© 2026 ぱうる. All rights reserved.</p>
      </footer>
    </div>
  );
}
