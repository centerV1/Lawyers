import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("Contact");

  return (
    <div className="bg-[#f1f5f9] p-10 md:p-14 rounded-sm shadow-sm">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-slate-800 mb-6">{t("form_title")}</h3>
        <div className="flex items-center justify-center gap-4 opacity-40">
          <div className="h-px bg-slate-400 flex-1"></div>
          <Scale className="h-6 w-6 text-[#e2991a]" />
          <div className="h-px bg-slate-400 flex-1"></div>
        </div>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label={t("form_fname")} name="fname" />
          <FormField label={t("form_lname")} name="lname" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label={t("form_email")} name="email" type="email" />
          <FormField label={t("form_phone")} name="phone" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-400 ml-1">{t("form_details")}</label>
          <Textarea className="bg-white border-none min-h-[150px] focus-visible:ring-[#e2991a]" name="details" />
        </div>
        <Button className="w-full bg-[#e2991a] hover:bg-[#c98616] text-white py-8 text-xl font-bold rounded-md mt-4 uppercase transition-all">
          {t("form_submit")}
        </Button>
      </form>
    </div>
  );
}

function FormField({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-slate-400 ml-1">{label}</label>
      <Input className="bg-white border-none py-6 h-12 focus-visible:ring-[#e2991a]" type={type} name={name} />
    </div>
  );
}