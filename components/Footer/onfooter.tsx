"use client";
import Image from "next/image";
import Lawyer from "../../public/Lawyer.webp";
import { Button } from "@/components/ui/button"; 
import { Separator } from "@/components/ui/separator";
import { Scale, Phone, Mail } from "lucide-react"; 
import { useTranslations } from "next-intl";

export default function OnFooter() {

  const t = useTranslations("Footer")

  return (
    <section className="relative w-full h-150 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={Lawyer}
          alt="Lawyer Office Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1e2336]/90 mix-blend-multiply" />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center text-white space-y-6">
        <h3 className="text-[#e89a10] font-bold tracking-widest text-sm md:text-base uppercase mb-2">
          Thongrak Nitisri Lawfirm
        </h3>

        <div className="space-y-2">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            {t("trust")}
          </h1>
          <h2 className="text-xl md:text-3xl font-medium">
            {t("reslove")}
          </h2>
        </div>

        <div className="w-full max-w-xs md:max-w-md py-4 flex items-center">
          <Separator className="flex-1 border-dotted" />
          <div className="px-4">
            <Scale className="text-[#e89a10] w-10 h-10" />
          </div>
          <Separator className="flex-1 border-dotted" />
        </div>

        <p className="text-lg md:text-xl text-gray-200 mb-4">
          {t("protect")}
        </p>

        <Button className="w-full max-w-md bg-[#e89a10] hover:bg-amber-600 text-white h-12 text-lg rounded-md font-medium transition-colors duration-200">
          {t("contractus")}
        </Button>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-8 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#e89a10]" />
            <span>+66 999488789</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#e89a10]" />
            <span>pongsitlawoffice@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
