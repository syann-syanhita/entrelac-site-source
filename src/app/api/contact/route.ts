import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createConfirmToken } from "@/lib/confirmToken";

const MAX_NAME_LENGTH = 50;
const MAX_EMAIL_LENGTH = 50;
const MAX_MESSAGE_LENGTH = 3000;
const MAX_CROWDFUNDING_MESSAGE_LENGTH = 300;
const MIN_SUBMIT_TIME_MS = 5000;

const ALLOWED_ORIGINS = new Set([
  "https://www.entrelac-ia.ca",
  "https://entrelac-ia.ca",
]);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    subject: "Accusé de réception — Entrelac IA inc.",
    body: "Bonjour,\n\nNous avons bien reçu votre message et nous vous remercions d'avoir pris le temps de nous écrire. Nous vous répondrons dans les meilleurs délais.\n\nL'équipe d'Entrelac IA inc.\n204, rue du Saint-Sacrement, bureau 300, Montréal (Québec) H2Y 1W8, Canada",
    crowdfundingSubject:
      "Confirmez votre inscription — Alerte sociofinancement (Entrelac IA inc.)",
    crowdfundingBody: (confirmUrl: string) =>
      `Bonjour,\n\nPour finaliser votre inscription à l'alerte de lancement de notre campagne de sociofinancement, cliquez sur le lien ci-dessous (valable pendant 48 heures) :\n\n${confirmUrl}\n\nVous pourrez retirer votre consentement en tout temps en nous écrivant à info@entrelac-ia.ca. Si vous n'êtes pas à l'origine de cette demande, ignorez simplement ce courriel : aucune inscription ne sera enregistrée.\n\nL'équipe d'Entrelac IA inc.\n204, rue du Saint-Sacrement, bureau 300, Montréal (Québec) H2Y 1W8, Canada\nhttps://www.entrelac-ia.ca`,
    crowdfundingHtml: (confirmUrl: string) => `
      <div style="font-family: Arial, sans-serif; color: #1e293b; line-height: 1.6; max-width: 560px;">
        <p>Bonjour,</p>
        <p>Pour finaliser votre inscription à l'alerte de lancement de notre campagne de sociofinancement, cliquez sur le bouton ci-dessous (lien valable pendant 48 heures)&nbsp;:</p>
        <p style="margin: 24px 0;">
          <a href="${confirmUrl}" style="background-color: #0284c7; color: #ffffff; padding: 12px 22px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
            Confirmer mon inscription
          </a>
        </p>
        <p style="font-size: 13px; color: #475569;">Si le bouton ne fonctionne pas, copiez-collez ce lien dans votre navigateur&nbsp;:<br />
          <a href="${confirmUrl}" style="color: #0284c7; word-break: break-all;">${confirmUrl}</a>
        </p>
        <p style="font-size: 13px; color: #475569;">Vous pourrez retirer votre consentement en tout temps en nous écrivant à info@entrelac-ia.ca. Si vous n'êtes pas à l'origine de cette demande, ignorez simplement ce courriel : aucune inscription ne sera enregistrée.</p>
        <p style="font-size: 12px; color: #64748b; margin-top: 24px;">
          L'équipe d'Entrelac IA inc.<br />
          204, rue du Saint-Sacrement, bureau 300, Montréal (Québec) H2Y 1W8, Canada<br />
          <a href="https://www.entrelac-ia.ca" style="color: #0284c7;">https://www.entrelac-ia.ca</a>
        </p>
      </div>
    `,
  },
  en: {
    subject: "Message received — Entrelac IA inc.",
    body: "Hello,\n\nWe have received your message and thank you for reaching out. We will get back to you as soon as possible.\n\nThe Entrelac IA inc. Team\n204 rue du Saint-Sacrement, Suite 300, Montreal, QC H2Y 1W8, Canada",
    crowdfundingSubject:
      "Confirm your sign-up — Crowdfunding Launch Alert (Entrelac IA inc.)",
    crowdfundingBody: (confirmUrl: string) =>
      `Hello,\n\nTo complete your sign-up for our crowdfunding launch alert, please click the link below (valid for 48 hours):\n\n${confirmUrl}\n\nYou may withdraw your consent at any time by writing to info@entrelac-ia.ca. If you did not make this request, simply ignore this email and no sign-up will be recorded.\n\nThe Entrelac IA inc. Team\n204 rue du Saint-Sacrement, Suite 300, Montreal, QC H2Y 1W8, Canada\nhttps://www.entrelac-ia.ca`,
    crowdfundingHtml: (confirmUrl: string) => `
      <div style="font-family: Arial, sans-serif; color: #1e293b; line-height: 1.6; max-width: 560px;">
        <p>Hello,</p>
        <p>To complete your sign-up for our crowdfunding launch alert, please click the button below (valid for 48 hours):</p>
        <p style="margin: 24px 0;">
          <a href="${confirmUrl}" style="background-color: #0284c7; color: #ffffff; padding: 12px 22px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
            Confirm my sign-up
          </a>
        </p>
        <p style="font-size: 13px; color: #475569;">If the button does not work, copy and paste this link into your browser:<br />
          <a href="${confirmUrl}" style="color: #0284c7; word-break: break-all;">${confirmUrl}</a>
        </p>
        <p style="font-size: 13px; color: #475569;">You may withdraw your consent at any time by writing to info@entrelac-ia.ca. If you did not make this request, simply ignore this email and no sign-up will be recorded.</p>
        <p style="font-size: 12px; color: #64748b; margin-top: 24px;">
          The Entrelac IA inc. Team<br />
          204 rue du Saint-Sacrement, Suite 300, Montreal, QC H2Y 1W8, Canada<br />
          <a href="https://www.entrelac-ia.ca" style="color: #0284c7;">https://www.entrelac-ia.ca</a>
        </p>
      </div>
    `,
  },
  ja: {
    subject: "お問い合わせ受付のお知らせ — アントラック（Entrelac IA inc.）",
    body: "お問い合わせいただきありがとうございます。\n\nメッセージは正常に受け付けいたしました。内容を確認のうえ、担当者よりご連絡申し上げます。\n\nアントラック（Entrelac IA inc.）\n204 rue du Saint-Sacrement, Suite 300, Montréal, QC H2Y 1W8, Canada",
    crowdfundingSubject:
      "登録確認のお願い — クラウドファンディング開始通知（Entrelac IA inc.）",
    crowdfundingBody: (confirmUrl: string) =>
      `ご登録のお申し込みありがとうございます。\n\nクラウドファンディング開始通知への登録を完了するには、以下のリンクをクリックしてください（有効期限：48時間）：\n\n${confirmUrl}\n\n同意はいつでも info@entrelac-ia.ca へのご連絡により撤回いただけます。お心当たりのない場合は、このメールを破棄してください（リンクをクリックしない限り登録は完了しません）。\n\nアントラック（Entrelac IA inc.）\n204 rue du Saint-Sacrement, Suite 300, Montréal, QC H2Y 1W8, Canada\nhttps://www.entrelac-ia.ca`,
    crowdfundingHtml: (confirmUrl: string) => `
      <div style="font-family: Arial, sans-serif; color: #1e293b; line-height: 1.6; max-width: 560px;">
        <p>ご登録のお申し込みありがとうございます。</p>
        <p>クラウドファンディング開始通知への登録を完了するには、以下のボタンをクリックしてください（有効期限：48時間）：</p>
        <p style="margin: 24px 0;">
          <a href="${confirmUrl}" style="background-color: #0284c7; color: #ffffff; padding: 12px 22px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
            登録を完了する
          </a>
        </p>
        <p style="font-size: 13px; color: #475569;">ボタンが機能しない場合は、以下のURLをブラウザに貼り付けてください：<br />
          <a href="${confirmUrl}" style="color: #0284c7; word-break: break-all;">${confirmUrl}</a>
        </p>
        <p style="font-size: 13px; color: #475569;">同意はいつでも info@entrelac-ia.ca へのご連絡により撤回いただけます。お心当たりのない場合は、このメールを破棄してください（リンクをクリックしない限り登録は完了しません）。</p>
        <p style="font-size: 12px; color: #64748b; margin-top: 24px;">
          アントラック（Entrelac IA inc.）<br />
          204 rue du Saint-Sacrement, Suite 300, Montréal, QC H2Y 1W8, Canada<br />
          <a href="https://www.entrelac-ia.ca" style="color: #0284c7;">https://www.entrelac-ia.ca</a>
        </p>
      </div>
    `,
  },
};

function stripLineBreaks(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function POST(request: Request) {
  try {
    // 1. Vérification de l'origine en production
    if (process.env.NODE_ENV === "production") {
      const origin = request.headers.get("origin");
      if (!origin || !ALLOWED_ORIGINS.has(origin)) {
        return NextResponse.json(
          { error: "Origine non autorisée." },
          { status: 403 }
        );
      }
    }

    const body = await request.json();
    const { name, email, topic, message, lang, website, formLoadedAt } = body;

    // 2. Champ piège anti-pourriel : faux succès silencieux pour les robots
    if (website) {
      return NextResponse.json({ ok: true });
    }

    // 3. Délai minimal de 5 secondes avant l'envoi
    if (
      typeof formLoadedAt !== "number" ||
      Date.now() - formLoadedAt < MIN_SUBMIT_TIME_MS
    ) {
      return NextResponse.json(
        { error: "Envoi trop rapide. Veuillez réessayer dans quelques secondes." },
        { status: 400 }
      );
    }

    // 4. Nettoyage et validation stricte des champs
    const cleanEmail = stripLineBreaks(email);
    const cleanName = stripLineBreaks(name);
    const cleanMessage = typeof message === "string" ? message.trim() : "";
    const isCrowdfunding = topic === "sociofinancement";
    const maxMsgLength = isCrowdfunding
      ? MAX_CROWDFUNDING_MESSAGE_LENGTH
      : MAX_MESSAGE_LENGTH;

    if (
      !cleanEmail ||
      !EMAIL_REGEX.test(cleanEmail) ||
      cleanEmail.length > MAX_EMAIL_LENGTH ||
      typeof topic !== "string" ||
      !RECIPIENT_MAP[topic]
    ) {
      return NextResponse.json(
        { error: "Champs invalides ou manquants." },
        { status: 400 }
      );
    }

    if (
      cleanName.length > MAX_NAME_LENGTH ||
      cleanMessage.length > maxMsgLength
    ) {
      return NextResponse.json(
        { error: "Un ou plusieurs champs dépassent la longueur autorisée." },
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
      if (!process.env.CONFIRM_TOKEN_SECRET) {
        return NextResponse.json(
          { error: "Configuration de confirmation manquante sur le serveur." },
          { status: 500 }
        );
      }

      const token = createConfirmToken({
        email: cleanEmail,
        lang: safeLang,
        message: cleanMessage,
      });

      const baseUrl =
        process.env.NODE_ENV === "production"
          ? "https://www.entrelac-ia.ca"
          : "http://localhost:3000";
      const confirmUrl = `${baseUrl}/api/confirm?token=${encodeURIComponent(
        token
      )}`;

      // Double confirmation : envoi HTML (bouton bleu cliquable) + texte brut
      await transporter.sendMail({
        from: `"Entrelac IA inc." <info@entrelac-ia.ca>`,
        to: cleanEmail,
        subject: copy.crowdfundingSubject,
        text: copy.crowdfundingBody(confirmUrl),
        html: copy.crowdfundingHtml(confirmUrl),
      });
    } else {
      // 1. Envoi interne vers votre alias
      await transporter.sendMail({
        from: `"Site Web Entrelac IA" <info@entrelac-ia.ca>`,
        to: target.email,
        replyTo: cleanEmail,
        subject: `[${target.label}] Message de ${cleanName}`,
        text: `Nom ou organisation : ${cleanName}\nCourriel : ${cleanEmail}\nMotif : ${target.label}\nLangue : ${safeLang.toUpperCase()}\n\nMessage :\n${cleanMessage}`,
      });

      // 2. Accusé de réception fixe (sans recopier le nom ni le message)
      await transporter.sendMail({
        from: `"Entrelac IA inc." <info@entrelac-ia.ca>`,
        to: cleanEmail,
        subject: copy.subject,
        text: copy.body,
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