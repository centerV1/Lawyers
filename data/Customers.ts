export interface CustomerItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const customersData: CustomerItem[] = [
  { 
    id: 1, 
    image: "/customer-1.png", 
    title: "Lawyer Man & Partners", 
    description: "ภาพถ่ายของ Mr.Metapon Suwancharern หุ้นส่วนผู้จัดการกับลูกค้า" 
  },
  { 
    id: 2, 
    image: "/customer-2.png", 
    title: "Lawyer Man & Partners", 
    description: "ภาพถ่ายของ Mr.Metapon Suwancharern หุ้นส่วนผู้จัดการกับลูกค้า" 
  },
  { 
    id: 3, 
    image: "/customer-3.png", 
    title: "Lawyer Man & Partners", 
    description: "ภาพถ่ายของ Mr.Metapon Suwancharern หุ้นส่วนผู้จัดการกับลูกค้า" 
  },
  { 
    id: 4, 
    image: "/customer-4.png", 
    title: "Lawyer Man & Partners", 
    description: "ภาพถ่ายกลุ่มที่ 4" 
  },
  { 
    id: 5, 
    image: "/customer-5.png", 
    title: "Lawyer Man & Partners", 
    description: "ภาพถ่ายกลุ่มที่ 5" 
  },
];