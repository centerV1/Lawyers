"use client";

export default function Vision() {
  return (
    <div className="w-full flex flex-col md:flex-row min-h-150 font-sans">
      
      <div className="w-full md:w-[45%] bg-[#dfa83c] text-[#1A3079] px-8 pb-10 pt-16 md:pt-24 md:px-16 flex flex-col items-center md:items-end">
        <div className="max-w-md text-center md:text-right">
          
          <div className="flex flex-col items-center md:items-end mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-wide">
              วิสัยทัศน์
            </h2>
            <div className="w-80 h-1.5 bg-[#1A3079]"></div>
          </div>

          <p className="text-lg md:text-xl leading-relaxed font-medium opacity-90">
            “มุ่งสู่การเป็นสำนักงานกฎหมายที่เป็นแนวหน้า 
            ที่ให้บริการครบวงจรด้วยความเป็นมืออาชีพแก่ลูกความ
            ทุกเชื้อชาติ เพื่อยกระดับมาตรฐานและภาพลักษณ์วิชาชีพ
            กฎหมายไทยที่เป็นสากลอย่างยั่งยืน”
          </p>
        </div>
      </div>
      <div className="w-full md:w-[55%] bg-[#1A3079] text-white px-8 pb-10 pt-16 md:pt-24 md:px-16 flex flex-col items-start">
        <div className="max-w-3xl">
          <div className="flex flex-col  items-center md:items-start mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-wide">
              พันธกิจ
            </h2>
            <div className="w-80 h-1.5 bg-[#dfa83c]"></div>
          </div>

          <div className="space-y-6 text-sm md:text-base font-light leading-loose text-gray-100">
            
            <div className="flex gap-4 items-start">
              <span className="font-bold leading-7">1.</span>
              <p>
                <span className="font-bold">การให้บริการที่ครบวงจร</span> มุ่งมั่นส่งมอบบริการทางกฎหมายที่ครอบคลุมทุกมิติ 
                ตั้งแต่การวางกลยุทธ์เชิงป้องกัน ไปจนถึงการระงับข้อพิพาทและแก้ไขปัญหาอย่างเบ็ดเสร็จ 
                ไม่ว่าจะเป็นการให้คำปรึกษา การร่างและตรวจสอบสัญญา การว่าความในศาลตลอดจน
                สืบทรัพย์และการบังคับคดีอย่างเต็มรูปแบบ
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <span className="font-bold leading-7">2.</span>
              <p>
                <span className="font-bold">ความเป็นเลิศในฐานะผู้นำด้านการว่าความ</span> ยกระดับองค์กรสู่การเป็นผู้นำด้านกฎหมายระดับ
                สากล โดยเฉพาะความเชี่ยวชาญในการว่าความและการดำเนินคดีที่เน้นความเฉียบคม แม่นยำ 
                และเปี่ยมด้วยจรรยาบรรณวิชาชีพ
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <span className="font-bold leading-7">3.</span>
              <p>
                <span className="font-bold">พันธมิตรที่ไว้วางใจได้</span> ยืนหยัดในฐานะพันธมิตรทางกฎหมายที่แข็งแกร่งและน่าเชื่อถือเพื่อ
                ปกป้องผลประโยชน์และสร้างความสำเร็จที่ยั่งยืนให้แก่ลูกความทุกเชื้อชาติด้วยความจริงใจ
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}