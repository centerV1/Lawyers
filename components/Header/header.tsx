"use client";
import Link from "next/link";
import { Logo } from "@/components/Logo/logo";
import { Menu, X } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const flagItems = [
  {
    name: "TH",
    href: "/th",
    viewBox: "0 0 900 600",
    content: (
      <>
        <rect fill="#ED1C24" width="900" height="600" />
        <rect fill="#FFF" y="100" width="900" height="400" />
        <rect fill="#241D4F" y="200" width="900" height="200" />
      </>
    ),
  },
  {
    name: "UK",
    href: "/en",
    viewBox: "0 0 60 30",
    content: (
      <>
        <clipPath id="s">
          <path d="M0,0 v30 h60 v-30 z" />
        </clipPath>
        <clipPath id="t">
          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
        </clipPath>
        <g clipPath="url(#s)">
          <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path
            d="M0,0 L60,30 M60,0 L0,30"
            clipPath="url(#t)"
            stroke="#C8102E"
            strokeWidth="4"
          />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </g>
      </>
    ),
  },
];
const menuItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "#link" },
  { name: "SERVICE", href: "/service" },
  { name: "CONTACT US", href: "#link" },
];

const socialItems = [
  {
    name: "Facebook",
    href: "#fb",
    viewBox: "0 0 24 24",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    name: "Instagram",
    href: "#ig",
    viewBox: "0 0 24 24",
    path: "M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5zm-5 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.2-7.8a1.2 1.2 0 1 1 1.2-1.2 1.2 1.2 0 0 1-1.2 1.2z",
  },
  {
    name: "Line",
    href: "#line",
    viewBox: "0 0 24 24",
    path: "M23 10.3c0-5.4-4.9-9.8-11-9.8S1 4.9 1 10.3c0 4.8 3.9 8.9 9.1 9.7l-.6 2.4c-.1.4.3.7.7.5l4.3-2.5c4.7-.8 8.5-4.7 8.5-10.1z",
  },
  {
    name: "Email",
    href: "mailto:contact@email.com",
    viewBox: "0 0 24 24",
    path: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z m16 2.5l-8 5.5l-8-5.5",
  },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={cn(
          "fixed z-20 backdrop-blur-lg bg-white border-b-5 border-amber-400 shadow-sm brightness-100 w-full py-1 transition-all duration-300 ",
          isScrolled &&
            "py-0 bg-white/20 backdrop-blur-lg border-transparent shadow-none brightness-125",
        )}
      >
        <div className="mx-auto mt-2 max-w-7xl px-6 transition-all duration-300 ">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo isScrolled={!isScrolled} />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span
                        className={cn(
                          "text-slate-800 text-base font-bold",
                          isScrolled && "text-[#1A3079]",
                        )}
                      >
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 mt-4 lg:mt-0">
                <div
                  className={cn(
                    "flex items-center gap-3 pr-0 lg:pr-4 lg:border-r",
                    isScrolled ? "border-gray-200" : "border-black",
                  )}
                >
                  {flagItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      aria-label={item.name}
                      className="hover:opacity-80 transition-opacity duration-200"
                    >
                      <svg
                        viewBox={item.viewBox}
                        className="w-10 h-auto rounded-sm shadow-sm border border-gray-100"
                      >
                        {item.content}
                      </svg>
                    </Link>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {socialItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      target="_blank"
                      aria-label={item.name}
                      className={cn(
                        "text-slate-800",
                        isScrolled && "text-white",

                        menuState && "text-slate-800 lg:text-slate-800",
                        isScrolled && "lg:text-white",
                      )}
                    >
                      <svg
                        viewBox={item.viewBox}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <path d={item.path} />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
