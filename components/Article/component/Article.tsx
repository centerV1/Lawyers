"use client";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { articleData,ArticleItem } from "@/data/Article";
import { useTranslate } from "@/utils/useTranslate";
import { useTranslations } from "next-intl";

export default function ArticleList() {
  const getLocalized = useTranslate<ArticleItem>();
  const t = useTranslations("Article");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1186px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articleData.map((item) => (
            <div
              key={item.articleId}
              className="flex flex-col bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={item.listImage}
                  alt={getLocalized(item,"title") || "article image"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-xl font-bold text-[#1a3673] mb-3 line-clamp-2">
                  {getLocalized(item,"title") }
                </h4>
                <p className="text-slate-500 text-sm mb-6 line-clamp-3">
                  {getLocalized(item,"excerpt") }
                </p>
                <div className="mt-auto">
                  <Link href={{
                    pathname: "/article/[articleId]",
                    params: { articleId: item.articleId },
                  }}>
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium uppercase rounded-md py-2 shadow-sm">
                      {t("details")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
