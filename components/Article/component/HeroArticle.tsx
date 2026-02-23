import Image from "next/image";
import { Scale } from "lucide-react";
import { ArticleItem } from "@/data/Article";
interface SingleArticleProps {
  article: ArticleItem;
}
import { useTranslate } from "@/utils/useTranslate";
import { useTranslations } from "next-intl";

export default function HeroArticle({ article }: SingleArticleProps) {
  const getLocalized = useTranslate<ArticleItem>();
  const t = useTranslations("Article");
  return (
    <section className="relative h-200 w-full flex flex-col items-center justify-center overflow-hidden ">
      <div className="absolute inset-0 z-0">
        <Image
          src="/law-hero.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#4F200D]/85 mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full max-w-[1184px] mx-auto px-6 flex flex-col items-center text-center text-white">
        <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#e2991a] mb-6">
           {t("company_name")}
        </h3>
        <Scale className="h-12 w-12 text-[#e2991a] mb-8" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
           {t("service")}
        </h1>
        <p className="max-w-2xl text-lg text-slate-200 mb-16">
          {t("help")}
        </p>
        <h2 className="text-5xl font-bold mb-8 text-[#e2991a]">
          {getLocalized(article,"title") }
        </h2>
        <div className="flex items-center justify-center w-full max-w-md gap-4">
          <div className="h-px bg-[#e2991a]/50 flex-1"></div>
          <Scale className="h-6 w-6 text-[#e2991a]" />
          <div className="h-px bg-[#e2991a]/50 flex-1"></div>
        </div>
      </div>
    </section>
  );
}
