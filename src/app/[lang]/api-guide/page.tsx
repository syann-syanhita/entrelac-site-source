import React from "react";
import Link from "next/link";
import type { Locale } from "@/i18n";
import { getLocalizedPath } from "@/lib/routes";
import BottomLinks from "@/components/BottomLinks";

export default async function ApiGuidePage({
  params,
}: {
  params: { lang: Locale };
}) {
  const content = {
    fr: {
      badge: "Guide simple",
      title: "Qu'est-ce qu'une API ?",
      subtitle:
        "Pas besoin de savoir programmer. Voici comment savoir en deux minutes si votre intelligence artificielle préférée pourra se connecter à un robot.",
      back_label: "Retour à « Comment ça marche ? »",
      analogy_title: "Voyez l'API comme une prise électrique dans le mur",
      analogy_p1:
        "Quand vous branchez une lampe dans une prise murale, vous n'avez pas besoin de comprendre comment l'électricité circule dans les murs. Il suffit que la fiche corresponde à la prise.",
      analogy_p2:
        "Une API (interface de programmation), c'est exactement la même chose pour deux logiciels : c'est une petite porte d'entrée officielle qui leur permet d'échanger des messages en toute sécurité.",
      analogy_p3:
        "Si votre IA préférée possède une API, Entrelac peut s'y brancher pour traduire ses réponses en gestes sur votre robot.",
      check_title: "Comment savoir si mon IA préférée est compatible ?",
      check_steps: [
        {
          num: "1",
          title: "Cherchez les lettres « API » dans vos paramètres",
          desc: "Ouvrez le compte ou le site Web de l'IA que vous utilisez déjà. Regardez s'il existe une section nommée « API », « Accès API » ou « Clé API ».",
        },
        {
          num: "2",
          title: "Faites une recherche rapide en ligne",
          desc: "Tapez simplement le nom de votre IA suivi des lettres « API » dans votre moteur de recherche habituel. Si le service propose un accès ouvert au public, c'est très bon signe.",
        },
        {
          num: "3",
          title: "Vous utilisez une IA sur votre propre ordinateur ?",
          desc: "Si votre IA fonctionne déjà directement sur votre ordinateur sans passer par Internet, la grande majorité de ces logiciels disposent déjà d'une porte d'entrée locale compatible.",
        },
      ],
      key_title: "Et c'est quoi une « clé API » ?",
      key_p1:
        "C'est tout simplement une clé numérique personnelle, un peu comme la clé de votre maison. Elle sert à confirmer à votre service d'IA que c'est bien vous qui lui demandez une réponse.",
      key_p2:
        "Avec Entrelac, cette clé reste enregistrée localement sur votre propre appareil. Nous ne la collectons jamais et nous ne lisons jamais vos conversations.",
      no_api_title: "Et si mon IA préférée n'a pas d'API ?",
      no_api_p1:
        "Certaines applications gardent encore toutes leurs fonctions enfermées dans leur propre écran et n'offrent pas de porte vers l'extérieur pour le moment.",
      no_api_p2:
        "Dans ce cas, Entrelac ne peut pas s'y connecter sans l'accord technique de ce service. Vous pouvez toutefois écrire aux créateur·ices de votre IA pour leur demander d'ouvrir un accès API — et entre-temps, Entrelac fonctionne avec n'importe quelle autre IA qui en propose un.",
    },
    en: {
      badge: "Plain-Language Guide",
      title: "What is an API?",
      subtitle:
        "No coding required. Here is how to check in two minutes whether your favourite artificial intelligence will be able to connect to a robot.",
      back_label: "Back to “How It Works”",
      analogy_title: "Think of an API like a wall outlet",
      analogy_p1:
        "When you plug a lamp into a wall outlet, you do not need to understand the wiring behind the drywall. As long as the plug fits the socket, it works.",
      analogy_p2:
        "An API (Application Programming Interface) does the exact same job for software: it is an official, standard doorway that lets two programmes exchange messages safely.",
      analogy_p3:
        "If your favourite AI offers an API, Entrelac can plug into it and turn its replies into physical gestures on your robot.",
      check_title: "How do I know if my favourite AI is compatible?",
      check_steps: [
        {
          num: "1",
          title: "Look for the letters “API” in your settings",
          desc: "Open the account settings or website of the AI you already use. Check whether there is a section called “API”, “API Access”, or “API Key”.",
        },
        {
          num: "2",
          title: "Run a quick web search",
          desc: "Type the name of your AI followed by the word “API” into your usual search engine. If the service offers public API access, that is a very good sign.",
        },
        {
          num: "3",
          title: "Running an AI on your own computer?",
          desc: "If your AI already runs directly on your own computer without the Internet, most of those programmes already include a compatible local doorway.",
        },
      ],
      key_title: "What is an “API key”?",
      key_p1:
        "It is simply a personal digital key, much like your house key. It proves to your AI service that it is really you asking for a reply.",
      key_p2:
        "With Entrelac, that key stays stored locally on your own device. We never collect it, and we never read your conversations.",
      no_api_title: "What if my favourite AI does not have an API?",
      no_api_p1:
        "Some apps still keep everything locked inside their own screen and do not offer an outside doorway yet.",
      no_api_p2:
        "In that case, Entrelac cannot connect to it unless that service opens up technical access. You can always ask the makers of your AI to offer an API—and in the meantime, Entrelac works with any AI that already provides one.",
    },
    ja: {
      badge: "やさしいガイド",
      title: "API（エーピーアイ）とは？",
      subtitle:
        "プログラミングの知識はいりません。お気に入りのAIがロボットとつながるかどうか、2分で確認できるガイドです。",
      back_label: "「しくみ」に戻る",
      analogy_title: "壁のコンセントのようなものです",
      analogy_p1:
        "電気スタンドをコンセントに差し込むとき、壁の中の配線を知らなくても使えます。プラグの形が合えば、それだけで電気が届きます。",
      analogy_p2:
        "APIは、ソフトどうしをつなぐための「決まった形の差し込み口」です。二つのソフトが安全に言葉をやり取りするための公式な入り口の役目をします。",
      analogy_p3:
        "お気に入りのAIにAPIがあれば、アントラックはそこにつながり、AIの返事をロボットの動きに変えることができます。",
      check_title: "自分のAIが使えるか確認する3つの方法",
      check_steps: [
        {
          num: "1",
          title: "設定画面で「API」という言葉を探す",
          desc: "いつも使っているAIの設定画面や公式サイトを開き、「API」「API連携」「APIキー」といった項目があるか見てみましょう。",
        },
        {
          num: "2",
          title: "インターネットでかんたんに検索する",
          desc: "検索エンジンで、お使いのAIの名前のあとに「API」と続けて検索してみてください。一般向けのAPIが用意されていれば、つながる可能性が高いです。",
        },
        {
          num: "3",
          title: "ご自宅のパソコンの中で動くAIを使っている場合",
          desc: "インターネットを使わず自分のパソコン上で動かしているAIの多くは、すでにローカル環境でつながる差し込み口を備えています。",
        },
      ],
      key_title: "「APIキー」とは何ですか？",
      key_p1:
        "家のカギと同じような、あなた専用の合い言葉です。「これは本人が使っていますよ」とAIサービスに伝えるために使います。",
      key_p2:
        "アントラックでは、このキーはご自身の機器の中にだけ保存されます。私たちが集めたり、会話の中身を読んだりすることは一切ありません。",
      no_api_title: "もしお気に入りのAIにAPIがなかったら？",
      no_api_p1:
        "一部のアプリは、まだ画面の中だけで完結する仕組みになっており、外とつながる入り口を用意していない場合があります。",
      no_api_p2:
        "その場合、そのサービス側が入り口を開放するまでは連携することができません。ぜひお使いのAIの提供元にAPI対応を要望してみてください。その間も、APIを用意している他のAIであればアントラックとつないで使えます。",
    },
  }[params.lang];

  return (
    <div className="max-w-5xl mx-auto px-7 sm:px-8 lg:px-10 py-16 space-y-16">
      {/* Lien de retour discret */}
      <div>
        <Link
          href={getLocalizedPath(params.lang, "end-users")}
          className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition font-medium"
        >
          <span aria-hidden="true">←</span>
          <span>{content.back_label}</span>
        </Link>
      </div>

      {/* En-tête */}
      <div className="max-w-3xl space-y-4">
        <span className="inline-block text-xs uppercase tracking-widest font-mono text-sky-400">
          {content.badge}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          {content.title}
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed whitespace-pre-line">
          {content.subtitle}
        </p>
      </div>

      {/* Analogie de la prise électrique */}
      <section className="rounded-2xl border border-sky-800/60 bg-slate-900/60 p-7 sm:p-10 space-y-4">
        <h2 className="text-2xl font-bold text-white">
          {content.analogy_title}
        </h2>
        <div className="space-y-3 text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl">
          <p>{content.analogy_p1}</p>
          <p>{content.analogy_p2}</p>
          <p className="text-sky-300 font-medium pt-1">{content.analogy_p3}</p>
        </div>
      </section>

      {/* Comment vérifier son IA */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">{content.check_title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.check_steps.map((step) => (
            <div
              key={step.num}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7 space-y-4"
            >
              <div className="w-10 h-10 rounded-full bg-sky-600/20 border border-sky-500/50 text-sky-300 font-bold text-lg flex items-center justify-center">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="text-base text-slate-300 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Clé API et cas sans API */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 space-y-3">
          <h2 className="text-xl font-bold text-white">{content.key_title}</h2>
          <p className="text-base text-slate-300 leading-relaxed">
            {content.key_p1}
          </p>
          <p className="text-base text-sky-300 leading-relaxed">
            {content.key_p2}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 space-y-3">
          <h2 className="text-xl font-bold text-white">
            {content.no_api_title}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            {content.no_api_p1}
          </p>
          <p className="text-base text-slate-300 leading-relaxed">
            {content.no_api_p2}
          </p>
        </div>
      </section>

      {/* Bandeau systématique : FAQ, Références et Contact */}
      <BottomLinks lang={params.lang} />
    </div>
  );
}