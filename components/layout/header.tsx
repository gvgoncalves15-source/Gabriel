'use client';

import { Search, Bell, Calendar } from 'lucide-react';
import Image from 'next/image';

export function Header() {
  const handleNotification = () => {
    alert("Você não possui novas notificações no momento.");
  };

  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white/90 backdrop-blur-md z-40 px-8 flex items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-slate-100">
      <div className="flex items-center gap-6 flex-1">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Buscar cliente, motorista, placa, rota..." 
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-slate-50 border-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>
        
        <div className="hidden xl:flex items-center gap-3 text-sm text-slate-500">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span>Hoje: Terça-feira, 24 de Outubro</span>
          </div>
          <span className="text-slate-300">•</span>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
            <span className="font-semibold text-blue-800">23 equipes ativas</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button onClick={handleNotification} className="relative p-2 rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-all flex items-center justify-center">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>
        
        <div className="h-8 w-px bg-slate-200"></div>
        
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:flex sm:flex-col">
            <span className="text-sm font-semibold text-slate-800 leading-tight">Carlos Eduardo Mendes</span>
            <span className="text-[11px] text-slate-500">Supervisor de Operações</span>
          </div>
          <Image 
            src="https://picsum.photos/seed/carlos/100/100" 
            alt="Profile" 
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover shadow-sm border border-slate-100"
          />
        </div>
      </div>
    </header>
  );
}
