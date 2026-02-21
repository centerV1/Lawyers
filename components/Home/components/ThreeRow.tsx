"use client";
import { Award, Star, BarChart3 } from "lucide-react" 
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useTranslate } from "@/utils/useTranslate";

const services = [
  {
    icon: <Award className="w-16 h-16 text-[#FF9A00]" />,
    title_th: "บริการทางกฎหมายที่เป็นเลิศ",
    title_en: "Excellent Legal Services",
    description_th: "บริการด้านกฎหมาย One Stop Service\nวิสัยทัศน์และการวิเคราะห์เชิงลึกในทุกมิติทาง\nกฎหมายที่เปลี่ยนแปลง",
    description_en: "One-Stop Legal Services\nVision and in-depth analysis across all dimensions of changing laws",
  },
  {
    icon: <Star className="w-16 h-16 text-[#FF9A00]" />,
    title_th: "ยืนหยัดเคียงข้างด้วยความทุ่มเท",
    title_en: "Standing By You With Dedication",
    description_th: "ไว้ใจทนายความ ปกป้องลูกความ",
    description_en: "Trust our lawyers, protecting our clients",
  },
  {
    icon: <BarChart3 className="w-16 h-16 text-[#FF9A00]" />,
    title_th: "โซลูชันที่คุ้มค่าและทรงประสิทธิภาพ",
    title_en: "Cost-Effective & Efficient Solutions",
    description_th: "มุ่งมั่นในความสำเร็จ\nงบประมาณที่สมเหตุสมผล\nแก้ปัญหาที่ตรงจุดและยั่งยืน",
    description_en: "Committed to success\nReasonable budget\nPrecise and sustainable problem-solving",
  },
]

export default function ThreeRow() {

  const getLocalized = useTranslate();

  return (
<div className="container max-w-6xl mx-auto px-2 py-6 ">
  
  <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
    
    {services.map((item, index) => (
      <Card 
        key={index} 
        className="col-span-1 last:col-span-2 md:last:col-span-1 bg-[#1A3079] border-none shadow-lg h-full flex flex-col justify-start py-4 px-2 md:py-6"
      >
        <CardHeader className="pb-1 md:pb-0 p-0"> 
          <div className="flex justify-center scale-75 md:scale-100"> 
            {item.icon}
          </div>
      
          <CardTitle className="text-[#FF9A00] text-sm md:text-lg font-bold text-center leading-tight">
              {getLocalized(item,'title')}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2 pt-0">
          <p className="whitespace-pre-line text-white text-center text-xs md:text-base opacity-90 leading-relaxed line-clamp-none">
            {getLocalized(item,'description')}
          </p>
        </CardContent>
      </Card>
    ))}
  </div>
</div>
  )
}