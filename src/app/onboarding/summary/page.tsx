"use client";

import React from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  Edit2, 
  Calendar, 
  TrendingUp, 
  Wallet, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useOnboarding } from '../context';

export default function SummaryPage() {
  const { data } = useOnboarding();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-2xl animate-fade-in relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)] animate-slide-up">
            <CheckCircle2 className="text-white w-8 h-8" />
          </div>
          <div className="animate-slide-up [animation-delay:100ms]">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Vision Captured</h1>
            <p className="text-slate-400">Here's the baseline for your financial roadmap.</p>
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-[#111520] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl animate-slide-up [animation-delay:200ms] backdrop-blur-xl relative group">
          
          {/* Decorative Top Border */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

          {/* Goal Section */}
          <div className="mb-10">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Sparkles size={14} className="text-blue-400" />
              Primary Goal
            </h3>
            <div className="bg-[#0B0E14] rounded-2xl p-6 border border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>
              <p className="text-xl md:text-2xl italic text-slate-200 leading-relaxed font-light">
                "{data.goalDescription || "No goal description provided."}"
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 ">
            {/* Income */}
            <div className="p-4 rounded-2xl bg-[#1A1F2C]/50 border border-white/5 flex flex-col gap-3 group-hover:border-white/10 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <Wallet size={16} />
              </div>
              <div>
                <span className="block text-xs text-slate-500 mb-1 font-medium uppercase">Income</span>
                <span className="text-lg font-bold text-white">${data.annualIncome.toLocaleString()}</span>
              </div>
            </div>

            {/* Timeframe */}
            <div className="p-4 rounded-2xl bg-[#1A1F2C]/50 border border-white/5 flex flex-col gap-3 group-hover:border-white/10 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <Calendar size={16} />
              </div>
              <div>
                <span className="block text-xs text-slate-500 mb-1 font-medium uppercase">Timeline</span>
                <span className="text-lg font-bold text-white">{data.timeframe.split(' ')[0] + ' ' + data.timeframe.split(' ')[1]}</span>
              </div>
            </div>

            {/* Risk */}
            <div className="p-4 rounded-2xl bg-[#1A1F2C]/50 border border-white/5 flex flex-col gap-3 group-hover:border-white/10 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
                <TrendingUp size={16} />
              </div>
              <div>
                <span className="block text-xs text-slate-500 mb-1 font-medium uppercase">Risk Profile</span>
                <span className="text-lg font-bold text-white">{data.riskAppetite}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t border-white/5">
             <Link href="/onboarding/goals" className="text-sm font-medium text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
               <Edit2 size={16} /> Edit Details
             </Link>

             <Link href="/dashboard" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
               Generate Roadmap <ArrowRight size={20} />
             </Link>
          </div>

        </div>

        {/* Footer Note */}
        <p className="mt-8 text-center text-slate-500 text-sm animate-fade-in [animation-delay:400ms]">
          Next: We'll analyze your spending patterns to find immediate optimizations.
        </p>

      </div>
    </div>
  );
}
