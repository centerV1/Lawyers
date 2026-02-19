// components/Home/History.tsx
"use client";

import Image from "next/image";
import { Scale } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import Pic1 from "@/public/History.jpg";
import Pic2 from "@/public/History2.jpg";
import Pic3 from "@/public/History.jpg";
import Pic4 from "@/public/History.jpg";
import Pic5 from "@/public/History.jpg";
import Pic6 from "@/public/History.jpg";
import Pic7 from "@/public/History.jpg";
import Certificate from "@/public/Certificate.png";

export default function History() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-7 flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e1b3c] text-center mb-12">
              ประวัติการก่อตั้ง
            </h2>

            <div className="relative flex items-center justify-center mb-8">
              <Separator className="flex-1 border-dotted" />
              <div className="px-4">
                <Scale className="text-[#e89a10] w-10 h-10" />
              </div>
              <Separator className="flex-1 border-dotted" />
            </div>

            <div className="text-gray-700 text-base md:text-lg leading-relaxed text-justify indent-8">
              <span className="font-bold text-[#0e1b3c]">
                บริษัท ทองรักนิติศรี จำกัด
              </span>{" "}
              ก่อตั้งขึ้นเมื่อปี พ.ศ. 2562 โดยเปิดเป็นสำนักงานกฎหมาย{" "}
              <span className="font-semibold">Pongsit Law Office</span>{" "}
              โดยการรวมตัวของทีมทนายความผู้เชี่ยวชาญจำนวน 3 ท่าน
              และทีมงานด้านการบังคับคดีมืออาชีพอีก 1 ท่าน
              ภายใต้วิสัยทัศน์มีความรู้ในด้านกฎหมาย
              ที่ให้บริการแบบครบวงจรและเปี่ยมด้วยความเป็นมืออาชีพพวกเราตั้งใจที่จะส่งมอบบริการที่ครอบคลุมตั้งแต่ขั้นตอนการให้คำปรึกษาทาง
              กฎหมายเชิงลึก การวิเคราะห์และวางแผน
              และแก้ปัญหาข้อพิพาทต่างๆที่อาจเกิดขึ้นแล้วได้การตรวจสอบและร่างข้อตกลงทางธุรกิจ
              ทุกประเภทการดำเนินการขอใบอนุญาตออกหนังสือทวงถามหนี้
              หนังสือรับรองต่างๆ และหนังสือรับรองเอกสารต่างประเทศ
              ตลอดจนการทำหน้าที่ว่า ความในคดีแพ่ง คดีอาญา คดีอาญาทุจริต
              คดีปกครอง คดีแรงงานและ การขอตั้งผู้จัดการมรดก รวมถึงการสืบหา
              ทรัพย์สินและการบังคับคดีเพื่อให้ลูกความได้รับผลประโยชน์สูงสุด
            </div>

            <div className="flex justify-center mt-6 mb-8">
              <Button
                asChild
                className="bg-[#e89a10] hover:bg-[#d68c0e] text-white px-8 transition-all shadow-md text-base"
              >
                <Link href="/about">
                  อ่านเพิ่มเติม
                </Link>
              </Button>
            </div>

            <div className="relative flex items-center justify-center mb-10">
              <Separator className="flex-1 border-dotted" />
              <div className="px-4">
                <Scale className="text-[#e89a10] w-10 h-10" />
              </div>
              <Separator className="flex-1 border-dotted" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px] md:auto-rows-[minmax(180px,auto)]">
              <CardContent className="p-0 h-full relative">
                <Image src={Pic1} alt="Team 1" className="w-full h-full object-cover rounded-xl" />
              </CardContent>
              <CardContent className="p-0 h-full relative">
                <Image src={Pic2} alt="Team 2" className="w-full h-full object-cover rounded-xl" />
              </CardContent>
              <Card className="row-span-2 overflow-hidden border-0 shadow-sm rounded-xl relative h-full min-h-75">
                <Image src={Pic3} alt="Team 3" fill className="object-cover" />
              </Card>
              <CardContent className="p-0 h-full relative">
                <Image src={Pic4} alt="Team 4" className="w-full h-full object-cover rounded-xl" />
              </CardContent>
              <Card className="row-span-2 overflow-hidden border-0 shadow-sm rounded-xl relative h-full min-h-75 md:col-start-2">
                <Image src={Pic7} alt="Team 7" fill className="object-cover" />
              </Card>
              <CardContent className="p-0 h-full relative">
                <Image src={Pic5} alt="Team 5" className="w-full h-full object-cover rounded-xl" />
              </CardContent>
              <CardContent className="p-0 h-full relative">
                <Image src={Pic6} alt="Team 6" className="w-full h-full object-cover rounded-xl" />
              </CardContent>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center sticky top-30 self-start">
            <Card className="w-full max-w-md shadow-xl border-4 border-double border-gray-200 bg-white rounded-sm overflow-hidden">
              <CardContent className="p-2">
                <AspectRatio ratio={3 / 4} className="relative w-full">
                  <Image
                    src={Certificate}
                    alt="Certificate"
                    fill
                    className="object-contain"
                  />
                </AspectRatio>
              </CardContent>
            </Card>

            <div className="text-center mt-6 space-y-1">
              <h3 className="text-[#1A3079] font-bold text-lg">
                หนังสือรับรอง สำนักงานกฎหมายลอว์เยอร์แมน
              </h3>
              <p className="text-[#5A5A5A] font-medium">
                (สภาทนายความในพระบรมราชูปถัมภ์)
              </p>
            </div>

            <div className="mt-8">
              <Button
                size="lg"
                className="bg-[#e89a10] hover:bg-[#d68c0e] text-white text-lg px-10 py-6 rounded-md shadow-lg font-semibold transition-all hover:shadow-xl"
              >
                ปรึกษากฎหมาย
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}