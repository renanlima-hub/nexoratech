import { useNavigate, useParams } from "react-router-dom";

const pacientesDetalhes = [
  {
    cpf: "12345678901",
    nome: "Ana Clara Santos",
    telefone: "(11) 98200-1234",
    email: "ana.clara@email.com",
    endereco: "Rua das Flores, 120 - São Paulo",
    status: "Aguardando triagem",
    urgencia: "Alta",
    voluntario: "Dr. Rafael Lima",
    tratamento: "Avaliação inicial pendente",
    historico: [
      "Paciente cadastrada no sistema.",
      "Solicitação encaminhada para triagem.",
      "Classificação inicial marcada como alta urgência.",
    ],
  },
  {
    cpf: "98765432100",
    nome: "Lucas Martins",
    telefone: "(11) 97654-8899",
    email: "lucas.martins@email.com",
    endereco: "Av. Central, 500 - São Paulo",
    status: "Tratamento em andamento",
    urgencia: "Média",
    voluntario: "Dra. Camila Rocha",
    tratamento: "Tratamento restaurador em andamento",
    historico: [
      "Paciente cadastrado no sistema.",
      "Triagem concluída.",
      "Tratamento iniciado com dentista voluntária.",
    ],
  },
  {
    cpf: "45678912300",
    nome: "Beatriz Oliveira",
    telefone: "(11) 96555-4300",
    email: "beatriz.oliveira@email.com",
    endereco: "Rua Azul, 48 - São Paulo",
    status: "Agendado",
    urgencia: "Baixa",
    voluntario: "Dr. Bruno Alves",
    tratamento: "Consulta preventiva agendada",
    historico: [
      "Paciente cadastrada.",
      "Consulta preventiva solicitada.",
      "Agendamento realizado.",
    ],
  },
  {
    cpf: "78945612300",
    nome: "Pedro Henrique",
    telefone: "(11) 94444-2200",
    email: "pedro.henrique@email.com",
    endereco: "Rua Norte, 330 - São Paulo",
    status: "Concluído",
    urgencia: "Baixa",
    voluntario: "Dr. Rafael Lima",
    tratamento: "Tratamento finalizado",
    historico: [
      "Paciente cadastrado.",
      "Atendimento realizado.",
      "Tratamento concluído com sucesso.",
    ],
  },
];

export default function PacienteDetalhes() {
  const navigate = useNavigate();
  const { cpf } = useParams();

  const paciente = pacientesDetalhes.find((item) => item.cpf === cpf);

  if (!paciente) {
    return (
      <main className="min-h-screen bg-slate-100 px-6 py-10">
        <section className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-3xl shadow-sm p-8">
          <h1 className="text-3xl font-extrabold text-blue-900 mb-4">
            Paciente não encontrado
          </h1>

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-blue-900 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl transition"
          >
            Voltar para o dashboard
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 text-slate-800">
      <section className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 bg-white border border-blue-900 text-blue-900 hover:bg-blue-50 font-semibold px-5 py-3 rounded-xl transition"
        >
          Voltar para o dashboard
        </button>

        <div className="bg-blue-900 text-white rounded-3xl shadow-sm p-8 mb-6">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-wide">
            Detalhes do paciente
          </p>

          <h1 className="text-3xl md:text-4xl font-extrabold mt-2">
            {paciente.nome}
          </h1>

          <p className="text-blue-100 mt-3">
            CPF: {paciente.cpf} • Telefone: {paciente.telefone}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
          <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-5">
              Informações gerais
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InfoCard titulo="Status" valor={paciente.status} />
              <InfoCard titulo="Urgência" valor={paciente.urgencia} />
              <InfoCard titulo="Voluntário responsável" valor={paciente.voluntario} />
              <InfoCard titulo="Tratamento" valor={paciente.tratamento} />
              <InfoCard titulo="E-mail" valor={paciente.email} />
              <InfoCard titulo="Endereço" valor={paciente.endereco} />
            </div>
          </section>

          <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-5">
              Histórico
            </h2>

            <div className="space-y-4">
              {paciente.historico.map((item) => (
                <div
                  key={item}
                  className="border-l-4 border-blue-900 pl-4 text-slate-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ titulo, valor }: { titulo: string; valor: string }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
      <p className="text-sm text-slate-500 font-semibold">{titulo}</p>
      <p className="text-lg text-slate-800 font-bold mt-2">{valor}</p>
    </div>
  );
}