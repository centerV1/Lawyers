"use client";

import { Scale, GraduationCap, FileSignature } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function WhyWe() {
  const features = [
    {
      icon: <GraduationCap className="w-16 h-16 mb-4" />,
      title: "ความเชี่ยวชาญจากประสบการณ์ที่หลากหลาย",
      description:
        "รู้ทันการเปลี่ยนแปลงของ กฎหมายและโลกธุรกิจด้านกฎหมายทุกมิติ",
    },
    {
      icon: <FileSignature className="w-16 h-16 mb-4" />,
      title: "ยึดถือความสำเร็จของลูกความเป็นหัวใจสำคัญ",
      description: "ไว้ใจ ใส่ใจ แม่นยำ ด้านกฎหมายที่เปลี่ยนแปลง",
    },
    {
      icon: <Scale className="w-16 h-16 mb-4" />,
      title: "มาตรฐานการบริการระดับสากลและ ความได้เปรียบเชิงกลยุทธ์",
      description:
        "เข้าใจโครงสร้างทางกฎหมาย งบประมาณที่สมเหตุสมผล แก้ปัญหาที่ตรงจุดและยั่งยืน",
    },
  ];

  return (
    <section className="w-full min-h-100 bg-[#1A3079]/90 py-16 px-4 md:px-12 flex flex-col items-center justify-center font-sans">
      <div className="text-center mb-10 w-full container max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-[#dea947] mb-8 drop-shadow-md">
          ทำไมต้องเลือกพวกเรา ?
        </h2>

        <div className="relative flex items-center justify-center mb-10">
          <Separator className="flex-1 border-dotted" />
          <div className="px-4">
            <Scale className="text-[#e89a10] w-10 h-10" />
          </div>
          <Separator className="flex-1 border-dotted" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="bg-[#dea947] border-none text-[#1A3079] shadow-lg transition-transform duration-300 h-full flex flex-col items-center text-center py-8 px-2"
          >
            <CardHeader className="flex flex-col items-center pb-2">
              <div className="text-[#1A3079]">{feature.icon}</div>
            </CardHeader>
            <CardTitle className="text-lg font-bold leading-tight px-10">
              {feature.title}
            </CardTitle>
            <CardContent>
              <p className="text-sm md:text-base font-bold opacity-90 leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
