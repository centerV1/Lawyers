import 'server-only'; // ป้องกันการเรียกใช้ฝั่ง Client โดยไม่ตั้งใจ
import type { Locale } from './i18n-config';

// กำหนด Type ของ Dictionary เพื่อให้ IDE ช่วย Auto-complete
const dictionaries = {
  en: () => import('../messages/en.json').then((module) => module.default),
  th: () => import('../messages/th.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};