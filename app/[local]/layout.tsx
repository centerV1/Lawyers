import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeroHeader } from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import OnFooter from "@/components/Footer/onfooter";

import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Locale, routing } from "@/i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Thongrak Nitisri Law | สำนักงานกฎหมายธงรักษ์นิติศรี",
    template: "%s | Thongrak Nitisri Law",
  },
  description:
    "สำนักงานกฎหมายธงรักษ์นิติศรี ให้บริการด้านกฎหมายครบวงจร ปรึกษาทนายความ ว่าความทุกศาล — Thongrak Nitisri Law Office, full-service legal consultancy.",
};

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
