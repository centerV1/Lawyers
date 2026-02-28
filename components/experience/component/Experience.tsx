"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { experienceData,ExperienceItem } from "@/data/Experience";
import { useTranslate } from "@/utils/useTranslate";
import { useTranslations } from "next-intl";

export default function ExperienceList() {

  const getLocalized = useTranslate<ExperienceItem>();
  
  const t = useTranslations("Service");

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-296.5 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {experienceData.map((experience) => (
            <div
              key={experience.experienceId}
              className="flex flex-col h-full bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={experience.listImage}
                  alt="Experience"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="relative px-6 pb-8 -mt-12 flex-1 flex flex-col">
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-50 flex-1 flex experiences-center justify-center text-center">
                  <p className="text-[#1a3673] text-lg leading-relaxed font-medium">
                    {getLocalized(experience, "description")}
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href={{
                      pathname: "/experience/[experienceId]",
                      params: { experienceId: experience.experienceId },
                    }}
                  >
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
