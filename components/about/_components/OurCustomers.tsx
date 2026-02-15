"use client"

import * as React from "react"
import Image from "next/image"
import { Scale, ChevronLeft, ChevronRight } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel"
import { customersData } from "@/data/Customers"

export default function OurCustomers() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    )

    React.useEffect(() => {
        if (!api) return
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <section className="relative w-full py-24 overflow-hidden font-sans">
             <div className="absolute inset-0 z-0">
                <Image src="/law-hero.png" alt="Background" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-white/85" />
            </div>
            <div className="relative z-10 max-w-[1186px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-8">
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

                <Carousel
                    setApi={setApi}
                    plugins={[plugin.current]}
                    opts={{
                        align: "start",
                        loop: true,
                        slidesToScroll: 1
                    }}
                    onMouseEnter={() => plugin.current.stop()}
                    onMouseLeave={() => plugin.current.play()}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {customersData.map((item) => (
                            <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="bg-white rounded-sm overflow-hidden shadow-lg border border-slate-100 flex flex-col h-full transition-all hover:shadow-xl p-4">
                                    <div className="relative aspect-[4/3] w-full border-4 border-white rounded-sm overflow-hidden shadow-sm">
                                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                                    </div>
                                    <div className="pt-6 pb-4 text-center flex flex-col items-center flex-grow">
                                        <h4 className="text-[#1a3673] font-bold text-lg mb-2">{item.title}</h4>
                                        <p className="text-slate-500 text-xs leading-relaxed max-w-[220px]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="flex justify-center items-center gap-6 mt-16">
                        <button
                            onClick={() => api?.scrollPrev()}
                            className="w-10 h-10 rounded-full bg-[#e2991a] text-white flex items-center justify-center hover:bg-[#c98616] transition-all shadow-md"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>

                        <div className="flex gap-2 justify-center">
                            {Array.from({ length: count }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => api?.scrollTo(index)}
                                    className={`transition-all duration-300 rounded-full ${current === index + 1
                                        ? "w-8 h-3 bg-[#e2991a]"
                                        : "w-3 h-3 bg-slate-200 hover:bg-[#e2991a]/50"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => api?.scrollNext()}
                            className="w-10 h-10 rounded-full bg-[#e2991a] text-white flex items-center justify-center hover:bg-[#c98616] transition-all shadow-md"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}