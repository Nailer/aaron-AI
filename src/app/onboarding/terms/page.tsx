"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  ArrowRight, 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle2 
} from 'lucide-react';

export default function TermsPage() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);

  const handleContinue = () => {
    if (agreed) {
      router.push('/onboarding/summary');
    }
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
            <h2 className="font-semibold text-lg">Phase 3: Security & Privacy</h2>
            <span className="text-xs font-bold text-blue-500 bg-blue-500/10 px-2 py-1 rounded">75% COMPLETE</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-1000 ease-out"></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-slate-500 font-medium">
             <span>Step 3 of 4: Legal & Compliance</span>
             <span>Next: Final Summary</span>
          </div>
        </div>

        {/* Hero Text */}
        <div className="text-center mb-10 max-w-2xl animate-fade-in [animation-delay:100ms]">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Your Trust is Our Priority</h1>
          <p className="text-slate-400 text-lg">
             We use bank-grade encryption to protect your data. Your information is never sold to third parties.
          </p>
        </div>

        {/* Main Card */}
        <div className="w-full max-w-3xl bg-[#111520] border border-white/5 rounded-3xl shadow-2xl overflow-hidden animate-slide-up [animation-delay:200ms]">
          
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
             <div className="p-8 flex flex-col items-center text-center">
               <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                 <Shield size={24} />
               </div>
               <h3 className="font-bold text-white mb-2">Bank Grade Security</h3>
               <p className="text-sm text-slate-500">AES-256 encryption for all sensitive data storage.</p>
             </div>
             
             <div className="p-8 flex flex-col items-center text-center">
               <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4">
                 <Lock size={24} />
               </div>
               <h3 className="font-bold text-white mb-2">Private by Design</h3>
               <p className="text-sm text-slate-500">Only you have access to your raw financial data.</p>
             </div>

             <div className="p-8 flex flex-col items-center text-center">
               <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
                 <Eye size={24} />
               </div>
               <h3 className="font-bold text-white mb-2">No Hidden Eyes</h3>
               <p className="text-sm text-slate-500">We do not sell your data to advertisers.</p>
             </div>
          </div>

          <div className="p-8 md:p-12 bg-[#0F1218] border-t border-white/5">
            <div className="bg-[#171C28] rounded-2xl p-6 border border-white/5 h-48 overflow-y-auto mb-8 text-sm text-slate-400 space-y-4">
               <p><strong className="text-white">1. Introduction.</strong> Welcome to RESOLV.AI. By using our services, you agree to these terms...</p>
               <p><strong className="text-white">2. Data Privacy.</strong> We take your privacy seriously. All data inputted into our system is encrypted...</p>
               <p><strong className="text-white">3. Financial Advice Disclaimer.</strong> The AI generated insights are for informational purposes only and do not constitute professional financial advice. Always consult a certified advisor...</p>
               <p><strong className="text-white">4. User Responsibility.</strong> You are responsible for the accuracy of the information provided...</p>
               <p><strong className="text-white">5. Termination.</strong> We reserve the right to terminate accounts that violate our usage policies...</p>
            </div>

            <div 
              onClick={() => setAgreed(!agreed)}
              className="flex items-start gap-4 p-4 border border-white/5 rounded-xl bg-[#171C28] cursor-pointer hover:border-blue-500/30 transition-colors group"
            >
              <div className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center transition-all ${
                agreed ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-600 group-hover:border-blue-400'
              }`}>
                {agreed && <CheckCircle2 size={14} />}
              </div>
              <div>
                <p className="text-sm text-slate-300 font-medium">I agree to the Terms of Service and Privacy Policy</p>
                <p className="text-xs text-slate-500 mt-1">By checking this box, you confirm that you have read and accepted our legal terms.</p>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-8 flex items-center justify-between">
              <button 
                onClick={() => router.back()}
                className="text-slate-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors"
              >
                <ArrowLeft size={16} /> Back
              </button>
              
              <button 
                onClick={handleContinue}
                disabled={!agreed}
                className={`px-10 py-3 rounded-lg font-semibold shadow-lg flex items-center gap-2 transition-all ${
                  agreed 
                   ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20 hover:scale-105 active:scale-95' 
                   : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                Continue <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
