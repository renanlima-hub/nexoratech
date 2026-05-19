import { useState } from "react";
import { useNavigate } from "react-router-dom";

type AbaDashboard =
  | "visao"
  | "pacientes"
  | "triagens"
  | "voluntarios"
  | "agendamentos"
  | "tratamentos";

const indicadores = [
  { titulo: "Pacientes", valor: "320", descricao: "Cadastrados" },
  { titulo: "Voluntários", valor: "40", descricao: "Dentistas ativos" },
  { titulo: "Triagens", valor: "86", descricao: "Registradas" },
  { titulo: "Agendamentos", valor: "128", descricao: "Criados" },
  { titulo: "Tratamentos", valor: "74", descricao: "Acompanhados" },
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

export default function Dashboard() {
  const navigate = useNavigate();
  const [abaAtiva, setAbaAtiva] = useState<AbaDashboard>("visao");

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/");
  };

  const menuClass = (aba: AbaDashboard) =>
    abaAtiva === aba
      ? "bg-blue-600 text-white shadow-lg shadow-blue-950/40"
      : "text-slate-300 hover:bg-slate-800 hover:text-white";

  return (
    <main className="min-h-screen bg-black text-slate-100">
      <div className="flex min-h-screen">
        <aside className="hidden lg:flex w-72 min-h-screen bg-slate-950 border-r border-slate-800 px-5 py-6 flex-col fixed left-0 top-0">
          <div className="mb-8">
            <p className="text-xs text-slate-500 uppercase tracking-[0.2em]">
              Painel administrativo
            </p>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Nexora<span className="text-cyan-400">Tech</span>
            </h2>
          </div>

          <nav className="flex flex-col gap-2">
            <button
              onClick={() => setAbaAtiva("visao")}
              className={`${menuClass("visao")} text-left px-4 py-3 rounded-xl font-semibold transition`}
            >
              Visão geral
            </button>

            <button
              onClick={() => setAbaAtiva("pacientes")}
              className={`${menuClass("pacientes")} text-left px-4 py-3 rounded-xl font-semibold transition`}
            >
              Pacientes
            </button>

            <button
              onClick={() => setAbaAtiva("triagens")}
              className={`${menuClass("triagens")} text-left px-4 py-3 rounded-xl font-semibold transition`}
            >
              Triagens
            </button>

            <button
              onClick={() => setAbaAtiva("voluntarios")}
              className={`${menuClass("voluntarios")} text-left px-4 py-3 rounded-xl font-semibold transition`}
            >
              Voluntários
            </button>

            <button
              onClick={() => setAbaAtiva("agendamentos")}
              className={`${menuClass("agendamentos")} text-left px-4 py-3 rounded-xl font-semibold transition`}
            >
              Agendamentos
            </button>

            <button
              onClick={() => setAbaAtiva("tratamentos")}
              className={`${menuClass("tratamentos")} text-left px-4 py-3 rounded-xl font-semibold transition`}
            >
              Tratamentos
            </button>
          </nav>

          <div className="mt-auto border-t border-slate-800 pt-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold">
                UA
              </div>
              <div>
                <p className="font-bold text-white">Usuário Admin</p>
                <p className="text-sm text-slate-400">Administrador</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-3 rounded-xl transition"
            >
              Sair
            </button>
          </div>
        </aside>

        <section className="w-full lg:ml-72">
          <div className="sticky top-0 z-40 bg-black/80 backdrop-blur border-b border-slate-800">
            <div className="px-5 md:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-cyan-400 uppercase tracking-[0.2em]">
                  Sistema administrativo
                </p>
                <h1 className="text-2xl md:text-3xl font-extrabold text-white">
                  Dashboard NexoraTech
                </h1>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <p className="font-bold text-white">Usuário Admin</p>
                  <p className="text-sm text-slate-400">Administrador</p>
                </div>

                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold">
                  UA
                </div>

                <button
                  onClick={handleLogout}
                  className="lg:hidden bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-xl transition"
                >
                  Sair
                </button>
              </div>
            </div>

            <div className="lg:hidden px-5 pb-4 flex gap-2 overflow-x-auto">
              {(["visao", "pacientes", "triagens", "voluntarios", "agendamentos", "tratamentos"] as AbaDashboard[]).map(
                (aba) => (
                  <button
                    key={aba}
                    onClick={() => setAbaAtiva(aba)}
                    className={`${menuClass(aba)} whitespace-nowrap px-4 py-2 rounded-xl font-semibold transition`}
                  >
                    {aba === "visao"
                      ? "Visão geral"
                      : aba.charAt(0).toUpperCase() + aba.slice(1)}
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="px-5 md:px-8 py-8">
            <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-black border border-slate-800 text-white rounded-3xl shadow-sm p-8 mb-6">
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wide">
                Área restrita
              </p>

              <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
                Gestão odontológica centralizada
              </h2>

              <p className="text-slate-300 mt-3 max-w-3xl leading-7">
                Acompanhamento administrativo de pacientes, voluntários,
                triagens, tratamentos e agendamentos da Turma do Bem.
              </p>
            </div>

            {abaAtiva === "visao" && <VisaoGeral />}
            {abaAtiva === "pacientes" && (
              <CardTabela
                titulo="Pacientes"
                descricao="Dados simulados da tabela Paciente."
              >
                <TabelaPacientes />
              </CardTabela>
            )}
            {abaAtiva === "triagens" && (
              <CardTabela
                titulo="Triagens"
                descricao="Controle de descrição, urgência e status."
              >
                <TabelaTriagens />
              </CardTabela>
            )}
            {abaAtiva === "voluntarios" && (
              <CardTabela
                titulo="Voluntários"
                descricao="Dentistas voluntários cadastrados."
              >
                <TabelaVoluntarios />
              </CardTabela>
            )}
            {abaAtiva === "agendamentos" && (
              <CardTabela
                titulo="Agendamentos"
                descricao="Controle de datas, locais e status."
              >
                <TabelaAgendamentos />
              </CardTabela>
            )}
            {abaAtiva === "tratamentos" && (
              <CardTabela
                titulo="Tratamentos"
                descricao="Acompanhamento de tratamentos em andamento e concluídos."
              >
                <TabelaTratamentos />
              </CardTabela>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

function VisaoGeral() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 mb-6">
        {indicadores.map((item) => (
          <article
            key={item.titulo}
            className="bg-slate-950 border border-slate-800 rounded-2xl shadow-sm p-6"
          >
            <h2 className="text-sm font-semibold text-slate-400">
              {item.titulo}
            </h2>

            <p className="text-4xl font-extrabold text-white mt-3">
              {item.valor}
            </p>

            <p className="text-sm text-slate-500 mt-2">{item.descricao}</p>
          </article>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6">
        <CardTabela
          titulo="Pacientes recentes"
          descricao="Últimos pacientes acompanhados pela plataforma."
        >
          <TabelaPacientes />
        </CardTabela>

        <section className="bg-slate-950 border border-slate-800 rounded-3xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Atividades recentes
          </h2>

          <div className="space-y-4">
            {atividadesRecentes.map((atividade) => (
              <div
                key={atividade}
                className="border-l-4 border-cyan-400 pl-4 text-slate-300"
              >
                {atividade}
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-6 bg-slate-950 border border-slate-800 rounded-3xl shadow-sm p-6">
        <h2 className="text-2xl font-bold text-white mb-4">
          Preparado para integração com API
        </h2>

        <p className="text-slate-300 leading-7">
          Esta tela utiliza dados mockados baseados no banco do projeto. Quando a
          API Java estiver pronta, os arrays serão substituídos por requisições
          reais ao backend.
        </p>
      </section>
    </>
  );
}

function CardTabela({
  titulo,
  descricao,
  children,
}: {
  titulo: string;
  descricao: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-slate-950 border border-slate-800 rounded-3xl shadow-sm p-6">
      <h2 className="text-2xl font-bold text-white mb-2">{titulo}</h2>
      <p className="text-slate-400 text-sm mb-5">{descricao}</p>
      {children}
    </section>
  );
}

function TabelaPacientes() {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-800 text-sm text-slate-400">
            <th className="py-3 pr-4">Nome</th>
            <th className="py-3 pr-4">CPF</th>
            <th className="py-3 pr-4">Telefone</th>
            <th className="py-3 pr-4">Status</th>
            <th className="py-3 pr-4">Urgência</th>
            <th className="py-3 pr-4">Ações</th>
          </tr>
        </thead>

        <tbody>
          {pacientes.map((paciente) => (
            <tr
              key={paciente.cpf}
              className="border-b border-slate-900 last:border-0"
            >
              <td className="py-4 pr-4 font-semibold text-white">
                {paciente.nome}
              </td>
              <td className="py-4 pr-4 text-slate-300">{paciente.cpf}</td>
              <td className="py-4 pr-4 text-slate-300">{paciente.telefone}</td>
              <td className="py-4 pr-4 text-slate-300">{paciente.status}</td>
              <td className="py-4 pr-4">
                <span className="inline-flex rounded-full bg-blue-600/20 text-cyan-300 px-3 py-1 text-sm font-semibold">
                  {paciente.urgencia}
                </span>
              </td>
              <td className="py-4 pr-4">
                <button
                  onClick={() => navigate(`/dashboard/paciente/${paciente.cpf}`)}
                  className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-xl transition"
                >
                  Ver detalhes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TabelaTriagens() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-800 text-sm text-slate-400">
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
              className="border-b border-slate-900 last:border-0"
            >
              <td className="py-4 pr-4 font-semibold text-white">
                {triagem.paciente}
              </td>
              <td className="py-4 pr-4 text-slate-300">
                {triagem.descricao}
              </td>
              <td className="py-4 pr-4 text-slate-300">{triagem.urgencia}</td>
              <td className="py-4 pr-4 text-slate-300">{triagem.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TabelaVoluntarios() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-800 text-sm text-slate-400">
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
              className="border-b border-slate-900 last:border-0"
            >
              <td className="py-4 pr-4 font-semibold text-white">
                {voluntario.nome}
              </td>
              <td className="py-4 pr-4 text-slate-300">{voluntario.cro}</td>
              <td className="py-4 pr-4 text-slate-300">
                {voluntario.telefone}
              </td>
              <td className="py-4 pr-4 text-slate-300">{voluntario.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TabelaAgendamentos() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-800 text-sm text-slate-400">
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
              className="border-b border-slate-900 last:border-0"
            >
              <td className="py-4 pr-4 font-semibold text-white">
                {agendamento.paciente}
              </td>
              <td className="py-4 pr-4 text-slate-300">
                {agendamento.voluntario}
              </td>
              <td className="py-4 pr-4 text-slate-300">{agendamento.data}</td>
              <td className="py-4 pr-4 text-slate-300">{agendamento.local}</td>
              <td className="py-4 pr-4 text-slate-300">{agendamento.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TabelaTratamentos() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-800 text-sm text-slate-400">
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
              className="border-b border-slate-900 last:border-0"
            >
              <td className="py-4 pr-4 font-semibold text-white">
                {tratamento.paciente}
              </td>
              <td className="py-4 pr-4 text-slate-300">
                {tratamento.voluntario}
              </td>
              <td className="py-4 pr-4 text-slate-300">{tratamento.inicio}</td>
              <td className="py-4 pr-4 text-slate-300">
                {tratamento.conclusao}
              </td>
              <td className="py-4 pr-4 text-slate-300">{tratamento.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}