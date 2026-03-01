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
    title_th: "การปรึกษาด้านธุรกิจและการจดทะเบียนบริษัท",
    title_en: "Business Consulting and Company Registration",
    description_th:
      "ทีมทนายความให้คำแนะนำขั้นตอนทางกฎหมายแก่ลูกความชาวต่างชาติ ในการจัดตั้งบริษัท จดทะเบียนการค้า และการทำสัญญาร่วมทุนในประเทศไทย",
    description_en: "Our legal team provided comprehensive guidance to a foreign client on the legal procedures for establishing a company, registering a business, and drafting joint venture agreements in Thailand.",
  },
  {
    id: 2,
    image: "/customer-2.webp",
    title_th: "การทำนิติกรรมและซื้อขายอสังหาริมทรัพย์",
    title_en: "Property Transactions and Legal Services",
    description_th:
      "การประชุมเพื่อตรวจสอบสัญญา ตรวจสอบเอกสารสิทธิ์ และให้คำปรึกษาเกี่ยวกับการเช่าหรือซื้อขายที่ดินและที่อยู่อาศัยสำหรับชาวต่างชาติ",
    description_en: "Our legal team provided comprehensive guidance to a foreign client on property transactions, title document verification, and legal advice regarding land and residential purchases or rentals in Thailand.",
  },
  {
    id: 3,
    image: "/customer-3.webp",
    title_th: "การจัดการเรื่องวีซ่าและใบอนุญาตทำงาน (Work Permit)",
    title_en: "Visa and Work Permit Management",
    description_th:
      "ทนายความและทีมงานช่วยลูกความตรวจสอบเอกสารและวางแผนขั้นตอนการขอวีซ่าพำนักระยะยาว รวมถึงใบอนุญาตทำงานในไทยให้ถูกต้องตามกฎหมาย",
    description_en:
      "Our legal team helped a client verify documents and plan the process for obtaining a long-term visa and work permit in Thailand.",
  },
  {
    id: 4,
    image: "/customer-4.webp",
    title_th: "การทำสัญญาก่อนสมรสและกฎหมายครอบครัว",
    title_en: "Pre-Marriage Contracts and Family Law",
    description_th: "การเจรจาและให้คำปรึกษาแบบส่วนตัวเกี่ยวกับการจัดการทรัพย์สิน การทำสัญญา Prenuptial Agreement หรือข้อกฎหมายครอบครัวระหว่างประเทศ",
    description_en: "Our legal team provided personalized consultation on asset management, prenuptial agreements, and international family law matters.",
  },
  {
    id: 5,
    image: "/customer-5.webp",
    title_th: "การตรวจทานสัญญาและไกล่เกลี่ยข้อพิพาท",
    title_en: "Contract Review and Dispute Resolution",
    description_th: "ทีมงานร่วมกันตรวจสอบรายละเอียดและเงื่อนไขในเอกสารสัญญาต่างๆ เพื่อปกป้องผลประโยชน์สูงสุดและป้องกันข้อพิพาทให้แก่ลูกความ",
    description_en: "Our legal team reviewed and analyzed various contracts to protect our clients' interests and prevent disputes.",
  },
];
