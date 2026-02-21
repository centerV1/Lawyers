"use client";
import { useTranslations } from "next-intl";
export default function Vision() {
 const t = useTranslations("Vision");
  return (
    <div className="w-full flex flex-col md:flex-row min-h-150 font-sans">
      
      <div className="w-full md:w-[45%] bg-[#dfa83c] text-[#1A3079] px-8 pb-10 pt-16 md:pt-24 md:px-16 flex flex-col items-center md:items-end">
        <div className="max-w-md text-center md:text-right">
          
          <div className="flex flex-col items-center md:items-end mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-wide">
              {t("title")}
            </h2>
            <div className="w-80 h-1.5 bg-[#1A3079]"></div>
          </div>

          <p className="text-lg md:text-xl leading-relaxed font-medium opacity-90">
            {t("description")}
          </p>
        </div>
      </div>
      <div className="w-full md:w-[55%] bg-[#1A3079] text-white px-8 pb-10 pt-16 md:pt-24 md:px-16 flex flex-col items-start">
        <div className="max-w-3xl">
          <div className="flex flex-col  items-center md:items-start mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-wide">
              {t("mission")}
            </h2>
            <div className="w-80 h-1.5 bg-[#dfa83c]"></div>
          </div>

          <div className="space-y-6 text-sm md:text-base font-light leading-loose text-gray-100">
            
            <div className="flex gap-4 items-start">
              <span className="font-bold leading-7">1.</span>
              <p className="text-lg md:text-xl leading-relaxed font-medium opacity-90">
                <span className="text-lg md:text-xl leading-relaxed font-medium opacity-90">{t("title1")}</span>
                {t("description1")}
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <span className="font-bold leading-7">2.</span>
              <p className="text-lg md:text-xl leading-relaxed font-medium opacity-90">
                <span className="text-lg md:text-xl leading-relaxed font-medium opacity-90">{t("title2")}</span>                 
                {t("description2")}
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <span className="font-bold leading-7">3.</span>
              <p className="text-lg md:text-xl leading-relaxed font-medium opacity-90">
                <span className="text-lg md:text-xl leading-relaxed font-medium opacity-90">{t("title3")}</span> 
                {t("description3")}
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}