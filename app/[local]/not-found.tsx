import { Link } from "@/i18n/routing";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("Error");
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <Scale className="h-16 w-16 text-[#E39B16] mb-8" />
      <h1 className="text-6xl font-bold text-[#1A3079] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-slate-700 mb-2">
        Not Found
      </h2>
      <p className="text-slate-500 mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button asChild className="bg-[#E39B16] hover:bg-[#cf890d] text-white px-8 py-3 text-base font-bold rounded-md">
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  );
}
