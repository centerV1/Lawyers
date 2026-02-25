import Image from "next/image";
import { ArticleItem } from "@/data/Article";
import { Facebook, Linkedin } from "lucide-react";
import { useTranslate } from "@/utils/useTranslate";
import { useTranslations } from "next-intl";
interface SingleArticleProps {
  article: ArticleItem;
}

export default function SingleArticle({ article }: SingleArticleProps) {
  const getLocalized = useTranslate<ArticleItem>();
  const t = useTranslations("Article");
  return (
    <section className="mt-12 pb-24">
      <div className="max-w-[1186px] mx-auto px-4">
        <div className="bg-[#f8f9fa] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <div className="relative w-full h-[500px]">
            <Image
              src={article.detailImage}
              alt={getLocalized(article, "title") || "article image"}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="p-8 md:p-12">
            <header className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                {getLocalized(article, "title")}
              </h2>
              <p className="text-xl text-[#e2991a] font-medium italic">
                {getLocalized(article, "subtitle")}
              </p>
            </header>

            <article className="prose prose-lg max-w-none text-slate-700 leading-relaxed mb-12">
              <p className="whitespace-pre-line text-justify">
                {getLocalized(article, "description")}
              </p>
            </article>

            <div className="flex flex-wrap gap-6 pt-10 border-t border-gray-200">
              <button className="flex items-center gap-3 bg-[#3b5998] text-white px-8 py-2.5 rounded shadow-md hover:bg-[#344e86] transition-all">
                <Facebook size={22} fill="white" />
                <span className="font-medium">Facebook</span>
              </button>

              <button className="flex items-center gap-3 bg-[#000000] text-white px-8 py-2.5 rounded shadow-md hover:bg-[#222222] transition-all">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="font-medium">Twitter</span>
              </button>

              <button className="flex items-center gap-3 bg-[#0077b5] text-white px-8 py-2.5 rounded shadow-md hover:bg-[#00669c] transition-all">
                <Linkedin size={22} fill="white" />
                <span className="font-medium">LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
