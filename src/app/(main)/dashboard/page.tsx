"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BarChart3, 
  Target, 
  Wallet, 
  PieChart, 
  Zap, 
  Bell, 
  Search, 
  Settings, 
  LogOut,
  ChevronRight,
  Sparkles,
  CreditCard,
  ArrowUpRight,
  AlertTriangle,
  Calendar,
  Activity,
  RefreshCw,
  MoreHorizontal,
  Home
} from 'lucide-react';
import { ResponsiveContainer, PieChart as RechartsPie, Pie, Cell } from 'recharts';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  // Mock Data for Charts
  const progressData = [
    { name: 'Completed', value: 75, color: '#3b82f6' },
    { name: 'Remaining', value: 25, color: '#1e293b' },
  ];

  return (
    <>
      <div className="p-8">
        
        {/* Top Navbar */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Welcome back, Alex
            </h1>
            <p className="text-slate-500 mt-1">Your financial landscape is looking stable today.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search analytics..." 
                className="bg-[#171C28] border border-white/5 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50 w-64 transition-all"
              />
            </div>
            <button className="p-2.5 bg-[#171C28] border border-white/5 rounded-full text-slate-400 hover:text-white hover:bg-[#1f2536] transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#171C28]"></span>
            </button>
            <button className="p-2.5 bg-[#171C28] border border-white/5 rounded-full text-slate-400 hover:text-white hover:bg-[#1f2536] transition-colors">
              <Settings size={20} />
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-300 to-orange-400 border-2 border-[#171C28] shadow-lg"></div>
          </div>
        </header>

        {/* AI Insight Card */}
        <div className="w-full bg-gradient-to-r from-blue-900/30 to-indigo-900/10 border border-blue-500/20 rounded-3xl p-6 mb-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700"></div>
          
          <div className="flex gap-4 items-start relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 flex-shrink-0 animate-pulse">
              <Sparkles className="text-white" size={24} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">AI Insights</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-white/5">Just now</span>
              </div>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-light">
                "You're saving <span className="font-semibold text-blue-400">15% more</span> than last month, putting you <span className="font-semibold text-blue-400">2 weeks ahead</span> of your primary goal."
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Goal Progress Chart */}
          <div className="bg-[#111520] border border-white/5 rounded-3xl p-6 relative hover:border-white/10 transition-colors">
            <div className="flex justify-between items-start mb-6">
              <h3 className="font-bold text-white">Goal Progress</h3>
              <button className="text-slate-500 hover:text-white"><MoreHorizontal size={20} /></button>
            </div>
            
            <div className="h-48 flex items-center justify-center relative">
               {/* Center Text */}
               <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                 <span className="text-3xl font-bold text-white">75%</span>
                 <span className="text-xs text-slate-500 uppercase tracking-wide">Reached</span>
               </div>
               
               {/* Chart */}
               <div className="w-48 h-48">
                 <ResponsiveContainer width="100%" height="100%">
                    <RechartsPie>
                      <Pie
                        data={progressData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        startAngle={90}
                        endAngle={-270}
                        dataKey="value"
                        stroke="none"
                        cornerRadius={10}
                        paddingAngle={5}
                      >
                        {progressData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </RechartsPie>
                 </ResponsiveContainer>
               </div>
            </div>

            <div className="mt-4 flex justify-between items-center text-sm">
              <span className="text-slate-400">Independence Goal</span>
              <div className="text-right">
                <span className="text-white font-bold">$15,000</span>
                <span className="text-slate-600"> / $20,000</span>
              </div>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full mt-3 overflow-hidden">
               <div className="h-full w-3/4 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            </div>
          </div>

          {/* Weekly Status */}
          <div className="bg-[#111520] border border-white/5 rounded-3xl p-6 hover:border-white/10 transition-colors flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                   <span className="text-black font-bold text-xs">✓</span>
                </div>
              </div>
              <h3 className="font-bold text-white">This Week's Status</h3>
            </div>

            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                On Track
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
              Spending is 4% below your weekly budget. You have <span className="text-white font-semibold">$420 remaining</span> for discretionary expenses.
            </p>

            <button className="w-full py-3 rounded-xl border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors">
              View Details
            </button>
          </div>

          {/* Account Overview */}
          <div className="bg-[#111520] border border-white/5 rounded-3xl p-6 hover:border-white/10 transition-colors flex flex-col">
            <h3 className="font-bold text-white mb-6">Account Overview</h3>
            
            <div className="space-y-4 flex-1">
              {/* Account Item 1 */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#171C28]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                    <Wallet size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Savings Account</p>
                    <p className="text-xs text-slate-500">Chase Bank</p>
                  </div>
                </div>
                <span className="font-mono font-bold text-white">$12,450.00</span>
              </div>

               {/* Account Item 2 */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#171C28]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                    <CreditCard size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Personal Credit</p>
                    <p className="text-xs text-slate-500">Amex Gold</p>
                  </div>
                </div>
                <span className="font-mono font-bold text-white">$2,105.40</span>
              </div>
            </div>

            <button className="w-full mt-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5">
              Transfer Funds
            </button>
          </div>

        </div>

        {/* Risk Alerts */}
        <div className="mb-4 flex items-center gap-2">
           <AlertTriangle className="text-orange-500" size={20} />
           <h3 className="text-lg font-bold text-white">Upcoming Risk Alerts</h3>
        </div>
        
        <div className="bg-[#111520] border border-white/5 rounded-3xl overflow-hidden divide-y divide-white/5">
           
           {/* Alert 1 */}
           <div className="p-5 flex items-center gap-4 hover:bg-white/[0.02] transition-colors group cursor-pointer">
             <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-slate-700 group-hover:text-white transition-colors">
               <Calendar size={18} />
             </div>
             <div className="flex-1">
               <h4 className="font-bold text-white text-sm">Upcoming Late Fee Risk</h4>
               <p className="text-xs text-slate-500 mt-0.5">Credit Card X payment due in 2 days. Insufficient funds in checking.</p>
             </div>
             <button className="text-xs font-bold text-blue-500 hover:text-blue-400 px-4 py-2 hover:bg-blue-500/10 rounded-lg transition-colors">
               Resolve
             </button>
           </div>

           {/* Alert 2 */}
           <div className="p-5 flex items-center gap-4 hover:bg-white/[0.02] transition-colors group cursor-pointer">
             <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-slate-700 group-hover:text-white transition-colors">
               <Activity size={18} />
             </div>
             <div className="flex-1">
               <h4 className="font-bold text-white text-sm">Subscription Price Increase</h4>
               <p className="text-xs text-slate-500 mt-0.5">Cloud Storage monthly fee increasing from $9.99 to $12.99 next month.</p>
             </div>
             <button className="text-xs font-bold text-slate-400 hover:text-white px-4 py-2 hover:bg-white/5 rounded-lg transition-colors">
               Review
             </button>
           </div>

           {/* Alert 3 */}
           <div className="p-5 flex items-center gap-4 hover:bg-white/[0.02] transition-colors group cursor-pointer">
             <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-slate-700 group-hover:text-white transition-colors">
               <RefreshCw size={18} />
             </div>
             <div className="flex-1">
               <h4 className="font-bold text-white text-sm">Account Sync Failure</h4>
               <p className="text-xs text-slate-500 mt-0.5">Connection with Fidelity Investments lost. Please re-authenticate.</p>
             </div>
             <button className="text-xs font-bold text-blue-500 hover:text-blue-400 px-4 py-2 hover:bg-blue-500/10 rounded-lg transition-colors">
               Reconnect
             </button>
           </div>

        </div>

      </div>
    </>
  );
}
