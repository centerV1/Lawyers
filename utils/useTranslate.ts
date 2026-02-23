import { useLocale } from "next-intl";

export function useTranslate<T extends Record<string, unknown>>() {
  const locale = useLocale();

  return (item: T, baseKey: string): string => {
    const localizedKey = `${baseKey}_${locale}`;
    
    const localizedValue = item[localizedKey as keyof T];
    const fallbackValue = item[baseKey as keyof T];

    if (typeof localizedValue === "string" && localizedValue !== "") {
      return localizedValue;
    }
    if (typeof fallbackValue === "string" && fallbackValue !== "") {
      return fallbackValue;
    }

    return "";
  };
}