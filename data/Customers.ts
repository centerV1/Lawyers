export interface CustomerItem {
  id: number;
  image: string;
  title_th: string;
  title_en: string;
  description_th: string;
  description_en: string;
  [key: string]: string | number | undefined;
}

export const customersData = [
  {
    id: 1,
    image: "/customer-1.webp",
    title_th: "Lawyer Man & Partners",
    title_en: "Lawyer Man & Partners",
    description_th:
      "ภาพถ่ายของ Mr.Metapon Suwancharern หุ้นส่วนผู้จัดการกับลูกค้า",
    description_en: "Test",
  },
  {
    id: 2,
    image: "/customer-2.webp",
    title_th: "Lawyer Man & Partners",
    title_en: "Lawyer Man & Partners",
    description_th:
      "ภาพถ่ายของ Mr.Metapon Suwancharern หุ้นส่วนผู้จัดการกับลูกค้า",
    description_en: "Test",
  },
  {
    id: 3,
    image: "/customer-3.webp",
    title_th: "Lawyer Man & Partners",
    title_en: "Lawyer Man & Partners",
    description_th:
      "ภาพถ่ายของ Mr.Metapon Suwancharern หุ้นส่วนผู้จัดการกับลูกค้า",
    description_en:
      "ภาพถ่ายของ Mr.Metapon Suwancharern หุ้นส่วนผู้จัดการกับลูกค้า",
  },
  {
    id: 4,
    image: "/customer-4.webp",
    title_th: "Lawyer Man & Partners",
    title_en: "Lawyer Man & Partners",
    description_th: "ภาพถ่ายกลุ่มที่ 4",
    description_en: "ภาพถ่ายกลุ่มที่ 4",
  },
  {
    id: 5,
    image: "/customer-5.webp",
    title_th: "Lawyer Man & Partners",
    title_en: "Lawyer Man & Partners",
    description_th: "ภาพถ่ายกลุ่มที่ 5",
    description_en: "ภาพถ่ายกลุ่มที่ 5",
  },
];
