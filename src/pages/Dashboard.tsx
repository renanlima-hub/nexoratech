import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiGet } from "../services/api.ts";
import CardTabela from "../components/Dashboard/CardTabela.tsx";
import CardAcaoRapida from "../components/Dashboard/CardAcaoRapida.tsx";
import CampoBusca from "../components/Dashboard/CampuBusca.tsx";
import GraficoBarras from "../components/Dashboard/GraficoBarras.tsx";
import GraficoEvolucao from "../components/Dashboard/GraficoEvolucao.tsx";
import ModalCadastro from "../components/Dashboard/ModalCadastro.tsx";

type AbaDashboard =
  | "visao"
  | "pacientes"
  | "triagens"
  | "voluntarios"
  | "agendamentos"
  | "tratamentos";

type TipoCadastro =
  | "paciente"
  | "triagem"
  | "agendamento"
  | "voluntario";

type Paciente = {
  nome: string;
  cpf: string;
  telefone: string;
  status: string;
  urgencia: string;
};

const triagens = [
  {
    paciente: "Ana Clara Santos",
    descricao: "Dor intensa e dificuldade para mastigar",
    urgencia: "Alta",
    status: "Pendente",
  },
];

const voluntarios = [
  {
    nome: "Dr. Rafael Lima",
    cro: "CRO-SP 12345",
    telefone: "(11) 90000-1111",
    email: "rafael@nexora.com",
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
];

const tratamentos = [
  {
    paciente: "Lucas Martins",
    voluntario: "Dra. Camila Rocha",
    inicio: "10/05/2026",
    conclusao: "Em andamento",
    status: "Ativo",
  },
];

const indicadores = [
  { titulo: "Pacientes", valor: "320", descricao: "Cadastrados" },
  { titulo: "Voluntários", valor: "40", descricao: "Dentistas ativos" },
  { titulo: "Triagens", valor: "86", descricao: "Registradas" },
  { titulo: "Agendamentos", valor: "128", descricao: "Criados" },
  { titulo: "Tratamentos", valor: "74", descricao: "Acompanhados" },
];

const notificacoes = [
  "Paciente Ana Clara Santos está classificada com urgência alta.",
  "Existem agendamentos pendentes de confirmação.",
  "Tratamento de Pedro Henrique foi concluído recentemente.",
  "Novo voluntário disponível para atendimento odontológico.",
];

const atividadesRecentes = [
  "Nova triagem registrada para Ana Clara Santos.",
  "Voluntário Dr. Rafael Lima vinculado a um tratamento.",
  "Agendamento criado para Lucas Martins.",
  "Tratamento de Pedro Henrique foi concluído.",
];

const graficoStatusPacientes = [
  { label: "Aguardando", valor: 35 },
  { label: "Tratamento", valor: 45 },
  { label: "Agendado", valor: 25 },
  { label: "Concluído", valor: 60 },
];

const graficoVolumeOperacional = [
  { label: "Pacientes", valor: 320 },
  { label: "Triagens", valor: 86 },
  { label: "Agendamentos", valor: 128 },
  { label: "Tratamentos", valor: 74 },
];

const graficoEvolucao = [
  { mes: "Jan", valor: 20 },
  { mes: "Fev", valor: 35 },
  { mes: "Mar", valor: 28 },
  { mes: "Abr", valor: 52 },
  { mes: "Mai", valor: 74 },
  { mes: "Jun", valor: 68 },
];

export default function Dashboard() {
  const navigate = useNavigate();

  const [abaAtiva, setAbaAtiva] =
    useState<AbaDashboard>("visao");

  const [buscaPaciente, setBuscaPaciente] =
    useState("");

  const [buscaTriagem, setBuscaTriagem] =
    useState("");

  const [buscaVoluntario, setBuscaVoluntario] =
    useState("");

  const [buscaAgendamento, setBuscaAgendamento] =
    useState("");

  const [buscaTratamento, setBuscaTratamento] =
    useState("");

  const [pacientesApi, setPacientesApi] =
    useState<Paciente[]>([]);

  const [triagensApi, setTriagensApi] =
    useState(triagens);

  const [voluntariosApi, setVoluntariosApi] =
    useState(voluntarios);

  const [agendamentosApi, setAgendamentosApi] =
    useState(agendamentos);

  const [tratamentosApi, setTratamentosApi] =
    useState(tratamentos);

  const [carregandoPacientes, setCarregandoPacientes] =
    useState(false);

  const [erroPacientes, setErroPacientes] =
    useState("");

  const [notificacaoAtual, setNotificacaoAtual] =
    useState(0);

  const [modalAberto, setModalAberto] =
    useState(false);

  const [tipoCadastro, setTipoCadastro] =
    useState<TipoCadastro>("paciente");

  useEffect(() => {
    const intervalo = setInterval(() => {
      setNotificacaoAtual((atual) =>
        atual === notificacoes.length - 1
          ? 0
          : atual + 1,
      );
    }, 3500);

    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    async function carregarDados() {
      try {
        setCarregandoPacientes(true);

        const pacientesResponse =
          await apiGet<any[]>("/paciente");

        const triagensResponse =
          await apiGet<any[]>("/triagem");

        const voluntariosResponse =
          await apiGet<any[]>("/voluntario");

        const agendamentosResponse =
          await apiGet<any[]>("/agendamento");

        const tratamentosResponse =
          await apiGet<any[]>("/tratamento");

        setPacientesApi(
          pacientesResponse.map((paciente) => ({
            nome: paciente.nome,
            cpf: paciente.cpf,
            telefone: paciente.telefone,
            status: paciente.status,
            urgencia:
              paciente.status === "Ativo"
                ? "Baixa"
                : paciente.status ===
                  "Em Andamento"
                ? "Média"
                : "Alta",
          })),
        );

        setTriagensApi(
          triagensResponse.map((triagem) => ({
            paciente: `Paciente ${triagem.paciente}`,
            descricao: triagem.descricao,
            urgencia: triagem.urgencia,
            status: triagem.status,
          })),
        );

        setVoluntariosApi(
          voluntariosResponse.map(
            (voluntario) => ({
              nome: voluntario.nome,
              cro: voluntario.cro,
              telefone:
                voluntario.telefone,
              email: voluntario.email,
            }),
          ),
        );

        setAgendamentosApi(
          agendamentosResponse.map(
            (agendamento) => ({
              paciente: `Paciente ${agendamento.paciente}`,
              voluntario: `Voluntário ${agendamento.voluntario}`,
              data: agendamento.dataHora,
              local: agendamento.local,
              status: agendamento.status,
            }),
          ),
        );

        setTratamentosApi(
          tratamentosResponse.map(
            (tratamento) => ({
              paciente: `Paciente ${tratamento.paciente}`,
              voluntario: `Voluntário ${tratamento.voluntario}`,
              inicio: tratamento.dataInicio,
              conclusao:
                tratamento.dataConclusao ||
                "Em andamento",
              status: tratamento.status,
            }),
          ),
        );

        setErroPacientes("");
      } catch (error) {
        console.error(error);

        setErroPacientes(
          "Erro ao carregar API",
        );
      } finally {
        setCarregandoPacientes(false);
      }
    }

    carregarDados();
  }, []);

  const abrirModalCadastro = (
    tipo: TipoCadastro,
  ) => {
    setTipoCadastro(tipo);
    setModalAberto(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/");
  };

  const pacientesFiltrados = useMemo(() => {
    return pacientesApi.filter(
      (paciente) =>
        paciente.nome
          .toLowerCase()
          .includes(
            buscaPaciente.toLowerCase(),
          ) ||
        paciente.cpf.includes(
          buscaPaciente,
        ) ||
        paciente.status
          .toLowerCase()
          .includes(
            buscaPaciente.toLowerCase(),
          ) ||
        paciente.urgencia
          .toLowerCase()
          .includes(
            buscaPaciente.toLowerCase(),
          ),
    );
  }, [buscaPaciente, pacientesApi]);

  const triagensFiltradas = useMemo(() => {
    return triagensApi.filter(
      (triagem) =>
        triagem.paciente
          .toLowerCase()
          .includes(
            buscaTriagem.toLowerCase(),
          ) ||
        triagem.urgencia
          .toLowerCase()
          .includes(
            buscaTriagem.toLowerCase(),
          ) ||
        triagem.status
          .toLowerCase()
          .includes(
            buscaTriagem.toLowerCase(),
          ),
    );
  }, [buscaTriagem, triagensApi]);

  const voluntariosFiltrados =
    useMemo(() => {
      return voluntariosApi.filter(
        (voluntario) =>
          voluntario.nome
            .toLowerCase()
            .includes(
              buscaVoluntario.toLowerCase(),
            ) ||
          voluntario.cro
            .toLowerCase()
            .includes(
              buscaVoluntario.toLowerCase(),
            ) ||
          voluntario.email
            .toLowerCase()
            .includes(
              buscaVoluntario.toLowerCase(),
            ),
      );
    }, [
      buscaVoluntario,
      voluntariosApi,
    ]);

  const agendamentosFiltrados =
    useMemo(() => {
      return agendamentosApi.filter(
        (agendamento) =>
          agendamento.paciente
            .toLowerCase()
            .includes(
              buscaAgendamento.toLowerCase(),
            ) ||
          agendamento.voluntario
            .toLowerCase()
            .includes(
              buscaAgendamento.toLowerCase(),
            ) ||
          agendamento.status
            .toLowerCase()
            .includes(
              buscaAgendamento.toLowerCase(),
            ) ||
          agendamento.local
            .toLowerCase()
            .includes(
              buscaAgendamento.toLowerCase(),
            ),
      );
    }, [
      buscaAgendamento,
      agendamentosApi,
    ]);

  const tratamentosFiltrados =
    useMemo(() => {
      return tratamentosApi.filter(
        (tratamento) =>
          tratamento.paciente
            .toLowerCase()
            .includes(
              buscaTratamento.toLowerCase(),
            ) ||
          tratamento.voluntario
            .toLowerCase()
            .includes(
              buscaTratamento.toLowerCase(),
            ) ||
          tratamento.status
            .toLowerCase()
            .includes(
              buscaTratamento.toLowerCase(),
            ),
      );
    }, [
      buscaTratamento,
      tratamentosApi,
    ]);
  const menuClass = (aba: AbaDashboard) =>
    abaAtiva === aba
      ? "bg-blue-600 text-white shadow-lg shadow-blue-950/40"
      : "text-slate-300 hover:bg-slate-800 hover:translate-x-1 hover:text-white";

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
            {(
              [
                "visao",
                "pacientes",
                "triagens",
                "voluntarios",
                "agendamentos",
                "tratamentos",
              ] as AbaDashboard[]
            ).map((aba) => (
              <button
                key={aba}
                onClick={() => setAbaAtiva(aba)}
                className={`${menuClass(
                  aba,
                )} text-left px-4 py-4 rounded-2xl font-semibold transition`}
              >
                {aba === "visao"
                  ? "Visão geral"
                  : aba.charAt(0).toUpperCase() + aba.slice(1)}
              </button>
            ))}
          </nav>

          <div className="mt-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-extrabold text-white">
                  UA
                </div>

                <div>
                  <p className="font-bold text-white text-lg">
                    Administrador
                  </p>
                  <p className="text-slate-400 text-sm">
                    Sistema NexoraTech
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                    Status
                  </p>

                  <p className="text-emerald-400 font-semibold">
                    Online
                  </p>
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
                  <p className="font-bold text-white">
                    Usuário Admin
                  </p>

                  <p className="text-sm text-slate-400">
                    Administrador
                  </p>
                </div>

                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center font-extrabold text-white text-lg">
                  UA
                </div>
              </div>
            </div>

            <div className="px-6 md:px-8 pb-5">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                    Notificação
                  </p>

                  <p className="text-slate-300 mt-1">
                    {notificacoes[notificacaoAtual]}
                  </p>
                </div>

                <span className="hidden md:inline-flex bg-blue-600/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold">
                  Atualiza automaticamente
                </span>
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
                abrirModalCadastro={abrirModalCadastro}
                carregandoPacientes={carregandoPacientes}
                erroPacientes={erroPacientes}
              />
            )}

            {abaAtiva === "pacientes" && (
              <CardTabela
                titulo="Pacientes"
                descricao="Pesquise pacientes por nome, CPF, status ou urgência."
              >
                {carregandoPacientes ? (
                  <div className="flex justify-center py-10">
                    <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                  </div>
                ) : (
                <TabelaPacientes
                  pacientes={pacientesFiltrados}
                  buscaPaciente={buscaPaciente}
                  setBuscaPaciente={setBuscaPaciente}
                  carregando={carregandoPacientes}
                  erro={erroPacientes}
                />
                )}
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

      {modalAberto && (
        <ModalCadastro
          tipo={tipoCadastro}
          onClose={() => setModalAberto(false)}
        />
      )}
    </main>
  );
}

function VisaoGeral({
  pacientesFiltrados,
  buscaPaciente,
  setBuscaPaciente,
  abrirModalCadastro,
  carregandoPacientes,
  erroPacientes,
}: {
  pacientesFiltrados: Paciente[];
  buscaPaciente: string;
  setBuscaPaciente: React.Dispatch<React.SetStateAction<string>>;
  abrirModalCadastro: (tipo: TipoCadastro) => void;
  carregandoPacientes: boolean;
  erroPacientes: string;
}) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 mb-6">
        {indicadores.map((item) => (
          <article
            key={item.titulo}
            className="bg-slate-950 border border-slate-800 rounded-3xl p-7 cursor-pointer"
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

      <section className="bg-slate-950 border border-slate-800 rounded-3xl p-6 mb-6">
        <div className="mb-5">
          <h2 className="text-3xl font-bold text-white">Ações rápidas</h2>
          <p className="text-slate-400 text-sm mt-1">
            Cadastros visuais preparados para futura integração com a API.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <CardAcaoRapida
            titulo="Novo paciente"
            descricao="Cadastrar paciente e dados iniciais."
            onClick={() => abrirModalCadastro("paciente")}
          />

          <CardAcaoRapida
            titulo="Nova triagem"
            descricao="Registrar urgência e descrição."
            onClick={() => abrirModalCadastro("triagem")}
          />

          <CardAcaoRapida
            titulo="Novo agendamento"
            descricao="Vincular paciente, data e local."
            onClick={() => abrirModalCadastro("agendamento")}
          />

          <CardAcaoRapida
            titulo="Novo voluntário"
            descricao="Cadastrar dentista voluntário."
            onClick={() => abrirModalCadastro("voluntario")}
          />
        </div>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mb-6">
        <GraficoBarras
          titulo="Status dos pacientes"
          dados={graficoStatusPacientes}
        />

        <GraficoBarras
          titulo="Volume operacional"
          dados={graficoVolumeOperacional}
        />

        <GraficoEvolucao
          titulo="Evolução de atendimentos"
          dados={graficoEvolucao}
        />

        <section className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
          <h2 className="text-3xl font-bold text-white mb-5">Notificações</h2>

          <div className="space-y-4">
            {notificacoes.map((notificacao) => (
              <div
                key={notificacao}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-slate-300"
              >
                {notificacao}
              </div>
            ))}
          </div>
        </section>
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
            carregando={carregandoPacientes}
            erro={erroPacientes}
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

function TabelaPacientes({
  pacientes,
  buscaPaciente,
  setBuscaPaciente,
  carregando,
  erro,
}: {
  pacientes: Paciente[];
  buscaPaciente: string;
  setBuscaPaciente: React.Dispatch<React.SetStateAction<string>>;
  carregando?: boolean;
  erro?: string;
}) {
  const navigate = useNavigate();

  return (
    <>
      <CampoBusca
        placeholder="Pesquisar paciente por nome, CPF, status ou urgência..."
        value={buscaPaciente}
        onChange={setBuscaPaciente}
      />

      {carregando && (
        <div className="mb-4 rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 text-slate-300">
          Carregando pacientes da API...
        </div>
      )}

      {erro && (
        <div className="mb-4 rounded-2xl border border-yellow-700 bg-yellow-900/30 px-5 py-4 text-yellow-300">
          {erro}
        </div>
      )}

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
                  <span className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${ paciente.urgencia === "Alta" ? "bg-red-500/20 text-red-400": paciente.urgencia === "Média" ? "bg-yellow-500/20 text-yellow-300": "bg-emerald-500/20 text-emerald-400"}`}>
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
}: any) {
  return (
    <>
      <CampoBusca
        placeholder="Pesquisar triagem..."
        value={buscaTriagem}
        onChange={setBuscaTriagem}
      />

      <TabelaBase
        headers={["Paciente", "Descrição", "Urgência", "Status"]}
        rows={triagens.map((triagem: any) => [
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
}: any) {
  return (
    <>
      <CampoBusca
        placeholder="Pesquisar voluntário..."
        value={buscaVoluntario}
        onChange={setBuscaVoluntario}
      />

      <TabelaBase
        headers={["Nome", "CRO", "Telefone", "E-mail"]}
        rows={voluntarios.map((voluntario: any) => [
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
}: any) {
  return (
    <>
      <CampoBusca
        placeholder="Pesquisar agendamento..."
        value={buscaAgendamento}
        onChange={setBuscaAgendamento}
      />

      <TabelaBase
        headers={["Paciente", "Voluntário", "Data", "Local", "Status"]}
        rows={agendamentos.map((agendamento: any) => [
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
}: any) {
  return (
    <>
      <CampoBusca
        placeholder="Pesquisar tratamento..."
        value={buscaTratamento}
        onChange={setBuscaTratamento}
      />

      <TabelaBase
        headers={["Paciente", "Voluntário", "Início", "Conclusão", "Status"]}
        rows={tratamentos.map((tratamento: any) => [
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
}: any) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-800 text-sm text-slate-400">
            {headers.map((header: string) => (
              <th key={header} className="py-3 pr-4">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row: string[], index: number) => (
            <tr
              key={index}
              className="border-b border-slate-900 last:border-0"
            >
              {row.map((cell: string, cellIndex: number) => (
                <td
                  key={cellIndex}
                  className="py-4 pr-4 text-slate-300"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {rows.length === 0 && (
        <div className="text-center text-slate-400 py-10">
          {emptyMessage}
        </div>
      )}
    </div>
  );
}