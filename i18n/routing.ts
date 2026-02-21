import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "th"],
  defaultLocale: "en",

  pathnames: {
    "/": "/",
    "/about": "/about",
    "/about/[aboutId]": "/about/[aboutId]",
    "/service": "/service",
    "/service/[serviceId]": "/service/[serviceId]",
    "/experience": "/experience",
    "/experience/[experienceId]": "/experience/[experienceId]",
    "/article": "/article",
    "/article/[articleId]": "/article/[articleId]",
    "/contact": "/contact",
    "/th": "/th",
    "/en": "/en",
    //  "/contacts": {
    //   en: "/contact-me",
    //   th: "/contactez-moi",
    // },
  },
});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
