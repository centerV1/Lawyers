"use client";

import Image from "next/image";
import LawyerBg from "@/public/Lawyer.jpg";
import Pic3 from "@/public/History.jpg";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Experian() {

  const experiences = [
    {
      id: 1,
      image: Pic3,
      text: "พวกเราเป็นตัวแทนทางด้านกฎหมายให้แก่ลูกความชาวโคลัมเบีย โดยเราได้ทำงานร่วมกับสำนักงานกฎหมายชื่อดังจากเมืองมาดริด ประเทศสเปน ในคดีฆ่าหั่นศพ และซ่อนเร้นอำพรางชิ้นส่วนศพ ซึ่งเป็นคดีที่เป็นข่าวดังไปทั่วโลก",
    },
    {
      id: 2,
      image: Pic3,
      text: "พวกเราเป็นตัวแทนทางด้านกฎหมายให้แก่ลูกความชาวโคลัมเบีย โดยเราได้ทำงานร่วมกับสำนักงานกฎหมายชื่อดังจากเมืองมาดริด ประเทศสเปน ในคดีฆ่าหั่นศพ และซ่อนเร้นอำพรางชิ้นส่วนศพ ซึ่งเป็นคดีที่เป็นข่าวดังไปทั่วโลก",
    },
    {
      id: 3,
      image: Pic3,
      text: "พวกเราเป็นตัวแทนทางด้านกฎหมายให้แก่ลูกความชาวโคลัมเบีย โดยเราได้ทำงานร่วมกับสำนักงานกฎหมายชื่อดังจากเมืองมาดริด ประเทศสเปน ในคดีฆ่าหั่นศพ และซ่อนเร้นอำพรางชิ้นส่วนศพ ซึ่งเป็นคดีที่เป็นข่าวดังไปทั่วโลก",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-slate-50">
      <div className="absolute inset-0 z-0">
        <Image
          src={LawyerBg}
          alt="Lawyer Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 container max-w-6xl mx-auto px-4 py-20 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 drop-shadow-md text-center">
          <span className="text-blue-900  px-2 rounded-md mr-2">
            ประสบการณ์
          </span>
          <span className="text-amber-500">
            ของเรา
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mb-10">
          {experiences.map((item) => (
            <Card
              key={item.id}
              className="border-none shadow-xl flex flex-col overflow-hidden group"
            >
              <CardHeader className="p-0 relative h-48 md:h-56">
                <Image
                  src={item.image}
                  alt={`Experience ${item.id}`}
                  fill
                  className="object-cover transition-transform duration-500 px-4"
                />
              </CardHeader>

              <CardContent className="grow pt-6 px-6 text-center">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </CardContent>

              <CardFooter className="pb-6 px-6">
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium">
                  ดูรายละเอียด
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="w-full max-w-6xl">
          <Button className="w-full py-6 text-lg bg-amber-500 hover:bg-amber-600 text-white shadow-lg rounded-md">
            ดูทั้งหมด
          </Button>
        </div>
      </div>
    </section>
  );
}
