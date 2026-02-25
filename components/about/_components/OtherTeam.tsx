import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { teamData } from "@/data/Team";
import { useTranslate } from "@/utils/useTranslate";
import { useTranslations } from "next-intl";

export default function OtherTeam({ currentId }: { currentId: number }) {
  const others = teamData.filter((m) => m.aboutId !== currentId).slice(0, 4);
  const getLocalized = useTranslate();
  const t = useTranslations("AboutUs");
  return (
    <section className="w-full py-24 bg-[#E1E8ED] font-sans">
      <div className="max-w-[1186px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-[#e2991a] mb-2">
            THONGRAK NITISRI LAW
          </p>
          <h2 className="text-5xl font-bold mb-8">
            <span className="text-[#1a3673]">{t("our")}</span>{" "}
            <span className="text-[#e2991a]">{t("team")}</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 border-t border-dotted border-[#a1a1a1]"></div>
            <div className="flex-none bg-transparent">
              <Scale className="w-8 h-8 text-[#e2991a]" />
            </div>
            <div className="flex-1 border-t border-dotted border-[#a1a1a1]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((member) => (
            <Link
              href={{
                    pathname: "/about/[aboutId]",
                    params: { aboutId: member.aboutId },
                  }}
              key={member.aboutId}
              className="group"
            >
              <div className="group bg-[#fff5f5] rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={getLocalized(member, "name")}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110 object-top"
                  />
                </div>
                <div className="relative px-5 pb-6 pt-10 text-center flex flex-col flex-1 items-center justify-between bg-[#fff5f5]">
                  <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-[#fff5f5] p-1.5 rounded-full z-10">
                    <div className="bg-[#E39B16] p-2 rounded-full border-2 border-white shadow-sm">
                      <Scale className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2 mb-6 mt-2">
                    <h4 className="text-lg font-bold text-[#1A3079] line-clamp-2 leading-tight">
                     {getLocalized(member, "name")}
                    </h4>
                    <p className="text-xs text-[#E39B16] font-bold uppercase tracking-wider">
                      {getLocalized(member, "role")}
                    </p>
                  </div>
                  <Button className="w-full bg-[#E39B16] text-white text-[10px] h-8 uppercase" >
                    {t("details")}
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
