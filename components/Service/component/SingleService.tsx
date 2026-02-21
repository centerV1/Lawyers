"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Facebook, Linkedin } from "lucide-react";
import { ServiceItem } from "@/data/Service";
import PaymentModal from "./payment/PaymentModal";
import { useTranslate } from "@/utils/useTranslate";

interface SingleServiceProps {
  service: ServiceItem;
}

export default function SingleService({ service }: SingleServiceProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getLocalized = useTranslate<ServiceItem>();
  return (
    <div className="bg-[#eff3f6] py-12 font-sans">
      <div className="container max-w-296.5 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8 bg-white p-8 md:p-5 rounded-2xl shadow-sm">
            {service.image && (
              <div className="w-full h-112.5 relative rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={service.image}
                  alt={getLocalized(service, "title") || ""}
                  fill
                  className="object-cover"
                  priority
                />
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
                  {service.title || "บริการของเรา"}
                </span>
              </h3>

              <div className="flex justify-between items-center mb-8 font-bold text-xl">
                <span className="text-[#E1E8ED]">เรทราคา</span>
                <span className="text-[#e2991a]">
                  {service.price ? service.price.toLocaleString() : "-"} บาท
                </span>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#ff9900] hover:bg-amber-600 text-white font-bold py-5 px-4 rounded-2xl shadow-lg transition-all active:scale-95 text-xl"
              >
                ชำระเงินเพื่อว่าความ
              </button>

              <p className="text-center mt-6 text-xs text-[#E1E8ED] font-medium">
                * ชำระเงินผ่านระบบ PromptPay ปลอดภัย 100%
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
