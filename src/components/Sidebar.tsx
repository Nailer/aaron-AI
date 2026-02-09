"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BarChart3, 
  Target, 
  Wallet, 
  Home,
  Zap
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: Home, href: '/dashboard' },
    { name: 'Goals', icon: Target, href: '/goals' }, // Placeholder href
    { name: 'Accounts', icon: Wallet, href: '/accounts' }, // Placeholder href
    { name: 'Reports', icon: BarChart3, href: '/reports' }, // Placeholder href
  ];

  return (
    <aside className="w-64 border-r border-white/5 bg-[#0F1218] flex flex-col fixed inset-y-0 z-50">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white">Aaron AI</span>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-3">Financial Health</p>
          {menuItems.map((item) => {
            // Check if active based on path. For demo, exact match or subpath.
            // Dashboard is '/dashboard', others might not exist yet.
            const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
            
            return (
              <Link 
                key={item.name}
                href={item.href}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-blue-600/10 text-blue-400' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-auto p-4 border-t border-white/5">
        <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-xl p-4 border border-blue-500/20 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1 bg-blue-500 rounded text-white">
              <Zap size={14} fill="currentColor" />
            </div>
            <span className="text-sm font-bold text-white">Pro Plan</span>
          </div>
          <p className="text-xs text-slate-400 mb-3">Next billing May 12</p>
          <button className="text-xs font-medium text-blue-400 hover:text-blue-300">Manage Subscription</button>
        </div>
      </div>
    </aside>
  );
}
