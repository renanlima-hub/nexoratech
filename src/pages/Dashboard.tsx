import { useMemo, useState } from "react";
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

const pacientesMock = pacientes;

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

const triagensMock = triagens;

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

const voluntariosMock = voluntarios;

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

const agendamentosMock = agendamentos;

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

const tratamentosMock = tratamentos;

const atividadesRecentes = [
  "Nova triagem registrada para Ana Clara Santos.",
  "Voluntário Dr. Rafael Lima vinculado a um tratamento.",
  "Agendamento criado para Lucas Martins.",
  "Tratamento de Pedro Henrique foi concluído.",
];

export default function Dashboard() {
  const navigate = useNavigate();

  const [abaAtiva, setAbaAtiva] = useState<AbaDashboard>("visao");

  const [buscaPaciente, setBuscaPaciente] = useState("");
  const [buscaTriagem, setBuscaTriagem] = useState("");
  const [buscaVoluntario, setBuscaVoluntario] = useState("");
  const [buscaAgendamento, setBuscaAgendamento] = useState("");
  const [buscaTratamento, setBuscaTratamento] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/");
  };

  const pacientesFiltrados = useMemo(() => {
    return pacientes.filter(
      (paciente) =>
        paciente.nome.toLowerCase().includes(buscaPaciente.toLowerCase()) ||
        paciente.cpf.includes(buscaPaciente) ||
        paciente.status.toLowerCase().includes(buscaPaciente.toLowerCase()) ||
        paciente.urgencia.toLowerCase().includes(buscaPaciente.toLowerCase()),
    );
  }, [buscaPaciente]);

  const triagensFiltradas = useMemo(() => {
    return triagens.filter(
      (triagem) =>
        triagem.paciente.toLowerCase().includes(buscaTriagem.toLowerCase()) ||
        triagem.urgencia.toLowerCase().includes(buscaTriagem.toLowerCase()) ||
        triagem.status.toLowerCase().includes(buscaTriagem.toLowerCase()),
    );
  }, [buscaTriagem]);

  const voluntariosFiltrados = useMemo(() => {
    return voluntarios.filter(
      (voluntario) =>
        voluntario.nome.toLowerCase().includes(buscaVoluntario.toLowerCase()) ||
        voluntario.cro.toLowerCase().includes(buscaVoluntario.toLowerCase()) ||
        voluntario.email.toLowerCase().includes(buscaVoluntario.toLowerCase()),
    );
  }, [buscaVoluntario]);

  const agendamentosFiltrados = useMemo(() => {
    return agendamentos.filter(
      (agendamento) =>
        agendamento.paciente
          .toLowerCase()
          .includes(buscaAgendamento.toLowerCase()) ||
        agendamento.voluntario
          .toLowerCase()
          .includes(buscaAgendamento.toLowerCase()) ||
        agendamento.status
          .toLowerCase()
          .includes(buscaAgendamento.toLowerCase()) ||
        agendamento.local
          .toLowerCase()
          .includes(buscaAgendamento.toLowerCase()),
    );
  }, [buscaAgendamento]);

  const tratamentosFiltrados = useMemo(() => {
    return tratamentos.filter(
      (tratamento) =>
        tratamento.paciente
          .toLowerCase()
          .includes(buscaTratamento.toLowerCase()) ||
        tratamento.voluntario
          .toLowerCase()
          .includes(buscaTratamento.toLowerCase()) ||
        tratamento.status
          .toLowerCase()
          .includes(buscaTratamento.toLowerCase()),
    );
  }, [buscaTratamento]);

  const menuClass = (aba: AbaDashboard) =>
    abaAtiva === aba
      ? "bg-blue-600 text-white shadow-lg shadow-blue-950/40"
      : "text-slate-300 hover:bg-slate-800 hover:text-white";

  return (
    <main className="min-h-screen bg-black text-slate-100">
      <div className="flex min-h-screen">
        <aside className="hidden lg:flex w-64 min-h-screen bg-[#020617] border-r border-slate-800 px-4 py-6 flex-col fixed left-0 top-0">
          <div className="mb-8">
            <p className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.25em]">
              Admin
            </p>
          </div>

          <nav className="flex flex-col gap-2">
            <button
              onClick={() => setAbaAtiva("visao")}
              className={`${menuClass("visao")} text-left px-4 py-4 rounded-2xl font-semibold transition`}
            >
              Visão geral
            </button>

            <button
              onClick={() => setAbaAtiva("pacientes")}
              className={`${menuClass("pacientes")} text-left px-4 py-4 rounded-2xl font-semibold transition`}
            >
              Pacientes
            </button>

            <button
              onClick={() => setAbaAtiva("triagens")}
              className={`${menuClass("triagens")} text-left px-4 py-4 rounded-2xl font-semibold transition`}
            >
              Triagens
            </button>

            <button
              onClick={() => setAbaAtiva("voluntarios")}
              className={`${menuClass("voluntarios")} text-left px-4 py-4 rounded-2xl font-semibold transition`}
            >
              Voluntários
            </button>

            <button
              onClick={() => setAbaAtiva("agendamentos")}
              className={`${menuClass("agendamentos")} text-left px-4 py-4 rounded-2xl font-semibold transition`}
            >
              Agendamentos
            </button>

            <button
              onClick={() => setAbaAtiva("tratamentos")}
              className={`${menuClass("tratamentos")} text-left px-4 py-4 rounded-2xl font-semibold transition`}
            >
              Tratamentos
            </button>
          </nav>

          <div className="mt-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-extrabold text-white">
                  UA
                </div>

                <div>
                  <p className="font-bold text-white text-lg">Administrador</p>
                  <p className="text-slate-400 text-sm">Sistema NexoraTech</p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                    Status
                  </p>

                  <p className="text-emerald-400 font-semibold">Online</p>
                </div>

                <button
                  onClick={handleLogout}
                  className="text-slate-300 hover:text-red-400 transition font-medium"
                >
                  Encerrar
                </button>
              </div>
            </div>
          </div>
        </aside>

        <section className="w-full lg:ml-64">
          <div className="sticky top-0 z-40 bg-black/90 backdrop-blur border-b border-slate-800">
            <div className="px-6 md:px-8 py-5 flex items-center justify-between">
              <div>
                <p className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.2em]">
                  Sistema administrativo
                </p>

                <h1 className="text-3xl font-extrabold text-white mt-1">
                  Dashboard NexoraTech
                </h1>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                  <p className="font-bold text-white">Usuário Admin</p>

                  <p className="text-sm text-slate-400">Administrador</p>
                </div>

                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center font-extrabold text-white text-lg">
                  UA
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 md:px-8 py-8">
            <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-black border border-slate-800 text-white rounded-3xl shadow-sm p-8 mb-6">
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wide">
                Área restrita
              </p>

              <h2 className="text-3xl md:text-5xl font-extrabold mt-3 leading-tight">
                Gestão odontológica centralizada
              </h2>

              <p className="text-slate-300 mt-4 max-w-3xl leading-8 text-lg">
                Acompanhamento administrativo de pacientes, voluntários,
                triagens, tratamentos e agendamentos da Turma do Bem.
              </p>
            </div>

            {abaAtiva === "visao" && (
              <VisaoGeral
                pacientesFiltrados={pacientesFiltrados}
                buscaPaciente={buscaPaciente}
                setBuscaPaciente={setBuscaPaciente}
              />
            )}

            {abaAtiva === "pacientes" && (
              <CardTabela
                titulo="Pacientes"
                descricao="Pesquise pacientes por nome, CPF, status ou urgência."
              >
                <TabelaPacientes
                  pacientes={pacientesFiltrados}
                  buscaPaciente={buscaPaciente}
                  setBuscaPaciente={setBuscaPaciente}
                />
              </CardTabela>
            )}

            {abaAtiva === "triagens" && (
              <CardTabela
                titulo="Triagens"
                descricao="Pesquise triagens por paciente, urgência ou status."
              >
                <TabelaTriagens
                  triagens={triagensFiltradas}
                  buscaTriagem={buscaTriagem}
                  setBuscaTriagem={setBuscaTriagem}
                />
              </CardTabela>
            )}

            {abaAtiva === "voluntarios" && (
              <CardTabela
                titulo="Voluntários"
                descricao="Pesquise voluntários por nome, CRO ou e-mail."
              >
                <TabelaVoluntarios
                  voluntarios={voluntariosFiltrados}
                  buscaVoluntario={buscaVoluntario}
                  setBuscaVoluntario={setBuscaVoluntario}
                />
              </CardTabela>
            )}

            {abaAtiva === "agendamentos" && (
              <CardTabela
                titulo="Agendamentos"
                descricao="Pesquise agendamentos por paciente, voluntário, local ou status."
              >
                <TabelaAgendamentos
                  agendamentos={agendamentosFiltrados}
                  buscaAgendamento={buscaAgendamento}
                  setBuscaAgendamento={setBuscaAgendamento}
                />
              </CardTabela>
            )}

            {abaAtiva === "tratamentos" && (
              <CardTabela
                titulo="Tratamentos"
                descricao="Pesquise tratamentos por paciente, voluntário ou status."
              >
                <TabelaTratamentos
                  tratamentos={tratamentosFiltrados}
                  buscaTratamento={buscaTratamento}
                  setBuscaTratamento={setBuscaTratamento}
                />
              </CardTabela>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

function VisaoGeral({
  pacientesFiltrados,
  buscaPaciente,
  setBuscaPaciente,
}: {
  pacientesFiltrados: typeof pacientesMock;
  buscaPaciente: string;
  setBuscaPaciente: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 mb-6">
        {indicadores.map((item) => (
          <article
            key={item.titulo}
            className="bg-slate-950 border border-slate-800 rounded-3xl p-7"
          >
            <h2 className="text-sm font-semibold text-slate-400">
              {item.titulo}
            </h2>

            <p className="text-5xl font-extrabold text-white mt-5">
              {item.valor}
            </p>

            <p className="text-sm text-slate-500 mt-3">{item.descricao}</p>
          </article>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6">
        <CardTabela
          titulo="Pacientes recentes"
          descricao="Últimos pacientes acompanhados pela plataforma."
        >
          <TabelaPacientes
            pacientes={pacientesFiltrados}
            buscaPaciente={buscaPaciente}
            setBuscaPaciente={setBuscaPaciente}
          />
        </CardTabela>

        <section className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
          <h2 className="text-3xl font-bold text-white mb-5">
            Atividades recentes
          </h2>

          <div className="space-y-5">
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
    <section className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
      <h2 className="text-3xl font-bold text-white mb-2">{titulo}</h2>
      <p className="text-slate-400 text-sm mb-6">{descricao}</p>
      {children}
    </section>
  );
}

function CampoBusca({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-slate-900 border border-slate-700 text-white rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
      />
    </div>
  );
}

function TabelaPacientes({
  pacientes,
  buscaPaciente,
  setBuscaPaciente,
}: {
  pacientes: typeof pacientesMock;
  buscaPaciente: string;
  setBuscaPaciente: React.Dispatch<React.SetStateAction<string>>;
}) {
  const navigate = useNavigate();

  return (
    <>
      <CampoBusca
        placeholder="Pesquisar paciente por nome, CPF, status ou urgência..."
        value={buscaPaciente}
        onChange={setBuscaPaciente}
      />

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
                <td className="py-4 pr-4 text-slate-300">
                  {paciente.telefone}
                </td>
                <td className="py-4 pr-4 text-slate-300">{paciente.status}</td>
                <td className="py-4 pr-4">
                  <span className="inline-flex rounded-full bg-blue-600/20 text-cyan-300 px-3 py-1 text-sm font-semibold">
                    {paciente.urgencia}
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <button
                    onClick={() =>
                      navigate(`/dashboard/paciente/${paciente.cpf}`)
                    }
                    className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-xl transition"
                  >
                    Ver detalhes
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {pacientes.length === 0 && (
          <div className="text-center text-slate-400 py-10">
            Nenhum paciente encontrado.
          </div>
        )}
      </div>
    </>
  );
}

function TabelaTriagens({
  triagens,
  buscaTriagem,
  setBuscaTriagem,
}: {
  triagens: typeof triagensMock;
  buscaTriagem: string;
  setBuscaTriagem: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <CampoBusca
        placeholder="Pesquisar triagem por paciente, urgência ou status..."
        value={buscaTriagem}
        onChange={setBuscaTriagem}
      />

      <TabelaBase
        headers={["Paciente", "Descrição", "Urgência", "Status"]}
        rows={triagens.map((triagem) => [
          triagem.paciente,
          triagem.descricao,
          triagem.urgencia,
          triagem.status,
        ])}
        emptyMessage="Nenhuma triagem encontrada."
      />
    </>
  );
}

function TabelaVoluntarios({
  voluntarios,
  buscaVoluntario,
  setBuscaVoluntario,
}: {
  voluntarios: typeof voluntariosMock;
  buscaVoluntario: string;
  setBuscaVoluntario: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <CampoBusca
        placeholder="Pesquisar voluntário por nome, CRO ou e-mail..."
        value={buscaVoluntario}
        onChange={setBuscaVoluntario}
      />

      <TabelaBase
        headers={["Nome", "CRO", "Telefone", "E-mail"]}
        rows={voluntarios.map((voluntario) => [
          voluntario.nome,
          voluntario.cro,
          voluntario.telefone,
          voluntario.email,
        ])}
        emptyMessage="Nenhum voluntário encontrado."
      />
    </>
  );
}

function TabelaAgendamentos({
  agendamentos,
  buscaAgendamento,
  setBuscaAgendamento,
}: {
  agendamentos: typeof agendamentosMock;
  buscaAgendamento: string;
  setBuscaAgendamento: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <CampoBusca
        placeholder="Pesquisar agendamento por paciente, voluntário, local ou status..."
        value={buscaAgendamento}
        onChange={setBuscaAgendamento}
      />

      <TabelaBase
        headers={["Paciente", "Voluntário", "Data", "Local", "Status"]}
        rows={agendamentos.map((agendamento) => [
          agendamento.paciente,
          agendamento.voluntario,
          agendamento.data,
          agendamento.local,
          agendamento.status,
        ])}
        emptyMessage="Nenhum agendamento encontrado."
      />
    </>
  );
}

function TabelaTratamentos({
  tratamentos,
  buscaTratamento,
  setBuscaTratamento,
}: {
  tratamentos: typeof tratamentosMock;
  buscaTratamento: string;
  setBuscaTratamento: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <CampoBusca
        placeholder="Pesquisar tratamento por paciente, voluntário ou status..."
        value={buscaTratamento}
        onChange={setBuscaTratamento}
      />

      <TabelaBase
        headers={["Paciente", "Voluntário", "Início", "Conclusão", "Status"]}
        rows={tratamentos.map((tratamento) => [
          tratamento.paciente,
          tratamento.voluntario,
          tratamento.inicio,
          tratamento.conclusao,
          tratamento.status,
        ])}
        emptyMessage="Nenhum tratamento encontrado."
      />
    </>
  );
}

function TabelaBase({
  headers,
  rows,
  emptyMessage,
}: {
  headers: string[];
  rows: string[][];
  emptyMessage: string;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-800 text-sm text-slate-400">
            {headers.map((header) => (
              <th key={header} className="py-3 pr-4">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr
              key={row.join("-")}
              className="border-b border-slate-900 last:border-0"
            >
              {row.map((cell) => (
                <td key={cell} className="py-4 pr-4 text-slate-300">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {rows.length === 0 && (
        <div className="text-center text-slate-400 py-10">{emptyMessage}</div>
      )}
    </div>
  );
}