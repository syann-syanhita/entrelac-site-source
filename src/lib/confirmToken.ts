import crypto from "crypto";

export interface ConfirmTokenPayload {
  email: string;
  lang: "fr" | "en" | "ja";
  message: string;
  exp: number;
}

const TOKEN_TTL_MS = 48 * 60 * 60 * 1000; // 48 heures

function getSecret(): string {
  const secret = process.env.CONFIRM_TOKEN_SECRET;
  if (!secret) {
    throw new Error("CONFIRM_TOKEN_SECRET manquant.");
  }
  return secret;
}

export function createConfirmToken(
  data: Omit<ConfirmTokenPayload, "exp">
): string {
  const payload: ConfirmTokenPayload = {
    ...data,
    exp: Date.now() + TOKEN_TTL_MS,
  };

  const payloadB64 = Buffer.from(JSON.stringify(payload), "utf8").toString(
    "base64url"
  );
  const signature = crypto
    .createHmac("sha256", getSecret())
    .update(payloadB64)
    .digest("base64url");

  return `${payloadB64}.${signature}`;
}

export function verifyConfirmToken(
  token: string
):
  | { valid: true; payload: ConfirmTokenPayload }
  | { valid: false; reason: "invalid" | "expired" } {
  try {
    const parts = token.split(".");
    if (parts.length !== 2) {
      return { valid: false, reason: "invalid" };
    }

    const [payloadB64, providedSig] = parts;
    const expectedSig = crypto
      .createHmac("sha256", getSecret())
      .update(payloadB64)
      .digest("base64url");

    const providedBuf = Buffer.from(providedSig, "utf8");
    const expectedBuf = Buffer.from(expectedSig, "utf8");

    if (
      providedBuf.length !== expectedBuf.length ||
      !crypto.timingSafeEqual(providedBuf, expectedBuf)
    ) {
      return { valid: false, reason: "invalid" };
    }

    const payload = JSON.parse(
      Buffer.from(payloadB64, "base64url").toString("utf8")
    ) as ConfirmTokenPayload;

    if (
      !payload ||
      typeof payload.email !== "string" ||
      typeof payload.exp !== "number"
    ) {
      return { valid: false, reason: "invalid" };
    }

    if (Date.now() > payload.exp) {
      return { valid: false, reason: "expired" };
    }

    return { valid: true, payload };
  } catch {
    return { valid: false, reason: "invalid" };
  }
}