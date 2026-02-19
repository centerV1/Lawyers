import { Button } from "@/components/ui/button";

export default function ModalFooter({ step, onNext, onBack, onClose }: any) {
  return (
    <div className="p-3 bg-white flex gap-3 border-t border-slate-100">
      <Button 
        variant="ghost" 
        onClick={step === 1 ? onClose : onBack}
        className="flex-1 h-14 rounded-2xl font-bold text-slate-500 bg-[#F3F4F6] hover:bg-slate-200 transition-colors"
      >
        {step === 1 ? "ยกเลิก" : "ย้อนกลับ"}
      </Button>
      <Button 
        onClick={onNext}
        className="flex-2 h-14 rounded-2xl font-bold text-white bg-[#E39B16] hover:bg-[#cf890d] shadow-lg shadow-orange-100 transition-all active:scale-95"
      >
        {step === 3 ? "เสร็จสิ้น" : "ถัดไป"}
      </Button>
    </div>
  );
}