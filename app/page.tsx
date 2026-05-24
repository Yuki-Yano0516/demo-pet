"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const targets = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-cream)", color: "var(--color-brown)" }}>

      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur"
        style={{ backgroundColor: "rgba(250, 248, 244, 0.92)", borderBottom: "1px solid var(--color-border)" }}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
              <ellipse cx="20" cy="22" rx="13" ry="11" fill="#EBF2EC" stroke="#6B8B6E" strokeWidth="1.5"/>
              <ellipse cx="12" cy="13" rx="5" ry="7" fill="#EBF2EC" stroke="#6B8B6E" strokeWidth="1.5" transform="rotate(-15 12 13)"/>
              <ellipse cx="28" cy="13" rx="5" ry="7" fill="#EBF2EC" stroke="#6B8B6E" strokeWidth="1.5" transform="rotate(15 28 13)"/>
              <circle cx="16" cy="21" r="1.8" fill="#6B8B6E"/>
              <circle cx="24" cy="21" r="1.8" fill="#6B8B6E"/>
              <ellipse cx="20" cy="25" rx="2.5" ry="1.5" fill="#C4794A" opacity="0.6"/>
            </svg>
            <span className="text-lg font-bold" style={{ fontFamily: "'Varela Round', sans-serif", color: "var(--color-brown)" }}>ぱうる</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm" style={{ color: "var(--color-brown-muted)" }}>
            <a href="#service" className="transition-colors hover:opacity-80">サービス</a>
            <a href="#flow" className="transition-colors hover:opacity-80">ご利用の流れ</a>
            <a href="#features" className="transition-colors hover:opacity-80">選ばれる理由</a>
            <a href="#voice" className="transition-colors hover:opacity-80">お客様の声</a>
            <a href="#contact" className="transition-colors hover:opacity-80">お問い合わせ</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center justify-center text-sm font-semibold rounded-full transition-colors cursor-pointer"
            style={{ backgroundColor: "var(--color-terra)", color: "#fff", padding: "0.5rem 1.25rem", lineHeight: 1 }}
          >
            見学予約
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "92vh" }}
      >
        {/* 背景画像 */}
        <img
          src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1600&q=85"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* グラデーションオーバーレイ：左を暗く、右は薄く */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(105deg, rgba(20,10,4,0.88) 0%, rgba(20,10,4,0.72) 50%, rgba(20,10,4,0.32) 100%)",
          }}
        />
        {/* 下部フェード（次のセクションへなじませる） */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(20,10,4,0.42))" }}
        />

        {/* コンテンツ */}
        <div className="relative z-10 w-full px-6 pt-28 pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-xl">
              {/* バッジ */}
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-7"
                style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <span className="w-2 h-2 rounded-full inline-block animate-pulse" style={{ backgroundColor: "#9EC49F" }} />
                東京都渋谷区・完全個室・年中無休
              </div>

              {/* 見出し */}
              <h1
                className="font-bold leading-snug mb-6"
                style={{
                  fontFamily: "'Varela Round', sans-serif",
                  fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
                  color: "#fff",
                  textShadow: "0 2px 12px rgba(0,0,0,0.45)",
                }}
              >
                大切な家族を、<br />
                <span className="relative inline-block" style={{ color: "#9EC49F" }}>
                  安心して
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    height="6" viewBox="0 0 100 6" preserveAspectRatio="none"
                  >
                    <path d="M0 4 Q25 0 50 4 Q75 8 100 4" stroke="#9EC49F" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6"/>
                  </svg>
                </span>
                <br />お預けください。
              </h1>

              {/* 説明文 */}
              <p className="leading-loose mb-8 max-w-md" style={{ color: "rgba(255,255,255,0.88)", fontSize: "0.975rem", textShadow: "0 1px 6px rgba(0,0,0,0.3)" }}>
                ぱうるは犬・猫専門のペットホテル＆デイケア施設です。
                獣医師監修のもと、一頭一頭に合わせた個別ケアを提供しています。
              </p>

              {/* ボタン */}
              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors cursor-pointer"
                  style={{
                    backgroundColor: "var(--color-terra)",
                    color: "#fff",
                    padding: "0.85rem 2rem",
                    lineHeight: 1,
                    boxShadow: "0 4px 20px rgba(196,121,74,0.5)",
                  }}
                >
                  見学・予約を申し込む
                </a>
                <a
                  href="#service"
                  className="inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors cursor-pointer"
                  style={{
                    border: "1.5px solid rgba(255,255,255,0.5)",
                    color: "#fff",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(6px)",
                    padding: "0.85rem 2rem",
                    lineHeight: 1,
                  }}
                >
                  サービスを見る
                </a>
              </div>

              {/* 信頼バッジ */}
              <div className="flex flex-wrap gap-5">
                {[
                  { icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  ), label: "獣医師常駐・監修" },
                  { icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  ), label: "毎日LINEでご報告" },
                  { icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/></svg>
                  ), label: "完全個室対応" },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "rgba(255,255,255,0.82)", textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>
                    <span style={{ color: "#9EC49F" }}>{b.icon}</span>
                    {b.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 現在お預かり中カード（右下に固定） */}
        <div
          className="absolute bottom-8 right-6 md:right-12 rounded-2xl px-5 py-4 z-20"
          style={{
            backgroundColor: "rgba(255,255,255,0.96)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            backdropFilter: "blur(8px)",
            minWidth: "200px",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-2.5 h-2.5 rounded-full inline-block shrink-0"
              style={{ backgroundColor: "#5AAD73", boxShadow: "0 0 0 3px rgba(90,173,115,0.25)" }}
            />
            <span className="text-xs font-bold" style={{ color: "var(--color-brown)" }}>現在お預かり中</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["🐕","🐈","🐩"].map((e, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-base border-2"
                  style={{ backgroundColor: "var(--color-cream-dark)", borderColor: "#fff" }}
                >
                  {e}
                </div>
              ))}
            </div>
            <div>
              <span className="text-xl font-bold" style={{ color: "var(--color-brown)", fontFamily: "'Varela Round', sans-serif" }}>27</span>
              <span className="text-xs ml-1" style={{ color: "var(--color-brown-muted)" }}>頭</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-10 px-6" style={{ backgroundColor: "var(--color-sage)", color: "#fff" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "500+", label: "ご利用頭数" },
            { num: "4.9", label: "お客様評価" },
            { num: "24h", label: "スタッフ対応" },
            { num: "0", label: "施設内感染事例" },
          ].map((s, i) => (
            <div key={s.label} className={`fade-up fade-up-delay-${i + 1}`}>
              <div className="text-3xl font-bold mb-1" style={{ fontFamily: "'Varela Round', sans-serif" }}>{s.num}</div>
              <div className="text-sm" style={{ opacity: 0.8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Service */}
      <section id="service" className="py-24 px-6" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 text-center fade-up">
            <h2 className="text-4xl font-bold mb-3" style={{ fontFamily: "'Varela Round', sans-serif" }}>サービス内容</h2>
            <p className="text-sm" style={{ color: "var(--color-brown-muted)" }}>お子さんのニーズに合わせた3つのサービスをご用意しています</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "ペットホテル",
                price: "¥3,500〜 / 泊",
                desc: "1泊から長期滞在まで対応。完全個室で、普段の環境に近い居心地の良い空間を用意しています。",
                tags: ["完全個室", "24h管理"],
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#6B8B6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" opacity="0.25" fill="#6B8B6E"/>
                    <path d="M9 22V12h6v10"/>
                  </svg>
                ),
              },
              {
                title: "デイケア",
                price: "¥2,200〜 / 日",
                desc: "日中のお世話をお任せください。運動・遊び・食事・お昼寝まで、プロスタッフが対応します。",
                tags: ["日帰りOK", "送迎あり"],
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#6B8B6E" strokeWidth="1.5" strokeLinecap="round">
                    <circle cx="12" cy="12" r="4" opacity="0.25" fill="#6B8B6E"/>
                    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>
                  </svg>
                ),
              },
              {
                title: "トリミング",
                price: "¥4,400〜",
                desc: "シャンプー・カット・爪切り・耳掃除など。皮膚や毛の状態に合わせた丁寧なグルーミングを行います。",
                tags: ["全犬種対応", "薬浴オプション"],
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#6B8B6E" strokeWidth="1.5" strokeLinecap="round">
                    <circle cx="6" cy="6" r="3"/>
                    <circle cx="6" cy="18" r="3"/>
                    <line x1="20" y1="4" x2="8.12" y2="15.88"/>
                    <line x1="14.47" y1="14.48" x2="20" y2="20"/>
                    <line x1="8.12" y1="8.12" x2="12" y2="12"/>
                  </svg>
                ),
              },
            ].map((s, i) => (
              <div
                key={s.title}
                className={`rounded-2xl p-7 transition-all fade-up fade-up-delay-${i + 1}`}
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 2px 12px rgba(61,43,31,0.06)",
                }}
              >
                <div className="mb-5 w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "var(--color-sage-pale)" }}>
                  {s.icon}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Varela Round', sans-serif" }}>{s.title}</h3>
                <p className="text-sm leading-loose mb-4" style={{ color: "var(--color-brown-muted)" }}>{s.desc}</p>
                <div className="font-bold text-sm mb-4" style={{ color: "var(--color-terra)" }}>{s.price}</div>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ backgroundColor: "var(--color-sage-pale)", color: "var(--color-sage)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--color-cream-dark)" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm mb-8 font-medium fade-up" style={{ color: "var(--color-brown-muted)" }}>
            施設の様子 · Instagram @pauru_pethotel
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="rounded-2xl aspect-square col-span-2 overflow-hidden" style={{ boxShadow: "0 4px 16px rgba(61,43,31,0.1)" }}>
              <img
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=800&q=80"
                alt="白い犬と灰色の猫"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl aspect-square overflow-hidden" style={{ boxShadow: "0 4px 16px rgba(61,43,31,0.1)" }}>
              <img
                src="https://images.unsplash.com/photo-1509205477838-a534e43a849f?auto=format&fit=crop&w=400&q=80"
                alt="犬と猫"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl aspect-square overflow-hidden" style={{ boxShadow: "0 4px 16px rgba(61,43,31,0.1)" }}>
              <img
                src="https://images.unsplash.com/photo-1546377791-2e01b4449bf0?auto=format&fit=crop&w=400&q=80"
                alt="コーギーと猫"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section id="flow" className="py-24 px-6" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 text-center fade-up">
            <h2 className="text-4xl font-bold mb-3" style={{ fontFamily: "'Varela Round', sans-serif" }}>ご利用の流れ</h2>
            <p className="text-sm" style={{ color: "var(--color-brown-muted)" }}>はじめてでも安心。4つのステップで簡単にご利用いただけます</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "見学・相談", desc: "まずは無料で施設をご見学。スタッフがお子さんの性格や生活習慣を丁寧にヒアリングします。" },
              { step: "2", title: "初回登録", desc: "ワクチン接種証明書と健康状態をご確認。お子さんの情報をカルテに登録します。" },
              { step: "3", title: "お預かり", desc: "入室〜滞在中は1日複数回のケアレポートをLINEでお送りします。" },
              { step: "4", title: "お迎え", desc: "お迎え時に当日の様子をご報告。次回のご予約も承ります。" },
            ].map((f, i) => (
              <div key={f.step} className={`relative fade-up fade-up-delay-${i + 1}`}>
                <div
                  className="rounded-2xl p-6 h-full"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid var(--color-border)",
                    boxShadow: "0 2px 12px rgba(61,43,31,0.06)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-4"
                    style={{ backgroundColor: "var(--color-terra)", color: "#fff", fontFamily: "'Varela Round', sans-serif" }}
                  >
                    {f.step}
                  </div>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "'Varela Round', sans-serif" }}>{f.title}</h3>
                  <p className="text-xs leading-loose" style={{ color: "var(--color-brown-muted)" }}>{f.desc}</p>
                </div>
                {i < 3 && (
                  <div
                    className="hidden md:block absolute -right-3 top-8 text-lg z-10 font-light"
                    style={{ color: "var(--color-terra)" }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6" style={{ backgroundColor: "var(--color-cream-dark)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 text-center fade-up">
            <h2 className="text-4xl font-bold mb-3" style={{ fontFamily: "'Varela Round', sans-serif" }}>選ばれる4つの理由</h2>
            <p className="text-sm" style={{ color: "var(--color-brown-muted)" }}>飼い主さんの「安心」のために、妥協しない環境を整えています</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "獣医師常駐・監修", desc: "毎日、獣医師が健康チェックを実施。万が一の体調不良にも迅速に対応できる体制を整えています。", icon: "🩺" },
              { title: "毎日の様子をお届け", desc: "1日1回以上、写真・動画付きのレポートをLINEで送信。離れていても安心していただけます。", icon: "📱" },
              { title: "完全個室・感染症対策", desc: "ほかの子との接触はゼロ。ウイルス・ノミ・寄生虫等の感染リスクを徹底排除した清潔な環境です。", icon: "🏠" },
              { title: "いつでも見学できます", desc: "施設内を事前にご見学いただけます。「雰囲気が合わない」と感じたら無理に決める必要はありません。", icon: "👀" },
            ].map((f, i) => (
              <div
                key={f.title}
                className={`rounded-2xl p-7 flex gap-5 fade-up fade-up-delay-${i % 2 + 1}`}
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 2px 12px rgba(61,43,31,0.06)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-2xl font-bold"
                  style={{ backgroundColor: "var(--color-terra-pale)", color: "var(--color-terra)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "'Varela Round', sans-serif" }}>{f.title}</h3>
                  <p className="text-sm leading-loose" style={{ color: "var(--color-brown-muted)" }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice */}
      <section id="voice" className="py-24 px-6" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 text-center fade-up">
            <h2 className="text-4xl font-bold mb-3" style={{ fontFamily: "'Varela Round', sans-serif" }}>お客様の声</h2>
            <p className="text-sm" style={{ color: "var(--color-brown-muted)" }}>実際にご利用いただいた飼い主さんからいただいた声です</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "田中さま",
                pet: "トイプードル・ミルク（4歳）",
                text: "出張が多く長期預かりを何度もお願いしています。毎日LINEで写真が届くので、出先でも安心して仕事に集中できます。スタッフの方がミルクの性格をよく理解してくれていて、まるで第二の家族のようです。",
              },
              {
                name: "山田さま",
                pet: "スコティッシュフォールド・ほたる（2歳）",
                text: "猫が人見知りなので預けるのが不安でしたが、見学時から丁寧に対応いただき、初日から安心してお任せできました。完全個室なので他の動物のストレスがないのも助かっています。",
              },
              {
                name: "佐藤さま",
                pet: "ミニチュアシュナウザー・まるお（6歳）",
                text: "トリミングもお願いしていますが、まるおの毛質に合わせたケアを毎回提案してくれます。肌荒れが改善されて、ふわふわの毛並みをキープできるようになりました。",
              },
            ].map((v, i) => (
              <div
                key={v.name}
                className={`rounded-2xl p-7 fade-up fade-up-delay-${i + 1}`}
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 2px 12px rgba(61,43,31,0.06)",
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C4794A">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-loose mb-6" style={{ color: "var(--color-brown-muted)" }}>{v.text}</p>
                <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "1rem" }}>
                  <p className="font-semibold text-sm">{v.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--color-sage)" }}>{v.pet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="py-24 px-6 text-center"
        style={{ backgroundColor: "var(--color-terra)", color: "#fff" }}
      >
        <div className="max-w-2xl mx-auto">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
              <path d="M9 22V12h6v10"/>
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-5" style={{ fontFamily: "'Varela Round', sans-serif" }}>
            まずは見学に来てください
          </h2>
          <p className="leading-loose mb-10" style={{ opacity: 0.9, fontSize: "0.95rem" }}>
            無料の施設見学を随時受け付けています。<br />
            「ここに預けたい」と思ってから予約してください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:03-0000-0000"
              className="inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors cursor-pointer"
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.4)",
                padding: "0.85rem 2rem",
                lineHeight: 1,
              }}
            >
              03-0000-0000
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors cursor-pointer"
              style={{
                backgroundColor: "#fff",
                color: "var(--color-terra)",
                padding: "0.85rem 2rem",
                lineHeight: 1,
              }}
            >
              LINEで問い合わせる
            </a>
          </div>
          <p className="text-xs mt-6" style={{ opacity: 0.65 }}>営業時間：8:00〜20:00（年中無休）</p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 px-6 text-center text-xs"
        style={{ backgroundColor: "var(--color-brown)", color: "rgba(255,255,255,0.6)" }}
      >
        <p className="mb-2 font-semibold" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Varela Round', sans-serif" }}>
          ぱうる ペットホテル・デイケア
        </p>
        <p>© 2026 ぱうる. All rights reserved.</p>
      </footer>
    </div>
  );
}
