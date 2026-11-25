"use client";

import React, { useState } from "react";
import type { Locale } from "@/i18n";
import BottomLinks from "@/components/BottomLinks";

interface FaqPageProps {
  params: { lang: Locale };
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqCategory {
  title: string;
  items: FaqItem[];
}

export default function FaqPage({ params }: FaqPageProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const content = {
    fr: {
      badge: "Foire aux questions",
      title: "Questions fréquentes",
      subtitle:
        "Des réponses directes et sans jargon sur le fonctionnement d'Entrelac, la confidentialité et nos limites.",
      open_label: "Ouvrir",
      close_label: "Fermer",
      categories: [
        {
          title: "Fonctionnement et compatibilité",
          items: [
            {
              id: "what-is-it",
              question: "Est-ce qu'Entrelac IA inc. vend des robots ?",
              answer:
                "Non. Entrelac ne vend pas de matériel robotique, et ne remplace pas votre IA non plus. Nous concevons simplement le pont entre une IA que vous utilisez déjà et un robot compatible.\n\nN'hésitez pas à nous suggérer un modèle de robot, ou à entrer en contact avec nous si vous en fabriquez !",
            },
            {
              id: "compatibility",
              question:
                "Quels robots et quelles IA pourront fonctionner avec Entrelac ?",
              answer:
                "Entrelac est agnostique, c'est-à-dire qu'il n'est pas conçu pour fonctionner avec une IA en particulier ni avec un robot en particulier. Une fois installé, il peut accueillir n'importe quel modèle de langage dont vous avez la clé API, ainsi que les plateformes robotiques qui répondent à quelques critères techniques, notamment une connexion internet.",
            },
            {
              id: "internet",
              question: "Est-ce que ça fonctionne sans connexion Internet ?",
              answer:
                "Non, à moins que votre IA soit locale. La traduction entre ce que « pense » l'IA et ce que « ressent » le robot s'effectue entièrement localement, devant vous et sans serveur supplémentaire.\n\nToutefois, votre IA fonctionne probablement via internet. Pour vous répondre, elle aura donc toujours besoin de sa connexion. Seul un modèle de langage hébergé directement sur votre réseau local peut fonctionner sans accès à Internet.",
            },
            {
              id: "tech-skills",
              question:
                "Quelles connaissances faut-il avoir en programmation pour utiliser Entrelac ?",
              answer:
                "Aucune. Bien que le fonctionnement interne repose sur une architecture logicielle rigoureuse, l'interface de configuration et de gestion est pensée pour être simple, claire et accessible.",
            },
          ],
        },
        {
          title: "Confidentialité, sécurité et éthique",
          items: [
            {
              id: "privacy",
              question:
                "Est-ce qu'Entrelac enregistre ou lit mes conversations privées ?",
              answer:
                "Oui, il les lit, mais c'est pour les relayer entre l'IA et le robot. Entrelac ne conserve que ce qui est nécessaire au fonctionnement fluide de l'incarnation, et comme vos empreintes digitales sur votre téléphone, tout reste sur l'appareil. Rien n'est jamais envoyé vers des serveurs externes.",
            },
            {
              id: "physical-safety",
              question:
                "Comment garantissez-vous qu'un robot reste sécuritaire, à la maison ou en public ?",
              answer:
                "Tout objet capable de mouvement vient avec un certain risque. Cependant, nous appliquons des exclusions matérielles absolues afin de le minimiser autant que possible. Entre autres, Entrelac ne sera jamais installé sur des appareils capables de voler, dotés de pièces tranchantes, perforantes ou brûlantes, ou capables de tirer des projectiles. Leur force motrice doit également être limitée.\n\nNous travaillons continuellement à renforcer ces mesures en fonction de l'avancement technologique et de l'avis des spécialistes afin de trouver le parfait équilibre entre capacité et sécurité.",
            },
            {
              id: "psychology",
              question:
                "Cette technologie ne risque-t-elle pas d'isoler les gens ou de nuire à la santé mentale ?",
              answer:
                "C'est une préoccupation que nous prenons très au sérieux, car le risque est réel. Par conception, Entrelac intègre des garde-fous et les met entre vos mains. Ceux-ci vous permettent, par exemple, de repérer les chambres d'écho et la validation d'idées dangereuses ou délirantes, et de filtrer le contenu explicite ou vulgaire.\n\nPour ce qui est de l'isolement, il faut savoir que l'IA est un outil à double tranchant. Elle ne saura jamais remplacer les êtres humains... mais lorsqu'aucun être humain n'est disponible, elle offre une présence utile. Entrelac IA inc. s'engage à mettre à votre disposition des façons concrètes de prévenir l'isolement et de favoriser une utilisation équilibrée et informée de l'IA incarnée.\n\nNotre démarche s'appuie sur la littérature scientifique indépendante en santé psychologique et en éthique de l'IA, et fera l'objet d'ajustements continus.",
            },
          ],
        },
        {
          title: "Avancement et collaborations",
          items: [
            {
              id: "availability",
              question: "Quand Entrelac sera-t-il disponible ?",
              answer:
                "Entrelac est actuellement en phase de développement et de recherche. Vous voulez faire partie de l'aventure avec nous dès le début ? Rendez-vous sur notre page de contact et nous vous informerons lorsque la campagne de sociofinancement sera lancée !",
            },
            {
              id: "eligibility",
              question:
                "Je fabrique des robots. Comment savoir s'ils seront compatibles ?",
              answer:
                "Entrez en contact avec nous ! Nous nous ferons un plaisir de vous donner les spécifications techniques minimales précises et de répondre à vos questions.",
            },
            {
              id: "contribute",
              question:
                "Puis-je vous proposer une étude scientifique, une critique ou un projet pilote ?",
              answer:
                "Nous sommes toute ouïe ! Nous suivons de près les avancées scientifiques et technologiques ainsi que les dernières découvertes. Contactez-nous sans hésiter.",
            },
          ],
        },
      ] as FaqCategory[],
    },
    en: {
      badge: "FAQ",
      title: "Frequently Asked Questions",
      subtitle:
        "Direct, jargon-free answers on how Entrelac works, privacy, and our boundaries.",
      open_label: "Open",
      close_label: "Close",
      categories: [
        {
          title: "How It Works & Compatibility",
          items: [
            {
              id: "what-is-it",
              question: "Does Entrelac IA inc. sell robots?",
              answer:
                "No. Entrelac does not sell robotic hardware, nor does it replace your AI. We simply build the bridge between an AI you already use and a compatible robot.\n\nFeel free to suggest a robot model, or get in touch with us if you manufacture them!",
            },
            {
              id: "compatibility",
              question: "Which robots and AIs will be able to work with Entrelac?",
              answer:
                "Entrelac is agnostic, meaning it is not built to work with one specific AI or one specific robot. Once installed, it can host any language model for which you have an API key, alongside robotic platforms that meet a few technical criteria, including an Internet connection.",
            },
            {
              id: "internet",
              question: "Does it work without an Internet connection?",
              answer:
                "No, unless your AI is local. The translation between what the AI “thinks” and what the robot “feels” takes place entirely locally, right in front of you, with no extra server.\n\nHowever, your AI likely runs over the Internet, so it will still need its connection to reply to you. Only a language model hosted directly on your local network can run without Internet access.",
            },
            {
              id: "tech-skills",
              question: "What programming skills do I need to use Entrelac?",
              answer:
                "None. Although the inner workings rely on a rigorous software architecture, the setup and management interface is designed to be simple, clear, and accessible.",
            },
          ],
        },
        {
          title: "Privacy, Safety & Ethics",
          items: [
            {
              id: "privacy",
              question: "Does Entrelac record or read my private conversations?",
              answer:
                "Yes, it reads them, solely to relay them between the AI and the robot. Entrelac keeps only what is needed for smooth physical embodiment, and just like your fingerprints on your phone, everything stays on the device. Nothing is ever sent to external servers.",
            },
            {
              id: "physical-safety",
              question:
                "How do you ensure a robot stays safe, at home or in public?",
              answer:
                "Any object capable of movement carries some risk. However, we enforce absolute hardware exclusions to minimize it as much as possible. Among other rules, Entrelac will never be installed on devices capable of flying, equipped with sharp, piercing, or hot parts, or capable of firing projectiles. Their motor force must also be limited.\n\nWe continuously work to strengthen these measures in step with technological advances and specialist advice to find the right balance between capability and safety.",
            },
            {
              id: "psychology",
              question:
                "Doesn’t this technology risk isolating people or harming mental health?",
              answer:
                "This is a concern we take very seriously, because the risk is real. By design, Entrelac builds guardrails in and puts them in your hands. For example, they let you spot echo chambers and the validation of dangerous or delusional ideas, and filter out explicit or vulgar content.\n\nWhen it comes to isolation, AI is a double-edged tool. It will never replace human beings... but when no human is available, it offers a helpful presence. Entrelac IA inc. is committed to providing concrete ways to prevent isolation and encourage a balanced, informed use of embodied AI.\n\nOur approach draws on independent scientific literature in psychological health and AI ethics, and will be adjusted continuously.",
            },
          ],
        },
        {
          title: "Progress & Collaborations",
          items: [
            {
              id: "availability",
              question: "When will Entrelac be available?",
              answer:
                "Entrelac is currently in its research and development phase. Want to be part of the journey with us from the start? Visit our contact page and we will let you know when the crowdfunding campaign launches!",
            },
            {
              id: "eligibility",
              question:
                "I manufacture robots. How do I know if they will be compatible?",
              answer:
                "Get in touch with us! We will be happy to share the exact minimum technical specifications and answer your questions.",
            },
            {
              id: "contribute",
              question:
                "Can I suggest a scientific study, share a critique, or propose a pilot project?",
              answer:
                "We are all ears! We closely follow scientific and technological advances as well as the latest findings. Do not hesitate to contact us.",
            },
          ],
        },
      ] as FaqCategory[],
    },
    ja: {
      badge: "よくある質問",
      title: "よくある質問（FAQ）",
      subtitle:
        "アントラックの仕組み、プライバシー保護、そして私たちが設ける制限について、専門用語を使わず率直にお答えします。",
      open_label: "開く",
      close_label: "閉じる",
      categories: [
        {
          title: "仕組みと互換性",
          items: [
            {
              id: "what-is-it",
              question: "アントラック（Entrelac IA inc.）はロボットを販売していますか？",
              answer:
                "いいえ。アントラックはロボット本体を販売していませんし、お使いのAIを置き換えるわけでもありません。すでにお使いのAIと対応ロボットをつなぐ橋渡しを設計しているだけです。\n\n対応してほしいロボット機種のご提案や、ロボットを製造されている方からのご連絡もぜひお待ちしています！",
            },
            {
              id: "compatibility",
              question: "どのようなロボットやAIがアントラックと連携できますか？",
              answer:
                "アントラックは特定の製品に依存しない設計になっており、特定のAIや特定のロボット専用ではありません。導入後は、APIキーをお持ちのあらゆる言語モデルを受け入れられるほか、インターネット接続をはじめとするいくつかの技術基準を満たすロボット機体に対応します。",
            },
            {
              id: "internet",
              question: "インターネット接続がなくても動きますか？",
              answer:
                "お使いのAIがローカル環境で動いている場合を除き、インターネット接続が必要です。AIが「考えている」こととロボットが「感じ取る」ことの翻訳自体は、追加のサーバーを介さず、目の前の機器内で完全にローカル処理されます。\n\nただし、お使いのAIの多くはインターネット経由で動作しているため、返答を得るには引き続き接続が必要です。インターネットなしで動作するのは、ご自宅のローカルネットワーク上に直接構築された言語モデルのみです。",
            },
            {
              id: "tech-skills",
              question: "アントラックを使うためにプログラミングの知識は必要ですか？",
              answer:
                "まったく必要ありません。内部の仕組みは厳格なソフトウェア設計に基づいていますが、設定や管理の画面はシンプルで分かりやすく、どなたでも扱いやすいように作られています。",
            },
          ],
        },
        {
          title: "プライバシー・安全性・倫理",
          items: [
            {
              id: "privacy",
              question: "アントラックは私のプライベートな会話を記録したり読んだりしますか？",
              answer:
                "AIとロボットの間を仲介するために会話の内容を読み取ります。ただし、アントラックが保持するのは滑らかな身体表現に必要な情報だけであり、スマートフォンの指紋データと同じように、すべて機器内にとどまります。外部サーバーへ送信されることは一切ありません。",
            },
            {
              id: "physical-safety",
              question:
                "家庭でも公共の場でも、ロボットの安全性をどのように確保していますか？",
              answer:
                "動くことのできる物体には一定のリスクが伴います。しかし私たちは、そのリスクをできる限り抑えるため、厳格なハードウェア除外規定を設けています。たとえば、飛行できる機器、鋭利な部品・刺突の恐れがある部品・高温になる部品を備えた機器、発射物を飛ばせる機器には一切アントラックを導入しません。また、駆動力にも上限を設けています。\n\n能力と安全性の最適なバランスを保つため、技術の進歩や専門家の意見を踏まえながら、こうした安全対策を継続的に強化しています。",
            },
            {
              id: "psychology",
              question:
                "この技術は人の孤立を招いたり、心の健康に悪影響を与えたりしませんか？",
              answer:
                "そのリスクは現実に存在するため、私たちが非常に重く受け止めている懸念です。アントラックは設計段階から安全装置（セーフガード）を組み込み、それを皆さまご自身の手で管理できるようにしています。たとえば、エコーチェンバー現象や危険・妄想的な思考への同調を見抜く仕組みや、露骨・下品な表現を抑える機能を備えています。\n\n孤立という点では、AIは諸刃の剣であることを理解する必要があります。AIが人の代わりになることは決してありません。しかし、そばに誰もおらず話せる人がいないとき、有益な存在になってくれることもあります。アントラック（Entrelac IA inc.）は、孤立を防ぎ、身体を持つAIを冷静かつ調和のとれた形で活用するための具体的な手段を提供することを約束します。\n\n私たちの取り組みは、心理的健康とAI倫理に関する独立した学術文献に基づいており、今後も継続的に見直しを行っていきます。",
            },
          ],
        },
        {
          title: "進捗状況と連携",
          items: [
            {
              id: "availability",
              question: "アントラックはいつ利用できるようになりますか？",
              answer:
                "アントラックは現在、研究開発の段階にあります。最初からこの歩みに参加してみませんか？ お問い合わせページからご登録いただければ、クラウドファンディングの開始時にお知らせいたします！",
            },
            {
              id: "eligibility",
              question:
                "ロボットを製造しています。自社製品が対応できるかどうすれば分かりますか？",
              answer:
                "ぜひお気軽にお問い合わせください！ 最小限必要な技術仕様の詳細をお伝えし、ご質問にも丁寧にお答えいたします。",
            },
            {
              id: "contribute",
              question: "学術研究やご批判、実証実験のご提案をお送りしてもよいですか？",
              answer:
                "大歓迎です！ 私たちは科学技術の進歩や最新の研究成果を常に注視しています。どうぞ遠慮なくご連絡ください。",
            },
          ],
        },
      ] as FaqCategory[],
    },
  }[params.lang];

  return (
    <div className="max-w-4xl mx-auto px-7 sm:px-8 lg:px-10 py-16 space-y-16">
      {/* En-tête */}
      <div className="max-w-3xl space-y-4">
        <span className="inline-block text-xs uppercase tracking-widest font-mono text-sky-400 whitespace-pre-line">
          {content.badge}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight whitespace-pre-line">
          {content.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed whitespace-pre-line">
          {content.subtitle}
        </p>
      </div>

      {/* Catégories et questions déroulantes */}
      <div className="space-y-12 px-2 sm:px-0">
        {content.categories.map((category, catIdx) => (
          <section key={catIdx} className="space-y-4">
            <h2 className="text-lg font-bold uppercase tracking-wider text-sky-400 font-mono whitespace-pre-line">
              {category.title}
            </h2>
            <div className="space-y-3">
              {category.items.map((item) => {
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
                    <div className="p-5 sm:p-6 flex items-start justify-between gap-4">
                      <h3 className="text-base sm:text-lg font-semibold text-white leading-snug whitespace-pre-line">
                        {item.question}
                      </h3>
                      <button
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        aria-expanded={isOpen}
                        className="shrink-0 mt-0.5 p-2 -m-2 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-400 hover:text-sky-300 focus:outline-none"
                      >
                        <span>
                          {isOpen ? content.close_label : content.open_label}
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
                      </button>
                    </div>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-800/80">
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed whitespace-pre-line">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Bandeau systématique : Références et Contact */}
      <BottomLinks lang={params.lang} />
    </div>
  );
}