// components/Home/components/WhyWe.tsx
"use client";

import { Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { whyChooseUsData } from "@/data/WhyChooseUs";

export default function WhyWe() {
  return (
    <section className="w-full bg-[#1A3079] py-24 px-4 flex flex-col items-center justify-center font-sans">
      <div className="text-center mb-16 w-full max-w-[1186px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#E39B16] mb-8 drop-shadow-md">
          ทำไมต้องเลือกพวกเรา ?
        </h2>

        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="flex-1 border-t border-dotted border-[#8F8F8F]/50"></div>
          
          <div className="flex-none">
            <Scale className="text-[#E39B16] w-10 h-10" />
          </div>
          
          <div className="flex-1 border-t border-dotted border-[#8F8F8F]/50"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1186px] w-full mx-auto">
        {whyChooseUsData.map((feature, index) => (
          <Card
            key={index}
            className="bg-[#E39B16] border-none text-[#1A3079] shadow-2xl transition-all duration-300 hover:scale-105 h-full flex flex-col items-center text-center py-12 px-6 rounded-lg"
          >
            <CardHeader className="flex flex-col items-center pb-6">
              <div className="text-[#1A3079]">
                {feature.icon}
              </div>
            </CardHeader>
            <CardTitle className="text-xl font-bold leading-tight mb-6 min-h-[64px] flex items-center justify-center">
              {feature.title}
            </CardTitle>
            <CardContent>
              <p className="text-sm md:text-base font-medium leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}