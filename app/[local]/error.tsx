"use client";

import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <Scale className="h-16 w-16 text-[#E39B16] mb-8" />
      <h1 className="text-4xl font-bold text-[#1A3079] mb-4">
        เกิดข้อผิดพลาด
      </h1>
      <p className="text-slate-500 mb-8 max-w-md">
        Something went wrong. Please try again.
      </p>
      <Button
        onClick={() => reset()}
        className="bg-[#E39B16] hover:bg-[#cf890d] text-white px-8 py-3 text-base font-bold rounded-md"
      >
        ลองอีกครั้ง / Try Again
      </Button>
    </main>
  );
}
