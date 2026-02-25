"use client";
import React from 'react';
import { useOnboarding } from '../context';
import { Sparkles, ArrowLeft, Download, Share2 } from 'lucide-react';

export default function ResultPage() {
  const { data } = useOnboarding();

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="text-blue-500" />
          <h1 className="text-2xl font-bold">Your Aaron AI Financial Plan</h1>
        </div>

        <div className="bg-[#111520] border border-white/5 rounded-3xl p-8 shadow-2xl">
          {data.aiResponse ? (
            <div className="prose prose-invert max-w-none">
              {/* This renders the AI text. You can use a markdown library here later */}
              <p className="whitespace-pre-wrap leading-relaxed text-slate-300">
                {data.aiResponse}
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center py-20">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-slate-400">Aaron is finalizing your custom strategy...</p>
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-between">
           <button onClick={() => window.history.back()} className="flex items-center gap-2 text-slate-400 hover:text-white">
             <ArrowLeft size={18} /> Edit Profile
           </button>
           <div className="flex gap-4">
             <button className="p-3 bg-white/5 rounded-xl hover:bg-white/10"><Download size={20} /></button>
             <button className="p-3 bg-white/5 rounded-xl hover:bg-white/10"><Share2 size={20} /></button>
           </div>
        </div>
      </div>
    </div>
  );
}