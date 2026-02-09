"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Settings, 
  HelpCircle, 
  Mic, 
  Sparkles, 
  Lock, 
  ShieldCheck, 
  Users, 
  ChevronDown, 
  ArrowLeft, 
  ArrowRight,
  Brain
} from 'lucide-react';
import { useOnboarding } from '../context';

export default function GoalsPage() {
  const router = useRouter();
  const { data, updateData } = useOnboarding();
  const [isRecording, setIsRecording] = useState(false);

  // const handleContinue = () => {
  //   // Add any validation here if needed
  //   router.push('/onboarding/additional-info');
  // };
  const handleContinue = async () => {
    try {
      const response = await fetch("http://localhost:3000/onboarding/goals", { // Point to FastAPI
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), 
      });

      const result = await response.json();
      
      // Store this in your Context or State so the next page can show it!
      console.log("AI Financial Plan:", result.analysis);
      
      router.push('/onboarding/additional-info');
    } catch (error) {
      console.error("Failed to reach Aaron AI:", error);
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
            <span className="font-bold text-lg tracking-tight">Aaron AI</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Dashboard</a>
            <a href="#" className="text-white">Goals</a>
            <a href="#" className="hover:text-white transition-colors">Insights</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-white transition-colors hover:bg-white/5 rounded-lg">
              <Settings size={20} />
            </button>
            <button className="p-2 text-slate-400 hover:text-white transition-colors hover:bg-white/5 rounded-lg">
              <HelpCircle size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center pt-10 pb-20 px-4 sm:px-6">
        
        {/* Progress Section */}
        <div className="w-full max-w-4xl mb-8 animate-fade-in">
          <div className="flex justify-between items-end mb-2">
            <h2 className="font-semibold text-lg">Phase 1: Your Vision</h2>
            <span className="text-xs font-bold text-blue-500 bg-blue-500/10 px-2 py-1 rounded">25% COMPLETE</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full w-1/4 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-slate-500 font-medium">
            <span>Step 1 of 4: Goal Baseline</span>
            <span>Next: Financial Parameters</span>
          </div>
        </div>

        {/* Hero Text */}
        <div className="text-center mb-10 max-w-2xl animate-fade-in [animation-delay:100ms]">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Financial Resolution Setup</h1>
          <p className="text-slate-400 text-lg">
            We'll ask a few questions to understand your lifestyle and financial aspirations. 
            No spreadsheets required.
          </p>
        </div>

        {/* Main Card */}
        <div className="w-full max-w-5xl bg-[#111520] border border-white/5 rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden animate-slide-up [animation-delay:200ms]">
          
          {/* Left Column (AI) */}
          <div className="w-full md:w-[35%] bg-[#0F1218] p-8 flex flex-col items-center justify-center border-r border-white/5 relative">
            
             {/* Center Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-600/10 blur-[60px] rounded-full pointer-events-none"></div>

            <div className="relative mb-8">
              <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)] animate-pulse">
                <Brain className="text-white w-10 h-10" />
              </div>
              <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_10s_linear_infinite]"></div>
            </div>

            <div className="bg-[#1A1F2C] p-6 rounded-2xl rounded-tr-sm border border-white/5 shadow-lg relative max-w-xs transition-transform hover:scale-[1.02]">
              <div className="absolute -right-2 top-0 w-4 h-4 bg-[#1A1F2C] rotate-45 transform origin-bottom-left skew-x-12"></div>
              <p className="text-slate-200 leading-relaxed text-sm">
                “To build your 2026 plan, I need to understand your baseline. 
                What is your primary financial goal for the next 24 months?”
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs text-slate-500 font-medium">Aaron AI is processing your inputs</span>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="flex-1 p-8 md:p-10">
            <div className="space-y-8">
              
              {/* Goal Input */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Describe Your Goal</label>
                <div className="relative group">
                  <textarea 
                    value={data.goalDescription}
                    onChange={(e) => updateData({ goalDescription: e.target.value })}
                    className="w-full h-32 bg-[#171C28] border border-white/5 rounded-xl p-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none z-10 relative"
                    placeholder="e.g., Save for a down payment on a house in Seattle, while maintaining a $10k emergency fund."
                  />
                  {/* Mic Icon */}
                  <div className="absolute bottom-3 right-3 z-20">
                    <button 
                      onClick={() => setIsRecording(!isRecording)}
                      className={`p-2 rounded-lg transition-all ${
                        isRecording 
                          ? 'bg-red-500/20 text-red-400 animate-pulse' 
                          : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Mic size={18} />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-blue-400">
                  <Sparkles size={12} />
                  <span>Goal Strength: <span className="text-white">Good</span></span>
                </div>
              </div>

              {/* Income Input Section */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Estimated Annual Income</label>
                  
                  {/* Editable Amount Display */}
                  <div className="relative group">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xl font-bold text-blue-400 pointer-events-none">$</span>
                    <input
                      type="text"
                      className="text-right text-xl font-bold text-blue-400 bg-transparent border-b border-dashed border-blue-500/30 hover:border-blue-500 focus:border-blue-500 focus:outline-none w-40 pb-0.5 transition-colors placeholder:text-blue-500/30"
                      value={data.annualIncome === 0 ? "" : data.annualIncome.toLocaleString()}
                      onChange={(e) => {
                        // Remove non-numeric chars
                        const rawValue = e.target.value.replace(/[^0-9]/g, '');
                        // Limit to reasonable length to prevent overflow
                        if (rawValue.length > 9) return; 
                        updateData({ annualIncome: Number(rawValue) });
                      }}
                      placeholder="0"
                    />
                  </div>
                </div>

                <div className="relative">
                  {/* Custom Styled Range Slider */}
                  <input 
                    type="range" 
                    min="0" 
                    max="500000" 
                    step="1000"
                    value={Math.min(data.annualIncome, 500000)}
                    onChange={(e) => updateData({ annualIncome: Number(e.target.value) })}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 active:accent-blue-400 relative z-10"
                  />
                  
                  {/* Progress Bar Effect (CSS hack to color left side) */}
                  <div 
                    className="absolute top-0 left-0 h-2 bg-blue-600 rounded-lg pointer-events-none z-0"
                    style={{ 
                      width: `${Math.min((data.annualIncome / 500000) * 100, 100)}%` 
                    }}
                  ></div>
                </div>

                <div className="flex justify-between text-xs text-slate-600 font-medium px-0.5">
                  <button 
                    onClick={() => updateData({ annualIncome: 30000 })}
                    className="hover:text-blue-400 transition-colors"
                  >
                    $30k
                  </button>
                  <button 
                    onClick={() => updateData({ annualIncome: 500000 })}
                    className="hover:text-blue-400 transition-colors"
                  >
                    $500k+
                  </button>
                </div>
              </div>

              {/* Row: Timeframe & Risk */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Timeframe */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Timeframe</label>
                  <div className="relative">
                    {data.timeframe.startsWith("Custom") ? (
                      <div className="relative animate-fade-in">
                         <select 
                          value={data.timeframe}
                          onChange={(e) => {
                             if (e.target.value === "back") {
                               updateData({ timeframe: "2 Years (Target 2028)" }); // Reset to default
                             } else {
                               updateData({ timeframe: e.target.value });
                             }
                          }}
                          className="w-full bg-[#171C28] border border-blue-500/50 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                        >
                          <option value="Custom" disabled>Select Target Year</option>
                          {Array.from({ length: 30 }, (_, i) => {
                             const year = new Date().getFullYear() + i + 1;
                             return <option key={year} value={`Custom (${year})`}>{year}</option>;
                          })} 
                          <option value="back">← Back to Presets</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-400 pointer-events-none" size={16} />
                      </div>
                    ) : (
                      <div className="relative">
                        <select 
                          value={data.timeframe}
                          onChange={(e) => updateData({ timeframe: e.target.value })}
                          className="w-full bg-[#171C28] border border-white/5 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                        >
                          <option>1 Year (Target 2027)</option>
                          <option>2 Years (Target 2028)</option>
                          <option>5 Years (Target 2031)</option>
                          <option value="Custom">Custom...</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={16} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Risk */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Risk Appetite</label>
                  <div className="flex p-1 bg-[#171C28] rounded-xl border border-white/5">
                    {['CONSERVATIVE', 'MODERATE'].map((level) => (
                       <button
                        key={level}
                        onClick={() => updateData({ riskAppetite: level as any })}
                        className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                          data.riskAppetite === level 
                            ? 'bg-slate-700 text-white shadow-sm' 
                            : 'text-slate-500 hover:text-slate-300'
                        }`}
                       >
                         {level}
                       </button>
                    ))}
                  </div>
                </div>
              </div>

              
              {/* === NEW QUESTIONS SECTION === */}

              {/* 1. Income Predictability */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">How predictable is your monthly income?</label>
                <input 
                  type="text" 
                  value={data.incomePredictability}
                  onChange={(e) => updateData({ incomePredictability: e.target.value })}
                  placeholder="e.g. Fixed Salary, Variable, Seasonal..."
                  className="w-full bg-[#171C28] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
                <div className="flex flex-wrap gap-2">
                   {['Fixed Salary', 'Variable Commission', 'Freelance / Irregular'].map((opt) => (
                     <button 
                       key={opt}
                       onClick={() => updateData({ incomePredictability: opt })}
                       className="px-3 py-1.5 rounded-lg bg-[#171C28] border border-white/5 text-xs text-slate-400 hover:text-white hover:border-blue-500/50 transition-colors"
                     >
                       {opt}
                     </button>
                   ))}
                </div>
              </div>

              {/* 2. Savings Target */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">If your goal involves saving, how much do you want to save?</label>
                <input 
                  type="text" 
                  value={data.savingsTarget}
                  onChange={(e) => updateData({ savingsTarget: e.target.value })}
                  placeholder="e.g. $10,000, 20% of income..."
                  className="w-full bg-[#171C28] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
                <div className="flex flex-wrap gap-2">
                   {['$10,000', '$50,000', '10% of Income', '20% of Income'].map((opt) => (
                     <button 
                       key={opt}
                       onClick={() => updateData({ savingsTarget: opt })}
                       className="px-3 py-1.5 rounded-lg bg-[#171C28] border border-white/5 text-xs text-slate-400 hover:text-white hover:border-blue-500/50 transition-colors"
                     >
                       {opt}
                     </button>
                   ))}
                </div>
              </div>

              {/* 3. AI Intervention */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">When should the AI step in to help you decide?</label>
                <input 
                  type="text" 
                  value={data.aiInterventionPreference}
                  onChange={(e) => updateData({ aiInterventionPreference: e.target.value })}
                  placeholder="Type your preference..."
                  className="w-full bg-[#171C28] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
                <div className="flex flex-wrap gap-2">
                   {['Before discretionary spending', 'When I ask', 'Weekly reviews only', 'High-risk decisions only'].map((opt) => (
                     <button 
                       key={opt}
                       onClick={() => updateData({ aiInterventionPreference: opt })}
                       className={`px-3 py-1.5 rounded-lg border text-xs transition-colors ${
                         data.aiInterventionPreference === opt 
                           ? 'bg-blue-600/20 border-blue-500 text-blue-300' 
                           : 'bg-[#171C28] border-white/5 text-slate-400 hover:text-white hover:border-blue-500/50'
                       }`}
                     >
                       {opt}
                     </button>
                   ))}
                </div>
              </div>

              {/* 4. Advice Format */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">How do you prefer financial advice to be explained?</label>
                <input 
                  type="text" 
                  value={data.adviceFormatPreference}
                  onChange={(e) => updateData({ adviceFormatPreference: e.target.value })}
                  placeholder="Type your preference..."
                  className="w-full bg-[#171C28] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
                 <div className="flex flex-wrap gap-2">
                   {['Simple & direct', 'Detailed & educational', 'Visual summaries', 'Minimal — just the key point'].map((opt) => (
                     <button 
                       key={opt}
                       onClick={() => updateData({ adviceFormatPreference: opt })}
                       className={`px-3 py-1.5 rounded-lg border text-xs transition-colors ${
                         data.adviceFormatPreference === opt 
                           ? 'bg-blue-600/20 border-blue-500 text-blue-300' 
                           : 'bg-[#171C28] border-white/5 text-slate-400 hover:text-white hover:border-blue-500/50'
                       }`}
                     >
                       {opt}
                     </button>
                   ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <button className="text-slate-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
                  <ArrowLeft size={16} /> Back
                </button>
                
                <div className="flex items-center gap-6">
                   <button className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
                     Save Progress
                   </button>
                   <button 
                    onClick={handleContinue}
                    className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-blue-600/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                   >
                     Continue <ArrowRight size={18} />
                   </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Security Badges */}
        <div className="mt-16 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60">
           <div className="flex items-start gap-4 p-4 border border-white/5 rounded-2xl bg-white/[0.01]">
             <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
               <Lock size={20} />
             </div>
             <div>
               <h4 className="font-bold text-sm mb-1">Bank-Grade Security</h4>
               <p className="text-xs text-slate-400 leading-relaxed">Your data is encrypted and never shared with third parties.</p>
             </div>
           </div>

           <div className="flex items-start gap-4 p-4 border border-white/5 rounded-2xl bg-white/[0.01]">
             <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
               <ShieldCheck size={20} />
             </div>
             <div>
               <h4 className="font-bold text-sm mb-1">Smart Validation</h4>
               <p className="text-xs text-slate-400 leading-relaxed">Our AI verifies if your goals are mathematically realistic.</p>
             </div>
           </div>

           <div className="flex items-start gap-4 p-4 border border-white/5 rounded-2xl bg-white/[0.01]">
             <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
               <Users size={20} />
             </div>
             <div>
               <h4 className="font-bold text-sm mb-1">Human-In-The-Loop</h4>
               <p className="text-xs text-slate-400 leading-relaxed">Connect with a human advisor anytime if you get stuck.</p>
             </div>
           </div>
        </div>

        <footer className="mt-20 text-center text-xs text-slate-600 space-x-6">
           <span>© 2026 Aaron AI Financial Planning. All rights reserved.</span>
           <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
           <a href="#" className="hover:text-slate-400 transition-colors">Support</a>
        </footer>

      </main>
    </div>
  );
}
