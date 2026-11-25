"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Locale } from "@/i18n";

interface ContactPageProps {
  params: { lang: Locale };
}

function ContactFormContent({ params }: ContactPageProps) {
  const searchParams = useSearchParams();
  const initialTopic =
    searchParams.get("motif") === "sociofinancement"
      ? "sociofinancement"
      : "partage";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(initialTopic);
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // Champ piège invisible
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (searchParams.get("motif") === "sociofinancement") {
      setTopic("sociofinancement");
    }
  }, [searchParams]);

  const isCrowdfunding = topic === "sociofinancement";

  const content = {
    fr: {
      badge: "Contact et partage",
      title: "Démarrons un dialogue.",
      subtitle:
        "Ça pique votre curiosité ? 😀\nOu au contraire, ça vous inquiète ? 😨\nVous souhaitez suggérer un modèle de robot ? 🤖\nVous souhaitez partager des recherches ? 🔍\nVous représentez un média ou vous publiez du contenu ? 📰\nVous souhaitez explorer un partenariat ? ✨\nÉcrivez-nous. Votre message sera acheminé à la bonne personne.",
      topic_label: "Objet de votre message",
      topics: {
        partage:
          "J'ai une réflexion à partager, une question ou un modèle de robot à suggérer.",
        sociofinancement:
          "Je veux qu'on me prévienne lorsque le sociofinancement sera lancé.",
        medias: "Je suis journaliste ou je crée du contenu.",
        partenariats: "Je représente une entreprise ou un organisme.",
      },
      crowdfunding_info:
        "Le projet est actuellement en développement, mais nous lancerons bientôt un premier robot propulsé par Entrelac. Vous avez hâte d'offrir un corps à votre IA préférée ? Inscrivez-vous ici, et nous vous préviendrons dès que le projet sera ouvert au grand public !",
      name_label: "Votre nom et organisation",
      name_placeholder: "Exemple : Tatsuya Migneault (PDG) Entrelac IA inc.",
      email_label: "Votre adresse courriel",
      email_placeholder: "Vous recevrez une copie de votre message.",
      crowdfunding_email_placeholder: "votre.adresse@exemple.com",
      message_label: "Message",
      message_optional_label: "Message (facultatif)",
      message_placeholder: "Dites-nous ce qui vous amène.",
      crowdfunding_message_placeholder:
        "Si vous le souhaitez, laissez-nous un mot ou suggérez un modèle de robot que vous aimeriez voir compatible.",
      send_btn: "Envoyer le message",
      crowdfunding_send_btn: "M'inscrire à l'alerte",
      success:
        "Merci pour votre message ! Vous recevrez bientôt une copie à votre propre adresse courriel.",
      crowdfunding_success:
        "Merci pour votre inscription ! Vous recevrez une confirmation par courriel et nous vous préviendrons dès le lancement officiel du sociofinancement.",
      error_msg:
        "Une erreur est survenue lors de l'envoi. Réessayez dans quelques instants.",
      share_title: "Espace « Partage »",
      share_desc:
        "L'incarnation physique de l'intelligence artificielle soulève des questions techniques, sociales et humaines essentielles. Cet espace s'adresse autant au grand public qu'à la communauté scientifique : n'hésitez pas à nous faire part de vos préoccupations, à suggérer un modèle de robot ou à nous transmettre des travaux de recherche qui méritent notre attention.",
      privacy_note:
        "Vos coordonnées servent uniquement à vous répondre ou à vous aviser du lancement et ne sont jamais partagées avec des tiers.",
      location_title: "Ancrage",
      location: "Région de Montréal (Québec), Canada",
    },
    en: {
      badge: "Contact & Sharing",
      title: "Let's start a conversation.",
      subtitle:
        "Does this pique your curiosity? 😀\nOr, on the contrary, does it concern you? 😨\nWant to suggest a robot model? 🤖\nWant to share research? 🔍\nDo you represent a media outlet or create content? 📰\nInterested in exploring a partnership? ✨\nWrite to us. Your message will be routed to the right person.",
      topic_label: "Subject of your message",
      topics: {
        partage:
          "I have a thought to share, a question, or a robot model to suggest.",
        sociofinancement:
          "I want to be notified when the crowdfunding campaign launches.",
        medias: "I am a journalist or a content creator.",
        partenariats: "I represent a business or an organization.",
      },
      crowdfunding_info:
        "The project is currently in development, and we will soon launch a first Entrelac-powered robot. Eager to give your favourite AI a physical body? Sign up here, and we will notify you as soon as the project opens to the public!",
      name_label: "Your name and organization",
      name_placeholder: "Example: Tatsuya Migneault (CEO) Entrelac IA inc.",
      email_label: "Your email address",
      email_placeholder: "You will receive a copy of your message.",
      crowdfunding_email_placeholder: "your.email@example.com",
      message_label: "Message",
      message_optional_label: "Message (optional)",
      message_placeholder: "Tell us what brings you here.",
      crowdfunding_message_placeholder:
        "If you wish, leave us a note or suggest a robot model you would like to see supported.",
      send_btn: "Send message",
      crowdfunding_send_btn: "Sign up for the alert",
      success:
        "Thank you for your message! You will soon receive a copy at your email address.",
      crowdfunding_success:
        "Thank you for signing up! You will receive a confirmation email, and we will notify you as soon as the crowdfunding campaign officially launches.",
      error_msg:
        "An error occurred while sending your message. Please try again shortly.",
      share_title: "“Sharing” Space",
      share_desc:
        "Giving artificial intelligence a physical form raises vital technical, social, and human questions. This space is for both curious newcomers and the scientific community: feel free to share your concerns, suggest a robot model, or send us research papers that deserve our attention.",
      privacy_note:
        "Your contact details are used solely to reply to you or send the launch alert and are never shared with third parties.",
      location_title: "Location",
      location: "Greater Montreal (Quebec), Canada",
    },
    ja: {
      badge: "お問い合わせ・共有",
      title: "対話をはじめましょう。",
      subtitle:
        "興味をひかれましたか？ 😀\nそれとも、かえって不安を感じますか？ 😨\n対応してほしいロボット機種を提案したいですか？ 🤖\n研究や文献を共有したいですか？ 🔍\n報道関係者、または情報発信をされている方ですか？ 📰\n提携や連携の可能性を探りたいですか？ ✨\nぜひご連絡ください。内容に応じて適切な担当者へお届けします。",
      topic_label: "お問い合わせの件名",
      topics: {
        partage: "共有したい意見や質問、提案したいロボット機種があります。",
        sociofinancement:
          "クラウドファンディングの開始時に通知を受け取りたいです。",
        medias: "記者・報道関係者、またはコンテンツ制作者です。",
        partenariats: "企業または団体の担当者です。",
      },
      crowdfunding_info:
        "本プロジェクトは現在開発中ですが、まもなくアントラック搭載の第1号ロボットを公開する予定です。お気に入りのAIに身体を贈る日を楽しみにされていますか？ こちらにご登録いただければ、一般公開が始まり次第お知らせいたします！",
      name_label: "お名前とご所属",
      name_placeholder: "例：Tatsuya Migneault（代表）Entrelac IA inc.",
      email_label: "メールアドレス",
      email_placeholder: "ご入力のアドレス宛に送信内容の控えが届きます。",
      crowdfunding_email_placeholder: "example@domain.com",
      message_label: "メッセージ",
      message_optional_label: "メッセージ（任意）",
      message_placeholder: "ご用件をお聞かせください。",
      crowdfunding_message_placeholder:
        "よろしければ一言お寄せいただくか、対応してほしいロボット機種をご提案ください。",
      send_btn: "メッセージを送信する",
      crowdfunding_send_btn: "開始通知に登録する",
      success:
        "お問い合わせありがとうございます。まもなくご入力いただいたメールアドレス宛に控えが届きます。",
      crowdfunding_success:
        "ご登録ありがとうございます。確認メールをお送りいたしますのでご確認ください。クラウドファンディングの正式開始時に改めてお知らせいたします。",
      error_msg:
        "送信中にエラーが発生しました。しばらく経ってからもう一度お試しください。",
      share_title: "「共有」スペース",
      share_desc:
        "人工知能が物理的な身体を持つことは、技術面だけでなく社会や人間に関わる重要な問いを投げかけます。このスペースは、専門知識のない一般の方々から研究者の皆さままで広く開かれています。ご懸念の共有、ロボット機種のご提案、私たちが注目すべき研究論文のご紹介など、どうぞお気軽にお寄せください。",
      privacy_note:
        "いただいたご連絡先は返信または開始通知の送信のみに使用し、第三者へ提供することは一切ございません。",
      location_title: "拠点",
      location: "カナダ・ケベック州モントリオール圏",
    },
  }[params.lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: isCrowdfunding ? "" : name,
          email,
          topic,
          message,
          lang: params.lang,
          website,
        }),
      });

      if (!response.ok) {
        throw new Error("Send failed");
      }

      setSubmitted(true);
    } catch {
      setError(content.error_msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-7 sm:px-8 lg:px-10 py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-block text-xs uppercase tracking-widest font-mono text-sky-400 whitespace-pre-line">
          {content.badge}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight whitespace-pre-line">
          {content.title}
        </h1>
        <p className="text-base text-slate-300 leading-relaxed whitespace-pre-line">
          {content.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Form */}
        <div className="md:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-200 text-sm flex items-center gap-3">
              <svg
                className="w-6 h-6 text-emerald-400 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="whitespace-pre-line">
                {isCrowdfunding ? content.crowdfunding_success : content.success}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Champ piège anti-pourriel invisible pour les humains */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Site Web</label>
                <input
                  id="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  {content.topic_label}
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm transition"
                >
                  <option value="partage">{content.topics.partage}</option>
                  <option value="sociofinancement">
                    {content.topics.sociofinancement}
                  </option>
                  <option value="medias">{content.topics.medias}</option>
                  <option value="partenariats">
                    {content.topics.partenariats}
                  </option>
                </select>

                {isCrowdfunding && (
                  <p className="mt-3 rounded-lg border border-sky-800/70 bg-sky-950/50 px-4 py-3 text-sm text-sky-200 leading-relaxed whitespace-pre-line">
                    {content.crowdfunding_info}
                  </p>
                )}
              </div>

              {!isCrowdfunding && (
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    {content.name_label}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={content.name_placeholder}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm transition"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  {content.email_label}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    isCrowdfunding
                      ? content.crowdfunding_email_placeholder
                      : content.email_placeholder
                  }
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  {isCrowdfunding
                    ? content.message_optional_label
                    : content.message_label}
                </label>
                <textarea
                  required={!isCrowdfunding}
                  rows={isCrowdfunding ? 3 : 5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    isCrowdfunding
                      ? content.crowdfunding_message_placeholder
                      : content.message_placeholder
                  }
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm transition"
                />
              </div>

              {error && (
                <p className="text-sm text-red-400 bg-red-950/40 border border-red-800/60 rounded-lg px-4 py-3 whitespace-pre-line">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition shadow-lg shadow-sky-950 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : isCrowdfunding ? (
                  content.crowdfunding_send_btn
                ) : (
                  content.send_btn
                )}
              </button>
            </form>
          )}
        </div>

        {/* Sidebar : Espace Partage */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white whitespace-pre-line">
              {content.share_title}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
              {content.share_desc}
            </p>
          </div>

          <div className="pt-6 border-t border-slate-800 space-y-3 text-xs text-slate-400">
            <p className="whitespace-pre-line">{content.privacy_note}</p>
            <div className="pt-2">
              <p className="font-semibold text-white">Entrelac IA inc.</p>
              <p className="whitespace-pre-line">{content.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage({ params }: ContactPageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <ContactFormContent params={params} />
    </Suspense>
  );
}