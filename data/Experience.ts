import { StaticImageData } from "next/image";
import Pic1 from "@/public/History.jpg"; 
import DetailPic1 from "@/public/Lawyer.jpg"; 

export interface ExperienceItem {
  id: number;
  title: string;      
  subtitle: string;   
  description: string;
  listImage: string | StaticImageData;   
  detailImage: string | StaticImageData;
}

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "การว่าความคดีแพ่ง",
    subtitle: "ตัวแทนทางกฎหมายคดีฆ่าหั่นศพเกาะพะงัน",
    description: "ในด้านข้อพิพาททางกฎหมาย การดำเนินคดีแพ่งมีบทบาทสำคัญ... ",
    listImage: Pic1,
    detailImage: DetailPic1,
  },
  {
    id: 2,
    title: "การว่าความคดีแพ่ง",
    subtitle: "ตัวแทนทางกฎหมายคดีฆ่าหั่นศพเกาะพะงัน",
    description: "ในด้านข้อพิพาททางกฎหมาย การดำเนินคดีแพ่งมีบทบาทสำคัญ... ",
    listImage: Pic1,
    detailImage: DetailPic1,
  },
  {
    id: 3,
    title: "การว่าความคดีแพ่ง",
    subtitle: "ตัวแทนทางกฎหมายคดีฆ่าหั่นศพเกาะพะงัน",
    description: "ในด้านข้อพิพาททางกฎหมาย การดำเนินคดีแพ่งมีบทบาทสำคัญ... ",
    listImage: Pic1,
    detailImage: DetailPic1,
  },
  {
    id: 4,
    title: "การว่าความคดีแพ่ง",
    subtitle: "ตัวแทนทางกฎหมายคดีฆ่าหั่นศพเกาะพะงัน",
    description: "ในด้านข้อพิพาททางกฎหมาย การดำเนินคดีแพ่งมีบทบาทสำคัญ... ",
    listImage: Pic1,
    detailImage: DetailPic1,
  },
  {
    id: 5,
    title: "การว่าความคดีแพ่ง",
    subtitle: "ตัวแทนทางกฎหมายคดีฆ่าหั่นศพเกาะพะงัน",
    description: "ในด้านข้อพิพาททางกฎหมาย การดำเนินคดีแพ่งมีบทบาทสำคัญ... ",
    listImage: Pic1,
    detailImage: DetailPic1,
  },
];