import { useState } from "react";
import { useNavigate } from "react-router-dom";

const indicadores = [
  {
    titulo: "Pacientes",
    valor: "320",
    descricao: "Pacientes cadastrados",
  },
  {
    titulo: "Voluntários",
    valor: "40",
    descricao: "Dentistas voluntários ativos",
  },
  {
    titulo: "Triagens",
    valor: "86",
    descricao: "Triagens registradas",
  },
  {
    titulo: "Agendamentos",
    valor: "128",
    descricao: "Agendamentos criados",
  },
  {
    titulo: "Tratamentos",
    valor: "74",
    descricao: "Tratamentos acompanhados",
  },
];

const pacientes = [
  {
    nome: "Ana Clara Santos",
    cpf: "12345678901",
    telefone: "(11) 98200-1234",
    status: "Aguardando triagem",
    urgencia: "Alta",
  },
  {
    nome: "Lucas Martins",
    cpf: "98765432100",
    telefone: "(11) 97654-8899",
    status: "Tratamento em andamento",
    urgencia: "Média",
  },
  {
    nome: "Beatriz Oliveira",
    cpf: "45678912300",
    telefone: "(11) 96555-4300",
    status: "Agendado",
    urgencia: "Baixa",
  },
  {
    nome: "Pedro Henrique",
    cpf: "78945612300",
    telefone: "(11) 94444-2200",
    status: "Concluído",
    urgencia: "Baixa",
  },
];

const triagens = [
  {
    paciente: "Ana Clara Santos",
    descricao: "Dor intensa e dificuldade para mastigar",
    urgencia: "Alta",
    status: "Pendente",
  },
  {
    paciente: "Lucas Martins",
    descricao: "Avaliação inicial para tratamento",
    urgencia: "Média",
    status: "Em análise",
  },
  {
    paciente: "Beatriz Oliveira",
    descricao: "Consulta preventiva",
    urgencia: "Baixa",
    status: "Concluída",
  },
];

const voluntarios = [
  {
    nome: "Dr. Rafael Lima",
    cro: "CRO-SP 12345",
    telefone: "(11) 90000-1111",
    email: "rafael@nexora.com",
  },
  {
    nome: "Dra. Camila Rocha",
    cro: "CRO-SP 54321",
    telefone: "(11) 90000-2222",
    email: "camila@nexora.com",
  },
  {
    nome: "Dr. Bruno Alves",
    cro: "CRO-SP 67890",
    telefone: "(11) 90000-3333",
    email: "bruno@nexora.com",
  },
];

const agendamentos = [
  {
    paciente: "Ana Clara Santos",
    voluntario: "Dr. Rafael Lima",
    data: "20/05/2026",
    local: "Clínica Parceira Centro",
    status: "Agendado",
  },
  {
    paciente: "Lucas Martins",
    voluntario: "Dra. Camila Rocha",
    data: "22/05/2026",
    local: "Unidade Zona Leste",
    status: "Confirmado",
  },
  {
    paciente: "Beatriz Oliveira",
    voluntario: "Dr. Bruno Alves",
    data: "25/05/2026",
    local: "Clínica Voluntária Norte",
    status: "Pendente",
  },
];

const tratamentos = [
  {
    paciente: "Lucas Martins",
    voluntario: "Dra. Camila Rocha",
    inicio: "10/05/2026",
    conclusao: "Em andamento",
    status: "Ativo",
  },
  {
    paciente: "Pedro Henrique",
    voluntario: "Dr. Rafael Lima",
    inicio: "02/04/2026",
    conclusao: "14/05/2026",
    status: "Concluído",
  },
  {
    paciente: "Ana Clara Santos",
    voluntario: "Dr. Bruno Alves",
    inicio: "A iniciar",
    conclusao: "Não definida",
    status: "Aguardando",
  },
];

const atividadesRecentes = [
  "Nova triagem registrada para Ana Clara Santos.",
  "Voluntário Dr. Rafael Lima vinculado a um tratamento.",
  "Agendamento criado para Lucas Martins.",
  "Tratamento de Pedro Henrique foi concluído.",
];

type AbaDashboard =
  | "visao"
  | "pacientes"
  | "triagens"
  | "voluntarios"
  | "agendamentos"
  | "tratamentos";

export default function Dashboard() {
  const navigate = useNavigate();
  const [abaAtiva, setAbaAtiva] = useState<AbaDashboard>("visao");

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/");
  };

  const tabClass = (aba: AbaDashboard) =>
    abaAtiva === aba
      ? "bg-blue-900 text-white"
      : "bg-white text-blue-900 border border-blue-900 hover:bg-blue-50";

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-800">
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
              Área administrativa
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
              Dashboard NexoraTech
            </h1>

            <p className="text-slate-600 mt-2 max-w-3xl">
              Painel criado para acompanhar pacientes, voluntários, triagens,
              tratamentos e agendamentos da Turma do Bem.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-3 rounded-xl transition"
          >
            Sair
          </button>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setAbaAtiva("visao")}
            className={`${tabClass("visao")} px-4 py-2 rounded-xl font-semibold transition`}
          >
            Visão geral
          </button>

          <button
            onClick={() => setAbaAtiva("pacientes")}
            className={`${tabClass("pacientes")} px-4 py-2 rounded-xl font-semibold transition`}
          >
            Pacientes
          </button>

          <button
            onClick={() => setAbaAtiva("triagens")}
            className={`${tabClass("triagens")} px-4 py-2 rounded-xl font-semibold transition`}
          >
            Triagens
          </button>

          <button
            onClick={() => setAbaAtiva("voluntarios")}
            className={`${tabClass("voluntarios")} px-4 py-2 rounded-xl font-semibold transition`}
          >
            Voluntários
          </button>

          <button
            onClick={() => setAbaAtiva("agendamentos")}
            className={`${tabClass("agendamentos")} px-4 py-2 rounded-xl font-semibold transition`}
          >
            Agendamentos
          </button>

          <button
            onClick={() => setAbaAtiva("tratamentos")}
            className={`${tabClass("tratamentos")} px-4 py-2 rounded-xl font-semibold transition`}
          >
            Tratamentos
          </button>
        </div>

        {abaAtiva === "visao" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 mb-8">
              {indicadores.map((item) => (
                <article
                  key={item.titulo}
                  className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6"
                >
                  <h2 className="text-sm font-semibold text-slate-500">
                    {item.titulo}
                  </h2>

                  <p className="text-4xl font-extrabold text-blue-900 mt-3">
                    {item.valor}
                  </p>

                  <p className="text-sm text-slate-500 mt-2">
                    {item.descricao}
                  </p>
                </article>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
              <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">
                <div className="mb-5">
                  <h2 className="text-2xl font-bold text-blue-900">
                    Pacientes recentes
                  </h2>

                  <p className="text-slate-500 text-sm">
                    Lista simulada com base nas informações da tabela Paciente.
                  </p>
                </div>

                <TablePacientes />
              </section>

              <aside className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Atividades recentes
                </h2>

                <div className="space-y-4">
                  {atividadesRecentes.map((atividade) => (
                    <div
                      key={atividade}
                      className="border-l-4 border-blue-900 pl-4 text-slate-600"
                    >
                      {atividade}
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </>
        )}

        {abaAtiva === "pacientes" && (
          <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              Pacientes
            </h2>
            <p className="text-slate-500 text-sm mb-5">
              Dados equivalentes aos campos da tabela Paciente.
            </p>
            <TablePacientes />
          </section>
        )}

        {abaAtiva === "triagens" && (
          <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              Triagens
            </h2>
            <p className="text-slate-500 text-sm mb-5">
              Controle de descrição, urgência e status da triagem.
            </p>
            <TableTriagens />
          </section>
        )}

        {abaAtiva === "voluntarios" && (
          <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              Voluntários
            </h2>
            <p className="text-slate-500 text-sm mb-5">
              Dentistas voluntários cadastrados para atendimento.
            </p>
            <TableVoluntarios />
          </section>
        )}

        {abaAtiva === "agendamentos" && (
          <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              Agendamentos
            </h2>
            <p className="text-slate-500 text-sm mb-5">
              Controle de data, local, voluntário, paciente e status.
            </p>
            <TableAgendamentos />
          </section>
        )}

        {abaAtiva === "tratamentos" && (
          <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              Tratamentos
            </h2>
            <p className="text-slate-500 text-sm mb-5">
              Acompanhamento de início, conclusão e status do tratamento.
            </p>
            <TableTratamentos />
          </section>
        )}

        <section className="mt-8 bg-white border border-slate-200 rounded-3xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Estrutura preparada para integração com API
          </h2>

          <p className="text-slate-600 leading-7">
            Esta tela foi montada seguindo as entidades principais do banco:
            Paciente, Voluntário, Triagem, Tratamento, Agendamento e Usuário
            Admin. Quando a API Java estiver pronta, os dados mockados poderão
            ser substituídos por requisições reais ao backend.
          </p>
        </section>
      </section>
    </main>
  );
}

function TablePacientes() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-200 text-sm text-slate-500">
            <th className="py-3 pr-4">Nome</th>
            <th className="py-3 pr-4">CPF</th>
            <th className="py-3 pr-4">Telefone</th>
            <th className="py-3 pr-4">Status</th>
            <th className="py-3 pr-4">Urgência</th>
          </tr>
        </thead>

        <tbody>
          {pacientes.map((paciente) => (
            <tr
              key={paciente.cpf}
              className="border-b border-slate-100 last:border-0"
            >
              <td className="py-4 pr-4 font-semibold text-slate-700">
                {paciente.nome}
              </td>
              <td className="py-4 pr-4 text-slate-600">{paciente.cpf}</td>
              <td className="py-4 pr-4 text-slate-600">
                {paciente.telefone}
              </td>
              <td className="py-4 pr-4 text-slate-600">{paciente.status}</td>
              <td className="py-4 pr-4">
                <span className="inline-flex rounded-full bg-blue-50 text-blue-900 px-3 py-1 text-sm font-semibold">
                  {paciente.urgencia}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableTriagens() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-200 text-sm text-slate-500">
            <th className="py-3 pr-4">Paciente</th>
            <th className="py-3 pr-4">Descrição</th>
            <th className="py-3 pr-4">Urgência</th>
            <th className="py-3 pr-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {triagens.map((triagem) => (
            <tr
              key={triagem.paciente}
              className="border-b border-slate-100 last:border-0"
            >
              <td className="py-4 pr-4 font-semibold text-slate-700">
                {triagem.paciente}
              </td>
              <td className="py-4 pr-4 text-slate-600">
                {triagem.descricao}
              </td>
              <td className="py-4 pr-4">
                <span className="inline-flex rounded-full bg-blue-50 text-blue-900 px-3 py-1 text-sm font-semibold">
                  {triagem.urgencia}
                </span>
              </td>
              <td className="py-4 pr-4 text-slate-600">{triagem.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableVoluntarios() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-200 text-sm text-slate-500">
            <th className="py-3 pr-4">Nome</th>
            <th className="py-3 pr-4">CRO</th>
            <th className="py-3 pr-4">Telefone</th>
            <th className="py-3 pr-4">E-mail</th>
          </tr>
        </thead>

        <tbody>
          {voluntarios.map((voluntario) => (
            <tr
              key={voluntario.cro}
              className="border-b border-slate-100 last:border-0"
            >
              <td className="py-4 pr-4 font-semibold text-slate-700">
                {voluntario.nome}
              </td>
              <td className="py-4 pr-4 text-slate-600">{voluntario.cro}</td>
              <td className="py-4 pr-4 text-slate-600">
                {voluntario.telefone}
              </td>
              <td className="py-4 pr-4 text-slate-600">{voluntario.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableAgendamentos() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-200 text-sm text-slate-500">
            <th className="py-3 pr-4">Paciente</th>
            <th className="py-3 pr-4">Voluntário</th>
            <th className="py-3 pr-4">Data</th>
            <th className="py-3 pr-4">Local</th>
            <th className="py-3 pr-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {agendamentos.map((agendamento) => (
            <tr
              key={`${agendamento.paciente}-${agendamento.data}`}
              className="border-b border-slate-100 last:border-0"
            >
              <td className="py-4 pr-4 font-semibold text-slate-700">
                {agendamento.paciente}
              </td>
              <td className="py-4 pr-4 text-slate-600">
                {agendamento.voluntario}
              </td>
              <td className="py-4 pr-4 text-slate-600">{agendamento.data}</td>
              <td className="py-4 pr-4 text-slate-600">{agendamento.local}</td>
              <td className="py-4 pr-4 text-slate-600">{agendamento.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableTratamentos() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-200 text-sm text-slate-500">
            <th className="py-3 pr-4">Paciente</th>
            <th className="py-3 pr-4">Voluntário</th>
            <th className="py-3 pr-4">Início</th>
            <th className="py-3 pr-4">Conclusão</th>
            <th className="py-3 pr-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {tratamentos.map((tratamento) => (
            <tr
              key={`${tratamento.paciente}-${tratamento.inicio}`}
              className="border-b border-slate-100 last:border-0"
            >
              <td className="py-4 pr-4 font-semibold text-slate-700">
                {tratamento.paciente}
              </td>
              <td className="py-4 pr-4 text-slate-600">
                {tratamento.voluntario}
              </td>
              <td className="py-4 pr-4 text-slate-600">{tratamento.inicio}</td>
              <td className="py-4 pr-4 text-slate-600">
                {tratamento.conclusao}
              </td>
              <td className="py-4 pr-4 text-slate-600">{tratamento.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}