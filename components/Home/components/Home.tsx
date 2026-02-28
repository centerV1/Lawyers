"use client";

import Image from "next/image";
import Lawyer from "@/public/Lawyer.webp";
import { Button } from "@/components/ui/button";
import SignatureImg from "@/public/signature-line.webp";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function HomeContent() {
  const t = useTranslations("HomePage");
  return (
    <section className="relative h-200 md:h-screen w-full flex flex-col items-center justify-center overflow-hidden ">
      <div className="absolute inset-0 z-0">
        <Image
          src={Lawyer}
          alt="Lawyer Background"
          fill
          priority
          sizes="100vw"
          className="fill"
        />

        <div className="absolute inset-0 bg-[#4F200D]/85 mix-blend-multiply" />
      </div>

      <div className="relative z-10 text-center text-white px-4 w-full max-w-5xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-black mb-2 animate-fade-in tracking-tight">
          {t("title")}
        </h1>

        <div className="relative inline-block pb-15">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#E39B16] leading-tight px-2">
            {t("company_name")}
          </h2>

           <div className="absolute left-0 right-0 bottom-0 w-full flex justify-center translate-y-1">
            <Image
              src={SignatureImg}
              alt="Signature Line"
              width={800}
              height={150}
              className="w-full h-auto object-contain pointer-events-none opacity-95"
              priority
            />
          </div> 
        </div>

        <div className="mt-5">
          <p className="text-lg sm:text-xl md:text-xl font-bold text-gray-100 max-w-5xl mx-auto leading-relaxed">
            {t("title2")}
          </p>
        </div>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row gap-5 mt-16 w-full px-8 sm:w-auto sm:justify-center">
        <Button className="w-full sm:w-46.5 h-14.75 bg-[#E39B16] hover:bg-[#c58512] text-white text-lg font-bold rounded-xl shadow-2xl transition-transform hover:scale-105 active:scale-95">
          <Link
            href={{
              pathname: "/contact",
            }}
          >{t("consultation")}</Link>
        </Button>
        <Button
          variant="outline"
          className="w-full sm:w-71.25 h-14.75 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-lg font-bold rounded-xl transition-all active:scale-95 backdrop-blur-sm"
        >
          <Link
            href={{
              pathname: "/service",
            }}
          >
            {t("allservice")}
          </Link>
        </Button>
      </div>
    </section>
  );
}
