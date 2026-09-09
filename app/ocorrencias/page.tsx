import { AlertTriangle, Search, Plus, Clock, CheckCircle2, AlertOctagon, MoreVertical, Filter, Activity } from 'lucide-react';

export default function OcorrenciasPage() {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Painel de Ocorrências</h1>
          <p className="text-sm text-slate-500">Acompanhamento e resolução de desvios, manutenções e atrasos operacionais.</p>
        </div>
        <button className="h-10 px-4 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-all flex items-center gap-2 shadow-sm">
          <Plus className="w-4 h-4" />
          <span>Registrar Ocorrência</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
            <AlertOctagon className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-500">Em Aberto (Críticas)</p>
            <p className="text-2xl font-bold text-slate-900">2</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center">
            <Clock className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-500">Em Tratativa</p>
            <p className="text-2xl font-bold text-slate-900">5</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-500">Resolvidas Hoje</p>
            <p className="text-2xl font-bold text-slate-900">14</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar por placa, motorista ou protocolo..." 
              className="w-full h-9 pl-9 pr-4 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="h-9 px-3 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Prioridade</span>
            </button>
            <button className="h-9 px-3 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Status</span>
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-white text-slate-500 text-[11px] font-bold uppercase tracking-wider h-11 border-b border-slate-200">
                <th className="px-6">Protocolo / Data</th>
                <th className="px-4">Placa / Veículo</th>
                <th className="px-4">Motorista</th>
                <th className="px-4">Tipo de Ocorrência</th>
                <th className="px-4">Prioridade</th>
                <th className="px-4">Status</th>
                <th className="px-6 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">#OC-8921</span>
                    <span className="text-xs text-slate-500">Hoje, 10:45</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">ABC-4D89</span>
                    <span className="text-xs text-slate-500">Volvo FH 540</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm text-slate-700">Roberto Carlos Silva</span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm font-medium text-slate-700">Pneu Furado / Mecânica</span>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-red-50 text-red-700 text-[11px] font-bold">
                    Alta (Parado)
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-amber-50 text-amber-700 text-[11px] font-bold">
                    Em Tratativa
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1.5 text-slate-400 hover:text-slate-700 rounded transition-colors"><MoreVertical className="w-4 h-4" /></button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">#OC-8919</span>
                    <span className="text-xs text-slate-500">Hoje, 08:30</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">KLP-9821</span>
                    <span className="text-xs text-slate-500">Mercedes Atego</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm text-slate-700">Marcos Vinicius</span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm font-medium text-slate-700">Atraso na Carga (Filas)</span>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-bold">
                    Baixa
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                    Resolvido
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
