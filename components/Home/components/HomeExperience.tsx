import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { experienceData, ExperienceItem } from "@/data/Experience";
import { useTranslate } from "@/utils/useTranslate";
import { useTranslations } from "next-intl";

export default function HomeExperience() {
  const getLocalized = useTranslate<ExperienceItem>();
  const t = useTranslations("Experience");

  const previewexperiences = experienceData.slice(0, 3);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-296.5 mx-auto px-4">
        <div className="text-center mb-16 max-w-296.5 mx-auto px-4">
          <h2 className="text-5xl font-bold text-white mb-8">
            <span className="text-[#1a3673]">{t("experience")}</span>{" "}
            <span className="text-[#e2991a]">{t("our")}</span>
          </h2>
          <div className="flex experiences-center justify-center gap-4">
            <div className="flex-1 border-t border-dotted border-[#a1a1a1]"></div>

            <div className="flex-none bg-transparent">
              <Scale className="w-8 h-8 text-[#e2991a]" />
            </div>

            <div className="flex-1 border-t border-dotted border-[#a1a1a1]"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewexperiences.map((experience) => (
            <div
              key={experience.experienceId}
              className="flex flex-col bg-white rounded-xl overflow-hidden shadow-2xl transition-transform hover:-translate-y-2"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={experience.listImage}
                  alt={getLocalized(experience, "title") || ""}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="relative px-6 pb-8 -mt-12 flex-1 flex flex-col">
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-50 flex-1 flex experiences-center justify-center text-center min-h-45">
                  <p className="text-[#1a3673] text-sm leading-relaxed font-medium">
                    {getLocalized(experience, "description")}
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    href={{
                      pathname: "/experience/[experienceId]",
                      params: { experienceId: experience.experienceId },
                    }}
                    className="w-full"
                  >
                    <Button className="w-full bg-[#e2991a] hover:bg-[#c98614] text-white py-6 rounded-lg font-bold uppercase">
                      {t("details")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-15 text-center">
          <Link
            href={{
              pathname: "/experience",
            }}
            className="w-full"
          >
            <Button className="w-full max-w-296.5 bg-[#e2991a] hover:bg-[#c98614] text-zinc-50 py-5 font-bold rounded-lg shadow-xl">
              {t("view")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
