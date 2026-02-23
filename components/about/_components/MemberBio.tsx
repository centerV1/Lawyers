// components/Team/component/MemberBio.tsx
import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TeamMember } from "@/data/Team";
import { useTranslate } from "@/utils/useTranslate";
import { useTranslations } from "next-intl";

export default function MemberBio({ member }: { member: TeamMember }) {
  const getLocalized = useTranslate();
  const t = useTranslations("AboutUs");
  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-[1186px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-16 items-start">
        
        <div className="flex flex-col">
          <div className="space-y-2 mb-8 text-left">
            <h2 className="text-5xl font-bold text-[#1A3079] tracking-tight leading-tight">
              {getLocalized(member, "name")}
            </h2>
            <p className="text-2xl font-bold text-[#E39B16]">
               {getLocalized(member, "role")}
            </p>
          </div>

          <div className="text-[#1E1E1E] leading-relaxed text-lg whitespace-pre-line mb-10 text-justify">
             {getLocalized(member, "bio")}
          </div>

          <Button className="w-full bg-[#E39B16] hover:bg-[#cf890d] text-white py-7 text-lg font-bold rounded-md shadow-lg transition-all">
            {t("contract")}
          </Button>
        </div>

        <div className="relative w-full">
          <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden shadow-2xl bg-slate-100">
            <Image
              src={member.image}
              alt={getLocalized(member, "name") || ""}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          
          <div className="absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 pr-8 shadow-2xl rounded-lg flex items-center gap-4 min-w-[340px]">
            <div className="bg-[#E39B16] p-4 rounded-lg text-white">
              <Phone />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#1A3079]">+66 96-916-4251</p>
              <p className="text-base text-black font-medium"> {t("contract2")}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}