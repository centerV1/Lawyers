import Image from "next/image";
import { useTranslations } from "next-intl";

export default function StepAddFriend() {
  const t = useTranslations("Payment.AddFriend");
  
  return (
    <div className="flex flex-col items-center animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border-4 border-white ring-1 ring-black/5">
        <Image src="/line-qr.png" alt="Line QR" width={280} height={280} className="rounded-xl" />
      </div>
      <p className="mt-6 text-[#06C755] font-bold">{t("line_id")}</p>
    </div>
  );
}