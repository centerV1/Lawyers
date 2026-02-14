"use client";
import Image from "next/image";
import Lawyer from "@/public/Lawyer.jpg";
import { Button } from "@/components/ui/button";

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

        <div className="absolute inset-0 bg-black/60 z-0" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-[90%] lg:max-w-5xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 md:mb-4 animate-fade-in pb-3">
          เชี่ยวชาญทุกคดีความ
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 animate-fade-in text-[#E39B16]">
          บริษัท ทองรักนิติศรี จำกัด
        </h1>
      </div>

      <div className="relative z-10 pt-2 md:pt-5 text-center px-4 max-w-3xl">
        <p className="text-base sm:text-lg md:text-xl font-bold font-sans text-gray-200 md:text-white leading-relaxed">
          มุ่งมั่นการบริการทางกฎหมายที่ได้มาตรฐานสูงสุด
          เพื่อรักษาผลประโยชน์ของลูกความ
        </p>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 py-5 w-full px-6 sm:w-auto sm:px-0">
        <Button className="w-full sm:w-auto bg-[#E39B16] hover:bg-[#c58512] text-white text-lg sm:text-xl font-bold h-12 sm:h-14 px-8 sm:px-10 rounded-md">
          ปรึกษากฎหมาย
        </Button>

        <Button
          variant="outline"
          className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-lg sm:text-xl font-bold h-12 sm:h-14 px-8 sm:px-10 rounded-md"
        >
          บริการเราทั้งหมด
        </Button>
      </div>
    </section>
  );
}
