"use client";

import Image from "next/image";
import Link from "next/link"; 
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import Lawyer from "@/public/Lawyer.jpg";
import { Separator } from "../../ui/separator";

const serviceData = [
  { title: "การว่าความคดีแพ่ง", href: "/civil-case" },
  { title: "การว่าความคดีอาญา", href: "/criminal-case" },
  { title: "วีซ่าและใบอนุญาตทำงาน", href: "/visa-workpermit" },
  { title: "ที่ปรึกษาทางกฎหมายและธุรกิจ", href: "/consultant" },
  { title: "การประกันตัว", href: "/bail" },
  { title: "การบังคับคดี", href: "/enforcement" },
  { title: "การขอใบอนุญาตภายในประเทศไทย", href: "/licenses" },
  { title: "กฎหมายที่ดิน", href: "/land-law" },
  { title: "หนังสือสัญญาต่างๆ", href: "/contracts" },
];

export default function Service() {
  return (
    <section className="relative w-full min-h-screen py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={Lawyer}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      <div className="relative z-10 container max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-500 drop-shadow-md">
            บริการของเรา
          </h2>
        <div className="relative flex items-center justify-center mb-10">
          <Separator className="flex-1 border-dotted" />
          <div className="px-4">
            <Scale className="text-[#e89a10] w-10 h-10" />
          </div>
          <Separator className="flex-1 border-dotted" />
        </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {serviceData.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={Lawyer}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 transition-colors" />
              </div>

              <div className="relative px-4 pb-6 pt-8 text-center bg-white flex flex-col items-center h-40 justify-between">
                
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full ">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Scale className="w-6 h-6 text-amber-600" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mt-2 mb-2 line-clamp-2 min-h-14 flex items-center justify-center">
                  {item.title}
                </h3>

                <Link href={item.href} className="w-full">
                  <Button 
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md py-2 shadow-sm"
                  >
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