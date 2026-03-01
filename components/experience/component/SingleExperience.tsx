"use client";

import Image from "next/image";
import { ExperienceItem, ExperienceSection } from "@/data/Experience";
import { Facebook, Twitter, Linkedin, ImageOff } from "lucide-react";
import { useTranslate } from "@/utils/useTranslate";
import { useTranslations, useLocale } from "next-intl";

interface SingleExperienceProps {
  experience: ExperienceItem;
}

export default function SingleExperience({
  experience,
}: SingleExperienceProps) {
  const getLocalized = useTranslate<ExperienceItem>();
  const t = useTranslations("Experience");
  const locale = useLocale();

  const description = getLocalized(experience, "description");

  const sections = experience[`sections_${locale}`] as ExperienceSection[] | undefined;
  const conclusion = experience[`conclusion_${locale}`] as string[] | undefined;

  return (
    <section className="mt-12">
      <div className="max-w-296.5 mx-auto px-4">
        <div className="bg-[#f8f9fa] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          {experience.detailImage ? (
            <div className="relative w-full h-[500px]">
              <Image
                src={experience.detailImage}
                alt={getLocalized(experience, "title") || ""}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="w-full h-112.5 relative flex flex-col items-center justify-center bg-slate-100 rounded-2xl shadow-inner border border-slate-200">
              <ImageOff
                size={48}
                className="text-slate-400 mb-2 opacity-60"
                strokeWidth={1.5}
              />
              <span className="text-slate-400 font-medium text-sm">
                No image available
              </span>
            </div>
          )}
          <div className="p-8 md:p-12">
            <header className="mb-8">
              <h2 className="text-3xl font-semibold text-[#1E1E1E] mb-8">
                {getLocalized(experience, "title")}
              </h2>
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
                    {locale === "th" ? "บทสรุปการทำงาน" : "Work Conclusion"}
                  </h4>
                  {conclusion.map((paragraph, idx) => (
                    <p key={idx} className="text-justify mb-3 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </article>

            <div className="flex flex-wrap gap-4 pt-10 border-t border-gray-200">
              <button className="flex items-center gap-2 bg-[#3b5998] text-white px-6 py-2 rounded shadow-md hover:bg-[#344e86] transition-colors">
                <Facebook size={20} fill="white" /> Facebook
              </button>
              <button className="flex items-center gap-2 bg-[#333333] text-white px-6 py-2 rounded shadow-md hover:bg-[#222222] transition-colors">
                <Twitter size={20} fill="white" /> Twitter
              </button>
              <button className="flex items-center gap-2 bg-[#0077b5] text-white px-6 py-2 rounded shadow-md hover:bg-[#00669c] transition-colors">
                <Linkedin size={20} fill="white" /> LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
