const funcionalidades = [
  {
    titulo: "Cadastro de pacientes",
    descricao:
      "Armazenamento de dados importantes como nome, telefone, endereço e status.",
  },
  {
    titulo: "Gestão de triagens",
    descricao:
      "Controle de urgência, classificação e acompanhamento dos casos.",
  },
  {
    titulo: "Controle de tratamentos",
    descricao:
      "Registro de tratamentos em andamento e concluídos.",
  },
  {
    titulo: "Agendamentos",
    descricao:
      "Organização de datas, horários e atendimentos odontológicos.",
  },
  {
    titulo: "Dashboard administrativo",
    descricao:
      "Visualização centralizada das principais informações da plataforma.",
  },
  {
    titulo: "Chatbot de suporte",
    descricao:
      "Apoio automatizado para dúvidas frequentes e direcionamento inicial.",
  },
];

export default function Funcionalidades() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-700 mb-3">
            Funcionalidades da plataforma
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-5">
            Recursos da NexoraTech
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-8">
            A plataforma foi projetada para melhorar a rotina operacional da ONG
            e facilitar o acompanhamento odontológico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {funcionalidades.map((item) => (
            <article
              key={item.titulo}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7"
            >
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                {item.titulo}
              </h2>

              <p className="text-slate-600 leading-7">
                {item.descricao}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}