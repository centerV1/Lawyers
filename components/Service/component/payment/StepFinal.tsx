import Image from "next/image";

export default function StepFinal({ serviceTitle }: { serviceTitle: string }) {
  return (
    <div className="flex flex-col space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row gap-6 items-center bg-white/60 p-6 rounded-3xl border border-white">
        <Image src="/slip-example.png" alt="Slip" width={200} height={190} className="rounded-lg shadow-md" />
        <div className="flex-1 space-y-4 text-left">
          <p className="font-bold text-slate-700">หลักฐานการโอนเงิน <span className="text-red-500">สลิป</span></p>
          <ul className="space-y-2 text-slate-600 text-sm font-semibold">
            <li>• ชื่อที่ปรึกษา: <span className="text-[#1A3079]">{serviceTitle}</span></li>
            <li>• ชื่อ-นามสกุล [ระบุชื่อลูกความ]</li>
            <li>• ชื่อเล่น [ระบุชื่อเล่น]</li>
            <li>• เบอร์โทรศัพท์ [ระบุเบอร์โทรศัพท์]</li>
          </ul>
        </div>
      </div>
      <p className="text-[#FF5050] font-bold text-center text-lg mt-4">
        เจ้าหน้าที่จะติดต่อกลับภายใน 24 ชม. ขอบคุณที่ไว้วางใจเรา
      </p>
    </div>
  );
}