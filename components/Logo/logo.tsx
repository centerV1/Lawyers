"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ThongrakLogo from "../../public/ThongrakLogo3.png";

export const Logo = ({
  className,
  uniColor,
  isScrolled,
}: {
  className?: string;
  uniColor?: boolean;
  isScrolled?: boolean;
}) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoIcon className="h-16 w-16 md:h-18 md:w-18" uniColor={uniColor} />

      <div className="flex flex-col justify-center">
        <span
          className={cn(
            "font-bold text-xl md:text-2xl leading-none tracking-wide",
            uniColor ? "text-white" : "text-blue-900 dark:text-white",
          )}
        >
          THONGRAK
        </span>
        <span
          className={cn(
            "text-[10px] md:text-[12px] font-medium tracking-widest transition-colors duration-300",
            uniColor ? "text-[#e89a10]" : "", 
            !uniColor && isScrolled ? "text-slate-800" : "",
            !uniColor && !isScrolled ? "text-[#e89a10]" : "" 
          )}
        >
          NITISRI LAW
        </span>
      </div>
    </div>
  );
};

export const LogoIcon = ({ className, uniColor }: { className?: string, uniColor?: boolean }) => {
  return (
    <div className={cn("relative select-none", className || "size-10")}>
      <Image
        src={ThongrakLogo}
        alt="Thongrak Nitisri Law Icon"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={cn(
            "object-contain",
            !uniColor && "mix-blend-multiply" 
        )}
        priority
      />
    </div>
  );
};