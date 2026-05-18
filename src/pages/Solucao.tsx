export default function Solucao() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-10">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-700 mb-3">
            Solução NexoraTech
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-6">
            Centralização inteligente para gestão odontológica
          </h1>

          <p className="text-lg text-slate-600 leading-8">
            A NexoraTech foi desenvolvida para melhorar a organização da ONG
            Turma do Bem, reduzindo problemas causados por informações
            espalhadas em diferentes canais.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Centralização
            </h2>

            <p className="text-slate-600 leading-7">
              Pacientes, voluntários, triagens e tratamentos organizados em um
              único ambiente digital.
            </p>
          </article>

          <article className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Automação
            </h2>

            <p className="text-slate-600 leading-7">
              Fluxos mais rápidos utilizando chatbot, formulários digitais e
              acompanhamento automatizado.
            </p>
          </article>

          <article className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Comunicação
            </h2>

            <p className="text-slate-600 leading-7">
              Melhor comunicação entre equipe administrativa, dentistas
              voluntários e pacientes.
            </p>
          </article>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-blue-900 rounded-3xl text-white p-10">
          <h2 className="text-3xl font-extrabold mb-5">
            Como a solução funciona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <span className="text-cyan-300 font-bold text-lg">01</span>

              <h3 className="font-bold text-xl mt-2 mb-2">
                Cadastro
              </h3>

              <p className="text-blue-100 leading-7">
                Informações dos pacientes registradas no sistema.
              </p>
            </div>

            <div>
              <span className="text-cyan-300 font-bold text-lg">02</span>

              <h3 className="font-bold text-xl mt-2 mb-2">
                Triagem
              </h3>

              <p className="text-blue-100 leading-7">
                Classificação de urgência e necessidade de atendimento.
              </p>
            </div>

            <div>
              <span className="text-cyan-300 font-bold text-lg">03</span>

              <h3 className="font-bold text-xl mt-2 mb-2">
                Encaminhamento
              </h3>

              <p className="text-blue-100 leading-7">
                Associação de pacientes com dentistas voluntários.
              </p>
            </div>

            <div>
              <span className="text-cyan-300 font-bold text-lg">04</span>

              <h3 className="font-bold text-xl mt-2 mb-2">
                Acompanhamento
              </h3>

              <p className="text-blue-100 leading-7">
                Controle dos tratamentos e evolução dos atendimentos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}