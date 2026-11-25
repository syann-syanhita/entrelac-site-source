import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n";
import { getDictionary } from "@/dictionaries/get-dictionary";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: [
      "Entrelac IA",
      "Robotic Middleware",
      "LLM",
      "Local AI",
      "Safety by Design",
      "Social Robotics",
      "Agnostic Robotics",
    ],
    authors: [{ name: "Entrelac IA inc." }],
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);

  return (
    <html lang={params.lang} className="dark scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#060b13] text-slate-100 antialiased selection:bg-sky-500 selection:text-white">
        <Navbar lang={params.lang} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer lang={params.lang} dict={dict} />
      </body>
    </html>
  );
}