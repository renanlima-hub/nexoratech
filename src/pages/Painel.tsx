import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type Paciente = {
  nome: string;
  status: "Agendado" | "Aguardando" | "Concluído";
  dentista: string;
  horario: string;
};

const pacientes: Paciente[] = [
  { nome: "Sofia Baccos", status: "Agendado", dentista: "Dr. Giovanna Vilhena", horario: "09:00" },
  { nome: "Fabiana de Lima", status: "Agendado", dentista: "Dra. Guilherme Dabul", horario: "09:30" },
  { nome: "Beatriz Cerqueira", status: "Concluído", dentista: "Dr. Felipe Nunes", horario: "13:00" },
  { nome: "Harry Styles", status: "Agendado", dentista: "Dra. Giovanna Vilhena", horario: "14:00" },
  { nome: "Kayke Santana", status: "Aguardando", dentista: "Dr. Guilherme Dabul", horario: "15:30" },
  { nome: "Binho Mendes", status: "Concluído", dentista: "Dra. Guilherme Dabul", horario: "11:30" },
  { nome: "Lucas Ramon", status: "Agendado", dentista: "Dr. Felipe Nunes", horario: "13:00" },
  { nome: "Pietro Castilho", status: "Aguardando", dentista: "Dra. Giovanna Vilhena", horario: "11:00" },
];

const cardBase = "rounded-2xl shadow-sm border p-6 card-hover fade-in-up";

export default function Painel() {
  const [filtro, setFiltro] = useState<"Todos" | "Agendado" | "Aguardando" | "Concluído">("Todos");
  const [busca, setBusca] = useState("");

  const dadosFiltrados = useMemo(() => {
    let resultado = pacientes;

    if (filtro !== "Todos") {
      resultado = resultado.filter((p) => p.status === filtro);
    }

    if (busca.trim() !== "") {
      resultado = resultado.filter((p) =>
        p.nome.toLowerCase().includes(busca.toLowerCase())
      );
    }

    return resultado;
  }, [filtro, busca]);

  const totalAgendados = pacientes.filter((p) => p.status === "Agendado").length;
  const totalAguardando = pacientes.filter((p) => p.status === "Aguardando").length;
  const totalConcluidos = pacientes.filter((p) => p.status === "Concluído").length;
  const totalDentistas = 3;

  const badgeClass = (status: Paciente["status"]) => {
    if (status === "Agendado") return "bg-blue-100 text-blue-800";
    if (status === "Aguardando") return "bg-amber-100 text-amber-800";
    return "bg-emerald-100 text-emerald-800";
  };

  const maxValor = Math.max(totalAgendados, totalAguardando, totalConcluidos, totalDentistas);

  const grafico = [
    { label: "Agendados", valor: totalAgendados, cor: "bg-blue-700" },
    { label: "Aguardando", valor: totalAguardando, cor: "bg-amber-500" },
    { label: "Concluídos", valor: totalConcluidos, cor: "bg-emerald-600" },
    { label: "Dentistas", valor: totalDentistas, cor: "bg-violet-600" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 px-6 py-16">
      <section className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-3">
            Painel de acompanhamento
          </h1>
          <p className="text-slate-600 text-lg">
            Visão geral dos atendimentos e acompanhamento operacional do protótipo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          <Link to="/painel/agendados" className={`${cardBase} bg-blue-50 border-blue-200`}>
            <p className="text-sm text-blue-700 mb-2 font-medium">Pacientes agendados</p>
            <p className="text-4xl font-extrabold text-blue-900">{totalAgendados}</p>
            <p className="text-sm text-slate-500 mt-3">Clique para visualizar</p>
          </Link>

          <Link to="/painel/aguardando" className={`${cardBase} bg-amber-50 border-amber-200`}>
            <p className="text-sm text-amber-700 mb-2 font-medium">Pacientes aguardando</p>
            <p className="text-4xl font-extrabold text-amber-700">{totalAguardando}</p>
            <p className="text-sm text-slate-500 mt-3">Clique para visualizar</p>
          </Link>

          <Link to="/painel/concluidos" className={`${cardBase} bg-emerald-50 border-emerald-200`}>
            <p className="text-sm text-emerald-700 mb-2 font-medium">Atendimentos concluídos</p>
            <p className="text-4xl font-extrabold text-emerald-700">{totalConcluidos}</p>
            <p className="text-sm text-slate-500 mt-3">Clique para visualizar</p>
          </Link>

          <Link to="/painel/dentistas" className={`${cardBase} bg-violet-50 border-violet-200`}>
            <p className="text-sm text-violet-700 mb-2 font-medium">Dentistas ativos</p>
            <p className="text-4xl font-extrabold text-violet-700">{totalDentistas}</p>
            <p className="text-sm text-slate-500 mt-3">Clique para visualizar</p>
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-10">
          <div className="xl:col-span-2 bg-white border border-slate-200 rounded-3xl shadow-sm p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-blue-900">
                  Atendimento do dia
                </h2>
                <p className="text-slate-500">
                  Lista simulada com filtro por status e busca por nome.
                </p>
              </div>

              <div className="w-full md:w-80">
                <input
                  type="text"
                  placeholder="Buscar paciente pelo nome"
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {["Todos", "Agendado", "Aguardando", "Concluído"].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    setFiltro(item as "Todos" | "Agendado" | "Aguardando" | "Concluído")
                  }
                  className={`px-4 py-2 rounded-xl border text-sm font-medium transition ${
                    filtro === item
                      ? "bg-blue-900 text-white border-blue-900"
                      : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {item}
                </button>
              ))}

              <button
                onClick={() => {
                  setFiltro("Todos");
                  setBusca("");
                }}
                className="px-4 py-2 rounded-xl border text-sm font-medium bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
              >
                Limpar
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-left">
                    <th className="py-3 pr-4 text-slate-500 font-semibold">Paciente</th>
                    <th className="py-3 pr-4 text-slate-500 font-semibold">Status</th>
                    <th className="py-3 pr-4 text-slate-500 font-semibold">Dentista</th>
                    <th className="py-3 text-slate-500 font-semibold">Horário</th>
                  </tr>
                </thead>
                <tbody>
                  {dadosFiltrados.map((paciente) => (
                    <tr key={`${paciente.nome}-${paciente.horario}`} className="border-b border-slate-100">
                      <td className="py-4 pr-4 font-medium text-slate-800">{paciente.nome}</td>
                      <td className="py-4 pr-4">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${badgeClass(paciente.status)}`}>
                          {paciente.status}
                        </span>
                      </td>
                      <td className="py-4 pr-4 text-slate-600">{paciente.dentista}</td>
                      <td className="py-4 text-slate-600">{paciente.horario}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {dadosFiltrados.length === 0 && (
              <p className="text-slate-500 mt-6">
                Nenhum registro encontrado.
              </p>
            )}
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              Resumo visual
            </h2>
            <p className="text-slate-500 mb-8">
              Distribuição dos dados do protótipo.
            </p>

            <div className="flex items-end justify-between gap-4 h-64">
              {grafico.map((item) => (
                <div key={item.label} className="flex-1 flex flex-col items-center justify-end">
                  <div className="text-sm font-bold text-slate-700 mb-2">{item.valor}</div>
                  <div
                    className={`w-full max-w-[56px] rounded-t-2xl ${item.cor} transition-all duration-500`}
                    style={{ height: `${(item.valor / maxValor) * 180}px` }}
                  />
                  <div className="text-xs text-center text-slate-500 mt-3 leading-4">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}