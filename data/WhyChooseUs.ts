import { Scale, GraduationCap, FileSignature } from "lucide-react";
import React from "react";

export interface WhyChooseUsItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const whyChooseUsData: WhyChooseUsItem[] = [
  {
    icon: React.createElement(GraduationCap, { className: "w-16 h-16 mb-4" }),
    title: "ความเชี่ยวชาญจากประสบการณ์ที่หลากหลาย",
    description: "รู้ทันการเปลี่ยนแปลงของ กฎหมายและโลกธุรกิจด้านกฎหมายทุกมิติ",
  },
  {
    icon: React.createElement(FileSignature, { className: "w-16 h-16 mb-4" }),
    title: "ยึดถือความสำเร็จของลูกความเป็นหัวใจสำคัญ",
    description: "ไว้ใจ ใส่ใจ แม่นยำ ด้านกฎหมายที่เปลี่ยนแปลง",
  },
  {
    icon: React.createElement(Scale, { className: "w-16 h-16 mb-4" }),
    title: "มาตรฐานการบริการระดับสากลและ ความได้เปรียบเชิงกลยุทธ์",
    description: "เข้าใจโครงสร้างทางกฎหมาย งบประมาณที่สมเหตุสมผล แก้ปัญหาที่ตรงจุดและยั่งยืน",
  },
];