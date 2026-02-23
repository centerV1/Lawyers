import { StaticImageData } from "next/image";
import Pic1 from "@/public/History.jpg";

export interface ArticleItem {
  articleId: number;
  title_th: string;
  title_en: string;
  subtitle_th: string;
  subtitle_en: string;
  excerpt_th: string;
  excerpt_en: string;
  description_th: string;
  description_en: string;
  listImage: string | StaticImageData;
  detailImage: string | StaticImageData;
  [key: string]: string | number | StaticImageData | undefined;
}

export const articleData = [
  {
    articleId: 1,
    title_th: "7 กลยุทธ์การวางแผนภาษี SME, ภาษีธุรกิจไทย",
    title_en: "Test",
    subtitle_th: "ช่วยประหยัดเงินในกระเป๋าคุณ",
    subtitle_en: "Test",
    excerpt_th: "ในโลกธุรกิจที่มีการแข่งขันสูงและซับซ้อนมากขึ้นเรื่อยๆ ก...",
    excerpt_en: "Test...",
    description_th: "เนื้อหาบทความแบบเต็มของคุณ...",
    description_en: "Test...",
    listImage: Pic1,
    detailImage: Pic1,
  },
  {
    articleId: 2,
    title_th: "7 กลยุทธ์การวางแผนภาษี SME, ภาษีธุรกิจไทย",
    title_en: "7 กลยุทธ์การวางแผนภาษี SME, ภาษีธุรกิจไทย",
    subtitle_th: "ช่วยประหยัดเงินในกระเป๋าคุณ",
    subtitle_en: "ช่วยประหยัดเงินในกระเป๋าคุณ",
    excerpt_th: "ในโลกธุรกิจที่มีการแข่งขันสูงและซับซ้อนมากขึ้นเรื่อยๆ ก...",
    excerpt_en: "ในโลกธุรกิจที่มีการแข่งขันสูงและซับซ้อนมากขึ้นเรื่อยๆ ก...",
    description_th: "เนื้อหาบทความแบบเต็มของคุณ...",
    description_en: "เนื้อหาบทความแบบเต็มของคุณ...",
    listImage: Pic1,
    detailImage: Pic1,
  },
  {
    articleId: 3,
    title_th: "7 กลยุทธ์การวางแผนภาษี SME, ภาษีธุรกิจไทย",
    title_en: "7 กลยุทธ์การวางแผนภาษี SME, ภาษีธุรกิจไทย",
    subtitle_th: "ช่วยประหยัดเงินในกระเป๋าคุณ",
    subtitle_en: "ช่วยประหยัดเงินในกระเป๋าคุณ",
    excerpt_th: "ในโลกธุรกิจที่มีการแข่งขันสูงและซับซ้อนมากขึ้นเรื่อยๆ ก...",
    excerpt_en: "ในโลกธุรกิจที่มีการแข่งขันสูงและซับซ้อนมากขึ้นเรื่อยๆ ก...",
    description_th: "เนื้อหาบทความแบบเต็มของคุณ...",
    description_en: "เนื้อหาบทความแบบเต็มของคุณ...",
    listImage: Pic1,
    detailImage: Pic1,
  },
];
