"use client";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { articleData,ArticleItem } from "@/data/Article";
import { useTranslate } from "@/utils/useTranslate";
import { useTranslations } from "next-intl";
interface OtherArticlesProps {
  currentId: number;
}

export default function OtherArticles({ currentId }: OtherArticlesProps) {
    const getLocalized = useTranslate<ArticleItem>();
    const t = useTranslations("Article");

  const otherItems = articleData.filter((item) => item.articleId !== currentId);

  if (otherItems.length === 0) return null;

  return (
    <section className="bg-[#1a3673] py-24 overflow-hidden">
      <div className="max-w-[1186px] mx-auto px-4 text-center">
        
        <div className="mb-12 space-y-4">
          <h4 className="text-[#e2991a] font-bold text-sm tracking-[0.3em] uppercase">
            {t("company_name")}
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t("article")} <span className="text-[#e2991a]">{t("our")}</span>
          </h2>
          
          <div className="relative flex items-center justify-center pt-8">
            <div className="absolute w-full border-t border-dotted border-white/40"></div>
            <div className="relative z-10 bg-[#1a3673] px-6">
              <div className="bg-[#e89a10] p-2.5 rounded-full shadow-lg border-2 border-white/20">
                <Scale className="w-5 h-5 text-[#1a3673]" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {otherItems.map((item) => (
            <div key={item.articleId} className="group bg-[#fff5f5] rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full text-center">
              <div className="relative h-44 w-full overflow-hidden">
                <Image src={item.listImage} alt={getLocalized(item,"title") } fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform group-hover:scale-110" />
              </div>

              <div className="relative px-5 pb-6 pt-10 flex flex-col flex-1 items-center justify-between">
                <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-[#fff5f5] p-1.5 rounded-full">
                  <div className="bg-amber-100 p-2 rounded-full border border-amber-200 shadow-sm">
                    <Scale className="w-6 h-6 text-amber-600" />
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="text-lg font-bold text-slate-800 line-clamp-2 leading-tight">
                    {getLocalized(item,"title") }
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {getLocalized(item,"subtitle") }
                  </p>
                </div>

                <Link href={{
                    pathname: "/article/[articleId]",
                    params: { articleId: item.articleId },
                  }} className="w-full">
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium uppercase rounded-md py-2 shadow-sm">
                     {t("details")}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}