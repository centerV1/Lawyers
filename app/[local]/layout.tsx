import type { Metadata } from "next";
import { Inter, Sarabun } from "next/font/google";
import "./globals.css";
import { HeroHeader } from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import OnFooter from "@/components/Footer/onfooter";

import { notFound } from "next/navigation";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Locale, routing } from "@/i18n/routing";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ local: string }>;
}): Promise<Metadata> {
  const { local } = await params;

  const t = await getTranslations({ locale: local, namespace: "Contact" });

  return {
    title: {
      default: t("company_name"), 
      template: `%s | ${t("company_name")}`,
    },
    description: "สำนักงานกฎหมายธงรักษ์นิติศรี ให้บริการด้านกฎหมายครบวงจร ปรึกษาทนายความ ว่าความทุกศาล",
  };
}
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ local: string }>;
}>) {
  const { local } = await params;
  if (!routing.locales.includes(local as Locale)){
    notFound();
  }
  const messages = await getMessages();

  return (
      <html lang={local} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sarabun.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
        <HeroHeader />
        {children}
        <OnFooter/>
        <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
