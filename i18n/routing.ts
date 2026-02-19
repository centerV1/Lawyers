import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "th"],
  defaultLocale: "en",
  
  // 1. Add all your application routes here
  pathnames: {
    "/": "/", 
    "/about": "/about",
    "/service": "/service",
    "/service/[serviceId]": "/service/[serviceId]",
    "/experience": "/experience",
    "/article": "/article",
    "/contact": "/contact",
    "/th": "/th", 
    "/en": "/en" ,
    //  "/contacts": {
    //   en: "/contact-me",
    //   th: "/contactez-moi",
    // },
  },
});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);