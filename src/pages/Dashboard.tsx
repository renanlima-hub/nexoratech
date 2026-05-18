import { Link, useNavigate } from "react-router-dom";

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

const atividadesRecentes = [
  "Nova triagem registrada para Ana Clara Santos.",
  "Voluntário Dr. Rafael Lima vinculado a um tratamento.",
  "Agendamento criado para Lucas Martins.",
  "Tratamento de Pedro Henrique foi concluído.",
];

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/");
  };

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

                      <td className="py-4 pr-4 text-slate-600">
                        {paciente.cpf}
                      </td>

                      <td className="py-4 pr-4 text-slate-600">
                        {paciente.telefone}
                      </td>

                      <td className="py-4 pr-4 text-slate-600">
                        {paciente.status}
                      </td>

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
          </section>

          <aside className="flex flex-col gap-6">
            <section className="bg-blue-900 text-white rounded-3xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-3">
                Ações rápidas
              </h2>

              <p className="text-blue-100 mb-6">
                Acesse áreas relacionadas ao fluxo do sistema.
              </p>

              <div className="flex flex-col gap-3">
                <Link
                  to="/painel/agendados"
                  className="bg-white text-blue-900 font-semibold px-4 py-3 rounded-xl text-center hover:bg-blue-50 transition"
                >
                  Ver agendamentos
                </Link>

                <Link
                  to="/painel/aguardando"
                  className="bg-white text-blue-900 font-semibold px-4 py-3 rounded-xl text-center hover:bg-blue-50 transition"
                >
                  Ver aguardando
                </Link>

                <Link
                  to="/painel/dentistas"
                  className="bg-white text-blue-900 font-semibold px-4 py-3 rounded-xl text-center hover:bg-blue-50 transition"
                >
                  Ver voluntários
                </Link>
              </div>
            </section>

            <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">
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
            </section>
          </aside>
        </div>

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