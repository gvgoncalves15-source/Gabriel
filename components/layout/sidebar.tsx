'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Building2, 
  CalendarDays, 
  Users, 
  AlertTriangle 
} from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { name: 'Painel', href: '/painel', icon: LayoutDashboard },
  { name: 'Clientes', href: '/clientes', icon: Building2 },
  { name: 'Escalas', href: '/escalas', icon: CalendarDays },
  { name: 'Equipe', href: '/equipe', icon: Users },
  { name: 'Ocorrências', href: '/ocorrencias', icon: AlertTriangle, badge: 3 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-r border-slate-100">
      <div className="flex flex-col">
        <div className="h-16 px-6 flex items-center gap-3 bg-white border-b border-slate-50">
          <div className="w-8 h-8 rounded bg-blue-700 flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-blue-900 leading-tight tracking-tight">Logística360</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Granel &amp; Cilindros</span>
          </div>
        </div>

        <div className="px-4 py-4">
          <div className="px-2 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Operação Diária
          </div>
        </div>

        <nav className="px-4 flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (pathname === '/' && item.href === '/painel');
            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                  isActive 
                    ? "bg-blue-700 text-white shadow-sm" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={clsx("w-5 h-5", isActive ? "text-white" : "text-slate-400")} />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className={clsx(
                    "px-2 py-0.5 rounded-full text-[10px] font-bold",
                    isActive ? "bg-blue-600 text-white" : "bg-red-100 text-red-700"
                  )}>
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div className="p-4 rounded-xl bg-blue-50 flex flex-col gap-1 shadow-sm border border-blue-100/50">
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-semibold text-slate-800">Central de Apoio</span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
          </div>
          <p className="text-xs text-slate-600">Suporte técnico de despacho e monitoramento via rádio.</p>
          <div className="flex items-center justify-between pt-1">
            <span className="text-[10px] font-semibold text-slate-400">v3.1 Ativa</span>
            <span className="text-[10px] font-bold text-blue-600 uppercase">Online</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
