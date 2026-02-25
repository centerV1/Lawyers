import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ContactInfo() {
  const t = useTranslations("Contact");

  return (
    <div className="space-y-12">
      <div className="flex items-center gap-3">
        <div className="relative w-[80px] h-[80px]">
          <Image
            src="/logo-thongrak.webp"
            alt="Thongrak Nitisri Law Logo"
            fill
            sizes="80px"
            className="object-contain"
          />
        </div>

        <h2 className="text-3xl font-bold text-[#1a3673] leading-[0.9] uppercase tracking-tighter">
          THONGRAK
          <br />
          <span className="text-[#1a3673]">NITISRI LAW</span>
        </h2>
      </div>

      <div className="space-y-10">
        <ContactItem
          icon={<MapPin className="text-white w-5 h-5" />}
          title={t("address")}
          label={t("location")}
        />
        <ContactItem
          icon={<Phone className="text-white w-5 h-5" />}
          title="+66 96-916-4251, +66 95-212-9000"
          label={t("contact_legal")}
        />
        <ContactItem
          icon={<Mail className="text-white w-5 h-5" />}
          title="metapon@lawyermaninter.com"
          label={t("email_label")}
        />
      </div>
    </div>
  );
}

function ContactItem({
  icon,
  title,
  label,
}: {
  icon: React.ReactNode;
  title: string;
  label: string;
}) {
  return (
    <div className="flex gap-5">
      <div className="mt-1 bg-[#e2991a] p-2 rounded-full h-fit flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[#1a3673] font-bold text-lg mb-1 leading-tight">
          {title}
        </p>
        <p className="text-slate-400 text-sm font-medium">{label}</p>
      </div>
    </div>
  );
}