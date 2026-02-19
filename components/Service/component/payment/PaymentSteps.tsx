export default function PaymentSteps({ currentStep }: { currentStep: number }) {
  const steps = [
    { id: 1, label: "เพื่อเพิ่มเพื่อน" },
    { id: 2, label: "ชำระเงิน" },
    { id: 3, label: "ส่งหลักฐาน/ส่งเรื่อง" },
  ];

  return (
    <div className="flex bg-[#DDE4ED] p-3 md:p-3 gap-3">
      {steps.map((s) => (
        <div 
          key={s.id}
          className={`flex-1 flex items-center gap-3 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 ${
            currentStep === s.id ? "bg-[#E39B16] text-white shadow-lg" : "bg-white/60 text-slate-400"
          }`}
        >
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
            currentStep === s.id ? "bg-white text-[#E39B16]" : "bg-slate-200 text-slate-400"
          }`}>
            {s.id}
          </span>
          <span className="truncate">{s.label}</span>
        </div>
      ))}
    </div>
  );
}