import React from "react";
import type { Locale } from "@/i18n";
import BottomLinks from "@/components/BottomLinks";

export default async function PublicSpacePage({
  params,
}: {
  params: { lang: Locale };
}) {
  const content = {
    fr: {
      badge: "Commerces et entreprises",
      title: "Un pont entre le numérique et le concret.",
      subtitle:
        "La technologie d'Entrelac est polyvalente et s'adapte à tous les contextes où un robot contribue à votre activité. Que ce soit dans l'accueil du public, en éducation, dans une bibliothèque, en musée ou en milieu communautaire, vous gardez la pleine maîtrise de vos données et de votre matériel.",
      pillars: [
        {
          title: "Pour votre commerce",
          desc: "Adaptez votre robot à vos besoins précis. Filtrez facilement et à votre guise l'IA que vous aurez choisie.",
        },
        {
          title: "Pour les institutions",
          desc: "Que ce soit pour la recherche, l'enseignement ou la santé, vous gardez le contrôle sur les données de votre public et assurez leur sécurité.",
        },
        {
          title: "Pour les entreprises d'IA et de robotique",
          desc: "Une barrière de moins entre votre innovation et son incarnation. Développez une meilleure IA ou un corps robotique idéal ; vous n'avez plus à faire les deux.",
        },
      ],
      contexts_title: "N'importe quel robot ?",
      hardware_title: "Pas tout à fait.",
      hardware_desc:
        "Entrelac IA inc. accorde beaucoup d'importance au choix de ses robots. Ceux-ci doivent répondre à certains critères, notamment en matière de sécurité, d'architecture et d'éthique. Consultez notre FAQ pour en savoir plus.",
    },
    en: {
      badge: "Retail & Businesses",
      title: "A bridge between the digital and the physical.",
      subtitle:
        "Entrelac's technology is versatile and adapts to any setting where a robot supports your operations. Whether welcoming the public, in education, in a library, a museum, or a community centre, you keep full control over your data and your hardware.",
      pillars: [
        {
          title: "For your business",
          desc: "Tailor your robot to your exact needs. Easily filter the AI you choose, on your own terms.",
        },
        {
          title: "For institutions",
          desc: "Whether in research, education, or health care, you keep control over your public's data and ensure its security.",
        },
        {
          title: "For AI and robotics companies",
          desc: "One less barrier between your innovation and its physical embodiment. Build a better AI or an ideal robotic body; you no longer have to do both.",
        },
      ],
      contexts_title: "Any robot?",
      hardware_title: "Not quite.",
      hardware_desc:
        "Entrelac IA inc. places great importance on its choice of robots. They must meet specific criteria, particularly in terms of safety, architecture, and ethics. Visit our FAQ to learn more.",
    },
    ja: {
      badge: "店舗・企業向け",
      title: "デジタルと現実をつなぐ架け橋。",
      subtitle:
        "アントラックの技術は柔軟性が高く、ロボットが業務を支えるあらゆる現場に適応します。窓口での案内、教育現場、図書館、博物館、地域活動の場など、どのような環境でも、データと機器の主導権は常に皆さまの手元に保たれます。",
      pillars: [
        {
          title: "店舗・商業施設向け",
          desc: "現場の細かなニーズに合わせてロボットを調整できます。お選びいただいたAIの応答内容も、ご方針に沿ってかんたんに制限・管理できます。",
        },
        {
          title: "公的・研究機関向け",
          desc: "研究、教育、医療・福祉のいずれの分野であっても、利用者のデータを確実に管理し、高い安全性を守ることができます。",
        },
        {
          title: "AI・ロボット開発企業向け",
          desc: "技術革新とその身体化を阻む壁をひとつ取り除きます。より優れたAIの開発、あるいは理想的なロボット機体の設計に専念できます。もう両方をつくる必要はありません。",
        },
      ],
      contexts_title: "どんなロボットでも使えますか？",
      hardware_title: "そうとは限りません。",
      hardware_desc:
        "アントラック（Entrelac IA inc.）は、連携するロボットの選定を非常に重視しています。安全性、設計構造、倫理面をはじめとする一定の基準を満たす必要があります。詳しくはよくある質問（FAQ）をご覧ください。",
    },
  }[params.lang];

  return (
    <div className="max-w-6xl mx-auto px-7 sm:px-8 lg:px-10 py-16 space-y-16">
      {/* En-tête */}
      <div className="max-w-3xl space-y-4">
        <span className="inline-block text-xs uppercase tracking-widest font-mono text-sky-400">
          {content.badge}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight whitespace-pre-line">
          {content.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed whitespace-pre-line">
          {content.subtitle}
        </p>
      </div>

      {/* Trois piliers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7 space-y-3"
          >
            <h2 className="text-xl font-bold text-white whitespace-pre-line">
              {pillar.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed whitespace-pre-line">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Titre suivi directement de l'encadré sur le matériel robotique */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white whitespace-pre-line">
          {content.contexts_title}
        </h2>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 sm:p-8 space-y-3">
          <h3 className="text-xl font-bold text-white whitespace-pre-line">
            {content.hardware_title}
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl whitespace-pre-line">
            {content.hardware_desc}
          </p>
        </div>
      </section>

      {/* Bandeau systématique : FAQ, Références et Contact */}
      <BottomLinks lang={params.lang} />
    </div>
  );
}