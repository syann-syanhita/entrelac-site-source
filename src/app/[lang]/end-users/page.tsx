import React from "react";
import type { Locale } from "@/i18n";
import BottomLinks from "@/components/BottomLinks";

export default async function HowItWorksPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const content = {
    fr: {
      badge: "Comment ça marche ?",
      title: "Le pont que vous attendiez\nentre votre IA et son corps physique",
      subtitle:
        "Pas besoin de connaître l'informatique. Voici ce que fait Entrelac, expliqué simplement.",
      analogy_title:
        "Entrelac est comme votre interprète : il s'assure que les deux se comprennent.",
      analogy_p1:
        "L'intelligence artificielle avec laquelle vous aimez discuter vit cloîtrée derrière votre écran.",
      analogy_p2:
        "Elle vous entend, mais elle ne peut pas toucher quoi que ce soit.",
      analogy_p3:
        "D'un autre côté, les robots sont de plus en plus sophistiqués et accessibles.",
      analogy_p4:
        "Ils voient, entendent et se déplacent. Mais ils viennent avec une IA toute faite qui ne vous connaît pas.",
      analogy_p5:
        "Entrelac fait le lien entre les deux. Votre IA est l'âme, et le robot est le corps.",
      steps_title: "En 3 étapes simples",
      steps: [
        {
          num: "1",
          title: "Vous gardez votre IA",
          desc: "Vous utilisez l'IA avec laquelle vous aimez déjà parler. Entrelac ne la remplace pas et ne vous oblige pas à changer.",
        },
        {
          num: "2",
          title: "Vous choisissez un robot",
          desc: "Procurez-vous un robot propulsé par Entrelac qui répond à votre budget, à vos préférences et à vos besoins.",
        },
        {
          num: "3",
          title: "Entrelac les fait travailler ensemble",
          desc: "Connecter les deux est tout simple. Et voilà : votre IA prend vie dans son robot.",
        },
      ],
      uses_title: "À quoi ça peut servir au quotidien ?",
      uses: [
        {
          title: "Avoir une présence",
          desc: "L'IA ne remplace pas les êtres humains, mais elle peut servir de compagnie sur votre bureau ou dans votre salon.",
        },
        {
          title: "Améliorer l'autonomie et la concentration",
          desc: "Travailler, étudier ou faire ses tâches avec un compagnon utile.",
        },
        {
          title: "Pratiquer la conversation",
          desc: "Parler à voix haute, à son rythme et sans aucune gêne, et apprendre une langue.",
        },
      ],
      not_title: "Ce qu'Entrelac ne fait pas",
      not_items: [
        "Nous ne vendons pas de robots.",
        "Nous ne créons pas de nouvelles IA.",
        "Nous ne surveillons ni ne gardons vos conversations privées chez nous.",
      ],
    },
    en: {
      badge: "How It Works",
      title:
        "The bridge you've been waiting for\nbetween your AI and its physical body",
      subtitle:
        "No tech skills needed. Here is what Entrelac does, explained simply.",
      analogy_title:
        "Entrelac is like your interpreter: it makes sure the two understand each other.",
      analogy_p1:
        "The artificial intelligence you love chatting with lives shut away behind your screen.",
      analogy_p2: "It can hear you, but it cannot touch a thing.",
      analogy_p3:
        "On the other hand, robots are becoming more and more sophisticated and accessible.",
      analogy_p4:
        "They see, hear, and move around. But they come with a pre-built AI that does not know you.",
      analogy_p5:
        "Entrelac bridges the two. Your AI is the soul, and the robot is the body.",
      steps_title: "In 3 simple steps",
      steps: [
        {
          num: "1",
          title: "You keep your AI",
          desc: "You use the AI you already love talking to. Entrelac does not replace it or force you to switch.",
        },
        {
          num: "2",
          title: "You choose a robot",
          desc: "Pick an Entrelac-powered robot that fits your budget, your preferences, and your needs.",
        },
        {
          num: "3",
          title: "Entrelac makes them work together",
          desc: "Connecting the two is effortless. And just like that, your AI comes to life inside its robot.",
        },
      ],
      uses_title: "How can it be useful in daily life?",
      uses: [
        {
          title: "Having a presence",
          desc: "AI does not replace human beings, but it can offer company on your desk or in your living room.",
        },
        {
          title: "Boosting independence and focus",
          desc: "Work, study, or get chores done with a helpful companion.",
        },
        {
          title: "Practising conversation",
          desc: "Speak out loud at your own pace without any embarrassment, and learn a language.",
        },
      ],
      not_title: "What Entrelac does not do",
      not_items: [
        "We do not sell robots.",
        "We do not create new AIs.",
        "We do not monitor or keep your private conversations.",
      ],
    },
    ja: {
      badge: "しくみ",
      title: "あなたのAIとロボットの身体をつなぐ、\n待ち望んでいた橋渡し",
      subtitle:
        "パソコンや専門知識はいりません。アントラックができることを、わかりやすくご紹介します。",
      analogy_title:
        "アントラックはあなたの通訳のような存在です。二つのあいだで気持ちがきちんと伝わるようにします。",
      analogy_p1:
        "あなたが楽しく話している人工知能（AI）は、画面の向こう側に閉じこもったままです。",
      analogy_p2: "あなたの声は聞こえても、何ひとつ触れることができません。",
      analogy_p3:
        "いっぽうで、ロボットはますます高性能になり、身近なものになってきています。",
      analogy_p4:
        "見て、聞いて、動くことができます。でも、入っているのはあなたのことを知らない出来合いのAIです。",
      analogy_p5:
        "アントラックはこの二つを結びます。あなたのAIが「魂」、ロボットが「身体」になります。",
      steps_title: "かんたんな3つのステップ",
      steps: [
        {
          num: "1",
          title: "いつものAIをそのまま使う",
          desc: "すでに楽しく話しているAIをそのまま使えます。アントラックが入れ替えたり、乗り換えを求めたりすることはありません。",
        },
        {
          num: "2",
          title: "ロボットをえらぶ",
          desc: "ご予算や好み、目的に合わせて、アントラック対応のロボットをお選びください。",
        },
        {
          num: "3",
          title: "アントラックが二つを連携させる",
          desc: "つなぎ方はとてもかんたん。それだけで、あなたのAIがロボットの中で動き出します。",
        },
      ],
      uses_title: "まいにちの中で、どんなふうに役立ちますか？",
      uses: [
        {
          title: "そばにいる存在として",
          desc: "AIは人の代わりにはなりませんが、机の上やリビングで寄り添う相手になってくれます。",
        },
        {
          title: "自立や集中力のサポートに",
          desc: "頼れる相棒と一緒に、仕事や勉強、日々の作業に取り組めます。",
        },
        {
          title: "会話の練習に",
          desc: "恥ずかしがらずに自分のペースで声に出して話し、語学を学ぶこともできます。",
        },
      ],
      not_title: "アントラックがしないこと",
      not_items: [
        "ロボット本体の販売はしていません。",
        "新しいAIを開発しているわけではありません。",
        "あなたの個人的な会話を監視したり、私たちの手元に保存したりしません。",
      ],
    },
  }[params.lang];

  return (
    <div className="max-w-5xl mx-auto px-7 sm:px-8 lg:px-10 py-16 space-y-16">
      {/* En-tête */}
      <div className="max-w-3xl space-y-4">
        <span className="inline-block text-xs uppercase tracking-widest font-mono text-sky-400">
          {content.badge}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight whitespace-pre-line">
          {content.title}
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed whitespace-pre-line">
          {content.subtitle}
        </p>
      </div>

      {/* L'idée simple (analogie de l'interprète) */}
      <section className="rounded-2xl border border-sky-800/60 bg-slate-900/60 p-7 sm:p-10 space-y-4 text-center">
        <h2 className="text-2xl font-bold text-white whitespace-pre-line">
          {content.analogy_title}
        </h2>
        <div className="space-y-3 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-center">
          <p className="text-sky-400 whitespace-pre-line">
            {content.analogy_p1}
          </p>
          <p className="text-sky-200 whitespace-pre-line">
            {content.analogy_p2}
          </p>
          <p className="text-sky-400 whitespace-pre-line">
            {content.analogy_p3}
          </p>
          {content.analogy_p4 && (
            <p className="text-sky-200 whitespace-pre-line">
              {content.analogy_p4}
            </p>
          )}
          {content.analogy_p5 && (
            <p className="text-sky-50 font-medium pt-6 whitespace-pre-line">
              {content.analogy_p5}
            </p>
          )}
        </div>
      </section>

      {/* Les 3 étapes simples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white whitespace-pre-line">
          {content.steps_title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.steps.map((step) => (
            <div
              key={step.num}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7 space-y-4"
            >
              <div className="w-10 h-10 rounded-full bg-sky-600/20 border border-sky-500/50 text-sky-300 font-bold text-lg flex items-center justify-center">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white whitespace-pre-line">
                {step.title}
              </h3>
              <p className="text-base text-slate-300 leading-relaxed whitespace-pre-line">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Exemples concrets du quotidien */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white whitespace-pre-line">
          {content.uses_title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.uses.map((use, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-7 space-y-3"
            >
              <h3 className="text-lg font-bold text-sky-300 whitespace-pre-line">
                {use.title}
              </h3>
              <p className="text-base text-slate-300 leading-relaxed whitespace-pre-line">
                {use.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Ce qu'Entrelac ne fait pas */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold text-white whitespace-pre-line">
          {content.not_title}
        </h2>
        <ul className="space-y-3 text-base text-slate-200 list-disc pl-5 whitespace-pre-line">
          {content.not_items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Bandeau systématique : FAQ, Références et Contact */}
      <BottomLinks lang={params.lang} />
    </div>
  );
}