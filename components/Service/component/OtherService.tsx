"use client";

import Image from "next/image";
import Link from "next/link";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceData } from "@/data/Service";


interface OtherExperiencesProps {
  currentId: number;
}

export default function OtherService({ currentId }: OtherExperiencesProps) {
  const otherItems = serviceData.filter((item) => item.serviceId !== currentId);

  if (otherItems.length === 0) return null;

  return (
    <section className="bg-[#1A3079] py-24 overflow-hidden">
      <div className="max-w-296.5 mx-auto px-4 text-center">
        <div className="mb-12 space-y-4">
          <h4 className="text-[#e2991a] font-bold text-sm tracking-[0.3em] uppercase">
            THONGRAK NITISRI LAW
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
           บริการ <span className="text-[#e2991a]">อื่นๆ</span>
          </h2>

          <div className="relative flex items-center justify-center pt-8">
            <div className="absolute w-full border-t border-dotted border-white/40"></div>
            <div className="relative z-10 bg-[#1A3079] px-6">
              <div className="bg-[#e89a10] p-2.5 rounded-full shadow-lg border-2 border-white/20">
                <Scale className="w-5 h-5 text-[#1A3079]" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {otherItems.map((item) => (
            <div
              key={item.serviceId}
              className="group bg-[#fff5f5] rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              {item.image ? (
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ) : (
                <div className="w-full h-100 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400">
                  No Image Available
                </div>
              )}

              <div className="relative px-5 pb-6 pt-10 text-center flex flex-col flex-1 items-center justify-between">
                <div className="space-y-3 mb-6">
                  <h4 className="text-lg font-bold text-slate-800 line-clamp-2 leading-tight">
                    {item.title}
                  </h4>                 
                </div>

                <Link href={`/service/${item.serviceId}`} className="w-full">
                  <Button className="w-full bg-[#e89a10] hover:bg-[#cf890d] text-white font-bold rounded-md py-6 shadow-md transition-colors text-sm uppercase tracking-wider">
                    ดูรายละเอียด
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
