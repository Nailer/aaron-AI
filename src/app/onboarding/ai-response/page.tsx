"use client";
import { useOnboarding } from "../context";

export default function AIResponsePage() {
  const { data } = useOnboarding();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0E14] text-white p-10">
      <div className="max-w-3xl bg-[#111520] p-10 rounded-2xl border border-white/5">
        <h1 className="text-2xl font-bold mb-6">Aaron AI Analysis</h1>
        <p className="text-slate-300 whitespace-pre-wrap">
          {data.aiResponse}
        </p>
      </div>
    </div>
  );
}