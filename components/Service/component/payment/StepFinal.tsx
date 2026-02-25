import Image from "next/image";
import { useTranslations } from "next-intl";

export default function StepFinal({ serviceTitle }: { serviceTitle: string }) {
  const t = useTranslations("Payment.Final");

  return (
    <div className="flex flex-col space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row gap-6 items-center bg-white/60 p-6 rounded-3xl border border-white">
        <Image src="/slip-example.webp" alt="Slip" width={200} height={190} className="rounded-lg shadow-md" />
        <div className="flex-1 space-y-4 text-left">
          <p className="font-bold text-slate-700">
            {t("proof_of_transfer")} <span className="text-red-500">{t("slip")}</span>
          </p>
          <ul className="space-y-2 text-slate-600 text-sm font-semibold">
            <li>• {t("consultant_name")} <span className="text-[#1A3079]">{serviceTitle}</span></li>
            <li>• {t("client_fullname")}</li>
            <li>• {t("client_nickname")}</li>
            <li>• {t("client_phone")}</li>
          </ul>
        </div>
      </div>
      <p className="text-[#FF5050] font-bold text-center text-lg mt-4">
        {t("footer_note")}
      </p>
    </div>
  );
}