import { StaticImageData } from "next/image";
import Pic1 from "@/public/History.jpg";
import DetailPic1 from "@/public/Lawyer.jpg";

export interface ExperienceItem {
  experienceId: number;
  title_th: string;
  title_en: string;
  subtitle_th: string;
  subtitle_en: string;
  description_th: string;
  description_en: string;
  listImage: string | StaticImageData;
  detailImage: string | StaticImageData;
  [key: string]: string | number | StaticImageData | undefined;
}

export const experienceData = [
  {
    experienceId: 1,
    title_th: "การว่าความคดีแพ่ง",
    title_en: "Test",
    subtitle_th: "ตัวแทนทางกฎหมายคดีฆ่าหั่นศพเกาะพะงัน",
    subtitle_en: "Test",
    description_th: "ในด้านข้อพิพาททางกฎหมาย การดำเนินคดีแพ่งมีบทบาทสำคัญ... ",
    description_en: "Test ",
    listImage: Pic1,
    detailImage: DetailPic1,
  },
  {
    experienceId: 2,
    title_th: "การว่าความคดีแพ่ง",
    title_en: "การว่าความคดีแพ่ง",
    subtitle_th: "ตัวแทนทางกฎหมายคดีฆ่าหั่นศพเกาะพะงัน",
    subtitle_en: "ตัวแทนทางกฎหมายคดีฆ่าหั่นศพเกาะพะงัน",
    description_th: "ในด้านข้อพิพาททางกฎหมาย การดำเนินคดีแพ่งมีบทบาทสำคัญ... ",
    description_en: "ในด้านข้อพิพาททางกฎหมาย การดำเนินคดีแพ่งมีบทบาทสำคัญ... ",
    listImage: Pic1,
    detailImage: DetailPic1,
  },
  {
    experienceId: 3,
    title_th: "การว่าความคดีแพ่ง",
    title_en: "การว่าความคดีแพ่ง",
    subtitle_th: "ตัวแทนทางกฎหมายคดีฆ่าหั่นศพเกาะพะงัน",
    subtitle_en: "ตัวแทนทางกฎหมายคดีฆ่าหั่นศพเกาะพะงัน",
    description_th: "ในด้านข้อพิพาททางกฎหมาย การดำเนินคดีแพ่งมีบทบาทสำคัญ... ",
    description_en: "ในด้านข้อพิพาททางกฎหมาย การดำเนินคดีแพ่งมีบทบาทสำคัญ... ",
    listImage: Pic1,
    detailImage: DetailPic1,
  },
  {
    experienceId: 4,
    title_th: "การว่าความคดีแพ่ง",
    title_en: "การว่าความคดีแพ่ง",
    subtitle_th: "ตัวแทนทางกฎหมายคดีฆ่าหั่นศพเกาะพะงัน",
    subtitle_en: "ตัวแทนทางกฎหมายคดีฆ่าหั่นศพเกาะพะงัน",
    description_th: "ในด้านข้อพิพาททางกฎหมาย การดำเนินคดีแพ่งมีบทบาทสำคัญ... ",
    description_en: "ในด้านข้อพิพาททางกฎหมาย การดำเนินคดีแพ่งมีบทบาทสำคัญ... ",
    listImage: Pic1,
    detailImage: DetailPic1,
  },
  {
    experienceId: 5,
    title_th: "การว่าความคดีแพ่ง",
    title_en: "การว่าความคดีแพ่ง",
    subtitle_th: "ตัวแทนทางกฎหมายคดีฆ่าหั่นศพเกาะพะงัน",
    subtitle_en: "ตัวแทนทางกฎหมายคดีฆ่าหั่นศพเกาะพะงัน",
    description_th: "ในด้านข้อพิพาททางกฎหมาย การดำเนินคดีแพ่งมีบทบาทสำคัญ... ",
    description_en: "ในด้านข้อพิพาททางกฎหมาย การดำเนินคดีแพ่งมีบทบาทสำคัญ... ",
    listImage: Pic1,
    detailImage: DetailPic1,
  },
];
