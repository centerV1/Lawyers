"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import PaymentSteps from "./PaymentSteps";
import StepAddFriend from "./StepAddFriend";
import StepTransfer from "./StepTransfer";
import StepFinal from "./StepFinal";
import ModalFooter from "./ModalFooter";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
  price?: number;
}

export default function PaymentModal({ isOpen, onClose, serviceTitle, price }: PaymentModalProps) {
  const [step, setStep] = useState(1);
  const t = useTranslations("Payment.StepTitles");

  const handleClose = () => {
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  const stepTitles = [
    t("step1"),
    t("step2"),
    t("step3")
  ];

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#eff3f6] rounded-4xl overflow-hidden shadow-2xl">
        <div className="relative flex items-center justify-end bg-[#FF9A00] p-3 md:p-3 pr-5">
          <button
            onClick={handleClose}
            className="bg-white/90 hover:bg-white p-1.5 rounded-full text-[#E39B16] shadow-md transition-transform active:scale-90"
          >
            <X size={22} />
          </button>
        </div>
        <PaymentSteps currentStep={step} />

        <div className="bg-[#e2e8f0]/40 px-8 py-6 border-b border-white/50">
          <p className="text-lg font-bold text-[#1E1E1E] leading-relaxed">
            {stepTitles[step - 1]}
          </p>
        </div>

        <div className="px-6 py-10 md:px-10 min-h-105 flex flex-col justify-center">
          {step === 1 && <StepAddFriend />}
          {step === 2 && <StepTransfer serviceTitle={serviceTitle} price={price} />}
          {step === 3 && <StepFinal serviceTitle={serviceTitle} />}
        </div>

        <ModalFooter
          step={step}
          onNext={() => step < 3 ? setStep(step + 1) : handleClose()}
          onBack={() => setStep(step - 1)}
          onClose={handleClose}
        />
      </div>
    </div>
  );
}