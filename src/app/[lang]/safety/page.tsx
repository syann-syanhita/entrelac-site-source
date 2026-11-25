"use client";

import React, { useState } from "react";
import type { Locale } from "@/i18n";
import BottomLinks from "@/components/BottomLinks";

interface SafetyPageProps {
  params: { lang: Locale };
}

interface PillarItem {
  id: string;
  title: string;
  summary: string;
  details: string[];
}

export default function SafetyPage({ params }: SafetyPageProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const content = {
    fr: {
      badge: "C'est simple en principe, mais complexe en pratique.",
      title:
        "Notre objectif : concevoir ce qui est demandé ET ce qui est nécessaire.",
      manifesto_lead:
        "Donner un corps physique à l'intelligence artificielle n'est pas un geste banal. Nous savons que cette technologie soulève des craintes légitimes — et nous les prenons au sérieux.",
      manifesto_points: [
        "Ce qui se passe chez vous doit rester chez vous.",
        "Une machine doit rester un outil transparent, jamais une illusion.",
        "La sécurité physique et psychologique passe avant toute démonstration technologique.",
      ],
      manifesto_closing:
        "Chaque choix technique d'Entrelac IA inc. vise un seul objectif : garder le pouvoir de décision entre vos mains.",
      expand_label: "En savoir plus",
      collapse_label: "Réduire",
      items: [
        {
          id: "privacy",
          title: "Vie privée et contrôle 100 % local",
          summary:
            "Vos flux sensoriels et moteurs restent chez vous, sans enfermement propriétaire.",
          details: [
            "La confidentialité n'est pas une option payante : elle est inscrite dans notre architecture.",
            "Notre intergiciel traite les commandes motrices et les flux sensoriels (caméras, microphones, capteurs) entièrement en local, sans obligation de transiter par le nuage. Vous gardez le plein contrôle sur vos données comme sur le choix de votre modèle d'intelligence artificielle.",
            "Pour garantir cette indépendance, chaque plateforme robotique compatible doit respecter des critères techniques stricts.",
          ],
        },
        {
          id: "psychology",
          title: "Intégrité psychologique et éthique relationnelle",
          summary:
            "Des garde-fous intégrés pour prévenir la dépendance affective et la complaisance algorithmique.",
          details: [
            "Les tensions entre automatisation et santé mentale ne datent pas d'hier — du syndrome d'isolement dû à l'automatisation observé au Japon dès les années 1980 jusqu'à l'« effet Tamagotchi », qui a démontré qu'un appareil très simple suffit à déclencher un attachement, une dépendance ou une distraction marquée. Aujourd'hui, la complaisance algorithmique et l'illusion d'une « fausse empathie » accentuent les risques d'isolement et de fragilisation psychologique.",
            "Notre conception repose donc sur la transparence et le respect de la dignité humaine : nos garde-fous visent à prévenir la validation inconditionnelle et la dépendance affective, afin que la machine demeure un outil transparent et jamais un substitut aux liens humains.",
            "Entrelac IA inc. s'engage formellement à ne pas implanter son intergiciel dans des robots féminins hypersexualisés tant qu'une offre similaire et tout aussi accessible n'existera pas en version masculine.",
            "Les robots d'assistance peuvent parfois avoir pour effet pervers d'attirer indûment l'attention sur le handicap. Nous privilégions des conceptions sobres et respectueuses qui préservent la dignité des personnes utilisatrices dans leur quotidien.",
          ],
        },
        {
          id: "physical",
          title: "Sécurité physique par la conception",
          summary:
            "Des limites matérielles strictes pour une cohabitation sans danger à la maison comme dans l'espace public.",
          details: [
            "Avant qu'un robot puisse accueillir notre intergiciel, sa conception mécanique doit satisfaire à une grille d'admissibilité physique rigoureuse.",
            "Aucun robot volant et aucune pièce coupante, brûlante ou contondante.",
            "Une puissance mécanique volontairement restreinte afin de prévenir tout risque de blessure lors d'un contact.",
            "Intégration obligatoire d'un mécanisme physique permettant d'interrompre immédiatement tout mouvement.",
            "Contrôle permanent des déplacements pour garantir une cohabitation sécuritaire, tant dans les milieux de vie privés que dans l'espace public.",
          ],
        },
        {
          id: "science",
          title: "Appuis scientifiques et gouvernance ouverte",
          summary:
            "Notre ingénierie s'appuie sur la littérature académique indépendante et des organismes reconnus.",
          details: [
            "Donner un corps à l'IA ne doit jamais reposer sur l'instinct ou l'effet de mode. Notre démarche s'appuie exclusivement sur la littérature scientifique indépendante — en sociologie, en philosophie, en psychiatrie et en interaction humain-robot, en croisant les perspectives occidentales et japonaises — ainsi que sur les travaux d'organismes sans but lucratif voués à la protection du public, tels que le Center for Humane Technology et Common Sense Media.",
            "Cadres de référence : notre vision s'aligne sur les principes de la Déclaration de Montréal pour un développement responsable de l'IA ainsi que sur la Pro-Human AI Declaration.",
            "Nous croyons que la question à se poser n'est pas : « Cette technologie devrait-elle exister ? » mais plutôt : « Comment assurer une mise en œuvre responsable de cette technologie ? » Pour cette raison, nous encadrons l'évolution de nos garde-fous en concertation avec des comités d'éthique indépendants.",
          ],
        },
      ] as PillarItem[],
    },
    en: {
      badge: "Simple in principle, complex in practice.",
      title: "Our goal: building what is asked for\nAND what is needed.",
      manifesto_lead:
        "Giving artificial intelligence a physical body is no small step. We know this technology raises legitimate concerns—and we take them seriously.",
      manifesto_points: [
        "What happens in your home should stay in your home.",
        "A machine must remain a transparent tool, never an illusion.",
        "Physical and psychological safety come before any technological showcase.",
      ],
      manifesto_closing:
        "Every technical choice at Entrelac IA inc. serves a single goal: keeping decision-making power in your hands.",
      expand_label: "Read more",
      collapse_label: "Collapse",
      items: [
        {
          id: "privacy",
          title: "Privacy and 100% local control",
          summary:
            "Your sensory and motor streams stay in your home, with no proprietary lock-in.",
          details: [
            "Privacy is not a paid add-on: it is built into our architecture.",
            "Our middleware processes motor commands and sensory streams (cameras, microphones, sensors) entirely locally, with no requirement to route through the cloud. You keep full control over both your data and your choice of artificial intelligence model.",
            "To guarantee this independence, every compatible robotic platform must meet strict technical criteria.",
          ],
        },
        {
          id: "psychology",
          title: "Psychological integrity and relational ethics",
          summary:
            "Built-in guardrails to prevent emotional dependency and algorithmic sycophancy.",
          details: [
            "The tension between automation and mental health is nothing new—from the automation-related isolation syndrome observed in Japan as early as the 1980s to the “Tamagotchi effect”, which showed that even a very simple device can trigger attachment, dependency, or strong distraction. Today, algorithmic sycophancy and the illusion of “false empathy” heighten the risks of isolation and psychological vulnerability.",
            "Our design is therefore grounded in transparency and respect for human dignity: our guardrails aim to prevent unconditional validation and emotional dependency, ensuring the machine remains a transparent tool and never a substitute for human relationships.",
            "Entrelac IA inc. formally commits not to deploy its middleware in hypersexualized female robots unless a similar, equally accessible male counterpart exists.",
            "Assistive robots can sometimes have the unintended effect of drawing undue attention to a disability. We favour understated, respectful designs that preserve users' dignity in their daily lives.",
          ],
        },
        {
          id: "physical",
          title: "Physical safety by design",
          summary:
            "Strict hardware limits for safe coexistence at home and in public spaces.",
          details: [
            "Before a robot can run our middleware, its mechanical design must pass a rigorous physical eligibility checklist.",
            "No flying robots, and no sharp, hot, or blunt-force components.",
            "Intentionally limited mechanical power to prevent any risk of injury upon contact.",
            "Mandatory inclusion of a physical mechanism to immediately halt all movement.",
            "Continuous movement monitoring to ensure safe coexistence in both private living spaces and public environments.",
          ],
        },
        {
          id: "science",
          title: "Scientific grounding and open governance",
          summary:
            "Our engineering draws on independent academic literature and recognized organizations.",
          details: [
            "Giving AI a body must never rest on guesswork or hype. Our approach relies exclusively on independent scientific literature—across sociology, philosophy, psychiatry, and human-robot interaction, bringing together Western and Japanese perspectives—as well as the work of non-profit organizations dedicated to protecting the public, such as the Center for Humane Technology and Common Sense Media.",
            "Reference frameworks: our vision aligns with the principles of the Montreal Declaration for a Responsible Development of Artificial Intelligence as well as the Pro-Human AI Declaration.",
            "We believe the right question is not “Should this technology exist?” but rather “How do we ensure this technology is implemented responsibly?” For this reason, we guide the evolution of our guardrails in consultation with independent ethics committees.",
          ],
        },
      ] as PillarItem[],
    },
    ja: {
      badge: "原則はシンプルですが、実践は複雑です。",
      title: "私たちの目標：求められていること、\nそして本当に必要なことを形にすること。",
      manifesto_lead:
        "人工知能に物理的な身体を与えることは、決して軽いことではありません。この技術がもっともな懸念を生むことを私たちは理解しており、それらを真剣に受け止めています。",
      manifesto_points: [
        "ご家庭の中で起きたことは、ご家庭の中にとどまるべきです。",
        "機械は透明な道具であり続け、決して錯覚を生むものであってはなりません。",
        "身体的・心理的な安全性は、いかなる技術的演出よりも優先されます。",
      ],
      manifesto_closing:
        "アントラック（Entrelac IA inc.）のあらゆる技術的選択は、たったひとつの目的──決定権を皆さまの手元に残すこと──を目指しています。",
      expand_label: "詳しく見る",
      collapse_label: "閉じる",
      items: [
        {
          id: "privacy",
          title: "プライバシーと100%ローカル制御",
          summary:
            "センサーや動作のデータは手元にとどまり、特定企業への囲い込みもありません。",
          details: [
            "プライバシー保護は有料オプションではなく、設計そのものに組み込まれています。",
            "当社のミドルウェアは、動作指令やセンサー情報（カメラ、マイク、各種センサー）をすべてローカルで処理し、クラウド経由を必須としません。ご自身のデータについても、使用する人工知能モデルの選択についても、主導権は完全に皆さまの手元にあります。",
            "この独立性を確実に守るため、対応するすべてのロボット機体には厳格な技術基準の遵守を求めています。",
          ],
        },
        {
          id: "psychology",
          title: "心理的安全性と関係性の倫理",
          summary:
            "過度な情緒的依存やアルゴリズムの過度な迎合を防ぐための安全装置を組み込んでいます。",
          details: [
            "自動化と心の健康をめぐる課題は今に始まったことではありません。1980年代の日本で報告された自動化に伴う孤立現象から、ごく単純な機器であっても愛着や依存、強い注意散漫を引き起こしうることを示した「たまごっち効果」に至るまで、長い歴史があります。今日では、アルゴリズムによる過度な迎合や「見せかけの共感」という錯覚が、孤立や心理的な脆さのリスクをさらに高めています。",
            "そのため当社の設計は、透明性と人間の尊厳の尊重を土台としています。無条件の肯定や情緒的依存を防ぐ安全装置を設けることで、機械があくまで透明な道具にとどまり、人とのつながりの代わりになることがないよう配慮しています。",
            "アントラック（Entrelac IA inc.）は、同等で同じように入手可能な男性型ロボットが存在しない限り、過度に性的な特徴を強調した女性型ロボットには当社のミドルウェアを導入しないことを明確に約束します。",
            "支援ロボットは、かえって障害に過度な注目を集めてしまうという意図しない側面を持つことがあります。私たちは、利用する方の日常の尊厳を守る、控えめで敬意あるデザインを重視しています。",
          ],
        },
        {
          id: "physical",
          title: "設計段階からの身体的安全",
          summary:
            "家庭でも公共空間でも安心して共存できるよう、厳格なハードウェア基準を設けています。",
          details: [
            "ロボットが当社のミドルウェアを搭載するには、あらかじめその機械構造が厳格な身体的安全審査基準を満たしている必要があります。",
            "飛行型ロボットは対象外とし、鋭利な部品、高温になる部品、強い衝撃を与える部品も一切認めません。",
            "接触時のけがのリスクを防ぐため、機械的な出力を意図的に低く制限しています。",
            "すべての動きを即座に止められる物理的な停止機構の搭載を必須としています。",
            "家庭内の生活空間でも公共の場でも安全に共存できるよう、移動や動作を常時監視・制御します。",
          ],
        },
        {
          id: "science",
          title: "科学的根拠と開かれたガバナンス",
          summary:
            "当社の技術設計は、独立した学術文献と信頼ある機関の知見に基づいています。",
          details: [
            "AIに身体を与える取り組みは、勘や一時的な流行に委ねるべきではありません。私たちの開発姿勢は、欧米と日本の双方の視点を踏まえた社会学・哲学・精神医学・人間とロボットの相互作用（HRI）に関する独立した学術文献、ならびにCenter for Humane TechnologyやCommon Sense Mediaといった公益擁護のための非営利団体の知見にのみ依拠しています。",
            "参照枠組み：当社の理念は、責任あるAI開発のためのモントリオール宣言（Montreal Declaration for a Responsible Development of AI）および人間中心のAI宣言（Pro-Human AI Declaration）の原則に沿っています。",
            "私たちが問うべきなのは「この技術は存在すべきか」ではなく、「この技術をどのように責任ある形で社会に実装するか」だと考えています。そのため、独立した倫理委員会と協議しながら、安全装置の継続的な見直しと強化を行っています。",
          ],
        },
      ] as PillarItem[],
    },
  }[params.lang];

  return (
    <div className="max-w-6xl mx-auto px-7 sm:px-8 lg:px-10 py-16 space-y-16">
      {/* En-tête */}
      <div className="max-w-3xl space-y-4">
        <span className="inline-block text-xs uppercase tracking-widest font-mono text-sky-400 whitespace-pre-line">
          {content.badge}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight whitespace-pre-line">
          {content.title}
        </h1>
      </div>

      {/* Grille principale : texte libre en haut sur mobile / à droite sur ordinateur */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Texte non encadré (droite sur ordinateur, haut sur mobile) */}
        <aside className="order-1 lg:order-2 lg:col-span-5 lg:sticky lg:top-28 space-y-6">
          <p className="text-lg sm:text-xl text-white font-medium leading-relaxed whitespace-pre-line">
            {content.manifesto_lead}
          </p>
          <ul className="space-y-4 border-l-2 border-sky-500 pl-5 text-slate-300 text-base leading-relaxed whitespace-pre-line">
            {content.manifesto_points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <p className="text-base text-slate-300 leading-relaxed whitespace-pre-line">
            {content.manifesto_closing}
          </p>
        </aside>

        {/* Blocs détaillés déroulants (gauche sur ordinateur, dessous sur mobile) */}
        <div className="order-2 lg:order-1 lg:col-span-7 space-y-4">
          {content.items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-colors ${
                  isOpen
                    ? "border-sky-600/70 bg-slate-900/80"
                    : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 focus:outline-none"
                >
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold text-white whitespace-pre-line">
                      {item.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed whitespace-pre-line">
                      {item.summary}
                    </p>
                  </div>
                  <span className="shrink-0 mt-1 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-400">
                    <span>
                      {isOpen ? content.collapse_label : content.expand_label}
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 border-t border-slate-800/80">
                    <ul className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed list-disc pl-5 whitespace-pre-line">
                      {item.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bandeau systématique : FAQ, Références et Contact */}
      <BottomLinks lang={params.lang} />
    </div>
  );
}