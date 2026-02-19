"use client";
import Image from "next/image";
import Lawyer from "@/public/Lawyer.jpg";
import { Button } from "@/components/ui/button";
import SignatureImg from "@/public/signature-line.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-200 md:h-screen w-full flex flex-col items-center justify-center overflow-hidden ">
      <div className="absolute inset-0 z-0">
        <Image
          src={Lawyer}
          alt="Lawyer Background"
          fill
          priority
          className="fill"
        />

        <div className="absolute inset-0 bg-[#4F200D]/85 mix-blend-multiply" />
      </div>

      <div className="relative z-10 text-center text-white px-4 w-full max-w-5xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-black mb-2 animate-fade-in tracking-tight">
          ปรึกษากฎหมาย
        </h1>

        <div className="relative inline-block pb-15">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#E39B16] leading-tight px-2">
            บริษัท ทองรักนิติศรี จำกัด
          </h2>

          <div className="absolute left-0 right-0 bottom-0 w-full flex justify-center translate-y-2">
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

        <div className="mt-8">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-100 max-w-5xl mx-auto leading-relaxed">
            มุ่งมั่นการบริการทางกฎหมายที่ได้มาตรฐานสูงสุด เพื่อรักษาผลประโยชน์ของลูกความ
          </p>
        </div>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row gap-5 mt-16 w-full px-8 sm:w-auto sm:justify-center">
        <Button className="w-full sm:w-[186px] h-[59px] bg-[#E39B16] hover:bg-[#c58512] text-white text-lg font-bold rounded-xl shadow-2xl transition-transform hover:scale-105 active:scale-95">
          <Link href="/contact">
            ปรึกษากฎหมาย
          </Link>
        </Button>
        <Button
          variant="outline"
          className="w-full sm:w-[285px] h-[59px] bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-lg font-bold rounded-xl transition-all active:scale-95 backdrop-blur-sm"
        >
          <Link href="/service">
            บริการเราทั้งหมด
          </Link>
        </Button>
      </div>
    </section>
  );
}