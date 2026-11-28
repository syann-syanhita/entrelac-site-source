import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { verifyConfirmToken } from "@/lib/confirmToken";

export async function GET(request: Request) {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://www.entrelac-ia.ca"
      : "http://localhost:3000";

  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token") || "";

  const result = verifyConfirmToken(token);

  if (!result.valid) {
    const statusParam = result.reason === "expired" ? "expire" : "invalide";
    return NextResponse.redirect(
      new URL(
        `/fr/contact?motif=sociofinancement&statut=${statusParam}`,
        baseUrl
      )
    );
  }

  const { email, lang, message } = result.payload;
  const confirmedAtIso = new Date().toISOString();
  const confirmedAtMontreal = new Intl.DateTimeFormat("fr-CA", {
    dateStyle: "long",
    timeStyle: "medium",
    timeZone: "America/Toronto",
  }).format(new Date());

  try {
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: `"Site Web Entrelac IA" <info@entrelac-ia.ca>`,
        to: "info@entrelac-ia.ca",
        replyTo: email,
        subject: `[Alerte sociofinancement] Inscription confirmée (${email})`,
        text: [
          "Inscription confirmée par double consentement (LCAP)",
          `Courriel : ${email}`,
          `Langue : ${lang.toUpperCase()}`,
          `Date et heure du clic (Montréal) : ${confirmedAtMontreal}`,
          `Horodatage UTC : ${confirmedAtIso}`,
          "",
          "Message facultatif :",
          message || "(Aucun message laissé)",
        ].join("\n"),
      });
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi de la confirmation interne :", error);
    return NextResponse.redirect(
      new URL(
        `/${lang}/contact?motif=sociofinancement&statut=invalide`,
        baseUrl
      )
    );
  }

  return NextResponse.redirect(
    new URL(`/${lang}/contact?motif=sociofinancement&statut=confirme`, baseUrl)
  );
}