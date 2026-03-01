"use client";

import Image from "next/image";
import { Scale } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useTranslations } from "next-intl";

import Pic1 from "@/public/ThongRak/History02.webp";
import Pic2 from "@/public/ThongRak/History07.webp";
import Pic3 from "@/public/ThongRak/History04.webp";
import Pic4 from "@/public/ThongRak/History06.webp";
import Pic5 from "@/public/ThongRak/History05.webp";
import Pic6 from "@/public/ThongRak/History03.webp";
import Pic7 from "@/public/ThongRak/History01.webp";
import Certificate from "@/public/Certificate.webp";

export default function History() {
  const t = useTranslations("History");

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="text-3xl md:text-5xl font-medium text-[#1A3079] text-center mb-12">
              {t("title")}
            </h2>

            <div className="relative flex items-center justify-center mb-8">
              <Separator className="flex-1 border-dotted" />
              <div className="px-4">
                <Scale className="text-[#FF9A00] w-10 h-10" />
              </div>
              <Separator className="flex-1 border-dotted" />
            </div>

            <div className="text-[#1E1E1E] text-base md:text-lg leading-relaxed text-justify indent-8">
              <span className="font-bold text-[#1E1E1E]">
                {t("companyName")}
              </span>
              {t("foundedText")}
              <span className="font-bold">{t("formerName")}</span>
              {t("description")}
            </div>

            <div className="flex justify-center mt-6 mb-8 ">
              <Button
                asChild
                className="bg-[#FF9A00] hover:bg-[#d68c0e] text-white px-7 transition-all  shadow-md text-base rounded-md font-light py-5"
              >
                <Link
                  href={{
                    pathname: "/about",
                  }}
                >
                  {t("readMore")}
                </Link>
              </Button>
            </div>

            <div className="relative flex items-center justify-center mb-10">
              <Separator className="flex-1 border-dotted" />
              <div className="px-4">
                <Scale className="text-[#e89a10] w-10 h-10" />
              </div>
              <Separator className="flex-1 border-dotted" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px] md:auto-rows-[minmax(180px,auto)]">
              <CardContent className="p-0 h-full relative">
                <Image
                  src={Pic1}
                  alt="Team 1"
                  className="w-full h-full object-cover rounded-xl"
                />
              </CardContent>
              <CardContent className="p-0 h-full relative">
                <Image
                  src={Pic2}
                  alt="Team 2"
                  className="w-full h-full object-cover rounded-xl"
                />
              </CardContent>
              <Card className="row-span-2 overflow-hidden border-0 shadow-sm rounded-xl relative h-full min-h-75">
                <Image src={Pic3} alt="Team 3" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
              </Card>
              <CardContent className="p-0 h-full relative">
                <Image
                  src={Pic4}
                  alt="Team 4"
                  className="w-full h-full object-cover rounded-xl"
                />
              </CardContent>
              <Card className="row-span-2 overflow-hidden border-0 shadow-sm rounded-xl relative h-full min-h-75 md:col-start-2">
                <Image src={Pic7} alt="Team 7" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
              </Card>
              <CardContent className="p-0 h-full relative">
                <Image
                  src={Pic5}
                  alt="Team 5"
                  className="w-full h-full object-cover rounded-xl"
                />
              </CardContent>
              <CardContent className="p-0 h-full relative">
                <Image
                  src={Pic6}
                  alt="Team 6"
                  className="w-full h-full object-cover rounded-xl"
                />
              </CardContent>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center sticky top-30 self-start">
            <Card className="w-full max-w-md shadow-xl border-4 border-double border-gray-200 bg-white rounded-sm overflow-hidden">
              <CardContent className="p-2">
                <AspectRatio ratio={3 / 4} className="relative w-full">
                  <Image
                    src={Certificate}
                    alt="Certificate"
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-contain"
                  />
                </AspectRatio>
              </CardContent>
            </Card>

            <div className="text-center mt-6 space-y-1">
              <h3 className="text-[#1A3079] font-bold text-base">
                {t("certificateTitle")}
              </h3>
              <p className="text-[#5A5A5A] font-medium text-base">
                {t("certificateSubtitle")}
              </p>
            </div>

            <div className="mt-6">
              <Button
                size="lg"
                className="bg-[#FF9A00] hover:bg-[#d68c0e] text-white text-base px-10 py-6 rounded-sm shadow-lg font-medium transition-all hover:shadow-xl"
              >
                {t("consultButton")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
