import React from "react";
import type { Locale } from "@/i18n";
import BottomLinks from "@/components/BottomLinks";

interface ResourceItem {
  name: string;
  org: string;
  description: string;
  url?: string;
}

interface ResourceCategory {
  title: string;
  items: ResourceItem[];
}

export default async function ResearchPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const content = {
    fr: {
      badge: "Références et expertises",
      title: "Ressources indépendantes et appuis scientifiques",
      subtitle:
        "Une sélection d'instituts de recherche, d'organismes publics et de travaux universitaires qui éclairent les enjeux éthiques, psychologiques et techniques de l'IA et de la robotique sociale.",
      visit_label: "Consulter le site",
      reference_only: "Référence à consulter",
      note: "Conformément à notre politique éditoriale, cette page recense uniquement des universités, des centres de recherche, des organismes publics et des OBNL.",
      categories: [
        {
          title: "Recherche en IA, gouvernance et sécurité",
          items: [
            {
              name: "Mila — Institut québécois d'intelligence artificielle",
              org: "Institut de recherche universitaire (Québec)",
              description:
                "Centre de recherche reconnu mondialement en apprentissage profond, gouvernance de l'IA et développement responsable.",
              url: "https://mila.quebec/",
            },
            {
              name: "OBVIA — Observatoire international sur les impacts sociétaux de l'IA et du numérique",
              org: "Réseau interuniversitaire (Québec)",
              description:
                "Réseau ouvert de recherche étudiant les répercussions sociales, éthiques et juridiques de l'intelligence artificielle.",
              url: "https://www.obvia.ca/",
            },
            {
              name: "LoiZéro",
              org: "Organisme sans but lucratif",
              description:
                "Travaux consacrés à la sécurité de l'intelligence artificielle et à la conception de systèmes non agentiques fiables.",
              url: "", // Collez ici l'adresse officielle vérifiée
            },
            {
              name: "Cadre de gestion des risques liés à l'IA (AI RMF)",
              org: "NIST — National Institute of Standards and Technology",
              description:
                "Référentiel public international pour repérer, évaluer et atténuer les risques liés aux systèmes d'intelligence artificielle.",
              url: "https://www.nist.gov/itl/ai-risk-management-framework",
            },
          ],
        },
        {
          title: "Santé psychologique et relations humain-IA",
          items: [
            {
              name: "Travaux cliniques sur l'IA conversationnelle et la psychose",
              org: "Drs Alexandre Hudon et Emmanuel Stip (Université de Montréal)",
              description:
                "Recherches en psychiatrie portant sur l'interaction entre les personnes vulnérables et les agents conversationnels.",
              url: "", // Collez ici le lien vers l'article ou la page universitaire de votre choix
            },
            {
              name: "Agents conversationnels et vulnérabilités délirantes",
              org: "Dr Søren Dinesen Østergaard (Université d'Aarhus)",
              description:
                "Analyses publiées dans la littérature psychiatrique sur les risques de validation algorithmique d'idées délirantes.",
              url: "", // Collez ici le lien PubMed ou universitaire de votre choix
            },
            {
              name: "PubMed — Bibliothèque médicale nationale",
              org: "Archive publique de littérature biomédicale et clinique",
              description:
                "Moteur de recherche public donnant accès aux publications évaluées par les pairs en santé mentale et en interaction humain-robot.",
              url: "https://pubmed.ncbi.nlm.nih.gov/",
            },
          ],
        },
        {
          title: "Vie privée et cadres éthiques",
          items: [
            {
              name: "Déclaration de Montréal pour un développement responsable de l'IA",
              org: "Initiative universitaire et citoyenne",
              description:
                "Cadre éthique collectif formulant des principes de bien-être, de respect de l'autonomie et de protection de la vie privée.",
              url: "https://declarationmontreal-iaresponsable.com/",
            },
            {
              name: "Déclaration pour une IA pro-humaine",
              org: "Initiative indépendante",
              description:
                "Principes directeurs appelant à un développement de l'intelligence artificielle qui préserve la dignité et le contrôle humains.",
              url: "", // Collez ici l'adresse officielle vérifiée
            },
          ],
        },
      ] as ResourceCategory[],
    },
    en: {
      badge: "References & Expertise",
      title: "Independent Resources and Scientific Grounding",
      subtitle:
        "A curated directory of research institutes, public bodies, and academic work shedding light on the ethical, psychological, and technical dimensions of AI and social robotics.",
      visit_label: "Visit website",
      reference_only: "Reference entry",
      note: "In keeping with our editorial policy, this page lists only universities, research centres, public institutions, and non-profit organizations.",
      categories: [
        {
          title: "AI Research, Governance & Safety",
          items: [
            {
              name: "Mila — Quebec Artificial Intelligence Institute",
              org: "University-affiliated research institute (Quebec)",
              description:
                "Internationally recognized research centre in deep learning, AI governance, and responsible development.",
              url: "https://mila.quebec/en/",
            },
            {
              name: "OBVIA — International Observatory on the Societal Impacts of AI and Digital Technology",
              org: "Inter-university research network (Quebec)",
              description:
                "Open research network examining the social, ethical, and legal impacts of artificial intelligence.",
              url: "https://www.obvia.ca/en",
            },
            {
              name: "LawZero",
              org: "Non-profit organization",
              description:
                "Research dedicated to AI safety and the design of trustworthy, non-agentic systems.",
              url: "", // Paste the verified official URL here
            },
            {
              name: "AI Risk Management Framework (AI RMF)",
              org: "NIST — National Institute of Standards and Technology",
              description:
                "Public international framework for identifying, assessing, and mitigating risks associated with AI systems.",
              url: "https://www.nist.gov/itl/ai-risk-management-framework",
            },
          ],
        },
        {
          title: "Psychological Health & Human-AI Relations",
          items: [
            {
              name: "Clinical Research on Conversational AI and Psychosis",
              org: "Drs. Alexandre Hudon & Emmanuel Stip (Université de Montréal)",
              description:
                "Psychiatric research examining interactions between vulnerable individuals and conversational AI agents.",
              url: "", // Paste the verified paper or university page URL here
            },
            {
              name: "Conversational Agents and Delusional Vulnerabilities",
              org: "Dr. Søren Dinesen Østergaard (Aarhus University)",
              description:
                "Analyses published in the psychiatric literature on the risks of algorithmic validation of delusional beliefs.",
              url: "", // Paste the verified PubMed or university URL here
            },
            {
              name: "PubMed — National Library of Medicine",
              org: "Public biomedical and clinical research archive",
              description:
                "Public search engine providing access to peer-reviewed publications in mental health and human-robot interaction.",
              url: "https://pubmed.ncbi.nlm.nih.gov/",
            },
          ],
        },
        {
          title: "Privacy & Ethical Frameworks",
          items: [
            {
              name: "Montreal Declaration for a Responsible Development of Artificial Intelligence",
              org: "Academic and civic initiative",
              description:
                "Collective ethical framework setting out principles for well-being, respect for autonomy, and privacy protection.",
              url: "https://declarationmontreal-iaresponsable.com/",
            },
            {
              name: "Pro-Human AI Declaration",
              org: "Independent initiative",
              description:
                "Guiding principles calling for AI development that preserves human dignity and control.",
              url: "", // Paste the verified official URL here
            },
          ],
        },
      ] as ResourceCategory[],
    },
    ja: {
      badge: "参考資料・専門機関",
      title: "独立した研究機関および科学的知見のご紹介",
      subtitle:
        "AIとソーシャルロボティクスに関わる倫理的・心理的・技術的課題を照らし出す、研究機関、公的機関、大学の研究成果を厳選してご紹介しています。",
      visit_label: "公式サイトを見る",
      reference_only: "参照文献・機関",
      note: "当社の編集方針に基づき、本ページでは大学、研究機関、公的機関、および非営利団体のみを掲載しております。",
      categories: [
        {
          title: "AI研究・ガバナンス・安全性",
          items: [
            {
              name: "Mila（ケベック人工知能研究所）",
              org: "大学連携研究機関（ケベック州）",
              description:
                "深層学習、AIガバナンス、責任ある技術開発の分野で国際的に知られる研究拠点です。",
              url: "https://mila.quebec/en/",
            },
            {
              name: "OBVIA（AIとデジタル技術の社会的影響に関する国際観測所）",
              org: "大学間研究ネットワーク（ケベック州）",
              description:
                "人工知能がもたらす社会的・倫理的・法的な影響を多角的に研究する開かれた学術ネットワークです。",
              url: "https://www.obvia.ca/en",
            },
            {
              name: "LoiZéro（LawZero）",
              org: "非営利団体",
              description:
                "AIの安全性研究と、信頼できる非自律型システムの設計に取り組んでいます。",
              url: "", // 確認済みの公式URLをここに入力してください
            },
            {
              name: "AIリスク管理フレームワーク（AI RMF）",
              org: "NIST（米国国立標準技術研究所）",
              description:
                "AIシステムに伴うリスクを特定・評価・軽減するための国際的な公的指針です。",
              url: "https://www.nist.gov/itl/ai-risk-management-framework",
            },
          ],
        },
        {
          title: "心理的健康と人・AI関係の研究",
          items: [
            {
              name: "対話型AIと精神病に関する臨床研究",
              org: "アレクサンドル・ユドン博士・エマニュエル・スティップ博士（モントリオール大学）",
              description:
                "脆弱性を抱える人々と対話型AIエージェントの相互作用を検証する精神医学分野の研究です。",
              url: "", // 確認済みの論文または大学ページのURLをここに入力してください
            },
            {
              name: "対話型エージェントと妄想的脆弱性",
              org: "ソーレン・ディネセン・オースターガード博士（オーフス大学）",
              description:
                "アルゴリズムによる妄想的思考への同調がもたらすリスクを論じた、精神医学文献における分析です。",
              url: "", // 確認済みのPubMedまたは大学ページのURLをここに入力してください
            },
            {
              name: "PubMed（米国国立医学図書館）",
              org: "公的医学・臨床研究アーカイブ",
              description:
                "メンタルヘルスや人とロボットの相互作用に関する査読付き論文を検索できる公的検索エンジンです。",
              url: "https://pubmed.ncbi.nlm.nih.gov/",
            },
          ],
        },
        {
          title: "プライバシー保護と倫理指針",
          items: [
            {
              name: "責任あるAI開発のためのモントリオール宣言",
              org: "学術・市民共同イニシアチブ",
              description:
                "人間の幸福、自律性の尊重、プライバシー保護を柱とする共同の倫理指針です。",
              url: "https://declarationmontreal-iaresponsable.com/",
            },
            {
              name: "人間中心のAI宣言（Pro-Human AI Declaration）",
              org: "独立した取り組み",
              description:
                "人間の尊厳と制御を守る人工知能の開発を求める指針です。",
              url: "", // 確認済みの公式URLをここに入力してください
            },
          ],
        },
      ] as ResourceCategory[],
    },
  }[params.lang];

  return (
    <div className="max-w-5xl mx-auto px-7 sm:px-8 lg:px-10 py-16 space-y-16">
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
        <p className="text-xs sm:text-sm text-slate-400 pt-2 border-t border-slate-800/80 whitespace-pre-line">
          {content.note}
        </p>
      </div>

      {/* Catégories de références */}
      <div className="space-y-12">
        {content.categories.map((category, catIdx) => (
          <section key={catIdx} className="space-y-5">
            <h2 className="text-lg font-bold uppercase tracking-wider text-sky-400 font-mono whitespace-pre-line">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {category.items.map((item, idx) => (
                <article
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col justify-between gap-4 hover:border-slate-700 transition"
                >
                  <div className="space-y-2">
                    <p className="text-xs font-mono text-sky-300/90 whitespace-pre-line">
                      {item.org}
                    </p>
                    <h3 className="text-lg font-bold text-white leading-snug whitespace-pre-line">
                      {item.name}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>

                  {item.url ? (
                    <div className="pt-3 border-t border-slate-800/80">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 hover:text-sky-300 transition"
                      >
                        <span>{content.visit_label}</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  ) : (
                    <div className="pt-3 border-t border-slate-800/80">
                      <span className="text-xs font-mono text-slate-500">
                        {content.reference_only}
                      </span>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Bandeau systématique : FAQ et Contact */}
      <BottomLinks lang={params.lang} />
    </div>
  );
}