import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT_MAP: Record<string, { email: string; label: string }> = {
  partage: {
    email: "info@entrelac-ia.ca",
    label: "Partage, question ou suggestion de robot",
  },
  sociofinancement: {
    email: "info@entrelac-ia.ca",
    label: "Alerte sociofinancement",
  },
  medias: {
    email: "medias@entrelac-ia.ca",
    label: "Médias et création de contenu",
  },
  partenariats: {
    email: "partenariats@entrelac-ia.ca",
    label: "Partenariats et organismes",
  },
};

const CONFIRMATION_COPY = {
  fr: {
    subject: "Copie de votre message — Entrelac IA inc.",
    intro: (name: string) =>
      `Bonjour ${name},\n\nNous avons bien reçu votre message et nous vous remercions d'avoir pris le temps de nous écrire. Voici une copie de votre envoi :`,
    outro:
      "Nous vous répondrons dans les meilleurs délais.\n\nL'équipe d'Entrelac IA inc.",
    crowdfundingSubject:
      "Inscription confirmée — Alerte sociofinancement (Entrelac IA inc.)",
    crowdfundingBody: (optionalMessage: string) =>
      `Bonjour,\n\nVotre inscription à l'alerte de lancement de notre campagne de sociofinancement est bien confirmée. Nous vous écrirons dès que le projet sera ouvert au grand public.${
        optionalMessage
          ? `\n\nVoici une copie du message que vous avez ajouté :\n\n---\n${optionalMessage}\n---`
          : ""
      }\n\nMerci pour votre intérêt !\n\nL'équipe d'Entrelac IA inc.`,
  },
  en: {
    subject: "Copy of your message — Entrelac IA inc.",
    intro: (name: string) =>
      `Hello ${name},\n\nWe have received your message and thank you for reaching out. Here is a copy of what you sent:`,
    outro:
      "We will get back to you as soon as possible.\n\nThe Entrelac IA inc. Team",
    crowdfundingSubject:
      "Confirmed — Crowdfunding Launch Alert (Entrelac IA inc.)",
    crowdfundingBody: (optionalMessage: string) =>
      `Hello,\n\nYour sign-up for our crowdfunding launch alert is confirmed. We will notify you as soon as the project opens to the public.${
        optionalMessage
          ? `\n\nHere is a copy of the note you included:\n\n---\n${optionalMessage}\n---`
          : ""
      }\n\nThank you for your interest!\n\nThe Entrelac IA inc. Team`,
  },
  ja: {
    subject: "お問い合わせ内容の控え — アントラック（Entrelac IA inc.）",
    intro: (name: string) =>
      `${name} 様\n\nお問い合わせいただきありがとうございます。以下の内容で受け付けいたしました。`,
    outro:
      "内容を確認のうえ、担当者よりご連絡申し上げます。\n\nアントラック（Entrelac IA inc.）",
    crowdfundingSubject:
      "登録完了 — クラウドファンディング開始通知（Entrelac IA inc.）",
    crowdfundingBody: (optionalMessage: string) =>
      `ご登録ありがとうございます。\n\nクラウドファンディング開始通知へのご登録が完了いたしました。一般公開が始まり次第、改めてご案内いたします。${
        optionalMessage
          ? `\n\nお送りいただいたメッセージの控えは以下の通りです：\n\n---\n${optionalMessage}\n---`
          : ""
      }\n\n今後ともよろしくお願いいたします。\n\nアントラック（Entrelac IA inc.）`,
  },
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, topic, message, lang, website } = body;

    // Champ piège anti-pourriel : si un robot le remplit, on ignore silencieusement
    if (website) {
      return NextResponse.json({ ok: true });
    }

    const cleanEmail = email?.trim() || "";
    const cleanName = name?.trim() || "";
    const cleanMessage = message?.trim() || "";
    const isCrowdfunding = topic === "sociofinancement";

    if (!cleanEmail || !RECIPIENT_MAP[topic]) {
      return NextResponse.json(
        { error: "Champs requis manquants." },
        { status: 400 }
      );
    }

    if (!isCrowdfunding && (!cleanName || !cleanMessage)) {
      return NextResponse.json(
        { error: "Champs requis manquants." },
        { status: 400 }
      );
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json(
        { error: "Configuration courriel manquante sur le serveur." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const target = RECIPIENT_MAP[topic];
    const safeLang: "fr" | "en" | "ja" =
      lang === "en" || lang === "ja" ? lang : "fr";
    const copy = CONFIRMATION_COPY[safeLang];

    if (isCrowdfunding) {
      // 1. Envoi vers info@entrelac-ia.ca avec étiquette claire pour filtrage
      await transporter.sendMail({
        from: `"Site Web Entrelac IA" <info@entrelac-ia.ca>`,
        to: target.email,
        replyTo: cleanEmail,
        subject: `[${target.label}] Nouvelle inscription (${cleanEmail})`,
        text: `Inscription à l'alerte de lancement du sociofinancement\nCourriel : ${cleanEmail}\nLangue : ${safeLang.toUpperCase()}\n\nMessage facultatif :\n${cleanMessage || "(Aucun message laissé)"}`,
      });

      // 2. Confirmation envoyée à la personne inscrite
      await transporter.sendMail({
        from: `"Entrelac IA inc." <info@entrelac-ia.ca>`,
        to: cleanEmail,
        subject: copy.crowdfundingSubject,
        text: copy.crowdfundingBody(cleanMessage),
      });
    } else {
      // 1. Envoi vers votre alias interne
      await transporter.sendMail({
        from: `"Site Web Entrelac IA" <info@entrelac-ia.ca>`,
        to: target.email,
        replyTo: cleanEmail,
        subject: `[${target.label}] Message de ${cleanName}`,
        text: `Nom ou organisation : ${cleanName}\nCourriel : ${cleanEmail}\nMotif : ${target.label}\nLangue : ${safeLang.toUpperCase()}\n\nMessage :\n${cleanMessage}`,
      });

      // 2. Copie de confirmation envoyée à l'expéditeur·ice
      await transporter.sendMail({
        from: `"Entrelac IA inc." <info@entrelac-ia.ca>`,
        to: cleanEmail,
        subject: copy.subject,
        text: `${copy.intro(cleanName)}\n\n---\n${cleanMessage}\n---\n\n${copy.outro}`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erreur d'envoi du formulaire :", error);
    return NextResponse.json(
      { error: "Impossible d'envoyer le message pour le moment." },
      { status: 500 }
    );
  }
}