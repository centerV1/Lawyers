import Image from "next/image";
import { ArticleItem, ArticleSection } from "@/data/Article";
import { Facebook, Linkedin } from "lucide-react";
import { useTranslate } from "@/utils/useTranslate";
import { useTranslations, useLocale } from "next-intl"

interface SingleArticleProps {
  article: ArticleItem;
}

export default function SingleArticle({ article }: SingleArticleProps) {
  const getLocalized = useTranslate<ArticleItem>();
  const t = useTranslations("Article");
  const locale = useLocale();

  const description = getLocalized(article, "description");

  const sections = article[`sections_${locale}`] as ArticleSection[] | undefined;
  const conclusion = article[`conclusion_${locale}`] as string[] | undefined;

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
              <h2 className="text-3xl font-semibold text-[#1E1E1E] mb-8">
                {getLocalized(article, "title")}
              </h2>
              <p className="text-lg text-[#5A5A5A] font-medium mb-3">
                {getLocalized(article, "excerpt")}
              </p>
              <p className="text-lg text-[#5A5A5A] font-medium">
                {getLocalized(article, "subtitle")}
              </p>
            </header>

            <article className="prose prose-lg max-w-none text-slate-700 leading-relaxed mb-12">
              {description && (
                <p className="whitespace-pre-line text-justify mb-8">
                  {description}
                </p>
              )}

              {sections &&
                sections.map((section) => (
                  <div key={section.id} className="mb-10">
                    <h3 className="text-2xl font-semibold text-[#1A3079] mb-4">
                      {section.heading}
                    </h3>
                    {section.paragraphs &&
                      section.paragraphs.map((paragraph, idx) => (
                        <p key={idx} className="text-base text-[#5A5A5A] mb-4">
                          {paragraph}
                        </p>
                      ))}
                    {section.listItems && (
                      <ul className=" list-inside space-y-3 mt-4 ml-4">
                        {section.listItems.map((item, idx) => (
                          <li key={idx} className="text-base text-[#5A5A5A]">
                            {item.title && (
                              <strong className="text-[#1E1E1E] font-semibold mr-1">
                                {item.title}:
                              </strong>
                            )}
                            <span>{item.description}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

              {conclusion && (
                <div className="mt-12 p-8 bg-[#f0f4f8] rounded-r-lg">
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">
                    {locale === "th" ? "บทสรุป" : "Conclusion"}
                  </h4>
                  {conclusion.map((paragraph, idx) => (
                    <p key={idx} className="text-justify mb-3 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </article>

            <div className="flex flex-wrap gap-6 pt-10 border-t border-gray-200">
              <button className="flex items-center gap-3 bg-[#3b5998] text-white px-8 py-2.5 rounded shadow-md hover:bg-[#344e86] transition-all">
                <Facebook size={22} fill="white" />
                <span className="font-medium">Facebook</span>
              </button>
              <button className="flex items-center gap-3 bg-[#000000] text-white px-8 py-2.5 rounded shadow-md hover:bg-[#222222] transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
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