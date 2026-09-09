import { Building2, Search, Plus, MapPin, FileText, MoreVertical, Filter, Activity } from 'lucide-react';

export default function ClientesPage() {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Gestão de Clientes</h1>
          <p className="text-sm text-slate-500">Administre contratos, pontos de entrega e rotas de abastecimento.</p>
        </div>
        <button className="h-10 px-4 rounded-lg bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-all flex items-center gap-2 shadow-sm">
          <Plus className="w-4 h-4" />
          <span>Novo Cliente</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
            <Building2 className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-500">Total Ativos</p>
            <p className="text-2xl font-bold text-slate-900">2.074</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
            <Activity className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-500">Abastecidos Hoje</p>
            <p className="text-2xl font-bold text-slate-900">142</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center">
            <FileText className="w-6 h-6 text-slate-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-500">Contratos a Vencer</p>
            <p className="text-2xl font-bold text-slate-900">18</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar por razão social, CNPJ ou cidade..." 
              className="w-full h-9 pl-9 pr-4 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <button className="h-9 px-3 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filtros Avançados</span>
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-white text-slate-500 text-[11px] font-bold uppercase tracking-wider h-11 border-b border-slate-200">
                <th className="px-6">Cliente / Razão Social</th>
                <th className="px-4">Tipo de Operação</th>
                <th className="px-4">Localização</th>
                <th className="px-4">Frequência</th>
                <th className="px-4">Status</th>
                <th className="px-6 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">Indústria Metalúrgica Apex S/A</span>
                    <span className="text-xs text-slate-500">CNPJ: 12.345.678/0001-90</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-block px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[11px] font-bold">Granel</span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-1.5 text-sm text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>Araucária, PR</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm text-slate-600">Semanal (Terças)</span>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Ativo
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1.5 text-slate-400 hover:text-slate-700 rounded transition-colors"><MoreVertical className="w-4 h-4" /></button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">Hospital Santa Maria</span>
                    <span className="text-xs text-slate-500">CNPJ: 98.765.432/0001-10</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-bold">Cilindros</span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-1.5 text-sm text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>Curitiba, PR</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm text-slate-600">Diária</span>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Ativo
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
