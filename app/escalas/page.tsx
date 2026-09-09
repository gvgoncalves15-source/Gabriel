'use client';

import { useState } from 'react';
import { 
  Copy, 
  FileText, 
  PlusCircle, 
  CalendarDays, 
  Clock, 
  History, 
  ChevronLeft, 
  ChevronRight,
  Filter,
  RefreshCcw,
  Edit2,
  ArrowRightLeft,
  MoreVertical
} from 'lucide-react';
import Image from 'next/image';

export default function EscalasPage() {
  const [activeTab, setActiveTab] = useState('dia-util');

  const handleCopy = () => alert("Escala de ontem copiada com sucesso!");
  const handleExport = () => window.print();
  const handleNewTeam = () => alert("Abrindo modal para escalar nova equipe...");

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full rounded-2xl bg-white p-8 shadow-sm mb-8 overflow-hidden border border-slate-100">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-gradient-to-br from-blue-100 to-transparent blur-3xl pointer-events-none"></div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-blue-600 text-[11px] font-bold uppercase tracking-wider">
              <span>Despacho Operacional Unificado</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Escala Operacional de Frotas e Equipes</h1>
            <p className="text-sm text-slate-500 max-w-2xl">
              Controle dinâmico de escalas diárias, contingências de plantão e alocação de semirreboques para operações de Granel e Cilindros Industriais.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={handleCopy} className="h-9 px-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-100 transition-all flex items-center gap-2 shadow-sm">
              <Copy className="w-4 h-4 text-blue-600" />
              <span>Copiar Escala de Ontem</span>
            </button>
            <button onClick={handleExport} className="h-9 px-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-100 transition-all flex items-center gap-2 shadow-sm">
              <FileText className="w-4 h-4 text-blue-700" />
              <span>Exportar PDF Portaria</span>
            </button>
            <button onClick={handleNewTeam} className="h-9 px-6 rounded-lg bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-all flex items-center gap-2 shadow-sm">
              <PlusCircle className="w-4 h-4" />
              <span>Escalar Nova Equipe</span>
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-slate-100 pt-6">
          <div className="flex items-center bg-slate-50 p-1 rounded-xl shadow-inner max-w-fit border border-slate-200">
            <button 
              onClick={() => setActiveTab('dia-util')}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all ${activeTab === 'dia-util' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <CalendarDays className="w-4 h-4" />
              <span>Dia Útil (Segunda a Sexta)</span>
              {activeTab === 'dia-util' && <span className="ml-1 px-1.5 py-0.5 rounded-md bg-blue-100 text-blue-700 text-[10px] uppercase font-bold">Hoje</span>}
            </button>
            <button 
              onClick={() => setActiveTab('rodizio')}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all ${activeTab === 'rodizio' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <Clock className="w-4 h-4" />
              <span>Rodízio Especial</span>
            </button>
            <button 
              onClick={() => setActiveTab('historico')}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all ${activeTab === 'historico' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <History className="w-4 h-4" />
              <span>Histórico</span>
            </button>
          </div>

          <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl">
            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 px-3 text-sm font-semibold text-slate-800">
              <CalendarDays className="w-4 h-4 text-blue-600" />
              <span>Terça-feira, 24 de Outubro de 2023</span>
            </div>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="ml-2 px-3 py-1 rounded-md bg-blue-100 text-blue-800 text-[11px] font-bold uppercase tracking-wide hover:bg-blue-200 transition-all">
              Hoje
            </button>
          </div>
        </div>
      </div>

      <div className="w-full rounded-2xl bg-white shadow-sm border border-slate-200 overflow-hidden mb-8">
        <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-50/50 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
            <span className="text-base font-bold text-slate-900">Alocação de Viagens em Tempo Real</span>
            <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-wide">Turno A / B</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
              <Filter className="w-4 h-4 text-slate-400" />
              <select className="bg-transparent text-sm font-semibold text-slate-700 focus:outline-none cursor-pointer appearance-none">
                <option>Todos os tipos de carga</option>
                <option>Granel Sul</option>
              </select>
            </div>
            <button onClick={() => alert('Buscando atualizações de telemetria...')} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-semibold flex items-center gap-2 shadow-sm hover:bg-slate-50 transition-all">
              <RefreshCcw className="w-4 h-4 text-slate-400" />
              <span>Atualizar</span>
            </button>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-[11px] font-bold uppercase tracking-wider h-11 border-b border-slate-200">
                <th className="px-6">Status</th>
                <th className="px-4">Veículo / Placa</th>
                <th className="px-4">Operação</th>
                <th className="px-4">Motorista Escalado</th>
                <th className="px-4">Ajudante Operacional</th>
                <th className="px-4">Rota Destino</th>
                <th className="px-6 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/80 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    RODANDO
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">ABC-4D89</span>
                    <span className="text-xs text-slate-500">Volvo FH 540 Tanque</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-block px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[11px] font-bold">
                    Granel Sul
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <Image 
                      src="https://picsum.photos/seed/roberto/100/100" 
                      alt="Roberto" 
                      width={36} height={36} 
                      className="rounded-full object-cover shadow-sm border border-slate-200"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900">Roberto Carlos Silva</span>
                      <span className="text-xs text-slate-500">(41) 99874-1280</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <Image 
                      src="https://picsum.photos/seed/lucas/100/100" 
                      alt="Lucas" 
                      width={36} height={36} 
                      className="rounded-full object-cover shadow-sm border border-slate-200"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900">Lucas Ferreira Lima</span>
                      <span className="text-[11px] text-slate-400">Matrícula #4892</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-900">Rota 04: Araucária</span>
                    <span className="text-xs text-slate-500">8 descargas</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-1">
                    <button className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors" title="Editar">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors" title="Substituir">
                      <ArrowRightLeft className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors" title="Mais opções">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
              {/* Add a second row */}
              <tr className="hover:bg-slate-50/80 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    EM CARREGAMENTO
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">KLP-9821</span>
                    <span className="text-xs text-slate-500">Mercedes Atego</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-bold">
                    Cilindros Industrial
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <Image 
                      src="https://picsum.photos/seed/marcos/100/100" 
                      alt="Marcos" 
                      width={36} height={36} 
                      className="rounded-full object-cover shadow-sm border border-slate-200"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900">Marcos Vinicius Paiva</span>
                      <span className="text-xs text-slate-500">(41) 99112-9034</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <Image 
                      src="https://picsum.photos/seed/thiago/100/100" 
                      alt="Thiago" 
                      width={36} height={36} 
                      className="rounded-full object-cover shadow-sm border border-slate-200"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900">Thiago Santoro</span>
                      <span className="text-[11px] text-slate-400">Matrícula #5104</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-900">Rota 11: São José</span>
                    <span className="text-xs text-slate-500">42 cilindros</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-1">
                    <button className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors" title="Editar">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors" title="Substituir">
                      <ArrowRightLeft className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors" title="Mais opções">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
