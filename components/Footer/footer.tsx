import { Mail, MapPin, Phone, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Logo } from "../Logo/logo";

const services = [
  { name: "ทนายความคดีแพ่ง", href: "#" },
  { name: "คดีฟ้องร้อง / ต่อสู้คดี", href: "#" },
  { name: "ทนายความคดีอาญา", href: "#" },
  { name: "บังคับคดี / สืบทรัพย์", href: "#" },
  { name: "ทนายความคดีล้มละลาย", href: "#" },
  { name: "กฎหมายแรงงาน", href: "#" },
  { name: "ทนายความทรัพย์สินทางปัญญา", href: "#" },
  { name: "จดทะเบียนนิติบุคคล", href: "#" },
  { name: "ที่ปรึกษากฎหมายธุรกิจ", href: "#" },
  { name: "พินัยกรรม / จัดการมรดก", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#1e2e6e]/99 text-white pt-16 pb-8 font-sans">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          

          <div className="lg:col-span-5 flex flex-col gap-6">
            <Link href="/" className="inline-block w-fit">

              <Logo uniColor={true} />
            </Link>
            
            <div className="flex flex-col gap-5 text-sm font-light text-gray-300 mt-2">

              <div className="flex items-center gap-3">
                <div className="bg-[#e89a10] p-1.5 rounded-sm shrink-0">
                   <Mail className="h-4 w-4 text-white" />
                </div>
                <span>pongsitlawoffice@gmail.com</span>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-[#e89a10] p-1.5 rounded-sm shrink-0 mt-1">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="leading-relaxed">
                  102/8 หมู่ 5 ตำบล หนองจะบก อำเภอเมืองนครราชสีมา <br/>จังหวัดนครราชสีมา 30000
                </span>
              </div>

              <div className="flex items-start gap-3">
                 <div className="bg-[#e89a10] p-1.5 rounded-sm shrink-0 mt-1">
                   <MapPin className="h-4 w-4 text-white" />
                 </div>
                <span className="leading-relaxed">
                  199/70 หมู่ 4 ตำบล บางเดื่อ อำเภอเมือง <br/>จังหวัดปทุมธานี 12000
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 pl-0 lg:pl-8">
            <h3 className="text-xl font-medium mb-6">บริการของเรา</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                  <ChevronRight className="h-4 w-4 text-[#e89a10] mt-0.5 shrink-0" />
                  <Link href={service.href} className="hover:text-[#e89a10] transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
             <h3 className="text-xl font-medium mb-6 lg:hidden">ติดต่อเรา</h3>
             <a href="tel:+66999488789" className="group block">
                <div className="bg-[#e89a10] rounded-md p-4 flex items-center gap-4 text-white shadow-lg hover:bg-[#d68c0e] transition-all duration-300">
                    <div className="bg-[#0e1b3c] p-3 rounded-md shrink-0 group-hover:bg-[#1a2d5c] transition-colors">
                    <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                    <div className="text-lg font-bold tracking-wide">+66 999488789</div>
                    <div className="text-xs font-medium text-white/90">ติดต่อบริการด้านกฎหมาย</div>
                    </div>
                </div>
             </a>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center gap-2 text-xs text-gray-400">
           <span className="text-[#e89a10]">&copy;</span>
           <span>{new Date().getFullYear()} THONGRAK NITISRI LAW Co., LTD. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;