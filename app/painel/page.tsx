'use client';

import { 
  Printer, 
  Download, 
  AlertTriangle, 
  Truck, 
  Settings, 
  ShieldCheck, 
  AlertOctagon, 
  RefreshCcw,
  Building2
} from 'lucide-react';
import Link from 'next/link';

export default function PainelPage() {
  const handlePrint = () => {
    window.print();
  };

  const handleExport = () => {
    alert("Iniciando download do relatório diário...");
  };

  return (
    <div className="flex flex-col w-full gap-8">
      {/* Top Command & Action Strip */}
      <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 bg-white p-8 rounded-xl shadow-sm relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-blue-100/50 blur-3xl pointer-events-none"></div>
        <div className="flex flex-col gap-2 relative z-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider border border-blue-100">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              Turno Matutino • 06:00 às 15:48
            </span>
            <span className="text-sm text-slate-500">Sincronização telemétrica: agora mesmo</span>
          </div>
          <h1 className="text-3xl font-bold text-blue-900 tracking-tight">Visão Geral Operacional</h1>
          <p className="text-base text-slate-500">Monitoramento em tempo real de clientes, escalas e ocorrências ativas.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 relative z-10">
          <button onClick={handlePrint} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm">
            <Printer className="w-4 h-4 text-blue-700" />
            <span>Imprimir Escala do Dia</span>
          </button>
          <button onClick={handleExport} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-50 text-blue-700 text-sm font-semibold hover:bg-blue-100 transition-colors shadow-sm">
            <Download className="w-4 h-4" />
            <span>Exportar Relatório Diário</span>
          </button>
          <Link href="/ocorrencias" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-all shadow-sm">
            <AlertTriangle className="w-4 h-4" />
            <span>Nova Ocorrência</span>
          </Link>
        </div>
      </section>

      {/* KPI Pulse Strip */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-4">
        {[
          { label: 'Clientes Granel', value: '2.015', icon: Truck, color: 'text-blue-700', bg: 'bg-blue-100', sub: 'Malha Ativa', desc: 'Ativos na malha de distribuição' },
          { label: 'Clientes Cilindro', value: '59', icon: Settings, color: 'text-blue-600', bg: 'bg-blue-50', sub: 'Contínuo', desc: 'Contratos contínuos ativos' },
          { label: 'Escalados Hoje', value: '23', icon: UsersIcon, color: 'text-slate-700', bg: 'bg-slate-100', sub: 'equipes', desc: '100% em trânsito', descColor: 'text-blue-700' },
          { label: 'Faltas Hoje', value: '0', icon: ShieldCheck, color: 'text-emerald-700', bg: 'bg-emerald-100', sub: 'Integral', desc: 'Nenhuma ausência reportada' },
          { label: 'Folgas Hoje', value: '4', icon: RefreshCcw, color: 'text-slate-600', bg: 'bg-slate-100', sub: 'Escala', desc: '2 motoristas • 2 ajudantes' },
          { label: 'Ocorrências', value: '3', icon: AlertOctagon, color: 'text-red-700', bg: 'bg-red-100', sub: 'Atenção', desc: '2 em curso • 1 pendente' }
        ].map((kpi, i) => (
          <div key={i} className="flex flex-col justify-between p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow border border-slate-100">
            <div className="flex items-center justify-between">
              <span className={`text-[10px] font-bold uppercase tracking-wider ${kpi.label === 'Ocorrências' ? 'text-red-600' : 'text-slate-500'}`}>{kpi.label}</span>
              <div className={`h-8 w-8 rounded-lg ${kpi.bg} ${kpi.color} flex items-center justify-center`}>
                <kpi.icon className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <div className="flex items-baseline gap-2">
                <span className={`text-2xl font-bold ${kpi.label === 'Ocorrências' ? 'text-red-700' : 'text-slate-900'} leading-none`}>{kpi.value}</span>
                <span className={`px-2 py-0.5 rounded-full ${kpi.bg} ${kpi.color} text-[10px] font-bold`}>{kpi.sub}</span>
              </div>
              <p className={`text-xs ${kpi.descColor || 'text-slate-500'} truncate font-medium mt-1`}>{kpi.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Main Split Canvas */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
             <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-blue-700" />
                <h2 className="text-lg font-bold text-slate-900">Clientes por Cidade</h2>
             </div>
             {/* Simple bar charts */}
             <div className="flex flex-col gap-4 mt-4">
                {[
                  { name: 'Curitiba', count: 742, pct: 37, tag: 'Hub Central' },
                  { name: 'Araucária', count: 385, pct: 19 },
                  { name: 'São José dos Pinhais', count: 290, pct: 14 },
                ].map((city) => (
                  <div key={city.name} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-800 flex items-center gap-2">
                        {city.name}
                        {city.tag && <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-[10px]">{city.tag}</span>}
                      </span>
                      <div className="flex items-center gap-3 font-medium">
                        <span className="text-blue-700">{city.count} clientes</span>
                        <span className="text-slate-400 w-10 text-right">{city.pct}%</span>
                      </div>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: `${city.pct}%` }}></div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Status da Frota */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
             <div className="flex items-center justify-between mb-6">
               <h2 className="text-lg font-bold text-slate-900">Status da Frota</h2>
               <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold">25 Veículos</span>
             </div>
             
             <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
                   <div className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-700"></span>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-800">Caminhões Tanque (Granel)</span>
                        <span className="text-xs text-slate-500">Operando em rota</span>
                      </div>
                   </div>
                   <span className="text-lg font-bold text-blue-700">18</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
                   <div className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-800">Plataforma (Cilindros)</span>
                        <span className="text-xs text-slate-500">Distribuição urbana</span>
                      </div>
                   </div>
                   <span className="text-lg font-bold text-blue-600">5</span>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Simple icon wrapper
function UsersIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  );
}
