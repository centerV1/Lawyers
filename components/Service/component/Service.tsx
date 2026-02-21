"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import Lawyer from "@/public/Lawyer.jpg";
import { serviceData, ServiceItem } from "@/data/Service";
import { useTranslate } from "@/utils/useTranslate";
import { useTranslations } from "next-intl";

export default function Service() {
  const getLocalized = useTranslate<ServiceItem>();
  const t = useTranslations("Service");
  return (
    <section className="relative w-full min-h-screen py-20 overflow-hidden">
      <div className="relative z-10 container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {serviceData.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={Lawyer}
                  alt={getLocalized(item, "title") || ""}
                  fill
                  className="object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 transition-colors" />
              </div>

              <div className="relative px-4 pb-6 pt-8 text-center bg-white flex flex-col items-center h-50 justify-between">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full ">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Scale className="w-6 h-6 text-amber-600" />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center gap-2 mt-4 mb-4">
                  <h4 className="text-lg font-bold text-slate-800 line-clamp-2 leading-tight">
                    {getLocalized(item, "title")}
                  </h4>
                </div>

                <Link
                  href={{
                    pathname: "/service/[serviceId]",
                    params: { serviceId: item.serviceId },
                  }}
                  className="w-full"
                >
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md py-2 shadow-sm">
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
