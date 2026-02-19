"use client";
import Image from "next/image";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { ServiceItem } from "@/data/Service";
import { useTranslate } from "@/utils/useTranslate";
interface SingleServiceProps {
  service: ServiceItem;
}
export default function SingleService({ service }: SingleServiceProps) {
  const getLocalized = useTranslate<ServiceItem>();

  return (
    <div className="container max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {service.image ? (
            <div className="w-full h-100 relative rounded-lg overflow-hidden shadow-md">
              <Image
                src={service.image}
                alt={getLocalized(service, "title") || service.article || ""}
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="w-full h-100 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400">
              No Image Available
            </div>
          )}

          <h1 className="text-3xl font-bold text-slate-800">{service.title}</h1>

          <article className="text-slate-600 leading-relaxed text-lg">
            {service.article}
          </article>

          <div className="space-y-6 mt-8">
            {[1, 2].map((item) => (
              <div key={item} className="p-4 rounded-md">
                <h3 className="text-lg font-semibold text-slate-700 mb-2">
                  การให้คำปรึกษาก่อนการดำเนินคดี
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  เราให้บริการปรึกษาเบื้องต้นเพื่อประเมินคดีของคุณและให้คำแนะนำเกี่ยวกับแนวทางการดำเนินการที่ดีที่สุด
                  ทนายความของเราจะแนะนำคุณเกี่ยวกับกลยุทธ์ทางกฎหมายที่เป็นไปได้
                  ความเสี่ยง และประโยชน์
                  เพื่อช่วยให้คุณตัดสินใจอย่างมีข้อมูลก่อนเริ่มฟ้องร้อง
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-slate-200 p-6 rounded-lg sticky top-24">
            <h3 className="text-xl font-bold text-slate-800 mb-4">
              ที่ปรึกษาทางกฎหมายและธุรกิจ
            </h3>

            <div className="flex justify-between items-center mb-6 text-slate-700 font-medium">
              <span>เรทราคา</span>
              {service.price ? service.price.toLocaleString() : "-"} บาท
            </div>

            <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded shadow-sm transition duration-200">
              ชำระเงินเพื่อว่าความ
            </button>
          </div>
        </div>
        <div className="flex gap-3 mt-8 pt-4 border-t">
          <button className="flex items-center gap-2 bg-[#3b5998] text-white px-4 py-2 rounded text-sm font-medium hover:opacity-90 transition">
            <Facebook size={18} /> Facebook
          </button>
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded text-sm font-medium hover:opacity-90 transition">
            <Twitter size={18} /> Twitter
          </button>
          <button className="flex items-center gap-2 bg-[#0077b5] text-white px-4 py-2 rounded text-sm font-medium hover:opacity-90 transition">
            <Linkedin size={18} /> LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}
