"use client";
import { Award, Star, BarChart3 } from "lucide-react" 
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const services = [
  {
    icon: <Award className="w-16 h-16 text-[#FF9A00]" />,
    title: "บริการทางกฎหมายที่เป็นเลิศ",
    description: (
      <>
        บริการด้านกฎหมาย One Stop Service <br />
        วิสัยทัศน์และการวิเคราะห์เชิงลึกในทุกมิติทาง <br />
        กฎหมายที่เปลี่ยนแปลง
      </>
    ),
  },
  {
    icon: <Star className="w-16 h-16 text-[#FF9A00]" />,
    title: "ยืนหยัดเคียงข้างด้วยความทุ่มเท",
    description: "ไว้ใจทนายความ ปกป้องลูกความ",
  },
  {
    icon: <BarChart3 className="w-16 h-16 text-[#FF9A00]" />,
    title: "โซลูชันที่คุ้มค่าและทรงประสิทธิภาพ",
    description: (
      <>
        มุ่งมั่นในความสำเร็จ <br />
        งบประมาณที่สมเหตุสมผล <br />
        แก้ปัญหาที่ตรงจุดและยั่งยืน
      </>
    ),
  },
]

export default function ThreeRow() {
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
            {item.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2 pt-0">
          <p className="text-white text-center text-xs md:text-base opacity-90 leading-relaxed line-clamp-none">
            {item.description}
          </p>
        </CardContent>
      </Card>
    ))}
  </div>
</div>
  )
}