"use client";
import { Mail, MapPin, Phone, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Logowhite } from "../Logo/logowhite";
import { serviceData } from "@/data/Service";
import { ServiceItem } from "@/data/Service";
import { useTranslations } from "next-intl";
import { useTranslate } from "@/utils/useTranslate";

const Footer = () => {
  const getLocalized = useTranslate<ServiceItem>();

  const t = useTranslations("Footer");
  return (
    <footer className="bg-[#1A3079]/99 text-white pt-16 pb-8 font-sans">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="inline-block w-fit">
              <Logowhite uniColor={true} />
            </Link>

            <div className="flex flex-col gap-5 text-sm font-light text-gray-300 mt-2">
              <div className="flex items-center gap-3">
                <div className="bg-[#e89a10] p-1.5 rounded-sm shrink-0">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span>pongsitlawoffice@gmail.com</span>
              </div>

              <div className="flex items-start gap-3">
                <a
                    href="https://www.google.co.th/maps/place/14°56'45.2%22N+102°03'13.1%22E/@14.9463603,102.0535468,17.98z/data=!4m4!3m3!8m2!3d14.945891!4d102.05363?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-white transition-colors group"
                  target="_blank"
                >
                  <div className="bg-[#e89a10] p-1.5 rounded-sm shrink-0 mt-1">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <span className="leading-relaxed hover:text-[#e89a10]">{t("address1")}</span>
                </a>
              </div>

              <div className="flex items-start gap-3">
                <a
                  href="https://www.google.com/maps/place/14°00'21.6%22N+100°31'15.1%22E/@14.0059366,100.5173225,15z/data=!4m4!3m3!8m2!3d14.0059981!4d100.5208718?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-white transition-colors group"
                  target="_blank"
                >
                  <div className="bg-[#e89a10] p-1.5 rounded-sm shrink-0 mt-1">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <span className="leading-relaxed hover:text-[#e89a10]">{t("address2")}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 pl-0">
            <h3 className="text-xl font-medium mb-6">{t("ourservice")}</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
              {serviceData.map((service) => (
                <li
                  key={service.serviceId}
                  className="flex items-start gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-4 w-4 text-[#e89a10] mt-0.5 shrink-0" />
                  <Link
                    href={{
                      pathname: "/service/[serviceId]",
                      params: { serviceId: service.serviceId },
                    }}
                    className="hover:text-[#e89a10] transition-colors"
                  >
                    {getLocalized(service, "title")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <a href="tel:+66999488789" className="group block">
              <div className="bg-[#e89a10] rounded-md p-4 flex items-center gap-4 text-white shadow-lg hover:bg-[#d68c0e] transition-all duration-300">
                <div className="bg-[#0e1b3c] p-3 rounded-md shrink-0 group-hover:bg-[#1a2d5c] transition-colors">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold tracking-wide">
                    0999488789
                  </div>
                  <div className="text-xs font-medium text-white/90">
                    {t("contract")}
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center gap-2 text-xs text-gray-400">
          <span className="text-[#e89a10]">&copy;</span>
          <span>
            {new Date().getFullYear()} THONGRAK NITISRI LAW Co., LTD. All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
