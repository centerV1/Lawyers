import { StaticImageData } from "next/image";
import Pic1 from "@/public/History.jpg"; 

export interface ArticleItem {
  id: number;
  title: string;
  subtitle: string;
  excerpt: string;    
  description: string; 
  listImage: string | StaticImageData;
  detailImage: string | StaticImageData;
}

export const articleData: ArticleItem[] = [
  {
    id: 1,
    title: "7 กลยุทธ์การวางแผนภาษี SME, ภาษีธุรกิจไทย",
    subtitle: "ช่วยประหยัดเงินในกระเป๋าคุณ",
    excerpt: "ในโลกธุรกิจที่มีการแข่งขันสูงและซับซ้อนมากขึ้นเรื่อยๆ ก...",
    description: "เนื้อหาบทความแบบเต็มของคุณ...",
    listImage: Pic1,
    detailImage: Pic1,
  },
  {
    id: 2,
    title: "7 กลยุทธ์การวางแผนภาษี SME, ภาษีธุรกิจไทย",
    subtitle: "ช่วยประหยัดเงินในกระเป๋าคุณ",
    excerpt: "ในโลกธุรกิจที่มีการแข่งขันสูงและซับซ้อนมากขึ้นเรื่อยๆ ก...",
    description: "เนื้อหาบทความแบบเต็มของคุณ...",
    listImage: Pic1,
    detailImage: Pic1,
  },
  {
    id: 3,
    title: "7 กลยุทธ์การวางแผนภาษี SME, ภาษีธุรกิจไทย",
    subtitle: "ช่วยประหยัดเงินในกระเป๋าคุณ",
    excerpt: "ในโลกธุรกิจที่มีการแข่งขันสูงและซับซ้อนมากขึ้นเรื่อยๆ ก...",
    description: "เนื้อหาบทความแบบเต็มของคุณ...",
    listImage: Pic1,
    detailImage: Pic1,
  },

];