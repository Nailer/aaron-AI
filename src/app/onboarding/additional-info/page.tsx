"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  ArrowRight, 
  MessageSquare,
  Sparkles 
} from 'lucide-react';
import { useOnboarding } from '../context';

export default function AdditionalInfoPage() {
  const router = useRouter();
  const { data, updateData } = useOnboarding();

  const handleContinue = () => {
    router.push('/onboarding/terms');
  };

  return (
    <div className="min-h-screen flex flex-col">
       {/* Header */}
       <header className="border-b border-white/5 bg-[#0B0E14]/50 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
            </div>
            <span className="font-bold text-lg tracking-tight">RESOLV.AI</span>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center pt-10 pb-20 px-4 sm:px-6">
        
        {/* Progress Section */}
        <div className="w-full max-w-4xl mb-8 animate-fade-in">
          <div className="flex justify-between items-end mb-2">
            <h2 className="font-semibold text-lg">Phase 2: Fine Tuning</h2>
            <span className="text-xs font-bold text-blue-500 bg-blue-500/10 px-2 py-1 rounded">50% COMPLETE</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-1000 ease-out"></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-slate-500 font-medium">
             <span>Step 2 of 4: Additional Context</span>
             <span>Next: Terms & Privacy</span>
          </div>
        </div>

        {/* Hero Text */}
        <div className="text-center mb-10 max-w-2xl animate-fade-in [animation-delay:100ms]">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Anything else?</h1>
          <p className="text-slate-400 text-lg">
             Is there anything else the AI should know to provide more structured financial goal assistance?
          </p>
        </div>

        {/* Main Card */}
        <div className="w-full max-w-3xl bg-[#111520] border border-white/5 rounded-3xl shadow-2xl p-8 md:p-10 animate-slide-up [animation-delay:200ms]">
          
          <div className="space-y-6">
             <div className="relative group">
                <textarea 
                  value={data.additionalInfo}
                  onChange={(e) => updateData({ additionalInfo: e.target.value })}
                  className="w-full h-48 bg-[#171C28] border border-white/5 rounded-xl p-6 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none shadow-inner"
                  placeholder="e.g. I'm expecting a bonus in March, I have a dependent starting college in 2 years, or I prefer ethical investments only..."
                />
                 <div className="absolute right-4 bottom-4 text-slate-600">
                   <MessageSquare size={20} />
                 </div>
             </div>

             <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-4 flex items-start gap-3">
               <Sparkles className="text-blue-400 mt-0.5 flex-shrink-0" size={18} />
               <p className="text-sm text-blue-200/80 leading-relaxed">
                 <span className="font-semibold text-blue-400">Pro Tip:</span> The more context you provide, the more personalized your roadmap will be. Our AI considers life events, market conditions, and your personal constraints.
               </p>
             </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-8 mt-4 border-t border-white/5 flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-slate-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors"
            >
              <ArrowLeft size={16} /> Back
            </button>
            
            <button 
              onClick={handleContinue}
              className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-3 rounded-lg font-semibold shadow-lg shadow-blue-600/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              Continue <ArrowRight size={18} />
            </button>
          </div>

        </div>

      </main>
    </div>
  );
}
