import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function History() {
  const t = useTranslations("AboutUs");
  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-296.5 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8 text-justify">
          <h2 className="text-5xl font-bold tracking-tight">
            <span className="text-[#1A3079]">{t("history")}</span>{" "}
            <span className="text-[#E39B16]">{t("founding")}</span>
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-base">
            <p>
              <strong>{t("company_name")}</strong>
              {t("p1")}
            </p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
          </div>
          <Button className="w-full bg-[#E39B16] hover:bg-[#cf890d] text-white py-7 text-lg font-bold rounded-md shadow-lg">
            {t("contract")}
          </Button>
        </div>

        <div className="relative flex justify-end">
          <div className="relative w-full max-w-121 h-[700px] rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/lawyer-profile.png"
              alt="Lawyer"
              fill
              className="object-cover object-top"
            />
            <div className="absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 pr-8 shadow-2xl rounded-lg flex items-center gap-4 min-w-[340px]">
              <div className="bg-[#E39B16] p-4 rounded-lg text-white">
                <Phone />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1A3079]">
                  +66 96-916-4251
                </p>
                <p className="text-base text-black font-medium">
                   {t("contract2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
