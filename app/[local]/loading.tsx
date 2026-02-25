import { Scale } from "lucide-react";

export default function Loading() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Scale className="h-12 w-12 text-[#E39B16] animate-pulse" />
      <p className="mt-4 text-slate-500 font-medium">กำลังโหลด...</p>
    </main>
  );
}
