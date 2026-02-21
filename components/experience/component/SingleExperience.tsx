"use client";

import Image from "next/image";
import { ExperienceItem } from "@/data/Experience";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { useTranslate } from "@/utils/useTranslate";

interface SingleExperienceProps {
  experience: ExperienceItem;
}

export default function SingleExperience({
  experience,
}: SingleExperienceProps) {
  const getLocalized = useTranslate<ExperienceItem>();

  return (
    <section className="mt-12">
      <div className="max-w-296.5 mx-auto px-4">
        <div className="bg-[#f8f9fa] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          {experience.image && (
            <div className="relative w-full h-125">
              <Image
                src={experience.detailImage}
                alt={getLocalized(experience, "title") || ""}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="p-8 md:p-12 space-y-8">
            <header>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                {getLocalized(experience, "title")}
              </h2>
              <p className="text-xl text-[#e2991a] font-medium italic">
                {getLocalized(experience, "subtitle")}
              </p>
            </header>

            <article className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
              <p className="whitespace-pre-line">
                {getLocalized(experience, "description")}
              </p>
            </article>

            <div className="flex flex-wrap gap-4 pt-10 border-t border-gray-200">
              <button className="flex items-center gap-2 bg-[#3b5998] text-white px-6 py-2 rounded shadow-md hover:bg-[#344e86] transition-colors">
                <Facebook size={20} fill="white" /> Facebook
              </button>
              <button className="flex items-center gap-2 bg-[#333333] text-white px-6 py-2 rounded shadow-md hover:bg-[#222222] transition-colors">
                <Twitter size={20} fill="white" /> Twitter
              </button>
              <button className="flex items-center gap-2 bg-[#0077b5] text-white px-6 py-2 rounded shadow-md hover:bg-[#00669c] transition-colors">
                <Linkedin size={20} fill="white" /> LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
