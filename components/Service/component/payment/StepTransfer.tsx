import Image from "next/image";
import { useTranslations } from "next-intl";

export default function StepTransfer({ serviceTitle, price }: { serviceTitle: string; price?: number }) {
  const t = useTranslations("Payment.Transfer");

  return (
    <div className="flex flex-col items-center space-y-6 animate-in slide-in-from-bottom-4 duration-500 text-center">
      <div className="bg-white p-4 rounded-2xl shadow-lg border border-white">
        <Image src="/promptpay-qr.png" alt="PromptPay" width={200} height={310} className="rounded-lg" />
      </div>
      <div className="space-y-1">
        <p className="font-bold text-slate-800 text-lg">{t("bank_name")}</p>
        <p className="text-[#1A3079] font-bold text-xl tracking-tight">{t("account_name")}</p>
      </div>
      <div className="w-full max-w-xl pt-4 border-t border-slate-300">
        <div className="flex justify-between font-bold text-[#1A3079] text-lg mb-2 px-2">
          <span>{serviceTitle}</span>
        </div>
        <div className="flex justify-between font-bold text-[#5A5A5A] text-base mb-2 px-2">
          <p>{t("amount_to_pay")}</p>
          <span>{price?.toLocaleString()} {t("currency")}</span>
        </div>
        <p className="text-[#FF5050] text-lg font-bold">
          {t("warning")}
        </p>
      </div>
    </div>
  );
}