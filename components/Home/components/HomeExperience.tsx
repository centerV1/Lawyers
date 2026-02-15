import Image from "next/image";
import Link from "next/link";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { experienceData } from "@/data/Experience";

export default function HomeExperience() {
    const previewItems = experienceData.slice(0, 3);
    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image src="/law-hero.png" alt="Background" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-white/85" />
            </div>

            <div className="relative z-10 max-w-[1186px] mx-auto px-4">
                <div className="text-center mb-16 max-w-[1186px] mx-auto px-4">
                    <h2 className="text-5xl font-bold text-white mb-8">
                        <span className="text-[#1a3673]">ประสบการณ์</span> <span className="text-[#e2991a]">ของเรา</span>
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="flex-1 border-t border-dotted border-[#a1a1a1]"></div>

                        <div className="flex-none bg-transparent">
                            <Scale className="w-8 h-8 text-[#e2991a]" />
                        </div>

                        <div className="flex-1 border-t border-dotted border-[#a1a1a1]"></div>
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {previewItems.map((item) => (
                        <div key={item.id} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-2xl transition-transform hover:-translate-y-2">
                            <div className="relative h-64 w-full">
                                <Image
                                    src={item.listImage}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="relative px-6 pb-8 -mt-12 flex-1 flex flex-col">
                                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-50 flex-1 flex items-center justify-center text-center min-h-[180px]">
                                    <p className="text-[#1a3673] text-sm leading-relaxed font-medium">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="mt-6">
                                    <Link href={`/experience/${item.id}`}>
                                        <Button className="w-full bg-[#e2991a] hover:bg-[#c98614] text-white py-6 rounded-lg font-bold">
                                            ดูรายละเอียด
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-15 text-center">
                    <Link href="/experience">
                        <Button className="w-full max-w-[1186px] bg-[#e2991a] hover:bg-[#c98614] text-white py-5 text-zinc-50 font-bold rounded-lg shadow-xl">
                            ดูทั้งหมด
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}