import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './utils/i18n-config';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string {
  // 1. อ่าน header 'accept-language'
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // 2. ใช้ library คำนวณหาภาษาที่เหมาะสมที่สุด
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  return matchLocale(languages, i18n.locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // ข้ามการ check ไฟล์ static หรือ api
  if (
    [
      '/manifest.json',
      '/favicon.ico',
    ].includes(pathname) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api')
  ) {
    return;
  }

  // ตรวจสอบว่ามี locale ใน pathname หรือยัง?
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // ถ้าไม่มี ให้ Redirect
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    
    // รักษา Query Params ไว้ด้วย (Best Practice)
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }
}

export const config = {
  // Matcher เพื่อกรอง route ที่จะให้ middleware ทำงาน
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp|gif|ico)$).*)'],
};