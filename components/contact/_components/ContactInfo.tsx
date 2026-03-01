import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ContactInfo() {
  const t = useTranslations("Contact");

  return (
    <div className="space-y-12">
      <div className="flex items-center gap-3">
        <div className="relative w-20 h-20">
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
          href="https://www.google.co.th/maps/place/1104+Sapthani+Soi+3,+Tambon+Pru+Yai,+Amphoe+Mueang+Nakhon+Ratchasima,+Chang+Wat+Nakhon+Ratchasima+30000/@14.9446664,102.0627677,21z/data=!4m6!3m5!1s0x311eb32828934e95:0xf3d3dfddc7e6b420!8m2!3d14.9446664!4d102.0626652!16s%2Fg%2F11kx6ppw_m?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
        />
        <ContactItem
          icon={<Phone className="text-white w-5 h-5" />}
          title="096-916-4251, 095-212-9000"
          label={t("contact_legal")}
        />
        <ContactItem
          icon={<Mail className="text-white w-5 h-5" />}
          title="pongsitlawoffice@gmail.com"
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
  href,
}: {
  icon: React.ReactNode;
  title: string;
  label: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="mt-1 bg-[#e2991a] p-2 rounded-full h-fit shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[#1a3673] font-bold text-lg mb-1 leading-tight">
          {title}
        </p>
        <p className="text-slate-400 text-sm font-medium">{label}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank" 
        rel="noopener noreferrer"
        className="flex gap-5 hover:opacity-80 transition-opacity cursor-pointer group"
      >
        {content}
      </a>
    );
  }

  return <div className="flex gap-5">{content}</div>;
}
