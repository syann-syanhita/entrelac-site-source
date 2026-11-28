"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Locale } from "@/i18n";

interface ContactPageProps {
  params: { lang: Locale };
}

function ContactFormContent({ params }: ContactPageProps) {
  const searchParams = useSearchParams();
  const confirmStatus = searchParams.get("statut");
  const initialTopic =
    searchParams.get("motif") === "sociofinancement"
      ? "sociofinancement"
      : "partage";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(initialTopic);
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // Champ piège invisible
  const [formLoadedAt] = useState(() => Date.now());
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
        "Le projet est actuellement en développement, mais nous lancerons bientôt un premier robot propulsé par Entrelac. Vous avez hâte d'offrir un corps à votre IA préférée ? Inscrivez-vous ici, et Entrelac IA inc. vous préviendra dès que le projet sera ouvert au grand public ! Vous pourrez retirer votre consentement en tout temps.",
      name_label: "Votre nom et organisation",
      name_placeholder: "Exemple : Tatsuya Migneault (PDG) Entrelac IA inc.",
      email_label: "Votre adresse courriel",
      email_placeholder: "Vous recevrez un accusé de réception.",
      crowdfunding_email_placeholder: "votre.adresse@exemple.com",
      message_label: "Message",
      message_optional_label: "Message (facultatif)",
      message_placeholder: "Dites-nous ce qui vous amène.",
      crowdfunding_message_placeholder:
        "Si vous le souhaitez, laissez-nous un mot ou suggérez un modèle de robot que vous aimeriez voir compatible (max. 300 caractères).",
      send_btn: "Envoyer le message",
      crowdfunding_send_btn: "M'inscrire à l'alerte",
      success:
        "Merci pour votre message ! Vous recevrez bientôt un accusé de réception par courriel.",
      crowdfunding_success:
        "Presque terminé ! Vérifiez votre boîte de réception (et vos courriels indésirables au besoin) et cliquez sur le lien de confirmation dans les 48 prochaines heures pour finaliser votre inscription.",
      confirmed_banner:
        "Votre inscription à l'alerte de sociofinancement est maintenant confirmée ! Nous vous préviendrons dès le lancement officiel.",
      expired_banner:
        "Ce lien de confirmation a expiré (valable 48 heures). Vous pouvez soumettre votre adresse courriel de nouveau ci-dessous.",
      invalid_banner:
        "Ce lien de confirmation est invalide. Vous pouvez soumettre votre adresse courriel de nouveau ci-dessous.",
      error_msg:
        "Une erreur est survenue lors de l'envoi. Attendez quelques secondes et réessayez.",
      share_title: "Espace « Partage »",
      share_desc:
        "L'incarnation physique de l'intelligence artificielle soulève des questions techniques, sociales et humaines essentielles. Cet espace s'adresse autant au grand public qu'à la communauté scientifique : n'hésitez pas à nous faire part de vos préoccupations, à suggérer un modèle de robot ou à nous transmettre des travaux de recherche qui méritent notre attention.",
      privacy_note:
        "Vos coordonnées servent uniquement à vous répondre ou à vous aviser du lancement et ne sont jamais partagées avec des tiers.",
      address:
        "204, rue du Saint-Sacrement, bureau 300\nMontréal (Québec) H2Y 1W8\nCanada",
      address_note: "Adresse postale seulement (aucun accueil sur place).",
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
        "The project is currently in development, and we will soon launch a first Entrelac-powered robot. Eager to give your favourite AI a physical body? Sign up here, and Entrelac IA inc. will notify you as soon as the project opens to the public! You may withdraw your consent at any time.",
      name_label: "Your name and organization",
      name_placeholder: "Example: Tatsuya Migneault (CEO) Entrelac IA inc.",
      email_label: "Your email address",
      email_placeholder: "You will receive a confirmation email.",
      crowdfunding_email_placeholder: "your.email@example.com",
      message_label: "Message",
      message_optional_label: "Message (optional)",
      message_placeholder: "Tell us what brings you here.",
      crowdfunding_message_placeholder:
        "If you wish, leave us a note or suggest a robot model you would like to see supported (max. 300 characters).",
      send_btn: "Send message",
      crowdfunding_send_btn: "Sign up for the alert",
      success:
        "Thank you for your message! You will soon receive a confirmation email.",
      crowdfunding_success:
        "Almost done! Please check your inbox (and spam folder if needed) and click the confirmation link within 48 hours to complete your sign-up.",
      confirmed_banner:
        "Your sign-up for the crowdfunding launch alert is now confirmed! We will notify you as soon as the campaign officially launches.",
      expired_banner:
        "This confirmation link has expired (valid for 48 hours). Please submit your email address again below.",
      invalid_banner:
        "This confirmation link is invalid. Please submit your email address again below.",
      error_msg:
        "An error occurred while sending your message. Please wait a few seconds and try again.",
      share_title: "“Sharing” Space",
      share_desc:
        "Giving artificial intelligence a physical form raises vital technical, social, and human questions. This space is for both curious newcomers and the scientific community: feel free to share your concerns, suggest a robot model, or send us research papers that deserve our attention.",
      privacy_note:
        "Your contact details are used solely to reply to you or send the launch alert and are never shared with third parties.",
      address:
        "204 rue du Saint-Sacrement, Suite 300\nMontreal, QC H2Y 1W8\nCanada",
      address_note: "Mailing address only (no walk-in reception).",
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
        "本プロジェクトは現在開発中ですが、まもなくアントラック搭載の第1号ロボットを公開する予定です。お気に入りのAIに身体を贈る日を楽しみにされていますか？ こちらにご登録いただければ、一般公開が始まり次第 Entrelac IA inc. よりお知らせいたします。同意はいつでも撤回できます。",
      name_label: "お名前とご所属",
      name_placeholder: "例：Tatsuya Migneault（代表）Entrelac IA inc.",
      email_label: "メールアドレス",
      email_placeholder: "受付確認メールが届きます。",
      crowdfunding_email_placeholder: "example@domain.com",
      message_label: "メッセージ",
      message_optional_label: "メッセージ（任意）",
      message_placeholder: "ご用件をお聞かせください。",
      crowdfunding_message_placeholder:
        "よろしければ一言お寄せいただくか、対応してほしいロボット機種をご提案ください（最大300文字）。",
      send_btn: "メッセージを送信する",
      crowdfunding_send_btn: "開始通知に登録する",
      success:
        "お問い合わせありがとうございます。まもなくご入力いただいたメールアドレス宛に受付確認メールが届きます。",
      crowdfunding_success:
        "あと少しで完了です！ 受信トレイ（必要に応じて迷惑メールフォルダ）をご確認のうえ、48時間以内に確認リンクをクリックして登録を完了してください。",
      confirmed_banner:
        "クラウドファンディング開始通知へのご登録が正式に完了いたしました！ 一般公開が始まり次第お知らせいたします。",
      expired_banner:
        "確認リンクの有効期限（48時間）が切れています。お手数ですが、下のフォームから再度ご登録ください。",
      invalid_banner:
        "確認リンクが無効です。お手数ですが、下のフォームから再度ご登録ください。",
      error_msg:
        "送信中にエラーが発生しました。数秒待ってからもう一度お試しください。",
      share_title: "「共有」スペース",
      share_desc:
        "人工知能が物理的な身体を持つことは、技術面だけでなく社会や人間に関わる重要な問いを投げかけます。このスペースは、専門知識のない一般の方々から研究者の皆さままで広く開かれています。ご懸念の共有、ロボット機種のご提案、私たちが注目すべき研究論文のご紹介など、どうぞお気軽にお寄せください。",
      privacy_note:
        "いただいたご連絡先は返信または開始通知の送信のみに使用し、第三者へ提供することは一切ございません。",
      address:
        "204 rue du Saint-Sacrement, Suite 300\nMontréal, QC H2Y 1W8, Canada",
      address_note: "※郵便受取専用住所（来訪・窓口対応は行っておりません）",
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
          formLoadedAt,
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
        <div className="md:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-6">
          {confirmStatus === "confirme" && (
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
              <p className="whitespace-pre-line">{content.confirmed_banner}</p>
            </div>
          )}

          {(confirmStatus === "expire" || confirmStatus === "invalide") && (
            <div className="p-4 rounded-xl bg-amber-950/60 border border-amber-800 text-amber-200 text-sm">
              <p className="whitespace-pre-line">
                {confirmStatus === "expire"
                  ? content.expired_banner
                  : content.invalid_banner}
              </p>
            </div>
          )}

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
            confirmStatus !== "confirme" && (
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
                      maxLength={50}
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
                    maxLength={50}
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
                    maxLength={isCrowdfunding ? 300 : 3000}
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
            )
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
            <address className="not-italic pt-2 space-y-1">
              <p className="font-semibold text-white">Entrelac IA inc.</p>
              <p className="whitespace-pre-line leading-relaxed text-slate-300">
                {content.address}
              </p>
              <p className="pt-1 text-[11px] text-slate-500">
                {content.address_note}
              </p>
            </address>
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