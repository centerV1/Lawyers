"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Facebook, Linkedin , ImageOff } from "lucide-react";
import { ServiceItem } from "@/data/Service";
import PaymentModal from "./payment/PaymentModal";
import { useTranslate } from "@/utils/useTranslate";
import { useTranslations } from "next-intl";
interface SingleServiceProps {
  service: ServiceItem;
}

export default function SingleService({ service }: SingleServiceProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getLocalized = useTranslate<ServiceItem>();
  const t = useTranslations("Payment");
  return (
    <div className="bg-[#eff3f6] py-12 font-sans">
      <div className="container max-w-296.5 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8 bg-white p-8 md:p-5 rounded-2xl shadow-sm">
            {service.image ? (
              <div className="w-full h-112.5 relative rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={service.image}
                  alt={getLocalized(service, "title") || ""}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="w-full h-112.5 relative flex flex-col items-center justify-center bg-slate-100 rounded-2xl shadow-inner border border-slate-200">
                <ImageOff
                  size={48}
                  className="text-slate-400 mb-2 opacity-60"
                  strokeWidth={1.5}
                />
                <span className="text-slate-400 font-medium text-sm">
                  No image available
                </span>
              </div>
            )}

            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-[#1a3673]">
                {getLocalized(service, "title")}
              </h1>
              <article className="text-slate-600 leading-relaxed text-lg text-justify whitespace-pre-line">
                {getLocalized(service, "article")}
              </article>
            </div>

            <div className="flex flex-wrap gap-4 mt-12 pt-10 border-t border-slate-100">
              <button className="flex items-center gap-3 bg-[#3b5998] text-white px-8 py-3 rounded-xl text-sm font-bold hover:opacity-90 transition shadow-md">
                <Facebook size={20} fill="white" /> Facebook
              </button>

              <button className="flex items-center gap-3 bg-[#24292e] text-white px-8 py-3 rounded-xl text-sm font-bold hover:opacity-90 transition shadow-md">
                <span className="text-xl font-black">X</span> Twitter
              </button>

              <button className="flex items-center gap-3 bg-[#0077b5] text-white px-8 py-3 rounded-xl text-sm font-bold hover:opacity-90 transition shadow-md">
                <Linkedin size={20} fill="white" /> LinkedIn
              </button>
            </div>
          </div>

          <div className="lg:col-span-1 sticky top-32">
            <div className="bg-[#1A3079] p-8 rounded-2xl shadow-2xl text-white">
              <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-4">
                <span className="text-[#E1E8ED]">
                  {getLocalized(service, "title")}
                </span>
              </h3>

              <div className="flex justify-between items-center mb-8 font-bold text-xl">
                <span className="text-[#E1E8ED]">{t("rates")}</span>
                <span className="text-[#e2991a]">
                  {service.price ? service.price.toLocaleString() : "-"}
                  {t("currency")}
                </span>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#ff9900] hover:bg-amber-600 text-white font-bold py-5 px-4 rounded-2xl shadow-lg transition-all active:scale-95 text-xl"
              >
                {t("pay")}
              </button>

              <p className="text-center mt-6 text-xs text-[#E1E8ED] font-medium">
                {t("prompay")}
                {/* "pay": "Payment for legal representation", */}
              </p>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceTitle={getLocalized(service, "title") || ""}
        price={service.price}
      />
    </div>
  );
}
