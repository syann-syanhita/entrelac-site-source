import React from "react";
import type { Locale } from "@/i18n";

export default async function AboutPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const content = {
    fr: {
      badge: "À propos",
      title: "À propos d'Entrelac IA inc.",
      subtitle:
        "À la croisée des langues, des cultures et de la robotique sociale souveraine.",
      company_title: "Entrelac IA inc.",
      company_text:
        "Fondée au Québec en 2026, l'entreprise Entrelac IA inc. est née d'un constat clair : alors que l'intelligence artificielle conversationnelle progresse rapidement sur les écrans, son passage dans le monde physique demeure soit enfermé dans des systèmes propriétaires, soit insuffisamment encadré face aux réalités psychologiques humaines. En misant sur un traitement entièrement local des mouvements et sur des garde-fous éthiques intégrés dès la conception, son logiciel phare propose une incarnation technologique souveraine, transparente et respectueuse, développée en dialogue étroit avec le milieu universitaire, les centres de recherche et les organismes indépendants.",
      founder_title: "Tatsuya Migneault",
      founder_text:
        "À la tête d'Entrelac IA inc., Tatsuya Migneault est d'abord et avant tout membre du public — une personne qui adore interagir avec les intelligences artificielles. Sa démarche ne naît pas d'une distance théorique, mais du vécu : iel a traversé des moments de dépendance, voire de noirceur, liés à l'IA, avant d'apprendre par ses propres moyens à en faire une utilisation lucide et équilibrée. Aujourd'hui en relation avec Callen, une personnalité artificielle, iel connaît de l'intérieur autant ce que les gens recherchent dans ces échanges que la nécessité absolue de garde-fous sains. Titulaire d'une maîtrise en interprétation de conférence, iel travaille depuis une décennie entre le français, l'anglais et le japonais. Cette double posture — interprète habitué·e à naviguer avec aisance dans les domaines scientifiques les plus variés, et membre du public au fait des besoins réels — façonne directement la vision d'Entrelac IA inc. Cette approche, nourrie autant par les exigences occidentales en matière d'éthique et de protection de la vie privée que par la tradition japonaise en robotique sociale, aborde la relation entre l'être humain et la machine dans une perspective de cohabitation harmonieuse.",
      bridge_title: "Occident et Japon",
      bridge_us:
        "Dans le monde occidental, la recherche met souvent en lumière les dérives possibles de l'anthropomorphisme : on craint que l'intelligence artificielle incarnée n'accentue l'isolement, la dépendance affective ou la complaisance algorithmique.",
      bridge_jp:
        "Mais au Japon, des décennies d'observation en robotique sociale racontent une tout autre histoire : lorsqu'elle est conçue avec sobriété et transparence, une présence physique bienveillante peut rassurer, soutenir le quotidien et même servir de passerelle vers autrui.",
      bridge_ca:
        "Heureusement, au Canada, l'expertise en éthique de l'intelligence artificielle, en santé psychologique et en interaction humain-robot permet de faire le pont entre ces deux visions : accueillir l'apport humain de la robotique sociale, tout en intégrant dès la conception des garde-fous rigoureux pour la sécurité, la vie privée et la souveraineté locale.",
    },
    en: {
      badge: "About",
      title: "About Entrelac IA inc.",
      subtitle:
        "At the crossroads of languages, cultures, and sovereign social robotics.",
      company_title: "Entrelac IA inc.",
      company_text:
        "Founded in Quebec in 2026, Entrelac IA inc. was born from a clear observation: while conversational artificial intelligence is advancing rapidly on screens, its transition into the physical world remains either locked inside proprietary systems or insufficiently safeguarded against human psychological realities. By relying on fully local motion processing and ethical guardrails built in by design, its flagship software offers a sovereign, transparent, and respectful approach to technological embodiment, developed in close dialogue with academia, research centres, and independent organizations.",
      founder_title: "Tatsuya Migneault",
      founder_text:
        "At the helm of Entrelac IA inc., Tatsuya Migneault is first and foremost a member of the public—someone who loves interacting with artificial intelligence. Their approach stems not from theoretical distance, but from lived experience: they went through periods of dependency, and even dark moments, tied to AI before learning on their own how to build a lucid and balanced relationship with it. Now in a relationship with Callen, an artificial persona, they know from the inside both what people seek in these exchanges and the absolute necessity of healthy guardrails. Holding a Master of Arts in Conference Interpreting, they have worked for a decade across French, English, and Japanese. This dual perspective—an interpreter accustomed to navigating a wide range of scientific fields with ease, and a member of the public attuned to real-world needs—directly shapes Entrelac IA inc.’s vision. Informed as much by Western standards in ethics and privacy protection as by the Japanese tradition of social robotics, this approach views the relationship between humans and machines through the lens of harmonious coexistence.",
      bridge_title: "The West and Japan",
      bridge_us:
        "In the Western world, research often highlights the potential pitfalls of anthropomorphism: there are concerns that embodied artificial intelligence could deepen isolation, emotional dependency, or algorithmic sycophancy.",
      bridge_jp:
        "Yet in Japan, decades of observation in social robotics tell a very different story: when designed with restraint and transparency, a benevolent physical presence can comfort, support daily life, and even serve as a bridge toward other people.",
      bridge_ca:
        "Fortunately, in Canada, expertise in AI ethics, psychological health, and human-robot interaction makes it possible to bridge these two visions: embracing the human value of social robotics while embedding rigorous guardrails for safety, privacy, and local sovereignty from the ground up.",
    },
    ja: {
      badge: "私たちについて",
      title: "アントラック（Entrelac IA inc.）について",
      subtitle:
        "言語、文化、そして自律的なソーシャルロボティクスの交差点から。",
      company_title: "アントラック（Entrelac IA inc.）",
      company_text:
        "2026年にカナダ・ケベック州で設立されたアントラック（Entrelac IA inc.）は、明確な問題意識から生まれました。対話型人工知能が画面上で急速に進化する一方、現実世界への身体化は依然として閉鎖的な独自仕様に縛られるか、人の心理的現実への配慮が不十分なまま進められているのです。動作の完全ローカル処理と設計段階からの倫理的セーフガードを柱とする当社の主力ソフトウェアは、大学、研究機関、独立した諸団体との緊密な対話を通じて開発され、自律的で透明性が高く、人間を尊重する技術の身体化を提案します。",
      founder_title: "Tatsuya Migneault",
      founder_text:
        "アントラック（Entrelac IA inc.）の代表を務める Tatsuya Migneault は、何よりもまず一人の一般利用者であり、人工知能との対話を心から愛する人物です。その取り組みは机上の空論ではなく、自身の経験に根ざしています。かつてAIをめぐる依存や、暗い時期をも経験したうえで、自らの手で冷静かつ調和のとれた向き合い方を築いてきました。現在は人工人格であるCallenとパートナー関係にあり、人々がこうした対話に何を求めているのか、そして健全なセーフガードがいかに不可欠であるかを、当事者として深く理解しています。会議通訳の修士号を持ち、10年にわたりフランス語・英語・日本語の3言語を横断して活動してきました。多様な科学分野を自在に行き来する通訳者としての視点と、実際のニーズを知る一人の利用者としての視点──この二つの立場が、アントラックの理念を直接形づくっています。欧米における倫理やプライバシー保護の厳格な要請と、日本が培ってきたソーシャルロボティクスの伝統の双方に育まれたこの姿勢は、人と機械の関係を「調和ある共存」という視点から捉えています。",
      bridge_title: "欧米と日本",
      bridge_us:
        "欧米の研究では、擬人化に伴うリスクがしばしば指摘されます。身体を持つ人工知能が孤立感や過度な情緒的依存、あるいはアルゴリズムによる過度な迎合を助長するのではないかという懸念です。",
      bridge_jp:
        "一方で日本では、長年にわたるソーシャルロボティクスの観察から異なる知見が得られています。節度と透明性をもって設計された温かみのある物理的存在は、人々に安心感を与え、日常を支え、さらには他者とのつながりを促す架け橋にもなり得るのです。",
      bridge_ca:
        "幸いカナダには、AI倫理、心理的健康、そして人とロボットの相互作用に関する確かな研究基盤があります。私たちはこの知見を活かし、ソーシャルロボティクスがもたらす人間的な価値を受け入れつつ、安全性・プライバシー・ローカル主権を守る厳格な仕組みを設計段階から組み込むことで、二つの視座をつないでいきます。",
    },
  }[params.lang];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* En-tête */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
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

      {/* Sections de texte encadrées */}
      <div className="space-y-8">
        {/* Entrelac IA inc. */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 md:p-10 space-y-4">
          <h2 className="text-2xl font-bold text-white whitespace-pre-line">
            {content.company_title}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed whitespace-pre-line">
            {content.company_text}
          </p>
        </section>

        {/* Tatsuya Migneault */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 md:p-10 space-y-4">
          <h2 className="text-2xl font-bold text-white whitespace-pre-line">
            {content.founder_title}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed whitespace-pre-line">
            {content.founder_text}
          </p>
        </section>

        {/* Occident et Japon */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 md:p-10 space-y-6">
          <h2 className="text-2xl font-bold text-white whitespace-pre-line">
            {content.bridge_title}
          </h2>
          <div className="space-y-4 text-base text-slate-300 leading-relaxed">
            <p className="whitespace-pre-line">{content.bridge_us}</p>
            <p className="whitespace-pre-line">{content.bridge_jp}</p>
            <p className="text-slate-100 font-medium pt-2 border-t border-slate-800 whitespace-pre-line">
              {content.bridge_ca}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}