 "use client";

import Image from "next/image";
import { Scale } from "lucide-react"; 
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Pic1 from "@/public/History.webp";
import Pic2 from "@/public/History2.webp";
import Pic3 from "@/public/History.webp";
// import Pic4 from "@/public/History.webp";
// import Pic5 from "@/public/History.webp";
// import Pic6 from "@/public/History.webp";
// import Pic7 from "@/public/History.webp";
import { Separator } from "../../ui/separator";

const testimonials = [
  {
    id: 1,
    image: Pic1,
    title: "การป้องกันและปราบปรามยาเสพติด",
    description: "ช่วยเจรจาไกล่เกลี่ย ลดโทษหนักให้เป็นเบา",
  },
  {
    id: 2,
    image: Pic2,
    title: "ทนายแรงงาน",
    description: "ให้คำปรึกษาเรื่องข้อกฎหมายแรงงาน",
  },
  {
    id: 3,
    image: Pic3,
    title: "ที่ปรึกษาประจำบริษัท",
    description: "ให้บุคคลภายนอกวางใจ",
  },
  {
    id: 4,
    image: Pic1,
    title: "คดีแพ่งและพาณิชย์",
    description: "ดูแลเรื่องสัญญาและการฟ้องร้อง",
  },
];

export default function Comment() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-500">
            ความคิดเห็นของลูกความ
          </h2>
        <div className="relative flex items-center justify-center mb-10">
          <Separator className="flex-1 border-dotted" />
          <div className="px-4">
            <Scale className="text-[#e89a10] w-10 h-10" />
          </div>
          <Separator className="flex-1 border-dotted" />
        </div>
        </div>

        <div className="flex justify-center">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((item) => (
                <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full border border-gray-100 shadow-md  transition-all duration-300 cursor-pointer group bg-white">
                      <CardContent className="p-4 flex flex-col items-center text-center h-full">
                        <div className="relative w-full aspect-4/3 mb-4 overflow-hidden rounded-md">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500"
                          />
                        </div>

                        <div className="mt-auto space-y-2">
                          <h3 className="font-bold text-lg text-slate-800 ">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-500">
                            {item.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center gap-2 mt-8">
               <CarouselPrevious className="static translate-y-0 bg-amber-500 hover:bg-amber-600 text-white border-none" />
               <CarouselNext className="static translate-y-0 bg-amber-500 hover:bg-amber-600 text-white border-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}