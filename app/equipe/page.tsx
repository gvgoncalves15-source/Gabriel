import { Users, Search, Plus, Shield, Truck, MoreVertical, Filter, Award } from 'lucide-react';
import Image from 'next/image';

export default function EquipePage() {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Gestão de Equipe</h1>
          <p className="text-sm text-slate-500">Controle de motoristas, ajudantes e documentação operacional.</p>
        </div>
        <button className="h-10 px-4 rounded-lg bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-all flex items-center gap-2 shadow-sm">
          <Plus className="w-4 h-4" />
          <span>Novo Colaborador</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm font-semibold text-slate-500 mb-1">Total Motoristas</p>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-bold text-slate-900">84</p>
            <Truck className="w-5 h-5 text-blue-600 mb-1" />
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm font-semibold text-slate-500 mb-1">Total Ajudantes</p>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-bold text-slate-900">42</p>
            <Users className="w-5 h-5 text-slate-600 mb-1" />
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm font-semibold text-slate-500 mb-1">Férias / Afastados</p>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-bold text-slate-900">12</p>
            <span className="w-5 h-5 rounded bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-[10px] mb-1">!</span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm font-semibold text-slate-500 mb-1">Vencimentos CNH/MOPP</p>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-bold text-red-600">3</p>
            <Shield className="w-5 h-5 text-red-600 mb-1" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar por nome, matrícula ou CPF..." 
              className="w-full h-9 pl-9 pr-4 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="h-9 px-3 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Função</span>
            </button>
            <button className="h-9 px-3 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Status</span>
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-white text-slate-500 text-[11px] font-bold uppercase tracking-wider h-11 border-b border-slate-200">
                <th className="px-6">Colaborador</th>
                <th className="px-4">Cargo / Função</th>
                <th className="px-4">Qualificação</th>
                <th className="px-4">Turno Base</th>
                <th className="px-4">Status</th>
                <th className="px-6 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Image 
                      src="https://picsum.photos/seed/roberto/100/100" 
                      alt="Roberto" 
                      width={36} height={36} 
                      className="rounded-full object-cover shadow-sm border border-slate-200"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900">Roberto Carlos Silva</span>
                      <span className="text-xs text-slate-500">Matrícula: #4892</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm font-medium text-slate-700">Motorista Carreteiro</span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-col gap-1">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-600">
                      <Award className="w-3 h-3" /> CNH E
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600">
                      <Shield className="w-3 h-3" /> MOPP Válido
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm text-slate-600">Manhã (06:00 - 15:48)</span>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-[11px] font-bold">
                    Em Rota
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1.5 text-slate-400 hover:text-slate-700 rounded transition-colors"><MoreVertical className="w-4 h-4" /></button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Image 
                      src="https://picsum.photos/seed/lucas/100/100" 
                      alt="Lucas" 
                      width={36} height={36} 
                      className="rounded-full object-cover shadow-sm border border-slate-200"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900">Lucas Ferreira Lima</span>
                      <span className="text-xs text-slate-500">Matrícula: #5104</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm font-medium text-slate-700">Ajudante Operacional</span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-xs text-slate-400">-</span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm text-slate-600">Manhã (06:00 - 15:48)</span>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-[11px] font-bold">
                    Em Rota
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1.5 text-slate-400 hover:text-slate-700 rounded transition-colors"><MoreVertical className="w-4 h-4" /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
