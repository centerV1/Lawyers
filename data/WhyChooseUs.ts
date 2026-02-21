import { Scale, GraduationCap, FileSignature } from "lucide-react";
import React from "react";

export interface WhyChooseUsItem {
  icon: React.ReactNode;
  title_th: string;
  title_en: string;
  description_th: string;
  description_en: string;
  [key: string]: string | number | React.ReactNode | undefined;
}

export const whyChooseUsData = [
  {
    icon: React.createElement(GraduationCap, { className: "w-16 h-16 mb-4" }),
    title_th: "ความเชี่ยวชาญจากประสบการณ์ที่หลากหลาย",
    title_en: "Expertise from diverse experiences",
    description_th:
      "รู้ทันการเปลี่ยนแปลงของ กฎหมายและโลกธุรกิจด้านกฎหมายทุกมิติ",
    description_en:
      "Stay informed about changes in the legal and business world, covering all aspects of law",
  },
  {
    icon: React.createElement(FileSignature, { className: "w-16 h-16 mb-4" }),
    title_th: "ยึดถือความสำเร็จของลูกความเป็นหัวใจสำคัญ",
    title_en: "Prioritizing the success of one's children is paramount",
    description_th: "ไว้ใจ ใส่ใจ แม่นยำ ด้านกฎหมายที่เปลี่ยนแปลง",
    description_en: "Trust, attention, and accuracy in adapting to changing legal landscape",
  },
  {
    icon: React.createElement(Scale, { className: "w-16 h-16 mb-4" }),
    title_th: "มาตรฐานการบริการระดับสากลและ ความได้เปรียบเชิงกลยุทธ์",
    title_en: "International service standards and strategic advantages",
    description_th:
      "เข้าใจโครงสร้างทางกฎหมาย งบประมาณที่สมเหตุสมผล แก้ปัญหาที่ตรงจุดและยั่งยืน",
    description_en:
      "Understanding legal structures and reasonable budgets leads to targeted and sustainable solutions",
  },
];
