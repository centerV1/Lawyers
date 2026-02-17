import HomePage from "@/components/Home/page"
import { getDictionary } from "../../utils/get-dictionary";
import { Locale } from "../../utils/i18n-config";
export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <HomePage dict={dict} />
    </div>
  )
}